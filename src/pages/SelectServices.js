import React, { useEffect, useContext, useState } from "react";

import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, Divider } from "@mui/material";

import Next from "../assets/icon-next.png";

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

import Checkbox from "@mui/material/Checkbox";
import "./Main.css";

const SelectServices = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    const path = `/dailyCheckIn`;
    navigate(path);
  };

  // const onBack = () => {
  //   const path = `/dailyCheckIn`;
  //   navigate(path);
  // };

  return (
    <Container
      style={{ background: "#EBEBEB", maxWidth: "100%", minWidth: "300px" }}
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
          title2="Select all the symptoms and their frequency of recording, depending on conditions."
          limg="rl"
          rimg="rms"
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
              <div class="container">
                <div
                  className="row align-items-center text-res"
                  style={{
                    paddingTop: "0rem",
                    paddingBottom: "0rem",
                    height: "70px",
                    verticalAlign: "top",
                    marginLeft: "-1rem",
                    marginRight: "-2rem",
                  }}
                >
                  <div class="col-6" style={{ color: "#209F85" }}>
                    Select Care Services
                  </div>
                  <div
                    class="col-2"
                    style={{ color: "#209F85", textAlign: "center" }}
                  >
                    In Scope?
                  </div>
                  <div
                    class="col-2"
                    style={{ textAlign: "center", color: "#209F85" }}
                  >
                    Need Photo?
                  </div>
                  <div
                    class="col-2"
                    style={{ textAlign: "left", color: "#209F85" }}
                  >
                    Details
                  </div>
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
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img src={IconMedical} alt="" style={{ width: "70%" }} />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                      Nursing / Medical
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                      }}
                    >
                      <Checkbox
                      // onChange={handleChange}
                      // inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" />
                      </>
                    </div>
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img
                        src={IconPhysiotherapy}
                        alt=""
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                      Physiotherapy
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                      // onChange={handleChange}
                      // inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" />
                      </>
                    </div>
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img
                        src={IconIndependence}
                        alt=""
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                      Independence Aid
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                      // onChange={handleChange}
                      // inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" />
                      </>
                    </div>
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img
                        src={IconImpairment}
                        alt=""
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                      Impairment Aid
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                      // onChange={handleChange}
                      // inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" />
                      </>
                    </div>
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img src={IconHygiene} alt="" style={{ width: "70%" }} />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                      Hygiene & Grooming
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                      // onChange={handleChange}
                      // inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" />
                      </>
                    </div>
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img src={IconMeals} alt="" style={{ width: "70%" }} />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                      Cooking & Kitchen
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                      // onChange={handleChange}
                      // inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" />
                      </>
                    </div>
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img
                        src={IconHousekeeping}
                        alt=""
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                      Cleaning & Housekeeping
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                      // onChange={handleChange}
                      // inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" />
                      </>
                    </div>
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img
                        src={IconMaintainence}
                        alt=""
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                      Home Repair & Maintenance
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                      // onChange={handleChange}
                      // inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" />
                      </>
                    </div>
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img
                        src={IconTransport}
                        alt=""
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                      Transport / Driving
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                      // onChange={handleChange}
                      // inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" />
                      </>
                    </div>
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
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2">
                      <img
                        src={IconSocialEvents}
                        alt=""
                        style={{ width: "70%" }}
                      />
                    </div>
                    <div class="col-4" style={{ color: "#76706B" }}>
                      Social Events
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                      // onChange={handleChange}
                      // inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div
                      class="col-2"
                      style={{
                        textAlign: "center",
                        color: "#ADAAA7",
                      }}
                    >
                      <Checkbox
                        // checked={checked}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>
                      <>
                        <img src={Next} alt="" />
                      </>
                    </div>
                  </div>
                </div>
              </Card>
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
                Set
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default SelectServices;
