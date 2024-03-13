import React, { useEffect, useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, Divider } from "@mui/material";
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
import Checkbox from "@mui/material/Checkbox";
import "./Main.css";

const LocalCareGiverCustomiseAccess = () => {
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
          title="Customise Access"
          title2="Control what part of your data you allow this person to see and update"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="cgcar"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-d">
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
            <label><span className="text-green">Please set what part of your loved one’s health information  "Ramesh Singh" can access</span></label>
                  <div class="container">
                    <div
                      className="row align-items-top text-res"
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        height: "70px",
                        verticalAlign: "middle",
                      }}
                    >
                      <div class="col-6 text-gray">Information Type</div>
                      <div class="col-3 text-gray text-center">Allowed to Read</div>
                      <div class="col-3 text-gray text-center">Allowed to Update</div>
                    </div>
                  </div>
                  <div class="container">
                    <div
                      className="row align-items-center text-res">
                      <div class="col-6 text-gray1">Health Update Summary</div>
                      <div class="col-3 text-center"><Checkbox /></div>
                      <div class="col-3 text-center"><Checkbox /></div>
                    </div>
                    <div className="row align-items-center text-res">
                    <div class="col-6 text-gray1">Health Vault</div>
                      <div class="col-3 text-center"><Checkbox /></div>
                      <div class="col-3 text-center"><Checkbox /></div>
                    </div>
                    <div className="row align-items-center text-res">
                    <div class="col-6 text-gray1">Symptoms</div>
                      <div class="col-3 text-center"><Checkbox /></div>
                      <div class="col-3 text-center"><Checkbox /></div>
                    </div>
                    <div className="row align-items-center text-res">
                    <div class="col-6 text-gray1">Vital Signs</div>
                      <div class="col-3 text-center"><Checkbox /></div>
                      <div class="col-3 text-center"><Checkbox /></div>
                    </div>
                    <div className="row align-items-center text-res">
                    <div class="col-6 text-gray1">Genetics related</div>
                      <div class="col-3 text-center"><Checkbox /></div>
                      <div class="col-3 text-center"><Checkbox /></div>
                    </div>
                    <div className="row align-items-center text-res">
                    <div class="col-6 text-gray1">Mental Health related</div>
                      <div class="col-3 text-center"><Checkbox /></div>
                      <div class="col-3 text-center"><Checkbox /></div>
                    </div>
                    <div className="row align-items-center text-res">
                    <div class="col-6 text-gray1">Sexual health related</div>
                      <div class="col-3 text-center"><Checkbox /></div>
                      <div class="col-3 text-center"><Checkbox /></div>
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
                Confirm Access
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default LocalCareGiverCustomiseAccess;
