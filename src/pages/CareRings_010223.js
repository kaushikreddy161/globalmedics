import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";

import { Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Button } from "@mui/material";

import IconHelp from "../assets/icon-help.png";
import AddHealthVault from "../assets/add-health-vault.png";
import IconCareGiver from "../assets/img-care-giver.png";
import IconSmartWatch from "../assets/icon-smartwatch_1.png";
import IconSmartBed from "../assets/icon-smart-bed.png";
import IconWithings from "../assets/icon-withings.png";

import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";

const list1 = [
  {
    name: "Care Giver 1",
    source: IconCareGiver,
  },
  {
    name: "Care Giver 2",
    source: IconCareGiver,
  },
  {
    name: "Care Giver 3",
    source: IconCareGiver,
  },
  {
    name: "Care Giver 4",
    source: IconCareGiver,
  },
  {
    name: "Care Giver 5",
    source: IconCareGiver,
  },
  {
    name: "Care Giver 6",
    source: IconCareGiver,
  },
  {
    name: "Care Giver 7",
    source: IconCareGiver,
  },
  {
    name: "Add Care Giver",
    source: AddHealthVault,
  },
];
const list2 = [
  {
    name: "Family member 1",
    source: IconCareGiver,
  },
  {
    name: "Family member 2",
    source: IconCareGiver,
  },
  {
    name: "Family member 3",
    source: IconCareGiver,
  },
  {
    name: "Family member 4",
    source: IconCareGiver,
  },
  {
    name: "Family member 5",
    source: IconCareGiver,
  },
  {
    name: "Family member 6",
    source: IconCareGiver,
  },
  {
    name: "Family member 7",
    source: IconCareGiver,
  },
  {
    name: "Add Family member",
    source: AddHealthVault,
  },
];
const list3 = [
  {
    name: "Friend 1",
    source: IconCareGiver,
  },
  {
    name: "Friend 2",
    source: IconCareGiver,
  },
  {
    name: "Friend 3",
    source: IconCareGiver,
  },
  {
    name: "Friend 4",
    source: IconCareGiver,
  },
  {
    name: "Friend 5",
    source: IconCareGiver,
  },
  {
    name: "Friend 6",
    source: IconCareGiver,
  },
  {
    name: "Friend 7",
    source: IconCareGiver,
  },
  {
    name: "Add Friend",
    source: AddHealthVault,
  },
];
const list4 = [
  {
    name: "Smartwatch",
    source: IconSmartWatch,
  },
  {
    name: "SmartBed",
    source: IconSmartBed,
  },
  {
    name: "Withings Smartscales",
    source: IconWithings,
  },
  {
    name: "Add New",
    source: AddHealthVault,
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CareRings = () => {
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
          title="Care Rings"
          title2="Please accept requests from people you are comfortable with"
          title3="Last Updated"
          limg="rl"
          rimg="scr"
        />
                <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-cr1">
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
            <div class="row">
              <div class="col-10 text-green">Your Care Givers</div>
              <div class="col-2 icon-right"><img src={IconHelp} alt="" /></div>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
                style={{
                  maxWidth: "500px",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "0rem",
                  marginBottom: "0rem"
                }}
              >
                {list1.map((item) => (
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                      <Item
                        // onClick={() => onSubmit(`${item.type}`)}
                        // sx={{ cursor: "pointer" }}
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
        <div className="form-cr2">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              zIndex: "1",

            }}
            className="left"
          >
            <div class="row">
              <div class="col-10 text-green">Your Family</div>
              <div class="col-2 icon-right"><img src={IconHelp} alt="" /></div>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
                style={{
                  maxWidth: "500px",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "0rem",
                  marginBottom: "0rem",
                }}
              >
                {list2.map((item) => (
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                      <Item
                        // onClick={() => onSubmit(`${item.type}`)}
                        // sx={{ cursor: "pointer" }}
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
        <div className="form-cr3">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              zIndex: "1",
              marginTop: "0rem",
              marginBottom: "0rem",
            }}
            className="left"
          >
            <div class="row">
              <div class="col-10 text-green">Your Friend</div>
              <div class="col-2 icon-right"><img src={IconHelp} alt="" /></div>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
                style={{
                  maxWidth: "500px",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "0rem",
                  marginBottom: "0rem",
                }}
              >
                {list3.map((item) => (
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                      <Item
                        // onClick={() => onSubmit(`${item.type}`)}
                        // sx={{ cursor: "pointer" }}
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
        <div className="form-cr3">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              zIndex: "1",
              marginTop: "0rem",
              marginBottom: "0rem",
            }}
            className="left"
          >
            <div class="row">
              <div class="col-10 text-green">Your Devices</div>
              <div class="col-2 icon-right"><img src={IconHelp} alt="" /></div>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
                style={{
                  maxWidth: "500px",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "0rem",
                  marginBottom: "0rem",
                }}
              >
                {list4.map((item) => (
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                      <Item
                        // onClick={() => onSubmit(`${item.type}`)}
                        // sx={{ cursor: "pointer" }}
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

        {/* <div
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
        </div> */}

        <div style={{ height: "20vh" }}></div>
      </Grid>
    </Container>
  );
};

export default CareRings;
