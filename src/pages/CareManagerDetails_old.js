import React, { useEffect, useContext, useState } from "react";
 import { UserContext } from "../contexts/user.context";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { withTranslation } from "react-i18next";
// import { useTranslation } from "react-i18next";
import FixedHeader from "../components/FixedHeader";
import axios from "axios";
import "./Main.css";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// const datex = new Date();

// const DEFAULT_URL = "https://www.js-craft.io/_public-files/cat.png";

async function facebookPIC(fuserid,access_token){
// let userInfo = await axios.get("https://graph.facebook.com/v3.2/"+fuserid+"/picture?access_token="+access_token+"&type=square",
// let userInfo = await axios.get(`https://graph.facebook.com/me?fields=name,gender,location,picture&access_token=${access_token}`, 
 let userInfo = await axios.get(`https://graph.facebook.com/me?fields=name&access_token=${access_token}`, 
 {
    headers: {
      'Access-Control-Allow-Origin': '*',
   //   Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
  });
 // console.log("userInfo facebook:", userInfo);
}

const CareManagerDetails = ({ t }) => {
  const { user, adbuser } = useContext(UserContext);
  // const location = useLocation();
  // const datex = new Date();
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const [fgpicture, setFGPicture]= useState("");

 // console.log("active account lin2 42:", activeAccount);
// calling the google api

const googlePIC = async (access_token) => {
  let userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", 
  {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
  setFGPicture(userInfo.data.picture);
 // console.log("userInfo google:", userInfo.data.picture);
}

 // console.log("Id Calims :", activeAccount.idTokenClaims.family_name);
  
  const navigate = useNavigate();
  const [fName, setfName] = useState(activeAccount.idTokenClaims.family_name);
  const [lName, setlName] = useState(activeAccount.idTokenClaims.given_name);
  const [email, setEmail] = useState(activeAccount.username);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("0");
  const [value, setValue]= useState("");


  // const [url, setUrl] = React.useState(DEFAULT_URL);
	// const[imageUrl, setImageUrl] = useState('');

  // const [lock, setLock] = useState("false")
  // const { i18n } = useTranslation();

  // const onBack = () => {
  //   const path = `/moduleSummary`;
  //   navigate(path);
  // };

  useEffect(() => {    
      if (activeAccount.idTokenClaims.idp){
        if (activeAccount.idTokenClaims.idp === "google.com"){
          console.log("logged in through adb2c google");
          // const { access_token, refresh_token } = res.data; // now I have valid access_token
          googlePIC(activeAccount.idTokenClaims.idp_access_token);
        } else if (activeAccount.idTokenClaims.idp === "facebook.com"){
          console.log("logged in through adb2c facebook");
          facebookPIC(activeAccount.idTokenClaims.oid,activeAccount.idTokenClaims.idp_access_token);
          } else {
          console.log("logged in through adb2c");
        }
      }

          loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adbuser]);

  const loadUser = async () => {
   // fetchAndCovertToBlob();
 //  console.log("cid CM 121:", adbuser);
    if (user) {
    let cid = adbuser;
    console.log("cid CM 121:", cid);
      const carem = user.functions.getOneCareManagerADB(cid);
      carem.then((resp) => {
        if(resp) {
        setfName(resp.firstname);
        setlName(resp.lastname);
        setEmail(decryptData(resp.email));
        setValue(resp.phone);
        setStatus("1");
        //  setLock("true");
      //  console.log("cid CM 129:", cid);
        const lovd = user.functions.getSelfDataLovedOne(cid); // one loved one based on care manager id
      // console.log('carem:',carem);
          lovd.then((respp) => {
            if(respp) {
              console.log("Not added loved one");
            }
            else {
              console.log('new loved one');
              addCMasLoved(resp.firstname,resp.lastname,resp.email,resp.phone);
            }
          });
        } else {
          // const careg = user.functions.getOneCaregiver(cid);
          // careg.then((respg) => {
          //   if(respg) {
          //   setfName(respg.firstname);
          //   setlName(respg.lastname);
          //   setEmail(decryptData(respg.email));
          //   setValue(respg.phone);
          //   setStatus("1");
          //   //  setLock("true");
          //   } 
          // });
        }
      });
    }
  };

  const addCMasLoved = async (fn,ln,em,ph) => {   // adding caremanager as  Loved One by default
      if (user) {
          let dt = new Date();
        let id = new BSON.ObjectID();
        let cid = adbuser;
        let pid = adbuser;
        let familyn = fn + " " + ln;
        const createx = user.functions.createLovedOnes(
          id,
          cid,
          familyn,
          em,
          cid,
          "self",
          dt.toDateString(),
          "active",
          ln,
          fn,
          "",
          pid,
          ph,
          "GlobalMedics2021",
          "self"
        );
        createx.then((respl) => {
          if(respl){
              console.log("lovedones id:", id.toString());
          }
         });
      }
    };
  const onConfirm = () => {
    navigate(`/addLovedOnes`);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (user) {
        let dt = new Date();
       // let id = BSON.ObjectID(user.id);
        // let pid = BSON.ObjectID(user.id).toString();
        let id = new BSON.ObjectID();
        let pid = adbuser;
        const create = user.functions.createCaremanagerADB(
          id,
          cypherData(email),
          pid,
          fName,
          lName,
          value,
          dt.toDateString(),
          "active",
          "GlobalMedics2021",
          pid
        );
        create.then((resp) => {
          alert("Account Details Updated Successfully");
          navigate(`/role`);
        });
        // redirectNow();
      }
    } catch (error) {
      //alert(error);
      console.log("Error:", error);
    }
  };

  // As explained in the Login page.
  // const redirectNow = () => {
  //   const redirectTo = location.search.replace("?redirectTo=", "");
  //   navigate(redirectTo ? redirectTo : "/");
  // };

  // const [selectedLang, setSelectedLang] = useState("en");

  // const changeLanguage = (event) => {
  //   setSelectedLang(event.target.value);
  //   i18n.changeLanguage(event.target.value);
  //   // console.log('language:', event.target.value);
  // };

  //  console.log('118n:', i18n);

  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "10vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Account Details"
          title2="Please validate / update your account details to secure your account."
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="adr"
          simg={fgpicture}          
        />
       <div className="form-w">
          <Card
            style={{
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              // marginTop: "0rem",
              // marginBottom: "0rem",
            }}
            className="left"
          >
            <Card.Body>
              <div className="container">
                <div className="form-container">
                  <Form
                    className="signup-form"
                    style={{ color: "#209F85" }}
                    onSubmit={onSubmit}
                  >
                    <Form.Group>
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>First Name</label>
                          {/* <div style={{position:"relative"}}> */}
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="First Name"
                            name="fName"
                            value={fName}
                            onChange={(e) => setfName(e.target.value)}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
                            }}
                          ></Form.Control>

                          {/* <EditOutlinedIcon style={{position:"absolute"}}/>                       */}
                          {/* </div> */}
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Last Name</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Last Name"
                            name="lName"
                            value={lName}
                            onChange={(e) => setlName(e.target.value)}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
                            }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Email</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="email_id@MailProvider.com"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
                            }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      {/* <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>{t("PASSWORD")}</label>
                          <Form.Control
                            className="name-input"
                            type="password"
                            placeholder="**********"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
                            }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} /> */}
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Mobile</label>
                          {/* <label>{t("PHONE")}</label> */}
                          {/* <Form.Control
                            className="name-input"
                            type="number"
                            min="0"
                            placeholder="+91 xxxxxxxxxx"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
                            }}
                          ></Form.Control> */}
                           {/* <div> */}
                             <PhoneInput
                             country={'in'}
                            placeholder="Enter phone number"
                            name="phone"
                            value={value}
                            onChange={setValue}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#ADAAA7",
                             // border: "1px solid #ced4da",
                            }}
                            />
                      {/* </div> */}
                        </Card.Body>
                      </Card>
                     
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Card.Body>
            <>
              {status === "0" ? (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "10pt",
                    marginBottom: "0pt",
                  }}
                >
                  <Button
                    style={{
                      background: "#1D5A90",
                      borderRadius: 50,
                      width: "50%",
                      color: "#ffffff",
                      textTransform: "none",
                    }}
                    onClick={onSubmit}
                    type="submit"
                  >
                    Save Details
                  </Button>
                </div>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "10pt",
                    marginBottom: "0pt",
                  }}
                >
                  <Button
                    style={{
                      background: "#1D5A90",
                      borderRadius: 50,
                      width: "50%",
                      color: "#ffffff",
                      textTransform: "none",
                    }}
                    onClick={onConfirm}
                    type="submit"
                  >
                    Confirm
                  </Button>
                </div>
              )}
            </>
            <div style={{ height: "5vh" }}></div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default withTranslation()(CareManagerDetails);
