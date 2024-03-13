import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Button, Divider, TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";
import FixedHeader from "../components/FixedHeader";
import IconAddLocalCare from "../assets/icon-add-localcare.png";
import IconAddLovedOne from "../assets/icon-add-lovedone.png";
import IconPersonalaInvite from "../assets/icon-personal-invite.png";
import IconAddDoctor from "../assets/icon-add-doctors.png";
import IconSelectSymptoms from "../assets/icon-select-symptoms.png";
import IconAddFamilyMembers from "../assets/icon-add-family-members.png";

import "./Main.css";

const list = [
  {
    name: "Care Ring Summary",
    source: IconAddLovedOne,
    navDir: "/careRings",
  },
  {
    name: "Add Loved Ones",
    source: IconAddLovedOne,
    navDir: "/addLovedOnes",
  },
  {
    name: "Add Local Care Givers",
    source: IconAddLocalCare,
    navDir: "/localCareGiversConsent",
  },
  {
    name: "Add Family Members",
    source: IconAddFamilyMembers,
    navDir: "/familyMembersConsent",
  },
  {
    name: "Add Doctor",
    source: IconAddDoctor,
    navDir: "/addDoctor",
  },
  // {
  //   name: "Personalise Invite",
  //   source: IconPersonalaInvite,
  //   navDir: "/personaliseECard",
  // },
  {
    name: "Manage Consent",
    source: IconSelectSymptoms,
    navDir: "/manageConsent",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ManageServices() {
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
          title="Care Ring Management"
          title2="Please select the option that best describes what you are."
          title3="No login history found."
          limg="rl"
          rimg="vs"
        />

        <div className="form-v">
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
export default ManageServices;
