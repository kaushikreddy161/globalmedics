import React, { useEffect, useContext } from "react";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { UserContext } from "../contexts/user.context";
import { useNavigate } from "react-router-dom";
// import { BSON } from "realm-web";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// import Form from "react-bootstrap/Form";
import { Button } from "@mui/material";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";


function ModuleSummary(props) {
  console.log("props:", props.prop);

  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const { user,adbuser,custFunctionLogin } = useContext(UserContext);
  var adb2cId = "";

  if (activeAccount) {
   adb2cId = activeAccount.idTokenClaims.sub;
  } else {
    adb2cId = props.prop;
  }

  const navigate = useNavigate();  

  useEffect(() => {
    loadUser(); 
  }, [adb2cId]);

  const loadUser = async () => {
    console.log('user adb2cid:',adb2cId);
    //const user = await custFunctionLogin(adb2cId);
    console.log('user:',user);
    console.log('adb user:',adbuser);

    if (user) {
     // let cid = BSON.ObjectID(user.id).toString();
     let cid = adbuser; 
     const carem = user.functions.getConsentRec(cid);
      carem.then((resp) => {
        // console.log(resp);
        if (resp) {
          // console.log("first");
          const lovd = user.functions.getLovedOneCP(cid); // one loved one based on care manager id
          // console.log('else direct:',ccid);
          lovd.then((respL) => {
            //  console.log("second");
            if (respL) {
              const path = `/dailyCheckInSummary`;
              navigate(path);
            } else {
              const path2 = `/careManagerDetails`;
              navigate(path2);
            }
          });
        } else {
          const path = `/consentForm`;
          navigate(path);
        }
      });
    } else {
      const user = await custFunctionLogin(adb2cId);
    }
  };

  const onSubmit = () => {
    loadUser();
  };

  return (
    <>
       <AuthenticatedTemplate>
       {activeAccount ? (     
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <div style={{ paddingTop: "1rem" }}>
          <Card
            style={{
              maxWidth: "500px",
              border: "none",
              borderRadius: "10pt",
              backgroundColor: "#F2F8F1",
              marginTop: "0rem",
              marginBottom: "0rem",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              <img
                src={require("../assets/logo.png")}
                className="img-fluid"
                style={{ width: "17%" }}
              />
            </div>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "#209F85",
                  marginTop: "0rem",
                  marginBottom: "1.5rem",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                Steps to Remote Care
              </Card.Title>
              <Card.Subtitle
                className="mb-2 "
                style={{
                  textAlign: "center",
                  color: "#89C1B5",
                  fontWeight: "normal",
                  fontSize: "0.9rem",
                  marginTop: "0rem",
                  marginBottom: "0rem",
                }}
              >
                Follow these steps to set up the system for remotely managing
                the health of your elderly loved ones.
              </Card.Subtitle>

              <table
                style={{
                  color: "#76706B",
                  fontSize: "0.85rem",
                  // marginLeft: "1rem",
                  marginTop: "2rem",
                }}
              >
                <colgroup>
                  <col style={{ width: "15%" }} />
                  <col style={{ width: "10%" }} />
                  <col style={{ width: "75%" }} />
                </colgroup>
                <tr>
                  <td></td>
                  <td>
                    <img src={require("../assets/wel-1.png")} />
                  </td>
                  <td style={{ paddingLeft: "0.5rem" }}>
                    Add the loved ones you want care for
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td style={{ paddingTop: "1rem" }}>
                    <img src={require("../assets/wel-2.png")} />
                  </td>
                  <td style={{ paddingTop: "1rem", paddingLeft: "0.5rem" }}>
                    Add people who will look after them
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td style={{ paddingTop: "1rem" }}>
                    <img src={require("../assets/wel-3.png")} />
                  </td>
                  <td style={{ paddingTop: "1rem", paddingLeft: "0.5rem" }}>
                    Record History & Vital Signs
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td style={{ paddingTop: "1rem" }}>
                    <img src={require("../assets/wel-4.png")} />
                  </td>
                  <td style={{ paddingTop: "1rem", paddingLeft: "0.5rem" }}>
                    Monitor and manage their health remotely
                  </td>
                </tr>
              </table>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "3rem",
                  marginBottom: "0.5rem",
                }}
              >
                <Button
                  style={{
                    background: "#1D5A90",
                    borderRadius: 50,
                    width: "50%",
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    textTransform: "none",
                  }}
                  onClick={onSubmit}
                >
                  Get Started
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Grid>
    </Container>
       ) : null }
        </AuthenticatedTemplate>
        </>
  );
}

export default ModuleSummary;
