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
import { Form } from "react-bootstrap";
import EditIcon from '@mui/icons-material/Edit';
import { RWebShare } from "react-web-share";

import { useMsal } from '@azure/msal-react';

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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const PersonaliseECard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, pId, pName,fName,fetchUser, adbuser } = useContext(UserContext);
  const datex = new Date();
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const [senderName, setSenderName] = useState(activeAccount.idTokenClaims.given_name);
  const [invId,setInvId] = useState();

  // const onSubmit = (rtype) => {
  //   const path = `/healthVaultReportUpload`;
  //   navigate(path, { state: { id: rtype } });
  // };

  const [value, setValue] = React.useState('This is on a wait list');
  const [eMsg, seteMsg] = useState("Hi,\nI have been worried about the health of "+ fName +". Please join me in looking after their health together by clicking on the link below. \nWarm regards,\n"+senderName);
  const [eMsgD,seteMsgD] = useState("Hi,\nI have been worried about the health of "+ fName +". Please join me in looking after their health together by clicking on the link below.");
 // const [resOTP,setresOTP] = useState();
  // const onBack = () => {
  //   const path = `/moduleSummaryTwo`;
  //   navigate(path);
  // };
  useEffect(() => {
    loadInviteLName(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeAccount.idTokenClaims.family_name,location.state.lid]);

  const loadInviteLName = async() => {
   setSenderName(activeAccount.idTokenClaims.family_name);
     if(location.state.lid) {
       const lovd = user.functions.getLovedOneP(location.state.lid); // to fetch all loved ones of that care taker
         lovd.then((resp) => {
           console.log("name:", resp[0]['displayName']);
           if (resp) {
           //  setLOneName(resp[0]['displayName']);
            // const lname = resp[0]['displayName'];
            
             seteMsg("Hi,\nI have been worried about the health of "+ fName +". Please join me in looking after their health together by clicking on the link below. \nWarm regards,\n"+activeAccount.idTokenClaims.family_name);
             seteMsgD("Hi,\nI have been worried about the health of "+ fName +". Please join me in looking after their health together by clicking on the link below.");
           }
       })
     }
  }

  const rOTP = () => {
    var minm = 100000;
    var maxm = 999999;
    var x = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    return x;
  }

  const onConfirm =  async (resOTP) => {
 //   event.preventDefault();
    console.log("msg:", eMsg);
    console.log("OTP:", resOTP);
    if (user) {
      //  console.log('auth:',user.id);
      let dt = new Date();
      let id = new BSON.ObjectID();
    //  let cid = BSON.ObjectID(user.id).toString();
    let cid = adbuser;
      let itype = "family";
        console.log('pid:', pId);
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
        pId,
        resOTP
      );
      createx.then((resp) => {
        console.log("success");
        console.log("resilt:", resp[0]['id'].toString());
        // console.log("lovedones id:", id.toString());
        setInvId(resp[0]['id'].toString());
        //return resp[0]['id'].toString();
      });
    }
  };

  const onCustomise = () => {
    const path = `/personaliseECardCustomise`;
    navigate(path);
  };  

  const onInvite = (e) => {
    var resOTP = rOTP(); // random OTP
    onConfirm(resOTP);
   // var path = '\n\nAfter you log in, please enter this One Time Password ('+ resOTP +') to accept the request.\n\n https://globalmedicsb2c.b2clogin.com/globalmedicsb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signupsigningm&client_id=c61cd9bd-8e87-45fd-a8f2-f2ff2c7cc96b&nonce=defaultNonce&redirect_uri=http://localhost:3000&typ=family&dpl='+cypherData(pId);  // local
    //  var path = '\n\n https://globalmedicsb2c.b2clogin.com/globalmedicsb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signInSignUpDev&client_id=32ddf657-01f9-4f6d-b3cc-21d0a295167f&nonce=defaultNonce&redirect_uri=https://globalmedicsdev.azurewebsites.net&typ=family&dpl='+cypherData(pId);   // dev
   // var path = '\n\nAfter you log in, please enter this One Time Password ('+ resOTP +') to accept the request.\n\n http://localhost:3000';  // local
   var path = '\n\nAfter you log in, please enter this One Time Password ('+ resOTP +') to accept the request.\n\n https://globalmedicsdev.azurewebsites.net/';  // dev
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
          title="Customise Message"
          title2="Control what part of your data you allow this person to see and update "
          title3="Last Updated"
          limg="rl"
          rimg="rct"
        />
        <div style={{ height: "0.8rem" }}></div>
        <div className="car-ds">
          <CarouselSlider />
        </div>
        {/* <div style={{ height: "2.3rem" }}></div> */}
        <div className="form-cm3">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              position: "absolute",
              zIndex: "1",
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
                //   url: "https://globalmedicswebapp.azurewebsites.net/?dpl="+cypherData(pId)+"&typ="+location.state.id,
                  url: "https://globalmedicsdev.azurewebsites.net/", 
                ext: eMsg+"\n\nWarm Regards,\n"+senderName,
               // url: "https://globalmedicsb2c.b2clogin.com/globalmedicsb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signInSignUpDev&client_id=32ddf657-01f9-4f6d-b3cc-21d0a295167f&nonce=defaultNonce&redirect_uri=http://localhost:3000&typ=family&dpl="+cypherData(pId),
                title: "Care Ring Web App",
              }}
                onClick={onConfirm}
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
              position: "absolute",
              zIndex: "1",
            }}
            className="left"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
                // container
                // spacing={{ xs: 2, md: 3 }}
                // columns={{ xs: 4, sm: 8, md: 12 }}
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

export default PersonaliseECard;
