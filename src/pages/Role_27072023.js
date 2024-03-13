import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

import { useNavigate } from "react-router-dom";

import CareManager from "../assets/icon-care-manager.png";
import CareGiver from "../assets/icon-care-giver.png";
import Patient from "../assets/icon-patient.png";
import FamilyMember from "../assets/icon-family-member.png";
import InstitutionalPatient from "../assets/icon-institutional-patient.png";
import SocialWorker from "../assets/icon-social-worker.png";
import Doctor from "../assets/icon-doctor.png";

import FixedHeader from "../components/FixedHeader";
// import CarouselSlider from "./CarouselSlider";

const list = [
  {
    name: "Join Care Ring",
    source: FamilyMember,
    navDir: "/inviteConnect",
  },
  {
    name: "Care Manager",
    source: CareManager,
    navDir: "/careManagerWelcome",
  },
  {
    name: "Local Care Giver",
    source: CareGiver,
    navDir: "/localCareGiverWelcome",
  },
  {
    name: "Doctor",
    source: Doctor,
    navDir: "/addDoctor",
  },
  {
    name: "Self",
    source: Patient,
    navDir: "/moduleSummary",
  },
  {
    name: "Family Members",
    source: FamilyMember,
    navDir: "/familyMemberWelcome",
  },
  {
    name: "Institutional Patient",
    source: InstitutionalPatient,
    navDir: "/institutionConnect",
  },
  {
    name: "Social Worker",
    source: SocialWorker,
    navDir: "/comingsoon",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Role() {
  const navigate = useNavigate();
  // const onSubmit = () => {
  //   const path = `/moduleSummaryOne`;
  //   navigate(path);
  // };
  // const onBack = () => {
  //   const path = `/careManagerDetails`;
  //   navigate(path);
  // };
 // const datex = new Date();
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
          title="Role"
          title2="Please select the option that best describes what you are."
          title3="No login history found."
          limg="rl"
          rimg="rr"
        />

        {/* <CarouselSlider /> */}
        <div className="form-mcard">
          <Card
            //   sx={{ maxWidth: 500 }}
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              zIndex: "1",
              // marginTop:"0rem",
              // marginBottom:"0rem",
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
                  // marginTop:"0rem",
                  // marginBottom:"0rem",
                }}
              >
                {list.map((item) => (
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                      <Item
                        onClick={() => (item.name === "Social Worker" ? "" : navigate(item.navDir))}
                        // onClick={onSubmit}
                        // onClick={() => navigation.navigate(item.navDir)}
                        // onPress={() => this.props.navigation.navigate("Details")}
                        sx={{ cursor: (item.name === "Social Worker" ? "" :"pointer")}}
                        style={{
                          borderTop: "6px solid #1D5A90",
                          borderRadius: "10pt",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          backgroundColor: (item.name === "Social Worker" ? "#cfcbcb" : "white")
                        }}
                        className="CatCard"
                      >
                        <p className="CatImg">
                          <img
                            src={item.source}
                            style={{
                              width: "60%",
                            }}
                            alt=""
                          />
                        </p>
                        <p className="CatName">{item.name}</p>
                      </Item>
                    </>
                  </Grid>
                ))}
              </Grid>
            </Box>
            {/* <div style={{ height: "100px" }}></div> */}
          </Card>
        </div>
      </Grid>
      <div style={{ height: "150px" }}></div>
    </Container>
  );
}
export default Role;
