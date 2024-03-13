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


import Icon_LP_Abdomen from "../assets/icon-lp-abdomen.png";
import Icon_LP_Ankle from "../assets/icon-lp-ankle.png";
import Icon_LP_Back from "../assets/icon-lp-back.png";
import Icon_LP_Chest_Left_Side from "../assets/icon-lp-chest-left-side.png";
import Icon_LP_Chest_Right_Side from "../assets/icon-lp-chest-right-side.png";
import Icon_LP_Elbow from "../assets/icon-lp-elbow.png";
import Icon_LP_Head from "../assets/icon-lp-head.png";
import Icon_LP_Jaw from "../assets/icon-lp-jaw.png";
import Icon_LP_Knee from "../assets/icon-lp-knee.png";
import Icon_LP_Neck from "../assets/icon-lp-neck.png";
import Icon_LP_Other from "../assets/icon-lp-other.png";
import Icon_LP_Shoulder from "../assets/icon-lp-shoulder.png";
import Icon_LP_Throat from "../assets/icon-lp-throat.png";
import Icon_LP_Wrist from "../assets/icon-lp-wrist.png";



import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
const list = [
  {
    name: "Head",
    source: Icon_LP_Head,
    navDir: "/severityPain",
  },
  {
    name: "Neck",
    source: Icon_LP_Neck,
    navDir: "/severityPain",
  },
  {
    name: "Throat",
    source: Icon_LP_Throat,
    navDir: "/severityPain",
  },
  {
    name: "Jaw",
    source: Icon_LP_Jaw,
    navDir: "/severityPain",
  },
  {
    name: "Chest Left Side",
    source: Icon_LP_Chest_Left_Side,
    navDir: "/severityPain",
  },
  {
    name: "Chest Right Side",
    source: Icon_LP_Chest_Right_Side,
    navDir: "/severityPain",
  },
  {
    name: "Abdomen / Stomach",
    source: Icon_LP_Abdomen,
    navDir: "/severityPain",
  },
  {
    name: "Back",
    source: Icon_LP_Back,
    navDir: "/severityPain",
  },
  {
    name: "Shoulder",
    source: Icon_LP_Shoulder,
    navDir: "/severityPain",
  },
  {
    name: "Elbow",
    source: Icon_LP_Elbow,
    navDir: "/severityPain",
  },
  {
    name: "Wrist",
    source: Icon_LP_Wrist,
    navDir: "/severityPain",
  },
  {
    name: "Knee",
    source: Icon_LP_Knee,
    navDir: "/severityPain",
  },
  {
    name: "Ankle",
    source: Icon_LP_Ankle,
    navDir: "/severityPain",
  },
  {
    name: "Any Other",
    source: Icon_LP_Other,
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

function LocationPain() {
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
          title="Location of Pain"
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
                        onClick={() => navigate(item.navDir)}
                        sx={{ cursor: "pointer" }}
                        style={{
                          borderTop: "6px solid #1D5A90",
                          borderRadius: "10pt",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
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
export default LocationPain;