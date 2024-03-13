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

import IconEmail from "../assets/icon-email.png";
import IconFacebook from "../assets/icon-facebook.png";
import IconSMS from "../assets/icon-sms.png";
import IconTelegram from "../assets/icon-telegram.png";
import IconWhatsApp from "../assets/icon-whatsapp.png";
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
import { Form } from "react-bootstrap";
const list = [
  {
    name: "SMS",
    source: IconSMS,
    navDir: "/comingSoon",
  },
  {
    name: "Email",
    source: IconEmail,
    navDir: "/comingSoon",
  },
  {
    name: "WhatsApp",
    source: IconWhatsApp,
    navDir: "/comingSoon",
  },
  {
    name: "Telegram Messenger",
    source: IconTelegram,
    navDir: "/comingSoon",
  },
  {
    name: "Facebook Messenger",
    source: IconFacebook,
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

const PersonaliseECardCustomise = () => {
  const navigate = useNavigate();

  const onSubmit = (rtype) => {
    const path = `/healthVaultReportUpload`;
    navigate(path, { state: { id: rtype } });
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
          title="Customise Message"
          title2="Control what part of your data you allow this person to see and update "
          title3="Last Updated"
          limg="rl"
          rimg="rct"
        />
                <div className="car-ds">
          <CarouselSlider />
        </div>

        <div className="form-cm1">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              position: "absolute",
              zIndex: "1",
            }}
            className="cm-text-box"
          >
            <Card.Body
              style={{
                color: "#209F85",
                marginTop: "-0.5rem",
                marginBottom: "0rem",
              }}
            >
              <label>Salutation</label>
              <Form.Control
                as="textarea"
                rows={2}
                style={{ marginTop: "0.5rem" }}
                // onChange={(e) => setlPage(e.target.value)}
              />
            </Card.Body>
          </Card>
        </div>
        <div className="form-cm2">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              position: "absolute",
            }}
            className="cm-text-box"
          >
            <Card.Body
              style={{
                color: "#209F85",
                marginTop: "-0.5rem",
                marginBottom: "0rem",
              }}
            >
              <label>Body</label>
              <Form.Control
                as="textarea"
                rows={2}
                style={{ marginTop: "0.5rem" }}
                // onChange={(e) => setlPage(e.target.value)}
              />
            </Card.Body>
          </Card>
        </div>
        <div className="form-cm2">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              position: "absolute",
            }}
            className="cm-text-box"
          >
            <Card.Body
              style={{
                color: "#209F85",
                marginTop: "-0.5rem",
                marginBottom: "0rem",
              }}
            >
              <label>Sign Off</label>
              <Form.Control
                as="textarea"
                rows={2}
                style={{ marginTop: "0.5rem" }}
                // onChange={(e) => setlPage(e.target.value)}
              />
            </Card.Body>
          </Card>
        </div>
        <div className="form-cm">
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
        
        <div style={{ height: "50vh" }}></div>
      </Grid>
    </Container>
  );
};

export default PersonaliseECardCustomise;
