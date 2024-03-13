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
import Accordion from "react-bootstrap/Accordion";

import SetVitalsTem from "../assets/icon-select-vit-tem.png";
import SetVitalsBPressure from "../assets/icon-select-vit-bprs.png";
import SetVitalsPRate from "../assets/icon-select-vit-prate.png";
import SetVitalsRes from "../assets/icon-select-vit-respiratory.png";
import SetVitalsSPO2 from "../assets/icon-select-vit-spo2.png";
import SetVitalsOthers from "../assets/icon-set-vit-others.png";
import DownArrow from "../assets/icon-arrow-back.png";

const SelectVitals = () => {
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
          title="Set Frequency"
          title2="Select the vitals and their frequency of recording, depending on conditions."
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="vs"
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
                        <div class="col-6">Select Vitals</div>
                        <div class="col-3"></div>
                        <div
                          class="col-3"
                          style={{ textAlign: "center" }}
                        ></div>
                      </div>
                    </div>

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
                              <img src={SetVitalsTem} />
                            </div>
                            <div class="col-4" style={{ color: "gray" }}>
                              Temperature
                            </div>
                            <div class="col-3">
                              <input
                                type="number"
                                class="form-control"
                                placeholder=""
                                style={{
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  paddingLeft: "1.4rem",
                                }}
                              />
                            </div>
                            <div class="col-3">
                              {" "}
                              <select
                                indicator={<KeyboardArrowDown />}
                                // className="form-control"
                                style={{
                                  color: "#ADAAA7",
                                  border: "none",
                                  textAlign: "right",
                                  // borderRadius: "10px",
                                  // marginTop: "5pt",
                                }}
                                // onChange={(e) =>
                                //   setpEthnicity(e.target.value)
                                // }
                              >
                                <option value="">
                                  {/* <ExpandMoreIcon /> */}
                                </option>

                                <option value="Hours">Hours</option>
                                <option value="Days">Days</option>
                              </select>
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
                              <img src={SetVitalsBPressure} />
                            </div>
                            <div class="col-4" style={{ color: "gray" }}>
                              Blood Pressure
                            </div>
                            <div class="col-3">
                              <input
                                type="number"
                                class="form-control"
                                placeholder=""
                                style={{
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  paddingLeft: "1.4rem",
                                }}
                              />
                            </div>
                            <div class="col-3">
                              {" "}
                              <select
                                indicator={<KeyboardArrowDown />}
                                // className="form-control"
                                style={{
                                  color: "#ADAAA7",
                                  border: "none",
                                  textAlign: "right",
                                  // borderRadius: "10px",
                                  // marginTop: "5pt",
                                }}
                                // onChange={(e) =>
                                //   setpEthnicity(e.target.value)
                                // }
                              >
                                <option value="">
                                  {/* <ExpandMoreIcon /> */}
                                </option>

                                <option value="Hours">Hours</option>
                                <option value="Days">Days</option>
                              </select>
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
                              <img src={SetVitalsPRate} />
                            </div>
                            <div class="col-4" style={{ color: "gray" }}>
                              Pulse Rate
                            </div>
                            <div class="col-3">
                              <input
                                type="number"
                                class="form-control"
                                placeholder=""
                                style={{
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  paddingLeft: "1.4rem",
                                }}
                              />
                            </div>
                            <div class="col-3">
                              {" "}
                              <select
                                indicator={<KeyboardArrowDown />}
                                // className="form-control"
                                style={{
                                  color: "#ADAAA7",
                                  border: "none",
                                  textAlign: "right",
                                  // borderRadius: "10px",
                                  // marginTop: "5pt",
                                }}
                                // onChange={(e) =>
                                //   setpEthnicity(e.target.value)
                                // }
                              >
                                <option value="">
                                  {/* <ExpandMoreIcon /> */}
                                </option>

                                <option value="Hours">Hours</option>
                                <option value="Days">Days</option>
                              </select>
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
                              <img src={SetVitalsRes} />
                            </div>
                            <div class="col-4" style={{ color: "gray" }}>
                              Respiratory Rate
                            </div>
                            <div class="col-3">
                              <input
                                type="number"
                                class="form-control"
                                placeholder=""
                                style={{
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  paddingLeft: "1.4rem",
                                }}
                              />
                            </div>
                            <div class="col-3">
                              {" "}
                              <select
                                indicator={<KeyboardArrowDown />}
                                // className="form-control"
                                style={{
                                  color: "#ADAAA7",
                                  border: "none",
                                  textAlign: "right",
                                  // borderRadius: "10px",
                                  // marginTop: "5pt",
                                }}
                                // onChange={(e) =>
                                //   setpEthnicity(e.target.value)
                                // }
                              >
                                <option value="">
                                  {/* <ExpandMoreIcon /> */}
                                </option>

                                <option value="Hours">Hours</option>
                                <option value="Days">Days</option>
                              </select>
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
                              <img src={SetVitalsSPO2} />
                            </div>
                            <div class="col-4" style={{ color: "gray" }}>
                              SPO2
                            </div>
                            <div class="col-3">
                              <input
                                type="number"
                                class="form-control"
                                placeholder=""
                                style={{
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  paddingLeft: "1.4rem",
                                }}
                              />
                            </div>
                            <div class="col-3">
                              {" "}
                              <select
                                indicator={<KeyboardArrowDown />}
                                // className="form-control"
                                style={{
                                  color: "#ADAAA7",
                                  border: "none",
                                  textAlign: "right",
                                  // borderRadius: "10px",
                                  // marginTop: "5pt",
                                }}
                                // onChange={(e) =>
                                //   setpEthnicity(e.target.value)
                                // }
                              >
                                <option value="">
                                  {/* <ExpandMoreIcon /> */}
                                </option>

                                <option value="Hours">Hours</option>
                                <option value="Days">Days</option>
                              </select>
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
                Set Vitals Frequency
              </Button>
            </div>
            <div style={{ height: "5vh" }} />
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default SelectVitals;
