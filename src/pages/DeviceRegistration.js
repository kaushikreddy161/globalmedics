import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user.context";

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";

import { useNavigate, useLocation } from "react-router-dom";
import { BSON } from "realm-web";
import cypherData from "../crypt/cypherData";
import decryptData from "../crypt/decryptData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";

import "./Main.css";

const DeviceRegistration = () => {

  const { user, pId, pName , adbuser} = useContext(UserContext);
  const location = useLocation();

  const navigate = useNavigate();
  const [deviceType, setDeviceType] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [modelNumber, setModelNumber] = useState("");
  const [gFitEmail, setGFitEmail] = useState("");
  const datex = new Date();
  const [xid, setXid] = useState("");
  const [status, setStatus] = useState("0");

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
   // setXid(pId);
  }, [pId]);

  const loadUser = async () => {
     if (user) {
        const deviceData = user.functions.getSmartDeviceData(pId);
        deviceData.then((resp) => {
          if (resp) {
            setStatus("1");
            setDeviceType(resp.deviceType);
            setManufacturer(resp.manufacturer);
            setModelNumber(resp.modelNumber);
            setGFitEmail(resp.gFitEmail);
            //  setpGFitEmail(resp[0]._id.toString());
            //  setLock("true");
            navigate(`/googleFit`);
         //navigate(`/withingsCall`);
          } else {
            alert("Device Not Registered..");
          }
        });
      }    
  };
 
  const onSubmit = async (event) => {
    event.preventDefault();
    if (
      modelNumber === "" ||
      gFitEmail === ""
    ) {
      alert(
        "Please enter the data for Model Number, Google Fit Email"
      );
    } else {
      // console.log("statius:", status);
      try {
        if (user && status === "0") {
          //  console.log('auth:',user.id);
          let dt = new Date();
          let id = new BSON.ObjectID();
         // let cid = BSON.ObjectID(adbuser).toString();
         let cid = adbuser; 
         let pid = pId;
          //   console.log('pid:', pid);
            const createx = user.functions.createSmartDeviceData(
            id,
            deviceType,
            manufacturer,
            modelNumber,
            cypherData(gFitEmail),
            dt.toDateString(),
            "GlobalMedics2021",
            pid,
            'Patient',
            'active'          
          );
          createx.then((resp) => {
            //  console.log("resp:", resp);
            alert("Device Registered Successfully");
            navigate(`/googleFit`);
        //  navigate(`/withingsCall`);
          });
        } else {
          navigate(`/deviceRegistration`);
        }
      } catch (error) {
        //  alert(error);
        console.log("error:", error);
      }
    }
  };

  // const handleChange = (e) => {
  //   setOption(options[+e.target.value]);
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
          title="Device Registration"
          title2="Please upload patient’s medical reports"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="drr"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-dr">
        <Card
            style={{
              marginTop: "1.5rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
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
                    <Form.Group>
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label style={{ maxWidth: "500px" }}>
                          Type / functionality of Smart Device
                            {/* <span style={{ color: "red" }}>*</span> */}
                          </label>
                          <>
                            {status === "0" ? (
                              <select
                                className="form-control"
                                id="deviceType"
                                style={{
                                  color: "#ADAAA7",
                                  borderRadius: "10px",
                                }}
                                name="deviceType"
                                onChange={(e) => setDeviceType(e.target.value)}
                              >
                                <option value="">Select any one</option>
                                <option value="Smartwatch">Smartwatch</option>
                                <option value="Blood pressure cuff">Blood pressure cuff</option>
                                <option value="Smart thermometer">Smart thermometer</option>
                                <option value="Smart scale">Smart scale</option>
                                <option value="Sleeping pad">Sleeping pad</option>
                                <option value="Others">Others</option>
                              </select>
                            ) : (
                              <Form.Control
                                className="name-input"
                                type="text"
                                placeholder="Device Type"
                                name="deviceType"
                                value={deviceType}
                                onChange={(e) => setDeviceType(e.target.value)}
                                style={{
                                  // marginBottom: "10pt",
                                  color: "#ADAAA7",
                                  // border: "0px solid white",
                                  // marginLeft: "-0.7rem",
                                }}
                              ></Form.Control>
                            )}
                          </>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label style={{ maxWidth: "500px" }}>
                          Manufacturer
                            {/* <span style={{ color: "red" }}>*</span> */}
                          </label>
                          <>
                            {status === "0" ? (
                              <select
                                className="form-control"
                                id="manufacturer"
                                style={{
                                  color: "#ADAAA7",
                                  borderRadius: "10px",
                                }}
                                name="manufacturer"
                                onChange={(e) => setManufacturer(e.target.value)}
                              >
                                <option value="">Select any one</option>
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Withings">Withings</option>
                                <option value="Dozee">Dozee</option>
                                <option value="Amazefit">Amazefit</option>
                                <option value="Fitbit">Fitbit</option>
                                <option value="Garmin">Garmin</option>
                                <option value="Others">Others</option>
                              </select>
                            ) : (
                              <Form.Control
                                className="name-input"
                                type="text"
                                placeholder="Relation"
                                name="manufacturer"
                                value={manufacturer}
                                onChange={(e) => setManufacturer(e.target.value)}
                                style={{
                                  // marginBottom: "10pt",
                                  color: "#ADAAA7",
                                  // border: "0px solid white",
                                  // marginLeft: "-0.7rem",
                                }}
                              ></Form.Control>
                            )}
                          </>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Model Number</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Smart Device Model Number"
                            name="modelNumber"
                             value={modelNumber}
                             onChange={(e) => setModelNumber(e.target.value)}
                            style={{
                              // marginBottom: "10pt",
                              color: "#ADAAA7",
                              // border: "0px solid white",
                              // marginLeft: "-0.7rem",
                            }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Email id used to log into Google Fit</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            id="gFitEmail"
                            placeholder="Enter GoogleFit Email id"
                            name="gFitEmail"
                            value={gFitEmail}
                             onChange={(e) => setGFitEmail(e.target.value)}
                            style={{
                              // marginBottom: "10pt",
                              color: "#ADAAA7",
                              // border: "0px solid white",
                              // marginLeft: "-0.7rem",
                            }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                                           
                    </Form.Group>
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
                    Register Device
                  </Button>
                </div>
            <div style={{ height: "5vh" }}></div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default DeviceRegistration;
