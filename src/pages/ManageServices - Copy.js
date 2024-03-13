import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Button, Divider, TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";

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

import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
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
    name: "Medical",
    source: IconMedical,
    navDir: "/comingSoon",
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
  {
    name: "Housekeeping",
    source: IconHousekeeping,
    navDir: "/comingSoon",
  },
  {
    name: "Home Maintainence",
    source: IconMaintainence,
    navDir: "/comingSoon",
  },
  {
    name: "Independence Aid",
    source: IconIndependence,
    navDir: "/comingSoon",
  },
  {
    name: "Transport",
    source: IconTransport,
    navDir: "/comingSoon",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function JobsToday() {
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
          title="Select Services"
          title2="List of patients assigned to your for today"
          limg="rl"
          rimg="rms"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-hr" style={{ height: "100vh" }}>
          <Card
            //   sx={{ maxWidth: 500 }}
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
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                style={{
                  maxWidth: "500px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {list.map((item) => (
                  <Grid item xs={2} sm={4} md={4}>
                    <>
                      <Item
                        onClick={() => navigate(item.navDir)}
                        // onPress={() =>
                        //   this.props.navigation.navigate(item.navDir)
                        // }

                        sx={{ cursor: "pointer" }}
                        style={{
                          borderTop: "6px solid #1D5A90",
                          borderRadius: "10pt",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          height: "120px",
                        }}
                      >
                        <p style={{ margin: "0rem" }}>
                          <img
                            src={item.source}
                            style={{
                              width: "40%",
                              //   height: "auto",
                            }}
                          />
                        </p>
                        <p
                          style={{
                            color: "#707070",
                            fontSize: "1rem",
                            fontFamily: "Helvetica",
                            marginTop: "0.4rem",
                            marginBottom: "0rem",
                          }}
                        >
                          {item.name}
                        </p>
                      </Item>
                    </>
                  </Grid>
                ))}
              </Grid>
            </Box>
            {/* <div style={{ height: "100px" }}></div> */}
            <div
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
            </div>
          </Card>
        </div>
      </Grid>
      <div style={{ height: "200px" }}></div>
    </Container>
  );
}
export default JobsToday;
