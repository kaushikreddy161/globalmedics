import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Button, Divider, TextField } from "@mui/material";

import IconEmail from "../assets/icon-email.png";
import IconFacebook from "../assets/icon-facebook.png";
import IconSMS from "../assets/icon-sms.png";
import IconTelegram from "../assets/icon-telegram.png";
import IconWhatsApp from "../assets/icon-whatsapp.png";
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
import { useMsal } from '@azure/msal-react';

import { Form } from "react-bootstrap";
import EditIcon from '@mui/icons-material/Edit';
import { RWebShare } from "react-web-share";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const list = [
  {
    name: "SMS",
    source: IconSMS,
    navDir: "/comingSoon",
  },
  {
    name: "Email",
    source: IconEmail,
    navDir: "/comingSoon",
  },
  {
    name: "WhatsApp",
    source: IconWhatsApp,
    navDir: "https://api.whatsapp.com/send?text=",
  },
  {
    name: "Telegram Messenger",
    source: IconTelegram,
    navDir: "/comingSoon",
  },
  {
    name: "Facebook Messenger",
    source: IconFacebook,
    navDir: "/comingSoon",
  },
];

const InviteCommunity = () => {
  const { user, pId, pName,fName,fetchUser, adbuser } = useContext(UserContext);
  console.log("adbusr:", adbuser);
  console.log("user.id:", user.id);
  console.log("pId :", pId);

  const navigate = useNavigate();

  const [value, setValue] = React.useState('This is on a wait list');
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  console.log("ADb2c response:", activeAccount.idTokenClaims);
  const [senderName, setSenderName] = useState(activeAccount.idTokenClaims.given_name);
  const [invId,setInvId] = useState();

  const [eMsg, seteMsg] = useState("Hi,\nI have been using Care Ring App to engage friends and family to share the care of my "+ fName +".I availed of their limited launch offer.\n\nYou might want to sign up before this launch offer expires.\n\n Please join me in looking after their health together by clicking on the link below. \nWarm regards,\n"+senderName);
  const [eMsgD,seteMsgD] = useState("Hi,\nI have been using Care Ring App to engage friends and family to share the care of my "+ fName +".I availed of their limited launch offer.\n\nYou might want to sign up before this launch offer expires.\n\n Please join me in looking after their health together by clicking on the link below.");

  const rOTP = () => {
    var minm = 100000;
    var maxm = 999999;
    var x = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    return x;
  }
  const onConfirm =  async (resOTP) => {
    //   event.preventDefault();
       console.log("msg:", eMsg);
       if (user) {
         //  console.log('auth:',user.id);
         let dt = new Date();
         let id = new BSON.ObjectID();
       //  let cid = BSON.ObjectID(user.id).toString();
       let cid = adbuser;  
       let itype = "community";
         
         const createx = user.functions.CreateInvitationsList(
           id,
           cid,
           "",
           "invited",
           "pending",
           "pending",
           "",
           dt.toDateString(),
           itype,
           "GlobalMedics2021",
           "",
           resOTP
         );
         createx.then((resp) => {
           console.log("success");
           console.log("resilt:", resp);
         });
       }
     };

  const onInvite = (e) => {
    var resOTP = rOTP(); // random OTP
    onConfirm(resOTP);
  //  var path = '\n\n https://globalmedicsb2c.b2clogin.com/globalmedicsb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signupsigningm&client_id=c61cd9bd-8e87-45fd-a8f2-f2ff2c7cc96b&nonce=defaultNonce&redirect_uri=http://localhost:3000/?&typ=community&dpl='+cypherData(pId);  // local
   //   var path = '\n\n https://globalmedicsb2c.b2clogin.com/globalmedicsb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signInSignUpDev&client_id=32ddf657-01f9-4f6d-b3cc-21d0a295167f&nonce=defaultNonce&redirect_uri=https://globalmedicsdev.azurewebsites.net&typ=community&dpl='+cypherData(pId);   // dev
  //  var path = '\n\nAfter you log in, please enter this One Time Password ('+ resOTP +') to accept the request.\n\n http://localhost:3000/';  // local
   var path = '\n\nAfter you log in, please enter this One Time Password ('+ resOTP +') to accept the request.\n\n https://globalmedicswebapp.azurewebsites.net/';
   
     var regards = "\n\nWarm Regards,\n"+senderName;
     var url = path+regards;
     const encodedUrl = e+encodeURIComponent(url);
     console.log("encodedUrl:", encodedUrl);
       window.open(encodedUrl, '_blank', 'noopener,noreferrer');
   }

  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"  
        alignItems="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Invite Community"
          title2="Invite your friends and colleagues and earn Karma Koins when they sign up as Next of Kin"
          title3="Last Updated"
          limg="rl"
          rimg="icr"
        />
                <div className="car-ds">
          <CarouselSlider />
        </div>

        {/* <div className="invite-div">
          <Card className="invite-card">
            <p className="invite-para1">Hi,</p>
            <p className="invite-para">I have been using Care Ring App to engage friends and family to share the care of my {fName}. I availed of their limited launch offer.</p>
            <p className="invite-para">You might want to sign up before this launch offer expires.</p>
            <p className="invite-para">Warm regards</p>
            <p className="invite-para1">{senderName}</p>
          </Card>
        </div> */}
        <div className="form-cm3">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              marginTop: "0rem",
              marginBottom: "0rem",
              // position: "absolute",
              // zIndex: "1",
            }}
            className="cm-text-box"
          >
            <Card.Body
              style={{
                color: "#209F85",
                marginTop: "-0.5rem",
                marginBottom: "0rem",
              }}
            >
             <Form.Control
                as="textarea"
                rows={8}
                style={{ marginTop: "0.5rem" }}
                name="eMsg"
                value={eMsg}
                onChange={(e) => seteMsg(e.target.value)}
                defaultValue={eMsg}
                disabled="true"               
              />
              <div
              style={{
                    textAlign: "center",
                    marginTop: "10pt",
                    marginBottom: "10pt",
                  }}
                >
                   <RWebShare
                data={{
                ext: eMsg+"\n\nWarm Regards,\n"+senderName,
             //   url: "https://globalmedicsb2c.b2clogin.com/globalmedicsb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signInSignUpDev&client_id=32ddf657-01f9-4f6d-b3cc-21d0a295167f&nonce=defaultNonce&redirect_uri=http://localhost:3000&typ=family&dpl="+cypherData(pId),
           //  url: "https://globalmedicsb2c.b2clogin.com/globalmedicsb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signupsigningm&client_id=c61cd9bd-8e87-45fd-a8f2-f2ff2c7cc96b&nonce=defaultNonce&redirect_uri=http://localhost:3000&typ=community&dpl="+cypherData(pId),
          // url: "http://localhost:3000/",  
           url: "https://globalmedicsdev.azurewebsites.net/", 
          title: "Care Ring Web App",
              }}
               // onClick={onConfirm}
              >
                  <Button
                    style={{
                      background: "#1D5A90",
                      borderRadius: 50,
                      width: "50%",
                      color: "#ffffff",
                      textTransform: "none",
                    }}
                  //  onClick={onConfirm}
                    type="submit"
                  >
                    Send Invite
                  </Button> 
              </RWebShare>                 
                </div>
            </Card.Body>
          </Card>
        </div>

        <div className="form-cm4">
          <Card
            //   sx={{ maxWidth: 500 }}
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              marginTop: "0rem",
              marginBottom: "0rem",
              // position: "absolute",
              // zIndex: "1",
            }}
            className="left"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
                style={{
                  maxWidth: "500px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {list.map((item) => (
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                      <Item
                       onClick={() => (item.name != "WhatsApp" ? "" : onInvite(item.navDir+eMsgD))}
                       sx={{ cursor: (item.name != "WhatsApp" ? "" :"pointer")}}
                        style={{
                          borderTop: "6px solid #1D5A90",
                          borderRadius: "10pt",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          backgroundColor: (item.name != "WhatsApp" ? "#cfcbcb" : "white")
                        }}
                        className="CatCard"
                      >
                        <p className="CatImg">
                          <img
                            src={item.source}
                            style={{
                              width: "60%",
                            }}
                          />
                        </p>
                        <p className="CatName">{item.name}</p>
                      </Item>
                    </>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Card>
        </div>        
               
        <div style={{ height: "50vh" }}></div>
      </Grid>
    </Container>
  );
};

export default InviteCommunity;
