import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, Divider, TextField } from "@mui/material";

import { useNavigate } from "react-router-dom";

import IconRunnyNose from "../assets/icon-sym-sum-runnynose.png";
import IconCough from "../assets/icon-sym-sum-cough.png";
import IconUrine from "../assets/icon-sym-sum-urine.png";
import IconFever from "../assets/icon-sym-sum-fever.png";
import IconThroat from "../assets/icon-sym-sum-throat.png";
import IconHeadacke from "../assets/icon-sym-sum-headacke.png";
import IconBDiff from "../assets/icon-sym-sum-bdifficulty.png";
import IconBowel from "../assets/icon-sym-sum-bowel.png";
import IconEye from "../assets/icon-sym-sum-eye.png";

import FixedHeader from "../components/FixedHeader";

const list = [
  {
    name: "Fever",
    source: IconFever,
    navDir: "/fever",
  },
  {
    name: "Headache",
    source: IconHeadacke,
    navDir: "/headache",
  },
  {
    name: "Eye Issues",
    source: IconEye,
    navDir: "/eyeIssues",
  },
  {
    name: "Nose",
    source: IconRunnyNose,
    navDir: "/runnyNose",
  },
  {
    name: "Cough",
    source: IconCough,
    navDir: "/cough",
  },
  {
    name: "Sore Throat",
    source: IconThroat,
    navDir: "/throat",
  },
  {
    name: "Urine",
    source: IconUrine,
    navDir: "/urine",
  },
  {
    name: "Bowel",
    source: IconBowel,
    navDir: "/bowel",
  },
  {
    name: "Breathing Difficulty",
    source: IconBDiff,
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

function Symptoms() {
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
          title="Symptoms"
          title2="Please click on specific buttons to share what you are experiencing"
          title3="No login history found."
          limg="rl"
          rimg="sr"
        />
        <div className="form-s">
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
            {/* <div style={{ height: "100px" }}></div> */}
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
export default Symptoms;
