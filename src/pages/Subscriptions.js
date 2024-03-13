import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { BSON } from "realm-web";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, Divider } from "@mui/material";
import FixedHeader from "../components/FixedHeader";
import "./Main.css";
const Subscriptions = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    const path = `/vitalsSummary`;
    navigate(path);
  };
  return (
    <Container
      style={{ background: "#EBEBEB", maxWidth: "100%", minWidth: "300px" }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Subscriptions"
          title2="Here is a summary of Karma Koins you have earned"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="kkr"
        />
        <div className="karma-card">
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <Card.Body>
         
              <div class="container">
                <div
                  className="row align-items-top text-res card_karma subscription-text2"
                >
                  <div class="col-3"></div>
                  <div class="col-3">Per person<br/>per month </div>
                  <div class="col-2">No of<br/>Persons</div>
                  <div class="col-2">No of<br/>Months</div>
                  <div class="col-2 text-right">Total<br/>(AUD)</div>
                </div>
              </div>
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  <div
                    className="row align-items-top text-res subscription-text">
                    <div class="col-3 text-left">Platform<br/>subscription</div>
                    <div class="col-3 text-left">AUD 20</div>
                    <div class="col-2">3<br/>Loved Ones</div>
                    <div class="col-2">6 Months</div>
                    <div class="col-2 text-right"><strike>AUD 360</strike></div>
                  </div>
                </div>
              </Card>
              {/* <Divider style={{ margin: "4pt" }} /> */}
              
                <div class="container top-space1">
                  <div className="row align-items-top text-res subscription-text1">
                    <div class="col-6 text-left">Beta Platform Launch Offer</div>
                    <div class="col-4 text-right"><strike>AUD 360</strike></div>
                    <div class="col-2 text-right">AUD 0</div>
                  </div>
                </div>
                <div class="container">
                  <div className="row align-items-top text-res subscription-text1">
                    <div class="col-10 text-left">Paid through Karma Koins</div>
                    <div class="col-2 text-right">AUD 0</div>
                  </div>
                </div>
              
              <div class="container">
                <div
                  className="row align-items-top text-res card_karma"
                  
                >
                  <div class="col-6 text-left">Balance Due</div>
                  <div class="col-6 text-right">AUD 0</div>
                </div>
              </div>
            </Card.Body>

            <div
              style={{
                textAlign: "center",
                marginTop: "1rem",
                marginBottom: "2rem",
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
                Confirm
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default Subscriptions;
