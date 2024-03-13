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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

import SetSymBowel from "../assets/icon-set-sym-bowel.png";
import SetSymBreathing from "../assets/icon-set-sym-breathing.png";
import SetSymCough from "../assets/icon-set-sym-cough.png";
import SetSymEmotional from "../assets/icon-set-sym-emotional.png";
import SetSymEye from "../assets/icon-set-sym-eye.png";
import SetSymFever from "../assets/icon-set-sym-fever.png";
import SetSymHeadacke from "../assets/icon-set-sym-headacke.png";
import SetSymUrine from "../assets/icon-set-sym-urine.png";
import SetSymSore from "../assets/icon-set-sym-sore.png";

import SetVitalsOthers from "../assets/icon-set-vit-others.png";
import DownArrow from "../assets/icon-arrow-back.png";

const SetSymptoms = () => {
  const { user, pId, pName } = useContext(UserContext);

  const onBack = () => {
    const path = `/healthReports`;
    navigate(path);
  };

  const dropdownIndicatorStyles = (base, state) => {
    let changes = {
      // all your override styles
      backgroundColor: "blue",
    };
    return Object.assign(base, changes);
  };

  const navigate = useNavigate();
  let dt2 = moment(new Date()).format("YYYY-MM-DDThh:mm:ss");

  const [dateTime, setdTime] = useState(dt2);
  const [systolic, setsystolic] = useState("");
  const [diastolic, setdiastolic] = useState("");
  const datex = new Date();
  const datey = new Date(dateTime);
  const [lovedones, setlovedOnes] = useState([]);
  const [selLid, setSelLId] = useState("");
  const [patientName, setpName] = useState("");
  const [status, setStatus] = useState("0");

  useEffect(() => {
    // loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
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
          setpName(resp.displayName);
          setSelLId(resp._id.toString());
          setlovedOnes(resp);
        } else {
          alert("Loved Ones ID not loaded..");
        }
      });
    }
  };

  // const loadUser = async () => {
  //   //   console.log('user:',user.id);
  //       if (user) {
  //        let cid = BSON.ObjectID(user.id).toString();
  //        const carem = user.functions.getLovedOnes(cid);
  //       // console.log('carem:',carem);
  //        carem.then((resp) => {
  //             setlovedOnes(resp);
  //          });
  //      }
  //    };

  const onAddDevice = () => {
    // console.log("hello");
    navigate(`/comingSoon`);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // console.log('data:', datey);
    // console.log('selid:')
    if (datey === "" || diastolic === "" || systolic === "") {
      alert("All the fields are mandatory");
    } else {
      try {
        if (user) {
          //  console.log('auth:',user.id);

          const dt = new Date();
          let id = new BSON.ObjectID();
          let cid = BSON.ObjectID(user.id).toString();
          //  let pid = selLid;
          let pid = pId;
          // console.log('pid:', pid);
          const createx = user.functions.createBloodPressure(
            id,
            datey,
            cypherData(diastolic),
            cid,
            "careManager",
            datex,
            "active",
            datex,
            pid,
            "GlobalMedics2021",
            cypherData(systolic),
            "mmHg"
          );
          createx.then((resp) => {
            //  console.log("resp:", resp);
            alert("Blood Pressure Record Added Successfully");
          });
          navigate(`/vitals`);
        }
      } catch (error) {
        //  alert(error);
        console.log("error:", error);
      }
    }
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
          title="Set Symptoms"
          title2="Select all the symptoms and their frequency of recording, depending on conditions."
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="sr"
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
                    <div class="container">
                      <div class="row align-items-center">
                        <div class="col-6">Symptoms</div>
                        <div class="col-3"></div>
                        <div class="col-3"></div>
                      </div>
                    </div>
                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0rem",
                        marginBottom: "0rem",
                        marginLeft: "-0.5rem",
                        marginRight: "-0.5rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            height: "70px",
                            verticalAlign: "middle",
                          }}
                        >
                          <div class="row align-items-center">
                            <div class="col-2">
                              <img src={SetSymFever} />
                            </div>
                            <div class="col-8" style={{ color: "gray" }}>
                              Fever
                            </div>
                            <div class="col-2" style={{ textAlign: "center" }}>
                              <input
                                class="form-check-input"
                                type="checkbox"
                                align="right"
                                value=""
                                id="flexCheckDefault"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-0.5rem",
                        marginRight: "-0.5rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            height: "70px",
                            verticalAlign: "middle",
                          }}
                        >
                          <div class="row align-items-center">
                            <div class="col-2">
                              <img src={SetSymSore} />
                            </div>
                            <div class="col-8" style={{ color: "gray" }}>
                              Sore Throat
                            </div>
                            <div class="col-2" style={{ textAlign: "center" }}>
                              <input
                                class="form-check-input"
                                type="checkbox"
                                align="right"
                                value=""
                                id="flexCheckDefault"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-0.5rem",
                        marginRight: "-0.5rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            height: "70px",
                            verticalAlign: "middle",
                            // marginLeft: "-1rem",
                            // marginRight: "-2rem",
                          }}
                        >
                          <div class="row align-items-center">
                            <div class="col-2">
                              <img src={SetSymHeadacke} />
                            </div>
                            <div class="col-8" style={{ color: "gray" }}>
                              Headache
                            </div>
                            <div class="col-2" style={{ textAlign: "center" }}>
                              <input
                                class="form-check-input"
                                type="checkbox"
                                align="right"
                                value=""
                                id="flexCheckDefault"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-0.5rem",
                        marginRight: "-0.5rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            height: "70px",
                            verticalAlign: "middle",
                            // marginLeft: "-1rem",
                            // marginRight: "-2rem",
                          }}
                        >
                          <div className="row align-items-center text-res">
                            <div class="col-2">
                              <img src={SetSymCough} />
                            </div>
                            <div class="col-8" style={{ color: "gray" }}>
                              Cough
                            </div>
                            <div class="col-2" style={{ textAlign: "center" }}>
                              <input
                                class="form-check-input"
                                type="checkbox"
                                align="right"
                                value=""
                                id="flexCheckDefault"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-0.5rem",
                        marginRight: "-0.5rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            height: "70px",
                            verticalAlign: "middle",
                            // marginLeft: "-1rem",
                            // marginRight: "-2rem",
                          }}
                        >
                          <div class="row align-items-center">
                            <div class="col-2">
                              <img src={SetSymBreathing} />
                            </div>
                            <div class="col-8" style={{ color: "gray" }}>
                              Breathing Difficulty
                            </div>
                            <div class="col-2" style={{ textAlign: "center" }}>
                              <input
                                class="form-check-input"
                                type="checkbox"
                                align="right"
                                value=""
                                id="flexCheckDefault"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-0.5rem",
                        marginRight: "-0.5rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            height: "70px",
                            verticalAlign: "middle",
                            // marginLeft: "-1rem",
                            // marginRight: "-2rem",
                          }}
                        >
                          <div class="row align-items-center">
                            <div class="col-2">
                              <img src={SetSymBowel} />
                            </div>
                            <div class="col-8" style={{ color: "gray" }}>
                              Bowel
                            </div>
                            <div class="col-2" style={{ textAlign: "center" }}>
                              <input
                                class="form-check-input"
                                type="checkbox"
                                align="right"
                                value=""
                                id="flexCheckDefault"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-0.5rem",
                        marginRight: "-0.5rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            height: "70px",
                            verticalAlign: "middle",
                            // marginLeft: "-1rem",
                            // marginRight: "-2rem",
                          }}
                        >
                          <div class="row align-items-center">
                            <div class="col-2">
                              <img src={SetSymEye} />
                            </div>
                            <div class="col-8" style={{ color: "gray" }}>
                              Eyes
                            </div>
                            <div class="col-2" style={{ textAlign: "center" }}>
                              <input
                                class="form-check-input"
                                type="checkbox"
                                align="right"
                                value=""
                                id="flexCheckDefault"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-0.5rem",
                        marginRight: "-0.5rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            height: "70px",
                            verticalAlign: "middle",
                            // marginLeft: "-1rem",
                            // marginRight: "-2rem",
                          }}
                        >
                          <div class="row align-items-center">
                            <div class="col-2">
                              <img src={SetSymEmotional} />
                            </div>
                            <div class="col-8" style={{ color: "gray" }}>
                              Emotional Health
                            </div>
                            <div class="col-2" style={{ textAlign: "center" }}>
                              <input
                                class="form-check-input"
                                type="checkbox"
                                align="right"
                                value=""
                                id="flexCheckDefault"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-0.5rem",
                        marginRight: "-0.5rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            height: "70px",
                            verticalAlign: "middle",
                            // marginLeft: "-1rem",
                            // marginRight: "-2rem",
                          }}
                        >
                          <div class="row align-items-center">
                            <div class="col-2">
                              <img src={SetSymUrine} />
                            </div>
                            <div class="col-8" style={{ color: "gray" }}>
                              Urine
                            </div>
                            <div class="col-2" style={{ textAlign: "center" }}>
                              <input
                                class="form-check-input"
                                type="checkbox"
                                align="right"
                                value=""
                                id="flexCheckDefault"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Form>
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
                Set Symptoms
              </Button>
            </div>
            <div style={{ height: "5vh" }} />
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default SetSymptoms;
