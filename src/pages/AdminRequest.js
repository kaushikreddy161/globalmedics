import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { useNavigate, useLocation } from "react-router-dom";
import { BSON } from "realm-web";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";

function AdminRequest() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const onSubmit = () => {
    const path = `/comingSoon`;
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
                  marginTop: "1rem",
                  marginBottom: "4rem",
                  fontSize: "2.1rem",
                  fontWeight: 500,
                }}
              >
                Admin Request
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
                "Next of Kin" seeks access to your health data as your “next of kin” to organise your care remotely by setting up a network of family, friends & other care givers.
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
                  Consent and Continue
                </Button>
              </div>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "0rem",
                  marginBottom: "0.5rem",
                }}
              >
                <Button
                  style={{
                    background: "#707070",
                    borderRadius: 50,
                    width: "50%",
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    textTransform: "none",
                  }}
                  onClick={onSubmit}
                >
                  Decline and exit
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

export default AdminRequest;
