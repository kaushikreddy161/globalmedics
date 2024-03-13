import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Button, Divider, TextField } from "@mui/material";
import CarouselSlider from "./CarouselSlider";
import { useNavigate } from "react-router-dom";
import FixedHeader from "../components/FixedHeader";

import { useState } from 'react';
import OtpInput from 'react-otp-input';

import "./Main.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function NewUserLoginWithOTP() {
  const navigate = useNavigate();

  const onSubmit = () => {
    const path = `/comingSoon`;
    navigate(path);
  };

  const [otp, setOtp] = useState('');

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
          title="Institution Connect"
          title2="Please enter 9-digit code provided by your provider / hospital"
          title3="No login history found."
          limg="ls"
          rimg="rr"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-bp">
          <Card
            style={{
              padding: "20pt",
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
            }}
            className="left"
          >
            <Box sx={{ flexGrow: 1 }}>
              <div className="new-otp">
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                  // className="otp-input"
                  // style={{"width:2rem"}}
                />
              </div>
              <div>
                  <p>Didn’t receive the SMS? Send again</p>
                  <p>Change phone number</p>
                </div>
            </Box>

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
                onClick={onSubmit}
                type="submit"
              >
                Confirm
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
      <div style={{ height: "100px" }}></div>
    </Container>
  );
}
export default NewUserLoginWithOTP;
