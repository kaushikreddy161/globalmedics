import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { useNavigate, useLocation } from "react-router-dom";
import { BSON } from "realm-web";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";

function DeviceWelcome() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  // const onSubmit = () => {
  //   loadUser();
  // };

  const onSubmit = () => {
    const path = `/deviceRegistration`;
    navigate(path);
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
                Integrate Smart Device
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
                Please follow these steps to integrate a new mobile device with the Global Medics Platform
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
                  Connect your Smart Device to the Device manufacturer’s mobile app in your smartphone
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td style={{ paddingTop: "1rem" }}>
                    <img src={require("../assets/wel-2.png")} />
                  </td>
                  <td style={{ paddingTop: "1rem", paddingLeft: "0.5rem" }}>
                  Download (iPhones) / Update (Android) Google Fit from App Store.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td style={{ paddingTop: "1rem" }}>
                    <img src={require("../assets/wel-3.png")} />
                  </td>
                  <td style={{ paddingTop: "1rem", paddingLeft: "0.5rem" }}>
                  Synchronise the Device mobile app with Google Fit.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td style={{ paddingTop: "1rem" }}>
                    <img src={require("../assets/wel-4.png")} />
                  </td>
                  <td style={{ paddingTop: "1rem", paddingLeft: "0.5rem" }}>
                  Log into our WebApp. Navigate to “Register your device”, including the email id that you use to log into Google FIt
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
  );
}

export default DeviceWelcome;
