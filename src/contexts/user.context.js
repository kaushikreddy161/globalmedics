import { setDefaultNamespace } from "i18next";
import { createContext, useState, useContext } from "react";
import { App, Credentials } from "realm-web";
import { APP_ID } from "../realm/constants";
import * as Realm from 'realm-web';

// Creating a Realm App Instance
const app = new App(APP_ID);

// Creating a user context to manage and access all the user related functions
// across different component and pages.
export const UserContext = createContext();

 export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [adbuser, setAdbUser] = useState(null);
  const [pId,setPId] = useState(null);
  const [pName, setPName] = useState("");
  const [fName, setFName] = useState("");
  const [patientSelfId,setPatientSelfId] = useState("");
//  const [uemail, setUemail] = useState(null);

const selectedPatient = async (patientId) => {
  console.log("patientId 23 UC:", patientId);
  setPId(patientId);
  if (user) {
  // let ccid = BSON.ObjectID(user.id).toString();
   const lovpid = user.functions.getLovedOneP(patientId); // one loved one based on patient or Lovedone id
   lovpid.then((resp) => {
    console.log("res 29 UC:",resp);
    if (resp) {
      setPatientSelfId(resp[0].patientId);
       if(resp[0].relation === "Self")
        setPName("Self");
       else
        setPName(resp[0].displayName);      

        setFName(resp[0].firstName);
     } else {
       alert("Try after sometime");
       // navigate(`/addLovedOnes`);
     }
   });
 }
  
}

const selectedSelf = async (patientId) => {
  console.log("patientId 47 UC:", patientId);
  setPId(patientId);
  if (user) {
  // let ccid = BSON.ObjectID(user.id).toString();
   const lovpid = user.functions.getSelfData(patientId); // one loved one based on patient or Lovedone id
   lovpid.then((resp) => {
     console.log("resp 53 Uc:", resp);
     if (resp) {         
        setPName(resp.lastname);      
        setFName(resp.firstname);
        setPId(patientId);
     } else {
       alert("Try after sometime -- Self");
       // navigate(`/addLovedOnes`);
     }
   });
 }
  
}

  // Function to login user into our Realm using their email & password
  const emailPasswordLogin = async (email, password) => {
    const credentials = Credentials.emailPassword(email, password);
    const authedUser = await app.logIn(credentials);
    setUser(authedUser);
    return authedUser;
  };


 const custFunctionLogin = async ( adb2cId ) => {
  // console.log("custom Function:", adb2cId);
   if (adb2cId) {
  const REALM_APP_ID = "globalmedics-yxogc";
  const app = new Realm.App({ id: REALM_APP_ID });
  const credentials = Realm.Credentials.anonymous();
  const authedUser = await app.logIn(credentials);
  setUser(authedUser);
  setAdbUser(adb2cId);
  setPId(adb2cId);
  return authedUser;
  } else {
    return null;
  }
};
 // function to confirm the user with the token

 const emailConfirmation = async ( token,tokenId ) => {
  try {
  await app.emailPasswordAuth.confirmUser(token, tokenId);
 // alert('success');  
  return true;    
  } catch (error) {
    alert('Failed');
    throw error;
  }
      // .then(() => {
        
      // })
      // .catch(err => {
      // // displayResult('error', err)
      // return 'fail';
      // })
 }
  
  // Function to signup user into our Realm using their email & password
  const emailPasswordSignup = async (email, password) => {
    try {
      await app.emailPasswordAuth.registerUser(email, password);
      alert("Please confirm your email by clicking on link sent from no-reply+stitch@mongodb.com");  
      return emailPasswordLogin(email, password);
      } catch (error) {
      throw error;
    }
  };

   // function to singin using Facebook
  // const facebookLogin = async (accessToken) => {    // need to define the accesstoken in the login page and pass to this function
  // //  const accessToken = getFacebookAccessToken();
  //   // Log the user in to your app
  //   const credentials = Realm.Credentials.facebook(accessToken);
  //   app.logIn(credentials).then(user => {
  //     console.log(`Logged in with id: ${user.id}`);
  //   });
  // }


//   const emailConfirmation = async ({ token, tokenId, username }) => {
//     // validate the username
//     const isValidEmail = myFakeValidator.validate(username);
//     // check if the user is privileged for this service
//     const isPrivileged = myFakeAuth.hasAccess(username, 'myFakeService')
//     // send a message to the user in some way so that the user can confirm themselves
//     const msgSendSuccessful = isValidEmail && isPrivileged && myFakeMsgr.send(username, token, tokenId)

//     if ( msgSendSuccessful ) {
//        return { status: 'pending' };
//     } else {
//        return { status: 'fail' };
//     }
//  }

  // function to signin using google
  // const googleLogin = async (idToken) => {   // need to define the accesstoken in the login page and pass to this function
  //   // Get the Google OAuth 2.0 access token
  //   //  const idToken = getGoogleAccessToken();
  //     // Log the user in to your app
  //     const credentials = Realm.Credentials.google({ idToken });
  //     app.logIn(credentials).then((user) => {
  //       console.log(`Logged in with id: ${user.id}`);
  //     });
  // }

  // Function to fetch-user(if the user is already logged in) from local storage
  const fetchUser = async () => {
    if (!app.currentUser) return false;
    try {
      await app.currentUser.refreshCustomData();
      // Now if we have a user we are setting it to our user context
      // so that we can use it in our app across different components.
      setUser(app.currentUser);
      return app.currentUser;
    } catch (error) {
      throw error;
    }
  }

  // Function to logout user from our Realm
  const logOutUser = async () => {
    setUser(null);
    if (!app.currentUser) return false;
    try {
      await app.currentUser.logOut();
      // Setting the user to null once loggedOut.
      setUser(null);
      return true;
    } catch (error) {
      throw error
    }
  }
 
  return <UserContext.Provider value={{ user, setUser, fetchUser, emailPasswordLogin, emailPasswordSignup, logOutUser, pId, setPId, selectedPatient, pName, emailConfirmation,fName,custFunctionLogin,adbuser ,selectedSelf,patientSelfId}}>
    {children}
  </UserContext.Provider>;
}