import React, { useState, useEffect } from "react";
import "./CarePlan.css";
import moment from "moment";
import * as Realm from "realm-web";
import "twix";
import { AiTwotoneFlag } from "react-icons/ai";
import { Card } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

import decryptData from "../../components/decryptData";
import Button from "react-bootstrap/Button";
import NotificationsIcon from "@mui/icons-material/Notifications";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PatientImg from "../../assets/icon-patient-photo.png";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

function CarePlan(props) {
  const [loading, setLoading] = useState(true);

  const [newArr, setNewArr] = useState([]);

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#03a9f4",
      },
    },
  });

  useEffect(() => {
    // add your Realm App Id to the .env.local file
    async function fetchData() {
      if (loading) {
        const REALM_APP_ID = "globalmedics-yxogc";
        const app = new Realm.App({ id: REALM_APP_ID });
        const credentials = Realm.Credentials.anonymous();
        // console.log("patientId:", props.patientDetails.patientId);
        try {
          const user = await app.logIn(credentials);

          // const patientTempData = await user.functions.getVitalsTempPatientData(
          //   props.patientDetails.patientId
          // );
          const patientBPData = await user.functions.getVitalsBPPatientData(
            props.patientDetails.patientId
          );

          const patientPRData = await user.functions.getVitalsPulsePatientData(
            props.patientDetails.patientId
          );
          // const patientHRData = await user.functions.getVitalsHeartRatePatientData(
          //     props.patientDetails.patientId
          //   );
          //   const patientSPOData = await user.functions.getVitalsSpO2PatientData(
          //   props.patientDetails.patientId
          // );
          // const patientRRData = await user.functions.getVitalsRespRatePatientData(
          //   props.patientDetails.patientId
          // );

          var allList = [];

          // patientTempData.forEach((file) => {
          //   allList.push({
          //     date: moment(file.dateOnset).format("YYYY-MM-DD HH:mm"),
          //     value: decryptData(file.temperature),
          //   });

          // });

          patientBPData.forEach((file) => {
            let bp =
              decryptData(file.diastolicPressure) +
              "  " +
              decryptData(file.systolicPressure);
            allList.push({
              datebb: moment(file.dateOnset).format("YYYY-MM-DD HH:mm"),
              diastolicPressure: bp,
            });
          });

          patientPRData.forEach((file) => {
            allList.push({
              datepr: moment(file.dateOnset).format("YYYY-MM-DD HH:mm"),
              beats: decryptData(file.beatsPerMinute),
            });
          });

          setNewArr(() => allList);
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        width: "88%",
        height: "100%",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
        position: "fixed",
        backgroundColor: "#f2f8f1",
        boxShadow: "0 0 10px #000000",
        marginLeft: "12.5px",
      }}
    >
      <div style={{ display: "flex" }} class="row">
        <Card className="mainCard1">
          <Card.Body className="mainCard1Body">
            <div className="innerMainCard1Body">
              <div className="imageDiv1">
                <span>
                  {/* <img
                    className="patientImage1"
                    alt="Global Medics"
                    src={props.patientDetails.img}
                    style={{
                      border: props.imgBorderColor,
                    }}
                  /> */}

                  <img
                    alt="Global Medics"
                    src={PatientImg}
                    className="PtnImg"
                  />
                </span>
              </div>

              <div className="nameDiv1">
                <p style={{ display: "inline-block", fontWeight: "500" }}>
                  {props.patientDetails.patientName}
                </p>
                <p>
                  Last Consult :{" "}
                  <span style={{ color: "#209f85" }}>
                    {props.patientDetails.lastConsult} days ago
                  </span>
                </p>
              </div>
              <div style={{ width: "40%", marginTop: "-1vh" }}>
                <p>
                  RecoveryStatus:
                  <span className="recoveryButton">
                    {props.patientDetails.recoveryStatus}
                  </span>
                </p>
                <p>
                  Watch Closely{" "}
                  <AiTwotoneFlag
                    color="red"
                    size="20px"
                    style={{ marginLeft: "30px" }}
                  />
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className="mainCard1">
          <Card.Body className="mainCard1Body">
            <div class="container">
              <div class="row">
                <div class="col-8">
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#209f85",
                      margin: "0rem",
                    }}
                  >
                    Your Time {moment(props.time).format("HH:mm A")} Today{" "}
                    {moment(props.time).format("MMM")},{" "}
                    {moment(props.time).format("YY")}
                  </p>
                  <p style={{ fontSize: "14px", margin: "0rem" }}>
                    Patient Time {moment(props.time).format("HH:mm A")} Today{" "}
                    {moment(props.time).format("MMM")},{" "}
                    {moment(props.time).format("YY")}
                  </p>
                </div>
                <div class="col-4">
                  <Button
                    className="btn-clr"
                    variant="flat"
                    style={{ width: "30%" }}
                  >
                    <CallIcon />
                  </Button>
                  <Button
                    className="btn-clr"
                    variant="flat"
                    style={{ width: "30%", textTransform: "none" }}
                  >
                    <VideocamIcon />
                  </Button>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className="mainCard3c">
          <NotificationsIcon sx={{ color: "#979FB0", fontSize: "3rem" }} />
        </Card>
      </div>

      {/* <div class="row" style={{ marginBottom: "7vh" }}> */}

      <Card className="CarePlanAccessCard">
        <table className="CarePlanTab">
          <tr>
            <th></th>
            <th style={{ textAlign: "center" }}>
              Prescription
              <br />
              Medications
            </th>
            <th style={{ textAlign: "center" }}>
              Prescribed
              <br />
              Tests
            </th>
            <th style={{ textAlign: "center" }}>
              Complementary
              <br />
              Medicine
            </th>
            <th style={{ textAlign: "center" }}>
              Prescribed
              <br />
              Exercise
            </th>
            <th style={{ textAlign: "center" }}>
              Prescribed
              <br />
              Diet
            </th>
            <th style={{ textAlign: "center" }}>
              Lifestyle
              <br />
              Changes
            </th>
            <th style={{ textAlign: "center" }}></th>
          </tr>
          <tr>
            <td>Ailment</td>
            <td style={{ textAlign: "center" }}>
              <ThemeProvider theme={theme}>
                <Switch
                  defaultChecked
                  size="size"
                  sx={{ width: "70px" }}
                  color="secondary"
                />
              </ThemeProvider>
            </td>
            <td style={{ textAlign: "center" }}>
              <ThemeProvider theme={theme}>
                <Switch
                  defaultChecked
                  size="medium"
                  sx={{ width: "70px" }}
                  color="secondary"
                />
              </ThemeProvider>
            </td>
            <td style={{ textAlign: "center" }}>
              <ThemeProvider theme={theme}>
                <Switch
                  defaultChecked
                  size="medium"
                  sx={{ width: "70px" }}
                  color="secondary"
                />
              </ThemeProvider>
            </td>
            <td style={{ textAlign: "center" }}>
              <ThemeProvider theme={theme}>
                <Switch
                  defaultChecked
                  size="medium"
                  sx={{ width: "70px" }}
                  color="secondary"
                />
              </ThemeProvider>
            </td>
            <td style={{ textAlign: "center" }}>
              <ThemeProvider theme={theme}>
                <Switch
                  defaultChecked
                  size="medium"
                  sx={{ width: "70px" }}
                  color="secondary"
                />
              </ThemeProvider>
            </td>
            <td style={{ textAlign: "center" }}>
              <ThemeProvider theme={theme}>
                <Switch
                  defaultChecked
                  size="medium"
                  sx={{ width: "70px" }}
                  color="secondary"
                />
              </ThemeProvider>
            </td>
            <td style={{ textAlign: "center" }}></td>
          </tr>
          <tr>
            <td>COVID</td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <ArrowForwardIosIcon sx={{ color: "gray", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>Mental Health</td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <ArrowForwardIosIcon sx={{ color: "gray", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>
              Cardiovascular
              <br />
              Diseases
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <ArrowForwardIosIcon sx={{ color: "gray", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>Diabetes</td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <ArrowForwardIosIcon sx={{ color: "gray", cursor: "pointer" }} />
            </td>
          </tr>
          <tr>
            <td>Others</td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </td>
            <td style={{ textAlign: "center" }}>
              <ArrowForwardIosIcon sx={{ color: "gray", cursor: "pointer" }} />
            </td>
          </tr>
        </table>

        {/* <div class="CarePlanCardNoBorder">
          <div class="row">
            <div class="col-1"></div>
            <div class="col-2">
              <div
                class="form-check form-switch"
                style={{ textAlign: "center" }}
              >
                Prescription Medications
              </div>
            </div>

            <div class="col-1">
              <div
                class="form-check form-switch"
                style={{ textAlign: "center" }}
              >
                Tests
              </div>
            </div>
            <div class="col-2">
              <div
                class="form-check form-switch"
                style={{ textAlign: "center" }}
              >
                Alternative
                <br />
                Medicine
              </div>
            </div>
            <div class="col-2">
              <div
                class="form-check form-switch"
                style={{ textAlign: "center" }}
              >
                Physical /
                <br />
                Exercise
              </div>
            </div>
            <div class="col-1">
              <div
                class="form-check form-switch"
                style={{ textAlign: "center" }}
              >
                Diet
              </div>
            </div>
            <div class="col-2">
              <div
                class="form-check form-switch"
                style={{ textAlign: "center" }}
              >
                Lifestyle
                <br />
                Changes
              </div>
            </div>
            <div class="col-1">
              <div
                class="form-check form-switch"
                style={{ textAlign: "center" }}
              ></div>
            </div>
          </div>
        </div>
        <div class="CarePlanCardNoBorder1">
          <div class="row">
            <div class="col-1">Ailment</div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <ThemeProvider theme={theme}>
                  <Switch
                    defaultChecked
                    size="medium"
                    sx={{ width: "70px" }}
                    color="secondary"
                  />
                </ThemeProvider>
              </div>
            </div>
            <div class="col-1">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <ThemeProvider theme={theme}>
                  <Switch
                    defaultChecked
                    size="medium"
                    sx={{ width: "70px" }}
                    color="secondary"
                  />
                </ThemeProvider>
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <ThemeProvider theme={theme}>
                  <Switch
                    defaultChecked
                    size="medium"
                    sx={{ width: "70px" }}
                    color="secondary"
                  />
                </ThemeProvider>
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <ThemeProvider theme={theme}>
                  <Switch
                    defaultChecked
                    size="medium"
                    sx={{ width: "70px" }}
                    color="secondary"
                  />
                </ThemeProvider>
              </div>
            </div>
            <div class="col-1">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <ThemeProvider theme={theme}>
                  <Switch
                    defaultChecked
                    size="medium"
                    sx={{ width: "70px" }}
                    color="secondary"
                  />
                </ThemeProvider>
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <ThemeProvider theme={theme}>
                  <Switch
                    defaultChecked
                    size="medium"
                    sx={{ width: "70px" }}
                    color="secondary"
                  />
                </ThemeProvider>
              </div>
            </div>
            <div class="col-1">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}></div>
            </div>
          </div>
        </div>

        <div class="CarePlanCardBorder">
          <div class="row">
            <div class="col-1">COVID</div>
            <div
              class="col-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </div>
            <div
              class="col-1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </div>
            <div
              class="col-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </div>
            <div
              class="col-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </div>
            <div
              class="col-1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </div>
            <div
              class="col-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </div>
            <div
              class="col-1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowForwardIosIcon />
            </div>
          </div>
        </div>
        <div class="CarePlanCardBorder">
          <div class="row">
            <div class="col-1">
              Cardiovascular
              <br />
              Diseases
            </div>
            <div
              class="col-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </div>
            <div
              class="col-1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </div>
            <div
              class="col-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </div>
            <div
              class="col-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </div>
            <div
              class="col-1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </div>
            <div
              class="col-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Switch defaultChecked size="small" sx={{ width: "50px" }} />
            </div>
            <div
              class="col-1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ArrowForwardIosIcon />
            </div>
          </div>
        </div> */}

        {/*
        
        <div class="CarePlanCardBorder">
          <div class="row">
            <div class="col-2">Others</div>
            <div class="col-2">
              <div
                class="form-check form-switch"
                style={{ textAlign: "center", marginLeft: "4rem" }}
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheck"
                  defaultChecked={true}
                />
              </div>
            </div>
            <div class="col-1">
              <div
                class="form-check form-switch"
                style={{ textAlign: "center", marginLeft: "3.5rem" }}
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheck"
                  defaultChecked={true}
                />
              </div>
            </div>
            <div class="col-2">
              <div
                class="form-check form-switch"
                style={{ textAlign: "center", marginLeft: "4rem" }}
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheck"
                  defaultChecked={true}
                />
              </div>
            </div>
            <div class="col-2">
              <div
                class="form-check form-switch"
                style={{ textAlign: "center", marginLeft: "3.5rem" }}
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheck"
                  defaultChecked={true}
                />
              </div>
            </div>
            <div class="col-1">
              <div
                class="form-check form-switch"
                style={{ textAlign: "center", marginLeft: "3rem" }}
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheck"
                  defaultChecked={true}
                />
              </div>
            </div>
            <div class="col-2">
              <div
                class="form-check form-switch"
                style={{ textAlign: "center", marginLeft: "3rem" }}
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheck"
                  defaultChecked={true}
                />
              </div>
            </div>
          </div>
        </div> */}

        <div
          style={{
            textAlign: "right",
            marginRight: "1.5rem",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          <input
            type="submit"
            value="Edit Care Plan"
            style={{
              width: "150px",
              height: "40px",
              borderRadius: "25px",
              backgroundColor: "#209F85",
              color: "#FFFFFF",
              border: "#209F85",
            }}
          />
        </div>
      </Card>

      {/* </div> */}
    </div>
  );
}

export default CarePlan;
