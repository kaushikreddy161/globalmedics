import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";

import { Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";

import IconPerPrt from "../assets/icon-personal-prtl.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconPatientImage from "../assets/icon-patient-photo.png";
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";

import IconSocialEvents from "../assets/icon-social-events.png";
import IconHygiene from "../assets/icon-hygiene.png";
import IconMedical from "../assets/icon-medical.png";
import IconPhysiotherapy from "../assets/icon-physiotherapy.png";
import IconMeals from "../assets/icon-meals.png";
import IconImpairment from "../assets/icon-impairment.png";

import IconHousekeeping from "../assets/icon-housekeeping.png";
import IconMaintainence from "../assets/icon-maintainence.png";
import IconIndependence from "../assets/icon-independence.png";
import IconTransport from "../assets/icon-transport.png";

const list = [
  {
    name: "Social Events",
    source: IconSocialEvents,
    navDir: "/comingSoon",
  },
  {
    name: "Hygiene & Grooming",
    source: IconHygiene,
    navDir: "/comingSoon",
  },
  {
    name: "Nursing",
    source: IconMedical,
    navDir: "/dailyCheckIn",
  },
  {
    name: "Physiotherapy",
    source: IconPhysiotherapy,
    navDir: "/comingSoon",
  },
  {
    name: "Meals",
    source: IconMeals,
    navDir: "/comingSoon",
  },
  {
    name: "Impairment Aid",
    source: IconImpairment,
    navDir: "/comingSoon",
  },
  // {
  //   name: "Housekeeping",
  //   source: AddHealthVault,
  //   type: "O",
  // },
  // {
  //   name: "Home Maintainence",
  //   source: AddHealthVault,
  //   type: "O",
  // },
  // {
  //   name: "Independence Aid",
  //   source: AddHealthVault,
  //   type: "O",
  // },
  // {
  //   name: "Transport",
  //   source: AddHealthVault,
  //   type: "O",
  // },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const JobCategories = () => {
  const navigate = useNavigate();

  const onSubmit = (rtype) => {
    const path = `/healthVaultReportUpload`;
    navigate(path, { state: { id: rtype } });
  };

  const onBack = () => {
    const path = `/moduleSummaryTwo`;
    navigate(path);
  };
  const onNext = () => {
    const path = `/bloodPressure`;
    navigate(path);
  };
  const { user } = useContext(UserContext);
  const datex = new Date();

  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Your Jobs Today"
          title2="List of patients assigned to you for today"
          title3="Last Updated"
          limg="rl"
          rimg="rjc"
        />
                <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-hrc">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              position: "absolute",
              zIndex: "1",
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
          </Card>
        </div>
        <div style={{ height: "50vh" }}></div>
      </Grid>
    </Container>
  );
};

export default JobCategories;
