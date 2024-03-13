import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { useNavigate, useLocation } from "react-router-dom";
import { BSON } from "realm-web";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";

function CareManagerWelcome() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const onSubmit = () => {
    const path = `/careManagerModuleSummary`;
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
       className="div-wel"
      >
        <div>
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
                style={{ width: "10%" }}
              />
            </div>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "#209F85",
                  marginTop: "0rem",
                  marginBottom: "1rem",
                  fontSize: "2.1rem",
                  fontWeight: 500,
                }}
              >
                Welcome
              </Card.Title>
              <div
              style={{
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              <img
                src={require("../assets/icon-Care-Manager-Welcome.png")}
                className="img-fluid"
                style={{ width: "50%" }}
              />
            </div>
              <Card.Subtitle
                className="mb-2 "
                style={{
                  textAlign: "center",
                  color: "#89C1B5",
                  fontWeight: "normal",
                  fontSize: "1.2rem",
                  lineHeight:"25pt",
                  marginTop: "0rem",
                  marginBottom: "0rem",
                }}
              >
                Welcome to GlobalMedics.Ai<br/>Care Ring App as a Next of Kin!
              </Card.Subtitle>
              <Card.Subtitle
                className="mb-2 "
                style={{
                  textAlign: "center",
                  color: "#89C1B5",
                  fontWeight: "normal",
                  fontSize: "1.2rem",
                  lineHeight:"25pt",
                  marginTop: "1rem",
                  marginBottom: "4rem",
                }}
              >
                You can look after your loved ones remotely.
              </Card.Subtitle>

              
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
                    background: "#1D5A90",
                    borderRadius: 50,
                    width: "50%",
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    textTransform: "none",
                  }}
                  onClick={onSubmit}
                >
                  Confirm
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

export default CareManagerWelcome;
