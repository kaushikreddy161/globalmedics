import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user.context";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Button, Divider, TextField } from "@mui/material";
import CarouselSlider from "./CarouselSlider";
import { useNavigate } from "react-router-dom";
import FixedHeader from "../components/FixedHeader";
import { Form } from "react-bootstrap";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';

import "./Main.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const InviteConnect = () => {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const { user, adbuser } = useContext(UserContext);

  const [otp1,setOTP1] = useState("");
  const [otp2,setOTP2] = useState("");
  const [otp3,setOTP3] = useState("");
  const [otp4,setOTP4] = useState("");
  const [otp5,setOTP5] = useState("");
  const [otp6,setOTP6] = useState("");

  const onSubmit = async (event) => {
   event.preventDefault();
   var otpval = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
   console.log("final otp:", otpval); 

  if(adbuser) {
    let cid = adbuser;
    const otpresp = user.functions.getInvitationOTP(parseInt(otpval),"Pending"); 
    // one loved one based on care manager id
    // console.log('carem:',carem);
    otpresp.then((resp) => {
        if(resp) {
            console.log("response:", resp)  
            // invitationAs
            // forId
            updateInv(resp.refOTP);
        } else {
            alert("Invalid OTP");
            console.log("Invalid Otp");

        }

    });
    setOTP1("");
    setOTP2("");
    setOTP3("");
    setOTP4("");
    setOTP5("");
    setOTP6("");
    otpval = "";
  }
  };

  const updateInv = async (resOTP) => {
    try {
        if (user) {
          let dt = new Date();
          let cid = adbuser;
          const updateInv = user.functions.updateInvitation(
            parseInt(resOTP),  
            dt.toDateString()            
            );
            updateInv.then((resp) => {
                if(resp) {
                getInvData(resOTP);
                alert("OTP Validated Successfully");
                } else {
                    alert("Invalid OTP");
                }
            });
        }
      } catch (error) {
        console.log("error:", error);
      }
  }

  const getInvData = async (otpval) => {   // after success otp entered fecting the full data 
    try {
        if (user) {
          let dt = new Date();
          let cid = adbuser;
          const updateInv = user.functions.getInvitationOTP(parseInt(otpval),"Completed");
            updateInv.then((resp) => {
                if(resp) {
                    console.log("result after OTP:", resp);
                    if (resp.invitationAs == "family") { // family community lovedone caregiver
                        const pathf = `/familyMembersConsent`;
                        navigate(pathf);
                    } else if (resp.invitationAs == "community") {
                        const pathc = `/careManagerDetails`;
                        navigate(pathc);
                    } else if (resp.invitationAs == "lovedone") {
                        const pathl = `/addLovedOnes_2`;
                        navigate(pathl);
                    } else if (resp.invitationAs == "caregiver") {
                        const pathc = `/moduleSummary`;
                        navigate(pathc);
                    } 
                } else {
                    alert("Something Wrong...");
                }
            });
        }
      } catch (error) {
        console.log("error:", error);
      }
  }
  const onCancel = async (event) => {
    const path = `/moduleSummary`;
    navigate(path);
  };

  const datex = new Date();
  return (
    <Container
      style={{
        background: "#EBEBEB",
        maxWidth: "100%",
        minHeight: "100vh",
        margin: "0",
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Invitation Connect"
          title2="Please enter OTP received from the person who has invited you into a Care Ring."
          title3="No login history found."
          limg="ls"
          rimg="rr"
        />
        <div style={{ height: "5rem" }}></div>
        {/* <div className="car-ds">
          <CarouselSlider />
        </div> */}
        <div className="form-bp">
          <Card
            style={{
              padding: "20pt",
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
            }}
            className="left"
          >
             <Form
                    className="signup-form"
                    style={{ color: "#209F85" }}
                    onSubmit={onSubmit}
                  >
                    <Form.Group>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                // spacing={3}
                style={{
                  maxWidth: "480px",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0rem"
                }}
              >
                <p className="text-green1">If you have received an invitation message containing an OTP from someone you know, please enter OTP here to join their Care Ring.</p>
                <div className="height"></div>
                 <Form.Control
                            className="form-control otp-class"
                            type="text" name="otp1" maxLength="1" value={otp1}
                            onChange={(e) => setOTP1(e.target.value)} tabIndex="1" ></Form.Control>
                 <Form.Control
                            className="form-control otp-class"
                            type="text" name="otp2" maxLength="1" value={otp2}
                            onChange={(e) => setOTP2(e.target.value)} tabIndex="2" ></Form.Control>
                 <Form.Control
                            className="form-control otp-class"
                            type="text" name="otp3" maxLength="1" value={otp3}
                            onChange={(e) => setOTP3(e.target.value)} tabIndex="3"></Form.Control>
                  <span className="text-gray-p">&#8212;</span>          
                <Form.Control
                            className="form-control otp-class"
                            type="text" name="otp4" maxLength="1" value={otp4}
                            onChange={(e) => setOTP4(e.target.value)} tabIndex="4"></Form.Control>                            
                <Form.Control
                            className="form-control otp-class"
                            type="text" name="otp5" maxLength="1" value={otp5}
                            onChange={(e) => setOTP5(e.target.value)} tabIndex="5"></Form.Control>
                <Form.Control
                            className="form-control otp-class"
                            type="text" name="otp6" maxLength="1" value={otp6}
                            onChange={(e) => setOTP6(e.target.value)} tabIndex="6"></Form.Control>                
                 {/* <p className="text-gray2">This helps enhance security and personalise your experience.</p> */}
              </Grid>
            </Box>
            </Form.Group>
            </Form>
            <div
              style={{
                textAlign: "center",
                marginTop: "10pt",
                marginBottom: "10pt",
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
                Submit OTP
              </Button>
              </div>
              <div><hr className="hr_top" /></div>
              <div 
                style={{
                textAlign: "center",
                marginTop: "40pt",
                marginBottom: "10pt",
              }}>
              <p className="text-gray1">If you have not received such an invite, please click button below.</p>

              <Button
                style={{
                  background: "#ADAAA7",
                  borderRadius: 50,
                  width: "50%",
                  color: "#ffffff",
                  textTransform: "none",
                }}
                onClick={onCancel}
                type="submit"
              >
                I don't have an OTP
              </Button>
            </div>
          </Card>
          </div>
      </Grid>
      <div style={{ height: "100px" }}></div>
    </Container>
  );
}
export default InviteConnect;
