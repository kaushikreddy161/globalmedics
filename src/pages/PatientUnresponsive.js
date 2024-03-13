import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { useNavigate, useLocation } from "react-router-dom";
import { BSON } from "realm-web";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";

function PatientUnresponsive() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const onSubmit = () => {
    const path = `/kindEmergency`;
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
        style={{ minHeight: "100vh", paddingBottom: "0rem",
        }}
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
              // backgroundImage: "linear-gradient(0deg, rgba(255,0,0,0), rgba(255,0,0,1))"
              background: "linear-gradient(#F58174, #FFFFFF)"
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
                src={require("../assets/icon-logo-white.png")}
                className="img-fluid"
                style={{ width: "10%" }}
              />
            </div>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "#C71313",
                  marginTop: "0rem",
                  marginBottom: "1rem",
                  fontSize: "2.1rem",
                  fontWeight: 500,
                }}
              >
                Patient Unresponsive
              </Card.Title>
              <div
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <img
                src={require("../assets/icon-patient-unresponsive.png")}
                className="img-fluid"
                style={{ width: "30%" }}
              />
            </div>
              


              
              <div style={{height:"50px"}}></div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "3rem",
                  marginBottom: "0.5rem",
                }}
              >
                <Button
                  style={{
                    background: "#C71313",
                    borderRadius: 50,
                    width: "50%",
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    textTransform: "none",
                  }}
                  onClick={onSubmit}
                >
                  Raise Alarm
                </Button>
              </div>
              <div style={{height:"30px"}}></div>
            </Card.Body>
          </Card>
        </div>
      </Grid>
    </Container>
  );
}

export default PatientUnresponsive;
