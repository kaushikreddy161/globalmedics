import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { useNavigate, useLocation } from "react-router-dom";
import { BSON } from "realm-web";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import ImgConsent from "../assets/img-consent.png";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";

import Form from "react-bootstrap/Form";
import Typography from "@material-ui/core/typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ConsentForm = () => {
  const { user, adbuser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    // console.log('user:',user.id);
    if (user) {
     // let cid = BSON.ObjectID(user.id).toString();
     let cid = adbuser; 
     const carem = user.functions.getConsentRec(cid);
      // console.log('carem:',carem);
      carem.then((resp) => {
         console.log(resp);
        // if (resp) {
        //    const path = `/careManagerDetails`;
        //   navigate(path);
        // } else {
        //   const path = `/careManagerDetails`;
        //   navigate(path);        
        // }
        if (resp) {
            const lovd = user.functions.getLovedOneCP(cid); // one loved one based on care manager id
            // console.log('else direct:',ccid);
            lovd.then((respL) => {
              //  console.log("second");
              if (respL) {
                const path = `/dailyCheckInSummary`;
                navigate(path);
              } else {
                // const path2 = `/careManagerDetails`;
                const path2 =`/lovedOneWelcome`;                
                navigate(path2);
              }
            });
          } else {
              console.log("consent line: 67");
             const path = `/careManagerDetails`;
              // navigate(path);        
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
          //let pid = BSON.ObjectID(user.id).toString();
          let pid = adbuser;
          let datex = new Date();
          const create = user.functions.createNewConsent(
            xid,
            pid,
            "Y",
            pid,
            "caremanager",
            "active",
            datex.toDateString(),
            "GlobalMedics2021"
          );
          // console.log('create:', create);
          create.then((respp) => {
            alert("Consent Saved Successfully");
            //  console.log("resp:", respp);
            navigate(`/careManagerDetails`);
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
        // style={{ minHeight: "100vh" }}
      >
        <Card
          style={{
            // borderTop: "6px solid #1D5A90",
            borderRadius: "10px",
            padding: "10pt",
            background: "#F2F8F1",
            marginTop: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              style={{
                maxWidth: "370px",
                // maxWidth: "580px",
                alignItems: "center",
                // justifyContent: "center",
                marginBottom: "-1rem",
              }}
            >
              <p
                style={{
                  fontSize: "1.4rem",
                  fontFamily: "Helvetica",
                  color: "#209F85",
                  marginBottom: "0pt",
                  // marginTop: "-1ren",
                }}
              >
                Remote Health Management
              </p>
              {/* <div style={{ display: "flex", style: "width:580px" }}> */}
              <div style={{ display: "flex" }}>
                <div style={{ marginBottom: "0rem", marginTop: "0rem" }}>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontFamily: "Helvetica",
                      color: "#adaaa7",
                      // marginBottom: "12pt",
                      marginTop: "0pt",
                    }}
                  >
                    Welcome to one of world’s first Virtual Hospitals for the
                    elderly.
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontFamily: "Helvetica",
                      color: "#adaaa7",
                      // marginBottom: "12pt",
                      marginTop: "0pt",
                    }}
                  >
                    Last consented: 12:00 PM, 15th July
                  </p>
                </div>
                <div
                  className="col-sm"
                  style={{
                    textAlign: "right",
                    marginBottom: "0rem",
                    marginTop: "0rem",
                  }}
                >
                  <img src={ImgConsent} />
                </div>
              </div>
            </Grid>
          </Box>
        </Card>
      </Grid>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        // style={{ minHeight: "100vh" }}
      >
        <Card
          style={{
            // borderTop: "6px solid #1D5A90",
            borderRadius: "10px",
            padding: "10pt",
            background: "#F2F8F1",
            marginTop: "0.1rem",
            marginBottom: "0.2rem",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              style={{
                maxWidth: "370px",
                // maxWidth: "580px",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "0rem",
              }}
            >
              <p
                style={{
                  textAlign: "justify",
                  marginBottom: "0rem",
                  fontSize: "0.9rem",
                  fontFamily: "Helvetica",
                  color: "#adaaa7",
                }}
              >
                This app humanises healthcare by engaging loved ones to look
                after the chronically ill elderly. A social network of friends
                and family record health information in this app. The details
                are then proactively monitored by your loves ones and
                multi-disciplinary team of doctors, from anywhere in the world.
              </p>
            </Grid>
          </Box>
        </Card>
      </Grid>

      {/* start */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{
          minHeight: "100vh",
          marginTop: "0.5rem",
        }}
      >
        <Card
          //   sx={{ maxWidth: 500 }}
          style={{
            borderTop: "6px solid #1D5A90",
            borderRadius: "10px",
            padding: "10pt",
            marginTop: "0rem",
            marginBottom: "1rem",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              style={{
                maxWidth: "370px",
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
                    I am keen to be part of this initiative to re-imagine how
                    healthcare can be delivered across geographic boundaries. I
                    agree that the capabilities and limitations of this model
                    would vary significantly from the traditional forms of
                    delivering care.
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
                    I understand this is a pioneering initiative that would
                    depend on my feedback to mature the processes. I promise to
                    provide feedback and ideas for improvement.
                  </Typography>
                }
              />
              <FormControlLabel
                // checked={check3}
                onClick={() => setCheck3(!check3)}
                control={<Checkbox />}
                label={
                  <Typography style={{ fontSize: "0.9rem" }}>
                    I would continue to seek all medical advice required in
                    traditional form of care and would use this service only in
                    addition to what is expected in current medical setup.
                    Especially, I will reach a hospital in case of any
                    emergency.
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
          </Box>
        </Card>
      </Grid>
    </Container>
  );
};
export default ConsentForm;
