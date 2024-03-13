import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";

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

const EmergencyConsent = () => {
  // const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = () => {
   // const path = `/kindEmergency`;
   const path = `/emergencyGuidance`;
    navigate(path);
  };

  // useEffect(() => {
  //   loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const loadUser = async () => {
  //   // console.log('user:',user.id);
  //   if (user) {
  //     let cid = BSON.ObjectID(user.id).toString();
  //     const carem = user.functions.getCareGiverConsent(cid);
  //     // console.log('carem:',carem);
  //     carem.then((resp) => {
  //       if (resp) {
  //         const path = `/patientsList`;
  //         navigate(path);
  //       }
  //     });
  //   }
  // };

  // const onSubmit = () => {
  //   const path = `/patientsList`;
  //   navigate(path);
  // };

  const onBack = () => {
    const path = `/moduleSummaryTwo`;
    navigate(path);
  };
  const onNext = () => {
    const path = `/bloodPressure`;
    navigate(path);
  };
  const datex = new Date();

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     if (check1 === true && check2 === true && check3 === true) {
  //       // console.log("inside");

  //       if (user) {
  //         let xid = new BSON.ObjectID();
  //         let pid = BSON.ObjectID(user.id).toString();
  //         let datex = new Date();
  //         const create = user.functions.createCareGiverConsent(
  //           xid,
  //           pid,
  //           "Y",
  //           pid,
  //           "self",
  //           "active",
  //           datex.toDateString(),
  //           "GlobalMedics2021"
  //         );
  //         // console.log('create:', create);
  //         create.then((respp) => {
  //           alert("Consent Saved Successfully");
  //           //  console.log("resp:", respp);
  //           navigate(`/patientsList`);
  //         });
  //         // redirectNow();
  //       }
  //     } else {
  //       alert("Please click all the 3 check boxes to terms");
  //     }
  //   } catch (error) {
  //     //alert(error);
  //     console.log("Error:", error);
  //   }
  // };

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
          title="Emergency Consent"
          title2="Accurate symptoms form the basis of diagnosis & treatment by healthcare professionals"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="rep"
        />
        <div className="con-crc">
          <Card
            style={{
              // borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              background: "#F2F8F1",
              marginTop: "0rem",
              marginBottom: "1rem",
              maxWidth: "500px",
              zIndex: "1",
              fontFamily: "Helvetica",
              color: "#707070",
              textAlign: "justify",
            }}
          >
            Doctors need timely, detailed and accurate description of your symptoms for effective diagnosis and treatment. Capturing your 
          </Card>
        </div>
        <div className="crc-check">
          <Card
            //  sx={{ maxWidth: 500 }}
            style={{
              borderTop: "6px solid #1D5A90",
              // marginTop: "210px",
              marginTop: "0rem",
              marginBottom: "0rem",
              borderRadius: "10px",
              padding: "20pt",
              width: "100%",
              maxWidth: "500px",

              // position: "absolute",
              zIndex: "1",
            }}
          >
            <Grid
              container
              style={{
                // maxWidth: "370px",
                // maxWidth: "580px",
                alignItems: "center",
                textAlign: "justify",
                justifyContent: "center",
                marginBottom: "0rem",
                marginTop: "0rem",
                color: "#707070",
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
                    I agree to collaborate with my carers, friends and family to provide
accurate, timely and detailed description of my symptoms
                  </Typography>
                }
              />
              <FormControlLabel
                style={{
                  borderBottom: "1px solid #ADAAA7",
                  paddingBottom: "1rem",
                  marginBottom: "1rem",
                }}
                //checked={check2}
                onClick={() => setCheck2(!check2)}
                control={<Checkbox />}
                label={
                  <Typography style={{ fontSize: "0.9rem" }}>
                    I consent to my health data being made available to staff and 
workers of Global Medics, even when they are not registered or
reside in my country of residence.
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

export default EmergencyConsent;
