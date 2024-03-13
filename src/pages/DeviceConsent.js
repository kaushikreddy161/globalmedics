import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';

import { Card } from "react-bootstrap";
import { Button, Divider, TextField } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import FixedHeader from "../components/FixedHeader";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DeviceConsent = () => {
 const { user, adbuser,pId } = useContext(UserContext);
 const { instance } = useMsal();
 const activeAccount = instance.getActiveAccount();
 //const pId = activeAccount.idTokenClaims.sub;
// const user = "";
// const pName = "";
 //const selectedPatient = ""; 
  
 const navigate = useNavigate();
 //console.log("device line 42:", BSON.ObjectID(adbuser).toString());

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 
  // const onSubmit = () => {
  //   const path = `/deviceWelcomeScreen`;
  //   navigate(path);
  // };

  const loadUser = async () => {
    // console.log('user:',user.id);
    if (user) {
    //  let cid = BSON.ObjectID(adbuser).toString();
    let cid = pId;
      const carem = user.functions.getConsentDeviceReg(cid);
      // console.log('carem:',carem);
      carem.then((resp) => {
        // console.log(resp);
        if (resp) {
          const path = `/deviceRegistration`;
          navigate(path);
        }
      });
    }
  };

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (check1 === true && check2 === true && check3 === true) {
        // console.log("inside");

        if (user) {
          let xid = new BSON.ObjectID();
        //  let pid = BSON.ObjectID(adbuser).toString();
        let pid = adbuser;
          let datex = new Date();
          const create = user.functions.createNewConsentDeviceReg(
            xid,
            pid,
            "Y",
            pid,
            "Patient",
            "active",
            datex.toDateString(),
            "GlobalMedics2021"
          );
          // console.log('create:', create);
          create.then((respp) => {
            alert("Consent Saved Successfully");
            //  console.log("resp:", respp);
            navigate(`/deviceWelcomeScreen`);
          });
          // redirectNow();
        }
      } else {
        alert("Please click all the 3 check boxes to terms");
      }
    } catch (error) {
      //alert(error);
      console.log("Error:", error);
    }
  };

  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Device Consent"
          title2="Integrate a range of smart wearables to automate health data recording."
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="dcrr"
        />
        <div className="con-dcg">
          <Card className="MainCard_DeviceCon">
          Automating recording of vitals and other health data is more convenient and less error prone. It assumes that appropriate devices have been selected to collect the data relevant to co-morbidities of the patient.
          </Card>
        </div>
        <div style={{ height: "1rem" }}></div>
        <div className="MainCard_DeviceConWidth">
        <Card className="MainCard_DeviceConSub">
          <Grid
            container
            style={{
              // maxWidth: "580px",
              alignItems: "center",
              textAlign: "justify",
              justifyContent: "center",
              marginBottom: "0rem",
              marginTop: "0rem",
              color: "#ADAAA7",
            }}
          >
            <FormControlLabel
              style={{
                borderBottom: "1px solid #ADAAA7",
                paddingBottom: "1rem",
                marginBottom: "1rem",
              }}
              // checked={check1}
              onClick={() => setCheck1(!check1)}
              control={<Checkbox />}
              // control={<Checkbox />}
              label={
                <Typography style={{ fontSize: "0.9rem" }}>
                  I understand that the health data shared through the smart devices form the basis of any advice or care delivered and will ensure the timelines and accuracy of the data.
                </Typography>
              }
            />
            <FormControlLabel
              style={{
                borderBottom: "1px solid #ADAAA7",
                paddingBottom: "1rem",
                marginBottom: "1rem",
              }}
              // checked={check1}
              onClick={() => setCheck2(!check2)}
              control={<Checkbox />}
              // control={<Checkbox />}
              label={
                <Typography style={{ fontSize: "0.9rem" }}>
                  I understand that the accuracy of data collected from the smart device is the responsibility of the manufacturer that I have selected of my own free will. 
                </Typography>
              }
            />
            <FormControlLabel
              style={{
                // borderBottom: "1px solid #ADAAA7",
                paddingBottom: "1rem",
                marginBottom: "1rem",
              }}
              //checked={check2}
              onClick={() => setCheck3(!check3)}
              control={<Checkbox />}
              label={
                <Typography style={{ fontSize: "0.9rem" }}>
                  I understand that this system is only meant to be used in addition to the real world, face to face consultations that the patient needs to have, not as a replacement.
                </Typography>
              }
            />
          </Grid>

          {/* {check1 === true && check2 === true && check3 === true ? ( */}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Button
              style={{
                background: "#1D5A90",
                borderRadius: 50,
                width: "50%",
                color: "#ffffff",
                textTransform: "none",
              }}
              onClick={onSubmit}
            >
              I Consent
            </Button>
          </div>
        </Card>
        </div>
      </Grid>
      <div style={{ height: "1rem" }}></div>
    </Container>
  );
};

export default DeviceConsent;
