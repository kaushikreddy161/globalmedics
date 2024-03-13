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

import AddLocalCarer from "../assets/icon-add-local-care.png";
import AddFamilyMembers from "../assets/icon-add-family-member.png";
import AddTheirDoctor from "../assets/icon-nav-add-doctor.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconPatientImage from "../assets/icon-patient-photo.png";
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
const list = [
  {
    name: "Add Local Carer Givers",
    source: AddLocalCarer,
    type: "/localCareGiversConsent",
  },
  {
    name: "Add Family Members",
    source: AddFamilyMembers,
    type: "/familyMembersConsent",
  },
  {
    name: "Add Their Doctor",
    source: AddTheirDoctor,
    type: "/addTheirDoctor",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const AddCareRingMembers = () => {
  const navigate = useNavigate();

  const onSubmit = (rtype) => {
    const path = `/addLocalCarerInfo`;
    navigate(path, { state: { id: rtype } });
  };

  const onBack = () => {
    const path = `/moduleSummaryTwo`;
    navigate(path);
  };
  const onNext = () => {
    const path = `/addLocalCarerInfo`;
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
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Add Care Ring Members"
          title2="Add groups of people who would care for your"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="scr"
        />

                <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-hr">
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
              <div className="container">
                <div className="form-container">
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
                          <Item
                            sx={{ cursor: "pointer" }}
                            onClick={() => navigate(item.type)}
                            // onPress={() => this.props.navigation.navigate("Details")}
                            // onClick={() => onSubmit(`${item.type}`)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              height: "140px",
                            }}
                          >
                            <p>
                              <img
                                src={item.source}
                                style={{
                                  // width: "40%",
                                  //   height: "auto",
                                  height: "40px",
                                  maxHeight: "70px",
                                }}
                              />
                            </p>
                            <p
                              style={{
                                color: "#707070",
                                fontSize: "1rem",
                                fontFamily: "Helvetica",
                              }}
                            >
                              {item.name}
                            </p>
                          </Item>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </div>
              </div>
            </Card.Body>
            <div style={{ height: "100px" }}></div>
            <div
              style={{
                textAlign: "center",
                marginTop: "10pt",
                marginBottom: "10pt",
              }}
            >
              {/* <Button
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
                Select Next Loved One
              </Button> */}
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default AddCareRingMembers;
