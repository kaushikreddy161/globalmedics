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



const KarmaKlub = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    const path = `/subscriptions`;
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
          title="Karma Klub"
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
              marginBottom: "10pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <Card.Body>

              <div class="container">
                <div
                  className="row align-items-center text-res card_karma"
                >
                  <div class="col-6">Item</div>
                  <div class="col-2">Koins / Unit</div>
                  <div class="col-2">No of Units</div>
                  <div class="col-2 text-right">Total Koins</div>
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
                    className="row align-items-center text-res card_karma1">
                    <div class="col-6 text-left">Next of Kin<br />Invite Sign-ups</div>
                    <div class="col-2">10</div>
                    <div class="col-2">0</div>
                    <div class="col-2 text-right">0</div>
                  </div>
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
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
                  <div className="row align-items-center text-res card_karma1">
                    <div class="col-6 text-left">Valid Feedback Entries</div>
                    <div class="col-2">5</div>
                    <div class="col-2">0</div>
                    <div class="col-2 text-right">0</div>
                  </div>
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
              <div class="container">
                <div
                  className="row align-items-center text-res card_karma"

                >
                  <div class="col-6 text-left">Karma Koins Balance</div>
                  <div class="col-6 text-right">0</div>
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

export default KarmaKlub;
