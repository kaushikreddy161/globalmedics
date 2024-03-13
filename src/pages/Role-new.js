import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import CareManager from "../assets/icon-care-manager.png";
import Patient from "../assets/icon-patient.png";
import Others from "../assets/icon-addOther.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconPatientImage from "../assets/icon-patient-photo.png";

import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";

const list = [
  {
    name: "Care Manager",
    source: CareManager,
    navDir: "moduleSummary",
  },
  {
    name: "Patient",
    source: Patient,
    navDir: "moduleSummary",
  },
  {
    name: "Others",
    source: Others,
    navDir: "moduleSummary",
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
  const onSubmit = () => {
    const path = `/moduleSummaryOne`;
    navigate(path);
  };
  const onBack = () => {
    const path = `/careManagerDetails`;
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
          title="Role"
          title2="Please select the option that best describes what you are here as."
          title3="No login history found."
          limg="rl"
          rimg="rr"
        />

        {/* <CarouselSlider /> */}
        <div className="form-r">
          <Card
            //   sx={{ maxWidth: 500 }}
            style={{
              borderTop: "6px solid #1D5A90",
              marginTop: "200px",
              marginBottom: "0px",
              borderRadius: "10px",
              padding: "20pt",
              // width: "500px",
              // maxWidth: "500px",
              position: "absolute",
              zIndex: "1",
            }}
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
                  // <Grid item xs={2} sm={4} md={4}>
                  <Grid columns={{ xs: 2, sm: 2, md: 12 }}>
                    <>
                      {item.name === "Care Manager" ? (
                        <Item
                          sx={{ cursor: "pointer" }}
                          onClick={onSubmit}
                          style={{
                            borderTop: "6px solid #1D5A90",
                            borderRadius: "10pt",
                            boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                            // height: "140px",
                            marginRight: "2.4rem",
                          }}
                          className="role-card"
                        >
                          <p
                            style={{ marginTop: "0rem", marginBottom: "0rem" }}
                          >
                            <img
                              src={item.source}
                              style={{
                                width: "50%",
                                //   height: "auto",
                              }}
                            />
                          </p>
                          <p
                            style={{
                              color: "#707070",
                              fontSize: "1rem",
                              fontFamily: "Helvetica",
                              marginTop: "0.5rem",
                              marginBottom: "0rem",
                            }}
                          >
                            {item.name}
                          </p>
                        </Item>
                      ) : (
                        <Item
                          // onClick={() => navigation.navigate(item.navDir)}
                          // onPress={() => this.props.navigation.navigate("Details")}
                          // sx={{ cursor: "pointer" }}
                          // onClick={onSubmit}
                          style={{
                            borderTop: "6px solid #1D5A90",
                            borderRadius: "10pt",
                            boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                            backgroundColor: "#C9C8C7",
                            // height: "140px",
                            marginRight: "2.4rem",
                          }}
                          className="role-card"
                        >
                          <p
                            style={{ marginTop: "0rem", marginBottom: "0rem" }}
                          >
                            <img
                              src={item.source}
                              style={{
                                width: "50%",
                                //   height: "auto",
                              }}
                            />
                          </p>
                          <p
                            style={{
                              color: "#707070",
                              fontSize: "1rem",
                              fontFamily: "Helvetica",
                              marginTop: "0.5rem",
                              marginBottom: "0rem",
                            }}
                          >
                            {item.name}
                          </p>
                        </Item>
                      )}
                    </>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <div style={{ height: "100px" }}></div>
          </Card>
        </div>
      </Grid>
      <div style={{ height: "100px" }}></div>
    </Container>
  );
}
export default Role;
