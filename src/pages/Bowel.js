import React, { useEffect, useContext, useState } from "react";
 import { UserContext } from "../contexts/user.context";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';

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
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
import Typography from "@mui/material/Typography";

import IconDiarrhoea from "../assets/icon_diarrhoea.png";
import IconConstipation from "../assets/icon_constipation.png";
import IconNoSymptoms from "../assets/icon_no_symptoms.png";
import moment from "moment";

const list = [
  {
    name: "Diarrhoea",
    source: IconDiarrhoea,
    navDir: "/BowelDiarrhoea",
  },
  {
    name: "Constipation",
    source: IconConstipation,
    navDir: "/BowelConstipation",
  },
  {
    name: "No Symptoms",
    source: IconNoSymptoms,
    navDir: "/symptoms",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Bowel = () => {
  const navigate = useNavigate();

  const onSubmit = (rtype) => {
    const path = `/bowelDhaCsp`;
    navigate(path, { state: { id: rtype } });
  };

  const onSubmit1 = async () => {
    const path = `/symptoms`;
    navigate(path);
  }
  
  const { user, pId, pName, adbuser } = useContext(UserContext);
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  let dt2 = moment(new Date()).format("YYYY-MM-DDThh:mm:ss");
  const [dateTime, setdTime] = useState(dt2);
  const datey = new Date(dateTime);
 

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
          title="Bowel"
          title2="Please tell me about your bowel habits"
          title3="Last Updated"
          limg="rl"
          rimg="rb"
        />
                <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-bowel">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              marginTop: "0rem",
              marginBottom: "0rem",          
              // position: "absolute",
              // zIndex: "1",
            }}
            className="left"
          >
            <Typography
              style={{
                marginTop: "-1rem",
                marginBottom: "0.5rem",
                color: "#209F85",
                marginLeft: "-1rem",
                fontFamily: "Helvetica",
                fontSize: "16px",
              }}
            >
              Do you have problems related to your stool?
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
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
            <div style={{ width: "500px" }}></div>
          </Card>
        </div>
        <div style={{ height: "50vh" }}></div>
      </Grid>
    </Container>
  );
};

export default Bowel;
