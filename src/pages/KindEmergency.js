import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider, TextField } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
import IconHealthReports from "../assets/icon-pReports.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";

import IconPathology from "../assets/icon-pathology.png";
import IconChronicConditions from "../assets/icon-chronic-conditions.png";
import IconMedications from "../assets/icon-medications.png";
import IconPerPrt from "../assets/icon-personal-prtl.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconPatientImage from "../assets/icon-patient-photo.png";
import IconInsurance from "../assets/icon-insurance.png";


import Icon_KE_Accident from "../assets/icon-ke-accident.png";
import Icon_KE_Pain from "../assets/icon-ke-pain.png";
import Icon_KE_Breathing from "../assets/icon-ke-breathing.png";
import Icon_KE_Behaviour from "../assets/icon-ke-behaviour.png";
import Icon_KE_Unresponsive from "../assets/icon-ke-unresponsive.png";
import Icon_KE_Bleeding from "../assets/icon-ke-bleeding.png";
import Icon_KE_Fever from "../assets/icon-ke-fever.png";
import Icon_KE_Other from "../assets/icon-lp-other.png";



import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
const list = [
  {
    name: "Accident / Fall",
    source: Icon_KE_Accident,
    navDir: "/typeAccident",
  },
  {
    name: "Pain",
    source: Icon_KE_Pain,
    navDir: "/locationPain",
  },
  {
    name: "Unresponsive",
    source: Icon_KE_Unresponsive,
    navDir: "/alertnessCheck",
  },
  {
    name: "High Fever",
    source: Icon_KE_Fever,
    navDir: "/fever",
  },
  {
    name: "Breathing Difficulty",
    source: Icon_KE_Breathing,
    navDir: "/anyOtherDetails",
  },
  {
    name: "Behaviour",
    source: Icon_KE_Behaviour,
    navDir: "/anyOtherDetails",
  },
  {
    name: "Bleeding",
    source: Icon_KE_Bleeding,
    navDir: "/anyOtherDetails",
  },

  {
    name: "Any Other",
    source: Icon_KE_Other,
    navDir: "/anyOtherDetails",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function KindEmergency() {
  const navigate = useNavigate();
  const onSubmit = () => {
    const path = `/moduleSummaryOne`;
    navigate(path);
  };
  const onBack = () => {
    const path = `/careManagerDetails`;
    navigate(path);
  };

  const onNext = () => {
    const path = `/moduleSummaryThree`;
    navigate(path);
  };

  const datex = new Date();
  return (
    <Container
      style={{
        background: "#EBEBEB",
        maxWidth: "100%",
        minHeight: "100vh",
        margin: "0",
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Chief Complaint"
          title2="What Kind of an emergency do you have?"
          title3=""
          limg="rl"
          rimg="rsp"
        />
                 <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-bp">
          <Card
            //   sx={{ maxWidth: 500 }}
            style={{
              // borderTop: "6px solid #1D5A90",
              // borderRadius: "10px",
              padding: "20pt",
              // maxWidth: "500px",
              // position: "absolute",
              // zIndex: "1",
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
            }}
            className="left"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
                // container
                // spacing={{ xs: 2, md: 3 }}
                // columns={{ xs: 4, sm: 8, md: 12 }}
                style={{
                  maxWidth: "500px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {list.map((item) => (
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                      <Item
                      // onClick={() => (item.name === "Breathing Difficulty" || item.name === "Behaviour" || item.name === "Bleeding" ? "" : navigate(item.navDir))}
                        onClick={() => navigate(item.navDir)}
                        sx={{ cursor: "pointer"}}
                        // sx={{ cursor: (item.name === "Breathing Difficulty"|| item.name === "Behaviour" || item.name === "Bleeding" ? "" :"pointer")}}
                        style={{
                          borderTop: "6px solid #1D5A90",
                          borderRadius: "10pt",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          // backgroundColor: (item.name === "Breathing Difficulty" || item.name === "Behaviour" || item.name === "Bleeding" ? "#cfcbcb"  : "white")
                        }}
                        className="CatCard"
                      >
                        <p className="CatImg">
                          <img
                            src={item.source}
                            style={{
                              width: "60%",
                            }}
                          />
                        </p>
                        <p className="CatName">{item.name}</p>
                      </Item>
                    </>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* <div
              style={{
                textAlign: "center",
                marginTop: "40pt",
                marginBottom: "10pt",
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
                onClick={onNext}
                type="submit"
              >
                Next
              </Button>
            </div> */}
          </Card>
        </div>
      </Grid>
      <div style={{ height: "100px" }}></div>
    </Container>
  );
}
export default KindEmergency;