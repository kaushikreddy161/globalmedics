import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider, TextField } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import CarouselSlider from "./CarouselSlider";
import FixedHeader from "../components/FixedHeader";
import "./Main.css";

import IconDailyCheckIn from "../assets/icon-daily-checkIn.png";

import ImgBetter from "../assets/img-better.png";
import ImgSame from "../assets/img-same.png";
import ImgWorse from "../assets/img-worse.png";

import ImgBNormal from "../assets/icon-bNormal.png";
import ImgNormal from "../assets/icon-normal.png";
import ImgWNormal from "../assets/icon-wNormal.png";

import ImgBNormalS from "../assets/icon-bNormal-sel.png";
import ImgNormalS from "../assets/icon-normal-sel.png";
import ImgWNormalS from "../assets/icon-wNormal-sel.png";

import ImgEatLNormal from "../assets/icon-eat-lNormal.png";
import ImgEatMNormal from "../assets/icon-eat-mNormal.png";
import ImgEatNormal from "../assets/icon-eat-normal.png";

import ImgEatLNormalS from "../assets/icon-eat-lNormal-sel.png";
import ImgEatMNormalS from "../assets/icon-eat-mNormal-sel.png";
import ImgEatNormalS from "../assets/icon-eat-normal-sel.png";

import ImgAwesome from "../assets/icon-Awesome.png";
import ImgSoSo from "../assets/icon-SoSo.png";
import ImgAwful from "../assets/icon-Awful.png";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./Login.css";

import IconPatientImage from "../assets/icon-patient-photo.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const DailyCheckOut = () => {
  const [radioValue, setRadioValue] = useState();
  const [listOne, setListOne] = useState();
  const [listTwo, setListTwo] = useState();
  const [listThree, setListThree] = useState();
  const [listFour, setListFour] = useState();

  const list1 = [
    { name: "Better", icon: ImgBetter, value: "1" },
    { name: "Same", icon: ImgSame, value: "2" },
    { name: "Worse", icon: ImgWorse, value: "3" },
  ];
  const [list2, setList2] = useState([
    { name: "Better than Usual ", icon: ImgBNormal, value: "1" },
    { name: "As Usual", icon: ImgNormal, value: "2" },
    { name: "Worse than Usual ", icon: ImgWNormal, value: "3" },
  ]);
  const [list3, setList3] = useState([
    { name: "Better than Usual ", icon: ImgEatMNormal, value: "1" },
    { name: "As Usual", icon: ImgEatNormal, value: "2" },
    { name: "Worse than Usual ", icon: ImgEatLNormal, value: "3" },
  ]);
  const list4 = [
    { name: "Awesome", icon: ImgAwesome, value: "1" },
    { name: "So-So", icon: ImgSoSo, value: "2" },
    { name: "Awful ", icon: ImgAwful, value: "3" },
  ];

  const { user, pId, pName } = useContext(UserContext);
  const datex = new Date();
  const [selLid, setSelLId] = useState("");
  const [status, setStatus] = useState("0");

  const navigate = useNavigate();

  const onSubmit = () => {
    const path = `/patientsList`;
    navigate(path);
  };

  useEffect(() => {
    //  loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pId]);

  const loadUser = async () => {
    //   console.log('user:',user.id);
    //   console.log('location:',location.state.lid);
    if (user) {
      let ccid = BSON.ObjectID(user.id).toString();
      const lovd = user.functions.getLovedOneCP(ccid); // one loved one based on care manager id
      // console.log('else direct:',ccid);
      lovd.then((resp) => {
        if (resp) {
          setStatus("1");
          setSelLId(resp._id.toString());
        } else {
          alert("Loved Ones ID not loaded..");
        }
      });
    }
  };

  const List2ChangeImage = (val, id) => {
    console.log("val", val);
    setListTwo(val.value);
    if (val.value == 1) {
      list2[0].icon = ImgBNormalS;
      list2[1].icon = ImgNormal;
      list2[2].icon = ImgWNormal;
      setList2([...list2]);
    }
    if (val.value == 2) {
      list2[0].icon = ImgBNormal;
      list2[1].icon = ImgNormalS;
      list2[2].icon = ImgWNormal;
      setList2([...list2]);
    }
    if (val.value == 3) {
      list2[0].icon = ImgBNormal;
      list2[1].icon = ImgNormal;
      list2[2].icon = ImgWNormalS;
      setList2([...list2]);
    }
    console.log("list2", list2);
  };

  const List3ChangeImage = (val, id) => {
    console.log("val", val);
    setListThree(val.value);
    if (val.value == 1) {
      list3[0].icon = ImgEatMNormalS;
      list3[1].icon = ImgEatNormal;
      list3[2].icon = ImgEatLNormal;
      setList3([...list3]);
    }
    if (val.value == 2) {
      list3[0].icon = ImgEatMNormal;
      list3[1].icon = ImgEatNormalS;
      list3[2].icon = ImgEatLNormal;
      setList3([...list3]);
    }
    if (val.value == 3) {
      list3[0].icon = ImgEatMNormal;
      list3[1].icon = ImgEatNormal;
      list3[2].icon = ImgEatLNormalS;
      setList3([...list3]);
    }
    console.log("list3", list3);
  };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     if (user) {
  //       //  console.log('auth:',user.id);
  //       let dt = new Date();
  //       let id = new BSON.ObjectID();
  //       let cid = BSON.ObjectID(user.id).toString();
  //       //  let pid = selLid;
  //       let pid = pId;
  //       const createx = user.functions.createDailyCheckinFeedback(
  //         id,
  //         pid,
  //         listOne,
  //         listTwo,
  //         listThree,
  //         listFour,
  //         cid,
  //         "careManager",
  //         dt,
  //         "active",
  //         "GlobalMedics2021"
  //       );
  //       createx.then((resp) => {
  //         //  console.log("resp:", resp);
  //         alert("Feedback Added Successfully");
  //         navigate(`/vitalsSummary`);
  //       });
  //     }
  //   } catch (error) {
  //     //  alert(error);
  //     console.log("error:", error);
  //   }
  // };

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
          title="Check-out"
          title2="Please ask your patient these questions and enter their responses"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="dcr"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-dc">
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <Card.Body>
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Compared to last time, how are you feeling now?
                </p>
                <div className="form-container">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      style={{
                        // maxWidth: "590px",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0",
                      }}
                    >
                      <div style={{ marginLeft: "1.5rem" }}>
                        <ButtonGroup>
                          {list1.map((lone, idx) => (
                            <ToggleButton
                              key={idx}
                              id={`lone-${idx}`}
                              type="radio"
                              // variant={idx % 2 ? "outline-success" : "outline-danger"}
                              variant="outline-primary"
                              // variant="outline"
                              name={`lone-${idx}`}
                              value={lone.value}
                              checked={listOne === lone.value}
                              onChange={(e) =>
                                setListOne(e.currentTarget.value)
                              }
                              style={{
                                borderTop: "6px solid #1D5A90",
                                borderRadius: "10pt",
                                boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                marginRight: "2rem",
                                borderLeft: "0px solid #fff",
                                borderRight: "0px solid #fff",
                                borderBottom: "0px solid #fff",
                              }}
                              className="icon-dc"
                            >
                              <img src={lone.icon} style={{ width: "60%" }} />

                              <div
                                className="icon-text"
                                style={{
                                  lineHeight: "1rem",
                                  marginTop: "0.3rem",
                                  marginBottom: "0rem",
                                }}
                              >
                                {lone.name}
                              </div>
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </div>
                    </Grid>
                  </Box>
                </div>
              </div>
              <Divider style={{ margin: "10pt" }} />
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  How well did you sleep last night?
                </p>
                <div className="form-container">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      style={{
                        // maxWidth: "590px",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0",
                      }}
                    >
                      <div style={{ marginLeft: "1.5rem" }}>
                        <ButtonGroup>
                          {list2.map((ltwo, idy) => (
                            <ToggleButton
                              key={idy}
                              id={`ltwo-${idy}`}
                              type="radio"
                              // variant={idx % 2 ? "outline-success" : "outline-danger"}
                              variant="outline-primary"
                              // variant="outline"
                              name={`ltwo-${idy}`}
                              value={ltwo.value}
                              checked={listTwo === ltwo.value}
                              onChange={(e) => List2ChangeImage(ltwo, idy)}
                              // onChange={(e) =>
                              //   setListTwo(e.currentTarget.value)
                              // }
                              style={{
                                borderTop: "6px solid #1D5A90",
                                borderRadius: "10pt",
                                boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                marginRight: "2rem",
                                borderLeft: "0px solid #fff",
                                borderRight: "0px solid #fff",
                                borderBottom: "0px solid #fff",
                              }}
                              className="icon-dc"
                            >
                              <img src={ltwo.icon} style={{ width: "60%" }} />

                              <div
                                className="icon-text"
                                style={{
                                  lineHeight: "1rem",
                                  marginTop: "0.3rem",
                                  marginBottom: "0rem",
                                }}
                              >
                                {ltwo.name}
                              </div>
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </div>
                    </Grid>
                  </Box>
                </div>
              </div>
              <Divider style={{ margin: "10pt" }} />
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  How well did you eat?
                </p>
                <div className="form-container">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      style={{
                        // maxWidth: "590px",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0",
                      }}
                    >
                      <div style={{ marginLeft: "1.5rem" }}>
                        <ButtonGroup>
                          {list3.map((lthree, idz) => (
                            <ToggleButton
                              key={idz}
                              id={`lthree-${idz}`}
                              type="radio"
                              // variant={idx % 2 ? "outline-success" : "outline-danger"}
                              variant="outline-primary"
                              // variant="outline"
                              name={`lthree-${idz}`}
                              value={lthree.value}
                              checked={listThree === lthree.value}
                              onChange={(e) => List3ChangeImage(lthree, idz)}
                              style={{
                                borderTop: "6px solid #1D5A90",
                                borderRadius: "10pt",
                                boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                marginRight: "2rem",
                                borderLeft: "0px solid #fff",
                                borderRight: "0px solid #fff",
                                borderBottom: "0px solid #fff",
                              }}
                              className="icon-dc"
                            >
                              <img
                                src={lthree.icon}
                                style={{
                                  width: "60%",
                                }}
                              />

                              <div
                                className="icon-text"
                                style={{
                                  lineHeight: "1rem",
                                  marginTop: "0.3rem",
                                  marginBottom: "0rem",
                                }}
                              >
                                {lthree.name}
                              </div>
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </div>
                    </Grid>
                  </Box>
                </div>
              </div>
              <Divider style={{ margin: "10pt" }} />
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  How well are you being looked after?
                </p>
                <div className="form-container">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      style={{
                        // maxWidth: "590px",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0",
                      }}
                    >
                      <div style={{ marginLeft: "1.5rem" }}>
                        <ButtonGroup>
                          {list4.map((lfour, idxx) => (
                            <ToggleButton
                              key={idxx}
                              id={`lfour-${idxx}`}
                              type="radio"
                              // variant={idx % 2 ? "outline-success" : "outline-danger"}
                              variant="outline-primary"
                              // variant="outline"
                              name={`lfour-${idxx}`}
                              value={lfour.value}
                              checked={listFour === lfour.value}
                              onChange={(e) =>
                                setListFour(e.currentTarget.value)
                              }
                              style={{
                                borderTop: "6px solid #1D5A90",
                                borderRadius: "10pt",
                                boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                marginRight: "2rem",
                                borderLeft: "0px solid #fff",
                                borderRight: "0px solid #fff",
                                borderBottom: "0px solid #fff",
                              }}
                              className="icon-dc"
                            >
                              <img src={lfour.icon} style={{ width: "60%" }} />

                              <div
                                className="icon-text"
                                style={{
                                  lineHeight: "1rem",
                                  marginTop: "0.3rem",
                                  marginBottom: "0rem",
                                }}
                              >
                                {lfour.name}
                              </div>
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </div>
                    </Grid>
                  </Box>
                </div>
              </div>
            </Card.Body>
            <div
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
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default DailyCheckOut;
