import React, { useEffect, useContext, useState, useLayoutEffect } from "react";
import { UserContext } from "./contexts/user.context";

import Grid from "@mui/material/Grid";
import { Card } from "react-bootstrap";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Button, Divider, TextField } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import decryptData from "./crypt/decryptData";
import { Container, Row, Col } from 'react-bootstrap';
import CardRowComponent from './CardRowComponent/CardRowComponent.js';
//import UserCard from '../UserCard/UserCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AutoVitalsSummary from './pages/AutoVitalsSummary.js';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import Speedometer from "react-d3-speedometer";

import IconVerified from "./assets/icon-varified.png";
import IconAlert from "./assets/icon-alert.png";
import IconH from "./assets/icon-h.png";
import IconDiastolic from "./assets/icon-vs-diastolic.png";
import IconSystolic from "./assets/icon-vs-systolic.png";
import IconTemperature from "./assets/icon-vs-temp.png";
import IconSPO2 from "./assets/icon-vs-spo2.png";
import IconCalories from "./assets/icon-vs-calories.png";
import IconSteps from "./assets/icon-vs-steps.png";
import IconGlucose from "./assets/icon-vs-glucose.png";
import IconSleep from "./assets/icon-vs-sleep.png";
import IconFat from "./assets/icon-vs-fat.png";
import IconHeight from "./assets/icon-vs-height.png";
import IconMovement from "./assets/icon-vs-movement.png";
import IconReproductive from "./assets/icon-vs-reproductive.png";
import IconWeight from "./assets/icon-vs-weight.png";

import moment from "moment";
const { getRequestHeaders, getWeeklyData } = require('./DataRequestManager.js');

const reports = [
  {
    ptime: "3 days",
    pstatus: IconVerified,
    btime: "10 minutes",
    bstatus: IconAlert,
  },
];

const Dashboard = (props) => {
  const navigate = useNavigate();
  const { user, pId,pName } = useContext(UserContext);
  
  // fetch weekly data
  const accessToken = props.user.accessToken;
  const [weekData, setWeekData] = useState([]);
  // let weekData = [];

  let selected = [0,1,2,3,4,5];
  // let selected = [0];
  const callBack = (state) => {
    setWeekData(state);
  }

  const onSubmit = () => {
    const path = `/dailyCheckInSummary`;
    navigate(path);
  };
  const requestHeaders = getRequestHeaders(accessToken);
  const timeRightNow = new Date().getTime();
  getWeeklyData(timeRightNow, requestHeaders, callBack, weekData);

  const [patientName, setpName] = useState(pName);
  const [status, setStatus] = useState("0");

  const [bprstatus, setBPRStatus] = useState("0"); // BP record status
  const [bprsstatus, setBPRSStatus] = useState("0"); // sistolic status
  const [bprdstatus, setBPRDStatus] = useState("0"); // diastolic status
  const [prrstatus, setPRRStatus] = useState("0"); //  PR reocord status
  const [prrdstatus, setPRRDStatus] = useState("0"); // no of days count status

  const [rrrstatus,setRRRStatus] = useState("0");
  const [rrrdstatus,setRRRDStatus] = useState("0");
  const [tstatus,setTStatus] = useState("0");
  const [tdstatus,setTDStatus] = useState("0");
  const [spo2status,setSPO2Status] = useState("0");
  const [spo2dstatus,setSPO2DStatus] = useState("0");
  const [bssstatus,setBSStatus] = useState("0");
  const [bssdstatus,setBSDStatus] = useState("0");

  const [selLid, setSelLId] = useState(pId);
  const [bprdate, setBPRDate] = useState("");
  const [prrdate, setPRRDate] = useState("");
  const [rrrdate, setRRRDate] = useState("");
  const [spo2date, setSPO2Date] = useState("");
  const [temdate, setTDate] = useState("");
  const [bsdate, setBSDate] = useState("");
  
  const [TempPRPatientData, setTempPRPatientData] = useState([]);
  const [TempBPPatientData, setTempBPPatientData] = useState([]);
  const [TempRRPatientData, setTempRRPatientData] = useState([]);
  const [TempBSPatientData, setTempBSPatientData] = useState([]);
  const [TempTPatientData, setTempTPatientData] = useState([]);
  const [TempSPO2PatientData, setTempSPO2PatientData] = useState([]);


  const [sysValue, setSysValue] = useState("0");
  const [diaValue, setDiaValue] = useState("0");
  const [pulValue, setPulValue] = useState("0");
  const [temValue, setTemValue] = useState("0");
  const [spo2Value, setSPO2Value] = useState("0");
  const [respValue, setRepValue] = useState("0");
  const [bsValue, setBSValue] = useState("0");

  const [pulValueArr, setPulValueArr] = useState([]);
  const [sysValueArr, setSysValueArr] = useState([]);
  const [diaValueArr, setDiaValueArr] = useState([]);
  const [spo2ValueArr, setSPO2ValueArr] = useState([]);
  const [temValueArr, setTemValueArr] = useState([]);
  const [calValueArr, setCalValueArr] = useState([]);
  const [stepsValueArr, setStepsValueArr] = useState([]);
  const [bsValueArr, setBSValueArr] = useState([]);
  const [sleepValueArr, setSleepValueArr] = useState([]);
  const [fatValueArr, setFatValueArr] = useState([]);
  const [moveValueArr, setMoveValueArr] = useState([]);
  const [weightValueArr, setWeightValueArr] = useState([]);

// const [respValueArr, setRepValueArr] = useState([]);

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pId]);

  const loadUser = async () => {
       console.log('user:',pId);
    //   console.log('location:',location.state.lid);
    if (user) {
      setStatus("1");
      setpName(pName);
      setSelLId(pId.toString());
      PRData(pId.toString());
      BPData(pId.toString());
      RRData(pId.toString());
      TData(pId.toString());
      SPO2Data(pId.toString());
      BSData(pId.toString());

       let pullist = [];
       console.log("lenght:", weekData.length);
      for(var i=0;i<weekData.length;i++)
      {
        pullist[i] = {"Pulse":weekData[i].BP, "Date":weekData[i].Date};
        console.log("pular:", pullist[i]);
      }
      setPulValueArr(pullist);
      console.log("pul:", pulValueArr);
    }
  };

  const emptyData = () => {
    setStatus("0");
    setBPRStatus("0"); // BP record status
    setBPRSStatus("0"); // sistolic status
    setBPRDStatus("0"); // diastolic status
    setPRRStatus("0"); //  PR reocord status
    setPRRDStatus("0"); // no of days count status

    setBPRDate("");
    setPRRDate("");
    setRRRDate("");
    setTDate("");
    setSPO2Date("");
    setBSDate("");

    setTempPRPatientData([]);
    setTempBPPatientData([]);
    setTempRRPatientData([]);
    setTempTPatientData([]);
    setTempSPO2PatientData([]);
    setTempBSPatientData([]);

    setSysValue("0");
    setDiaValue("0");
    setPulValue("0");
    setBSValue("0");
    setRepValue("0");
    setSPO2Value("0");
    setTemValue("0");
  }

  const BPData = async (pid) => {    // Blood Pressure
    emptyData();
    //  console.log("Bp pid:", pid);
    const lovbp = user.functions.getBloodPressureOneRecLatest(pid); // one loved one based on care manager id
    // console.log('else direct:',ccid);
    lovbp.then((resbp) => {
      if (resbp.length > 0) {
        //console.log("result:", resbp);
        setBPRStatus("1");
        let ddt0 = moment(resbp[0].dateOnset).format("DD/MM/YYYY hh:mm:ss");
        let ddt1 = moment(resbp[0].dateOnset);
        let ddt2 = moment(new Date());
        let ddt3 = ddt2.diff(ddt1, "days");

        let systo = parseInt(decryptData(resbp[0].systolicPressure));
        let diast = parseInt(decryptData(resbp[0].diastolicPressure));

        setSysValue(systo);
        setDiaValue(diast);

        //    console.log("systo:",systo);
        //   console.log("diast:", diast);

        if (systo >= 90 && systo <= 139) {
          // date count greater than one day
          setBPRSStatus("1");
        } else {
          setBPRSStatus("0");
        }

        if (diast >= 60 && diast <= 89) {
          // date count greater than one day
          setBPRDStatus("1");
        } else {
          setBPRDStatus("0");
        }

        setBPRDate(ddt0);
      } else {
        console.log("BP no record found");
        setBPRStatus("0");
      }
    });

    const patientBPData = user.functions.getVitalsBPPatientData(pid);
    patientBPData.then((resp) => {
      //  console.log("BP Data:", resp);
      setTempBPPatientData(resp);
    });
  }; 

  const PRData = async (pid) => {    // Pulse Rate
    emptyData();
    //console.log("PR pid:", pid);
    const lovpr = user.functions.getPulseRateOneRecLatest(pid); // one loved one based on care manager id
    // console.log('else direct:',ccid);
    lovpr.then((respr) => {
      if (respr.length > 0) {
        setPRRStatus("1");
        //  console.log("result:", respr);
        let dt0 = moment(respr[0].dateOnset).format("DD/MM/YYYY hh:mm:ss");
        let dt1 = moment(respr[0].dateOnset);
        let dt2 = moment(new Date());

        let dt3 = dt2.diff(dt1, "days");
        let beats = parseInt(decryptData(respr[0].beatsPerMinute));

        setPulValue(beats);

        if (beats >= 60 && beats <= 90) {
          // date count greater than one day
          setPRRDStatus("1");
        } else {
          setPRRDStatus("0");
        }

        // console.log("no of days:", dt3);
        setPRRDate(dt0);
      } else {
        console.log("PR no record found");
        setPRRStatus("0");
      }
    });

    const patientPRData = user.functions.getVitalsPulsePatientData(pid);
    patientPRData.then((resp) => {
      //  console.log("PR Data:", resp);
      setTempPRPatientData(resp);
    });
  };

  const RRData = async (pid) => {   // Respiratory Rate
    emptyData();
    const lovRr = user.functions.getRespRateOneRecLatest(pid); // one loved one based on care manager id
    // console.log('else direct:',ccid);
    lovRr.then((resrr) => {
      if (resrr.length > 0) {
        setRRRStatus("1");
        //  console.log("result:", respr);
        let dt0 = moment(resrr[0].dateOnset).format("DD/MM/YYYY hh:mm:ss");
        let dt1 = moment(resrr[0].dateOnset);
        let dt2 = moment(new Date());

        let dt3 = dt2.diff(dt1, "days");
        let breaths = parseInt(decryptData(resrr[0].breathsPerMinute));

        setRepValue(breaths);

        if (breaths >= 60 && breaths <= 90) {
          // date count greater than one day
          setRRRDStatus("1");
        } else {
          setRRRDStatus("0");
        }

        // console.log("no of days:", dt3);
        setRRRDate(dt0);
      } else {
        console.log("RespRate no record found");
        setRRRStatus("0");
      }
    });
    const patientRRData = user.functions.getVitalsRespRatePatientData(pid);
    patientRRData.then((resp) => {
      //  console.log("PR Data:", resp);
      setTempRRPatientData(resp);
    });
  }

  const TData = async (pid) => {   // Temperature Data
    emptyData();
    const lovt = user.functions.getTemperatureOneReclatest(pid); // one loved one based on care manager id
    // console.log('else direct:',ccid);
    lovt.then((rest) => {
      if (rest.length > 0) {
        setTStatus("1");
        //  console.log("result:", respr);
        let dt0 = moment(rest[0].dateOnset).format("DD/MM/YYYY hh:mm:ss");
        let dt1 = moment(rest[0].dateOnset);
        let dt2 = moment(new Date());

        let dt3 = dt2.diff(dt1, "days");
        let temperature = parseInt(decryptData(rest[0].temperature));

        setTemValue(temperature);

        if (temperature >= 60 && temperature <= 90) {
          // date count greater than one day
          setTDStatus("1");
        } else {
          setTDStatus("0");
        }

        // console.log("no of days:", dt3);
        setTDate(dt0);
      } else {
        console.log("RespRate no record found");
        setTStatus("0");
      }
    });
    const patientTData = user.functions.getVitalsTempPatientData(pid);
    patientTData.then((resp) => {
      //  console.log("PR Data:", resp);
      setTempTPatientData(resp);
    });
  }

  const SPO2Data = async (pid) => {   // SPO2 Data
    emptyData();
    const lovspo2 = user.functions.getSPO2OneRecLatest(pid); // one loved one based on care manager id
    // console.log('else direct:',ccid);
    lovspo2.then((resspo2) => {
      if (resspo2.length > 0) {
        setSPO2Status("1");
        //  console.log("result:", respr);
        let dt0 = moment(resspo2[0].dateOnset).format("DD/MM/YYYY hh:mm:ss");
        let dt1 = moment(resspo2[0].dateOnset);
        let dt2 = moment(new Date());

        let dt3 = dt2.diff(dt1, "days");
        let spo2 = parseInt(decryptData(resspo2[0].spo2Percentage));

        setSPO2Value(spo2);

        if (spo2 >= 60 && spo2 <= 90) {
          // date count greater than one day
          setSPO2DStatus("1");
        } else {
          setSPO2DStatus("0");
        }

        // console.log("no of days:", dt3);
        setSPO2Date(dt0);
      } else {
        console.log("SPO2 no record found");
        setSPO2Status("0");
      }
    });
    const patientSPO2Data = user.functions.getVitalsSpO2PatientData(pid);
    patientSPO2Data.then((respo2) => {
      //  console.log("PR Data:", resp);
      setTempSPO2PatientData(respo2);
    });
  }

  const BSData = async (pid) => {   // Blood Sugar Data
    emptyData();
    const lovbs = user.functions.getBloodSugarOneRecLatest(pid); // one loved one based on care manager id
    // console.log('else direct:',ccid);
    lovbs.then((resbs) => {
      if (resbs.length > 0) {
        setBSStatus("1");
        //  console.log("result:", respr);
        let dt0 = moment(resbs[0].dateOnset).format("DD/MM/YYYY hh:mm:ss");
        let dt1 = moment(resbs[0].dateOnset);
        let dt2 = moment(new Date());

        let dt3 = dt2.diff(dt1, "days");
        let bs = parseInt(decryptData(resbs[0].bloodSugarValue));

        setBSValue(bs);

        if (bs >= 60 && bs <= 90) {
          // date count greater than one day
          setBSDStatus("1");
        } else {
          setBSDStatus("0");
        }

        // console.log("no of days:", dt3);
        setBSDate(dt0);
      } else {
        console.log("Blood Sugar no record found");
        setBSStatus("0");
      }
    });
    const patientBSData = user.functions.getVitalsBloodSugarPatientData(pid);
    patientBSData.then((resbsv) => {
      //  console.log("PR Data:", resp);
      setTempBSPatientData(resbsv);
    });
  }

  const pulseGraph = (gt) => {
    const pathx = `/vitalsGraph`;
    if (gt === "PR") {
      navigate(pathx, { state: { id: TempPRPatientData, type: "PR" } });
    } else if (gt === "SS") {
      navigate(pathx, { state: { id: TempBPPatientData, type: "SS" } });
    } else if (gt === "DS") {
      navigate(pathx, { state: { id: TempBPPatientData, type: "DS" } });
    } else if (gt === "RR") {
      navigate(pathx, { state: { id: TempRRPatientData, type: "RR" } });
    } else if (gt === "TD") {
      navigate(pathx, { state: { id: TempTPatientData, type: "TD" } });
    } else if (gt === "SP") {
      navigate(pathx, { state: { id: TempSPO2PatientData, type: "SP" } });
    } else if (gt === "BS") {
      navigate(pathx, { state: { id: TempBSPatientData, type: "BS" } });
    }
  };

  console.log("gfit Data:", selected);
  console.log("weekdata:", weekData);
  return (
       props.user.haslogin ?
           <div style={{paddingTop: "150vh"}}>
            {/* 
                <UserCard user={props.user}/>
                <CardRowComponent user={props.user} selected={selected} data={weekData}/>
              /}
                 {/* <ChartComponent data={weekData} selected={selected}/> */}
                  {/* <AutoVitalsSummary selected={selected} />  */}
                  {/* <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }} 
      >*/}
        {/* <FixedHeader
          title="Vitals Summary"
          title2="Summary Report of vitals."
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="vsr"
        /> */}
        {/* <div className="car-vs">
          <CarouselSlider />
        </div> */}
        <div className="form-vs">
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
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`PR`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconH} onClick={() => pulseGraph(`PR`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`PR`)}
                      >
                        Pulse Rate
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`PR`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={pulValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`SS`)}
                    >
                      <div class="col-2">
                        <img
                          src={IconSystolic}
                          style={{ cursor: "pointer" }}
                          onClick={() => pulseGraph(`SS`)}
                        />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`SS`)}
                      >
                        Systolic Pressure
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`SS`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            // maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={sysValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#7ab55c",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        marginBottom: "-1.5rem",
                        cursor: "pointer" }} onClick={() => pulseGraph(`DS`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img
                          src={IconDiastolic}
                          onClick={() => pulseGraph(`DS`)}
                        />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`DS`)}
                      >
                        Diastolic Pressure
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        {/* <div id="chartdivda" style={{ width: "150px", height: "150px" }}></div> */}
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`DS`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            // maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={diaValue}
                            showLabels={false}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                      <span style={{ paddingRight: "4.5rem" }}>&#160;</span>
                    </div>
                  ))}
                </div>
              </Card>
              {/* <Divider style={{ margin: "4pt"}} />
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`BS`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconPulse} onClick={() => pulseGraph(`BS`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`BS`)}
                      >
                        Blood Sugar
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`BS`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={bsValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`RR`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconPulse} onClick={() => pulseGraph(`RR`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`RR`)}
                      >
                        Respiratory Rate
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`RR`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={respValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card> */}
              <Divider style={{ margin: "4pt" }} />
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`SP`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconSPO2} onClick={() => pulseGraph(`SP`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`SP`)}
                      >
                        SPO2
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`SP`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={spo2Value}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`TD`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconTemperature} onClick={() => pulseGraph(`TD`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`TD`)}
                      >
                        Temperature
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`TD`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={temValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`TD`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconCalories} onClick={() => pulseGraph(`TD`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`TD`)}
                      >
                        Calories
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`TD`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={temValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`TD`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconSteps} onClick={() => pulseGraph(`TD`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`TD`)}
                      >
                        Steps
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`TD`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={temValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`TD`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconGlucose} onClick={() => pulseGraph(`TD`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`TD`)}
                      >
                        Glucose
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`TD`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={temValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`TD`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconSleep} onClick={() => pulseGraph(`TD`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`TD`)}
                      >
                        Sleep
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`TD`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={temValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`TD`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconFat} onClick={() => pulseGraph(`TD`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`TD`)}
                      >
                        Fat
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`TD`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={temValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
              {/* <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`TD`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconHeight} onClick={() => pulseGraph(`TD`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`TD`)}
                      >
                        Height
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`TD`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={temValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} /> */}
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`TD`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconMovement} onClick={() => pulseGraph(`TD`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`TD`)}
                      >
                        Movement
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`TD`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={temValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} />
              {/* <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`TD`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconReproductive} onClick={() => pulseGraph(`TD`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`TD`)}
                      >
                        Reproductive Health
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`TD`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={temValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              <Divider style={{ margin: "4pt" }} /> */}
              <Card
                style={{
                  margin: "auto",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  {reports.map((item) => (
                    <div
                      class="row align-items-center"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem",cursor: "pointer" }} onClick={() => pulseGraph(`TD`)}
                    >
                      <div class="col-2" style={{ cursor: "pointer" }}>
                        <img src={IconWeight} onClick={() => pulseGraph(`TD`)} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`TD`)}
                      >
                        Weight
                      </div>
                      <div
                        class="col-6"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <div
                          style={{
                            height: "100px",
                            cursor: "pointer",
                            paddingTop: "0.7rem",
                          }}
                          onClick={() => pulseGraph(`TD`)}
                        >
                          <Speedometer
                            minValue={0}
                            maxValue={180}
                            maxSegmentLabels={12}
                            needleHeightRatio={0.8}
                            ringWidth={15}
                            width={120}
                            segments={6}
                            value={temValue}
                            segmentColors={[
                              "#f2db5b",
                              "#f2db5b",
                              "#7ab55c",
                              "#b81414",
                              "#b81414",
                              "#b81414",
                            ]}
                            needleColor="#000080"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
             
            </Card.Body>

            <div
              style={{
                textAlign: "center",
                marginTop: "4rem",
                marginBottom: "2rem",
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
                Noted
              </Button>
            </div>
          </Card>
        </div>
      {/* </Grid> */}
            </div> 
          : null
      );
}

export default Dashboard;
