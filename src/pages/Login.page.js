import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
//import Box from "@mui/material/Box";
// import { makeStyles } from "@material-ui/styles";
import Form from "react-bootstrap/Form";
//import FacebookLogin from 'react-facebook-login';
//import GoogleLogin from 'react-google-login';
import { BSON } from "realm-web";
// import { APP_ID } from "../realm/constants";
import cypherData from "../crypt/cypherData";


import "./Login.css";
// import { useTranslation } from "react-i18next";
// const app = new App(APP_ID);

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const { i18n } = useTranslation();
  // // const [selectedLang, setSelectedLang] = useState("en");

  // const changeLanguage = (event) => {
  //   setSelectedLang(event.target.value);
  //   i18n.changeLanguage(event.target.value);
  //   //  console.log('language:', event.target.value);
  // };

  // console.log('118n:', i18n);

  // We are consuming our user-management context to
  // get & set the user details here
  const { user, fetchUser, emailPasswordLogin, emailConfirmation } = useContext(UserContext);

  // We are using React's "useState" hook to keep track
  //  of the form values.
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // This function will be called whenever the user edits the form.
  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // This function will redirect the user to the
  // appropriate page once the authentication is done.
  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/moduleSummary");
  };

  const loginRedirect = () => {
    const path = '/confirmEmail';
    navigate(path);
  }

  
  const loadUser = async () => {

    //Grab Tokens
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const tokenId = params.get('tokenId');
    const dpl = params.get('dpl');
    const typ = params.get('typ');

    if(dpl !== "" && dpl !== null && typ !== "" && typ !== null) {
      const path = '/signup?dpl='+dpl+"&typ="+typ;
      navigate(path);
    }

    if(token && tokenId) {    
       const confirmStatus = await emailConfirmation(token, tokenId);
       if(confirmStatus) {
        // alert("Email Validation Success");
         loginRedirect();
      } else {
        alert("Email Validation Failed");
        //loginRedirect();
      }
    }
   // console.log(":logged in user:", user.providerType);
    else if (!user && user.providerType === "local-userpass") {
      const fetchedUser = await fetchUser();
      if (fetchedUser) {
        // Redirecting them once fetched.
        redirectNow();
      }
    }
  };

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (event) => {
    try {
          const user = await emailPasswordLogin(form.email, form.password);
      // console.log("Usr:", user);
      if (user) {
          let id = BSON.ObjectID(user.id);
          const onepatient = user.functions.getOnePatient(id);
          onepatient.then((resp) => {
            if(resp) {
              console.log("User Exists"); 
            } else {
                let dt = new Date();
                let id = BSON.ObjectID(user.id);
                const create = user.functions.createPatient(
                  id,
                  form.email,
                  cypherData(form.password),
                  dt,
                  "active",
                  "GlobalMedics2021"
                );
                //console.log('create:', create);
                create.then((response) => {
                  //  console.log("resp:", resp);
                  //  alert("Registration Done Successfully");
                  console.log("Success");
                });
              }
          });
          redirectNow();
        }
    } catch (error) {
      //  alert(error);
      alert("Entered User Id/Password is Wrong...");
    }
  };

//   const responseFacebook = (response) => {
//     console.log("facebook console");
//     console.log(response);
//    //  signup(response, 'facebook');
// }

// const responseGoogle = (response) => {
//     console.log("google console");
//     console.log(response);
//     // signup(response, 'google');
// }
  // const useStyles = makeStyles((theme) => ({
  //   textField: {
  //     border: "1px solid #209F85",
  //     borderRadius: "30px",
  //     backgroundColor: "#FFFFFF",
  //   },
  //   inputbase: {
  //     border: "1px solid #209F85",
  //     borderRadius: "30px",
  //     backgroundColor: "#FFFFFF",
  //     height: "7vh",
  //   },
  // }));
  // const classes = useStyles();
  return (
    <>
      <div style={{ background: "#EBEBEB", height: "100vh" }}>
        <div style={{ paddingTop: "1.5rem" }}>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "350px",
              margin: "auto",
              backgroundColor: "#ffffff",
              paddingLeft: "10pt",
              paddingRight: "10pt",
              borderRadius: "10pt",
              // marginTop: "20pt",
              minHeight: "400px",
            }}
          >
            <h1
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                color: "#1D5A90",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              Log In
            </h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                id="inputID"
                placeholder="Email"
                label="Email"
                type="email"
                variant="outlined"
                name="email"
                value={form.email}
                onChange={onFormInputChange}
                style={{
                  borderRadius: "50px",
                  height: "7vh",
                  border: "1px solid #209F85",
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                id="inputID"
                label="Password"
                type="password"
                variant="outlined"
                name="password"
                value={form.password}
                onChange={onFormInputChange}
                placeholder="Password"
                style={{
                  borderRadius: "50px",
                  height: "7vh",
                  border: "1px solid #209F85",
                }}
              />
            </Form.Group>

            {/* <div onChange={changeLanguage}>
            <label className="mr10"><input type="radio" value="en" name="language" checked={selectedLang === 'en'} /> English</label>
            <label ><input type="radio" value="marathi" name="language" checked={selectedLang === 'marathi'} /> Marathi</label>
          </div> */}

            <div class="container" style={{ marginTop: "-0.5rem" }}>
              <div class="row">
                <div
                  class="col"
                  style={{
                    textAlign: "left",
                    color: "#209F85",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                >
                  New user? <Link to="/signup">Sign Up</Link>
                </div>
                <div
                  class="col"
                  style={{
                    color: "#1F448F",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                  {/* Forgot Password ? */}
                </div>
              </div>
            </div>

            <Button
              variant="contained"
              style={{
                background: "#1D5A90",
                borderRadius: 50,
                marginTop: "3rem",
                textTransform: "none",
              }}
              onClick={onSubmit}
            >
              Login
            </Button>

            {/* <div class="container" style={{ marginTop: "1.5rem", alignItems:"center", alignContent:"center"}}>
              <div class="row">
                <FacebookLogin
                  appId="Your FacebookAPP ID"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={responseFacebook}/>
              </div>
            </div>
            
            <div class="container" style={{ marginTop: "1.5rem" }}>
              <div class="row">
              <GoogleLogin
              clientId="Your Google ID"
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}/>
              </div>
            </div> */}


  <div class="container" style={{ marginTop: "1.5rem" }}>
              <div class="row">
                <div
                  class="col"
                  style={{
                    textAlign: "left",
                    color: "#209F85",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                >
                  <Link to="/privacyPolicy">Privacy Policy</Link>
                </div>
                <div
                  class="col"
                  style={{
                    color: "#1F448F",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    textAlign: "right",
                  }}
                >
                 <Link to="/termsofService">Terms of Service</Link>
                </div>
              </div>
            </div>

            {/* <div
              class="col"
              style={{
                color: "#1F448F",
                fontSize: "0.8rem",
                fontWeight: "bold",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={onPrivacy}
            >
              Privacy Policy
            </div>
            <div
              class="col"
              style={{
                color: "#1F448F",
                fontSize: "0.8rem",
                fontWeight: "bold",
                textAlign: "center",
                cursor: "pointer",
              }}
              onClick={onService}
            >
              Terms of Service
            </div> */}
            <div
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <img
                src={require("../assets/logo.png")}
                className="img-fluid"
                style={{ width: "25%" }}
                alt=""
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
