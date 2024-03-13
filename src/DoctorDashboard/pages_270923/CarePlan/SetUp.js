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

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

function SetUp(props) {
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
            Cardio Vascular Disease (CVD) Template Setup The starting point for
            investigations related to the heart in an elderly patient, to be
            explained to a non-medical person
          </Card.Body>
        </Card>

        {/* <Card className="mainCard1">
          <Card.Body className="mainCard1Body">
            <div>
              Your Time {moment(props.time).format("HH:mm A")} Today{" "}
              {moment(props.time).format("MMM")},{" "}
              {moment(props.time).format("YY")}
            </div>
            <div>
              Patient Time {moment(props.time).format("HH:mm A")} Today{" "}
              {moment(props.time).format("MMM")},{" "}
              {moment(props.time).format("YY")}
            </div>
          </Card.Body>
        </Card> */}

        {/* <div style={{ height: "50px" }}> */}
        {/* <i class="bi bi-camera-video"></i> */}
        {/* <VideocamIcon /> */}

        {/* <Button
          className="btn-primary"
          style={{
            // background: "#1D5A90 !important",
            borderRadius: 50,
            width: "15%",
            height: "8vh",
            color: "#ffffff",
            textTransform: "none",
            marginTop: "0.8rem",
          }}
        >
          Edit Care Plan
        </Button> */}
        <div
          class="btn-group-vertical"
          style={{ width: "12%", marginTop: "0.6rem" }}
        >
          <Button
            className="btn-clr"
            variant="flat"
            style={{ textTransform: "none" }}
          >
            <VideocamIcon /> Video Call
          </Button>
          <Button className="btn-clr1" variant="flat">
            <CallIcon />
          </Button>
        </div>
        {/* <input
          type="submit"
          value="Video call"
          style={{
            width: "120px",
            height: "40px",
            borderRadius: "25px",
            backgroundColor: "#209F85",
            color: "#FFFFFF",
            border: "#209F85",
          }}
        />

        <input
          type="submit"
          value="call"
          style={{
            width: "38px",
            height: "40px",
            borderRadius: "25px",
            backgroundColor: "#209F85",
            color: "#FFFFFF",
            border: "#209F85",
            marginTop: "0.3rem",
          }}
        /> */}

        <Card className="mainCard3b">
          <div className="timeDiv">
            {" "}
            <AccessTimeFilledIcon
              sx={{ color: "#209F85", marginRight: "1rem" }}
            />
            Your Time {moment(props.time).format("HH:mm A")} Today{" "}
            {moment(props.time).format("MMM")},{" "}
            {moment(props.time).format("YY")}
          </div>
          <div className="timeDiv1">
            {" "}
            <AccessTimeFilledIcon
              sx={{ color: "#FFFFFF", marginRight: "1rem" }}
            />
            Patient Time {moment(props.time).format("HH:mm A")} Today{" "}
            {moment(props.time).format("MMM")},{" "}
            {moment(props.time).format("YY")}
          </div>
        </Card>
        <Card className="mainCard3c">
          {/* <div className="timeDiv"> */}
          <NotificationsIcon sx={{ color: "#979FB0", fontSize: "3rem" }} />
          {/* </div> */}
        </Card>
      </div>

      {/* <div class="row" style={{ marginBottom: "7vh" }}> */}

      <Card className="SetUpCard">
        Severity Definition
        <div class="container">
          <div class="row">
            <div class="col-sm">Criteria for Mild COPD</div>
            <div class="col-sm">Criteria for Moderate COPD</div>
            <div class="col-sm">Criteria for Severe COPD</div>
          </div>
          <div class="row">
            <div class="col-sm">
              Easily getting short of breath or getting tired during exercise or
              activity Palpitations (irregular heart beats, or a “flip-flop”
              feeling in your chest)
            </div>
            <div class="col-sm">
              Easily getting short of breath or getting tired during exercise or
              activity Palpitations (irregular heart beats, or a “flip-flop”
              feeling in your chest)
            </div>
            <div class="col-sm">
              Easily getting short of breath or getting tired during exercise or
              activity Palpitations (irregular heart beats, or a “flip-flop”
              feeling in your chest)
            </div>
          </div>
        </div>
        {/*
                <div class="CarePlanCardNoBorder">
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
            <div class="col-2">
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
          </div>
        </div>
        <div class="CarePlanCardBorder">
          <div class="row">
            <div class="col-2">COVID</div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-1">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-1">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
          </div>
        </div>
        <div class="CarePlanCardBorder">
          <div class="row">
            <div class="col-2">Mental Health</div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-1">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-1">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
          </div>
        </div>
        <div class="CarePlanCardBorder">
          <div class="row">
            <div class="col-2">Cardiovascular Diseases</div>
            <div
              class="col-2"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "left", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "left", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "left", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-1">
              <div style={{ textAlign: "left", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-1">
              <div style={{ textAlign: "right", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
          </div>
        </div>
        <div class="CarePlanCardBorder">
          <div class="row">
            <div class="col-2">Diabetes</div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-1">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-1">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
          </div>
        </div>
        <div class="CarePlanCardBorder">
          <div class="row">
            <div class="col-2">Others</div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-1">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-1">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
            <div class="col-2">
              <div style={{ textAlign: "center", marginLeft: "0rem" }}>
                <Switch defaultChecked size="small" sx={{ width: "50px" }} />
              </div>
            </div>
          </div>
        </div>
            */}
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
      </Card>

      {/* </div> */}
    </div>
  );
}

export default SetUp;
