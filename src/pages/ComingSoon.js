import * as React from "react";
import { useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import ImgConsent from "../assets/img-consent.png";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Typography from "@material-ui/core/typography";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


const ComingSoon = () => {
  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();
    navigate(-1);
  };

  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        // style={{ minHeight: "100vh" }}
      >
        <Card
          style={{
            // borderTop: "6px solid #1D5A90",
            borderRadius: "10px",
            padding: "10pt",
            background: "#F2F8F1",
            marginTop: "1rem",
            marginBottom: "0.5rem",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              style={{
                maxWidth: "370px",
                // maxWidth: "580px",
                // alignItems: "center",
                // justifyContent: "center",
                marginBottom: "-1rem",
              }}
            >
              <ArrowBackIosIcon
                  // onClick={onBack}
                  onClick={onSubmit}
                  style={{
                    marginTop: "0rem",
                    cursor: "pointer",
                    marginBottom: "0rem",
                  }}
                />

              <div
                style={{
                  fontSize: "1.4rem",
                  fontFamily: "Helvetica",
                  color: "#209F85",
                  marginBottom: "0pt",
                  marginTop: "0rem",
                  textAlign:"center",
                  display:"flex"
                }}
              >
                Coming Soon
              </div>
              {/* <div style={{ display: "flex", style: "width:580px" }}> */}
              <div style={{ display: "flex" }}>
                <div style={{ marginBottom: "0rem", marginTop: "0rem" }}>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontFamily: "Helvetica",
                      color: "#adaaa7",
                      // marginBottom: "12pt",
                      marginTop: "0pt",
                    }}
                  >
                    Look forward to new features coming to our app!!
                  </p>
                </div>
              </div>
            </Grid>
          </Box>
        </Card>
        <div
          style={{
            textAlign: "center",
            marginTop: "1rem",
            marginBottom: "0rem",
            minHeight: "100vh",
          }}
        >
          <img
            src={require("../assets/comingSoon.png")}
            className="img-fluid"
            width="80%"
            // style={{ width: "50%" }}
          />
        </div>
      </Grid>
    </Container>
  );
};
export default ComingSoon;
