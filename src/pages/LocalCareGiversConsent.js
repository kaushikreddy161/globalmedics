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
import Typography from "@mui/material/Typography";

import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const LocalCareGivers = () => {
  const navigate = useNavigate();

  // const onSubmit = (rtype) => {
  //   const path = `/addCareRingMembers`;
  //   navigate(path, { state: { id: rtype } });
  // };
  const onSubmit = () => {
    const path = `/addLocalCarerInfo`;
    navigate(path);
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

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);

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
          title="Local Care Givers"
          title2="Local Care Givers are generally people who are paid to physically look after your loved ones"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="crc"
        />
        <div className="con-crc">
          <Card
            style={{
              // borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              background: "#F2F8F1",
              marginTop: "0rem",
              marginBottom: "0rem",
              maxWidth: "500px",
              zIndex: "1",
              fontFamily: "Helvetica",
              color: "#adaaa7",
              textAlign: "justify",
            }}
          >
            Carers who are face to face with the loved ones provide the physical
            aspect of the care, either for a fee (e.g. hired nurse or maid), or
            for emotional reasons (e.g. a family member). Quality of care
            depends on how well they are able to look after the elderly person.
          </Card>
        </div>
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <Card
          //  sx={{ maxWidth: 500 }}
          style={{
            borderTop: "6px solid #1D5A90",
            // marginTop: "210px",
            marginTop: "0rem",
            marginBottom: "0rem",
            borderRadius: "10px",
            padding: "20pt",
            width: "100%",
            maxWidth: "500px",

            // position: "absolute",
            zIndex: "1",
          }}
        >
          <Grid
            container
            style={{
              // maxWidth: "370px",
              // maxWidth: "580px",
              alignItems: "center",
              textAlign: "justify",
              justifyContent: "center",
              marginBottom: "0rem",
              marginTop: "0rem",
              color: "#ADAAA7",
            }}
          >
            <FormControlLabel
              style={{
                borderBottom: "1px solid #ADAAA7",
                paddingBottom: "1rem",
                marginBottom: "1rem",
              }}
              // checked={check1}
              onClick={() => setCheck1(!check1)}
              control={<Checkbox />}
              // control={<Checkbox />}
              label={
                <Typography style={{ fontSize: "0.9rem" }}>
                  I understand that the quality of care delivered to my loved
                  one depends on skill and dedication of the local care
                  providers. I would aim to recruit the best resources
                  available.
                </Typography>
              }
            />
            <FormControlLabel
              style={{
                borderBottom: "1px solid #ADAAA7",
                paddingBottom: "1rem",
                marginBottom: "1rem",
              }}
              // checked={check1}
              onClick={() => setCheck1(!check1)}
              control={<Checkbox />}
              // control={<Checkbox />}
              label={
                <Typography style={{ fontSize: "0.9rem" }}>
                  I will set the minimum data access needed by the local care
                  providers so that privacy of health data is maintained.
                </Typography>
              }
            />
            <FormControlLabel
              style={{
                // borderBottom: "1px solid #ADAAA7",
                paddingBottom: "1rem",
                marginBottom: "1rem",
              }}
              //checked={check2}
              onClick={() => setCheck2(!check2)}
              control={<Checkbox />}
              label={
                <Typography style={{ fontSize: "0.9rem" }}>
                  I will remotely monitor the work done by local care givers,
                  appreciating them for work done well and highlighting areas of
                  improvement.
                </Typography>
              }
            />
          </Grid>

          {/* {check1 === true && check2 === true && check3 === true ? ( */}
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Button
              style={{
                background: "#1D5A90",
                borderRadius: 50,
                width: "50%",
                color: "#ffffff",
                textTransform: "none",
              }}
              onClick={onSubmit}
            >
              I Consent
            </Button>
          </div>
        </Card>
      </Grid>
      <div style={{ height: "1rem" }}></div>
    </Container>
  );
};

export default LocalCareGivers;
