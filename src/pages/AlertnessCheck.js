import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user.context";
import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import moment from "moment";
import CarouselSlider from "./CarouselSlider";
import FixedHeader from "../components/FixedHeader";
import Box from "@mui/material/Box";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import IconInfo from "../assets/icon-help.png";
import IconResponded from "../assets/icon-responded.png";
import IconNotRespond from "../assets/icon-not-respond.png";

import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";


const AlertnessCheck = () => {
  const { user, pId, pName } = useContext(UserContext);

  const navigate = useNavigate();
  let dt2 = moment(new Date()).format("YYYY-MM-DDThh:mm:ss");

  const [dateTime, setdTime] = useState(dt2);
  const datex = new Date();
  const datey = new Date(dateTime);

  const [listOne, setListOne] = useState();

  // const list1 = [
  //   { name: "Responded", icon: IconResponded, value: "1" },
  //   { name: "Could not Respond", icon: IconNotRespond, value: "2" },
  // ];

  const list = [
    {
      name: "Responded",
      source: IconResponded,
      navDir: "/kindEmergency",
    },
    {
      name: "Could not Respond",
      source: IconNotRespond,
      navDir: "/verbalResponsiveness",
    },
  ];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  // const onInfo = () => {
  //   const path = `/information`;
  //   navigate(path);
  // };

  const onInfo = () => {
    const path = `/information`;
    navigate(path);
  };


  const onSubmit = () => {
    const path = `/verbalResponsiveness`;
    navigate(path);
  };


  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{
          minHeight: "100vh",
          paddingBottom: "0rem",
        }}
      >
        <FixedHeader
          title="Alertness Check"
          title2="In case the person has suffered a head injury, record these responses"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="rac"
        />
        
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-bp">
          <Card
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              // maxWidth: "500px",
              // display: "flex",
              // justifyContent: "center",
            }}
            className="left"
          >
            <Card.Body>
              <div className="container">
                <div className="form-container">
                  <Form
                    className="signup-form"
                    style={{ color: "#209F85" }}
                    onSubmit={onSubmit}
                  >

                    <div class="row">
                      <div class="col-9">Alertness Check</div>
                      <div
                        class="col-3"
                        style={{ textAlign: "right", cursor: "pointer" }}
                      >
                        <img src={IconInfo} />
                      </div>
                    </div>
                    <p className="info_para">Check if the patient is awake and aware of their surroundings by asking questions the following in a clear loud voice:</p>
                    <div className="margin-left">
                      <p className="info_para">1) What is your name?</p>
                      <p className="info_para">2) What is your date of birth?</p>
                      <p className="info_para">3) Where are you?</p>
                      <p className="info_para">4) What is the day today?</p>
                    </div>
                    <div className="top-space1">
                      <div className="form-container">
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
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </Card.Body>
            {/* <div
              style={{
                textAlign: "center",
                marginTop: "10pt",
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
            </div> */}
            <div style={{ height: "5vh" }} />
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default AlertnessCheck;
