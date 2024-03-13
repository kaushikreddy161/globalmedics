import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Button} from "@mui/material";

import IconWhatsapp from "../assets/icon-whatsapp.png";
import AddNew from "../assets/add-health-vault.png";


import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
import { Form } from "react-bootstrap";

const list = [
  {
    name: "WhatsApp",
    source: IconWhatsapp,
    navDir: "/selectServices",
  },
  // {
  //   name: "Add New",
  //   source: AddNew,
  //   // navDir: "/setVitals",
  // },
];


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SeekHelp = () => {
  const navigate = useNavigate();

  const [value, setValue] = React.useState('This is on a wait list');


  const onSubmit = async (event) => {
    event.preventDefault();
    navigate(-1);
  };

  // const onSubmit = () => {
  //   const path = `/inviteSent`;
  //   navigate(path);
  // };

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
          title="Seek Help"
          title2="Assign tasks for Emergency Response"
          title3="Last Updated"
          limg="rl"
          rimg="reg"
        />
                <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-seek-help">
          <Card className="invite-loved-one-card">
            <p class="text-green">Feel free to personalise this suggested text</p>
            <textarea class="form-control" rows="6">
              Hi,
              &#13;&#10;
              &#60;&#60;Loved One Name&#62;&#62; is having a medical emergency. Could you please click on the link below to do &#60;&#60;Pending Task Name&#62;&#62; urgently.
              Thanks in advance for your help.
              
              Regards
              &#60;&#60;Next of Kin First Name&#62;&#62;
            </textarea>
          </Card>
        </div>
        <div className="form-seek-help1">
          <Card className="invite-loved-one-card">
            
           

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


            <div
            style={{
              textAlign: "center",
              marginTop: "2rem",
              marginBottom: "0rem",
            }}
          >
            <Button
              style={{
                background: "#1D5A90",
                borderRadius: 50,
                width: "50%",
                color: "#ffffff",
                textTransform: "none",
                marginTop:"0rem",
                marginBottom:"0rem",
              }}
              onClick={onSubmit}
              type="submit"
            >
              Done
            </Button>
          </div>
          </Card>
        </div>

        
      </Grid>
    </Container>
  );
};

export default SeekHelp;
