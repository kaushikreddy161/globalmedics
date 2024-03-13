import React, { useState, useEffect, useContext } from "react";
import { useMsal } from '@azure/msal-react';
import "./Vitalsigns.css";
// import ReactHighcharts from "react-highcharts/ReactHighstock.src";
import moment from "moment";
// import priceData from "../../assets/btcdata.json";

import * as Realm from "realm-web";
import "twix";
import {
  AiTwotoneFlag,
} from "react-icons/ai";
import { Card } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import LineChart2 from "./LineChart2";

import decryptData from "../../components/decryptData";
import VitalsGraph from "./VitalsGraph";

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import { UserContext } from "../../../contexts/user.context";

function VitalSigns(props) {

  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const { user, adbuser, custFunctionLogin } = useContext(UserContext);

  const [loading, setLoading] = useState(true);
  // const [patientRecords0, setPatientRecords0] = useState([]);
  // const [patientRecords1, setPatientRecords1] = useState([]);
  // const [patientRecords2, setPatientRecords2] = useState([]);
  // const [patientRecords3, setPatientRecords3] = useState([]);
  // const [patientRecords4, setPatientRecords4] = useState([]);
  // const [patientRecordsByHours, setPatientRecordsByHours] = useState([]);
  // const [patientRecordsByDates, setPatientRecordsByDates] = useState([]);
  // const [patientRecordsByMonths, setPatientRecordsByMonths] = useState([]);
  // const [value, setValue] = useState("Days");
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  // const [tempData, setTempData] = useState("");
  // const [StartTemp, setStartTemp] = useState("");
  // const [endTemp, setEndTemp] = useState("");

  const [newArr, setNewArr] = useState([]);

  // const [showGraph, setShowGraph] = useState(false);
  // console.log("start dates", startDate);
  // console.log("end dates111", endDate);
  // console.log("patientRecordsByMonths", patientRecordsByMonths);

  //  const [TempRatePatientData, setTempRatePatientData] = useState([]);
  //  const [BPRatePatientData, setBPRatePatientData] = useState([]);
  //  const [HRRatePatientData, setHRRatePatientData] = useState([]);
  //  const [SPORatePatientData, setSPORatePatientData] = useState([]);
  //  const [RRRatePatientData, setRRRatePatientData] = useState([]);

  //const [xpatientId, setxPatientID] = useState("");

  // const legend = {
  //   display: false,
  //   position: "bottom",
  //   labels: {
  //     fontColor: "#323130",
  //     fontSize: 14,
  //   },
  // };
  // onChange={(date) => setStartDate(date)}

  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // };

  // const handleChange = (e) => {
  //  // console.log("e.target.value", e.target.value);
  //   setValue(e.target.value);
  //   if (e.target.value == "") {
  //     setShowGraph(true);
  //   }
  // };
  //console.log("value", value);

  useEffect(() => {
    // add your Realm App Id to the .env.local file
    async function fetchData() {
      if (loading) {
        //   const REALM_APP_ID = "globalmedics-yxogc";
        // const app = new Realm.App({ id: REALM_APP_ID });
        // const credentials = Realm.Credentials.anonymous();
        // console.log("patientId:", props.patientDetails.patientId);
        try {
          // const user = await app.logIn(credentials);

          const patientTempData = await user.functions.getVitalsTempPatientData(
            props.patientDetails.patientId
          );
          const patientBPData = await user.functions.getVitalsBPPatientData(
            props.patientDetails.patientId
          );

          const patientPRData = await user.functions.getVitalsPulsePatientData(
            props.patientDetails.patientId
          );
          const patientHRData = await user.functions.getVitalsHeartRatePatientData(
            props.patientDetails.patientId
          );
          const patientSPOData = await user.functions.getVitalsSpO2PatientData(
            props.patientDetails.patientId
          );
          const patientRRData = await user.functions.getVitalsRespRatePatientData(
            props.patientDetails.patientId
          );

          var allList = [];

          // patientTempData.forEach((file) => {         
          //   allList.push({
          //     date: moment(file.dateOnset).format("YYYY-MM-DD HH:mm"),
          //     value: decryptData(file.temperature),
          //   });

          // });

          patientBPData.forEach((file) => {
            let bp = decryptData(file.diastolicPressure) + " \ " + decryptData(file.systolicPressure);
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


          patientSPOData.forEach((file) => {
            allList.push({
              datebs: moment(file.dateOnset).format("YYYY-MM-DD HH:mm"),
              spo2Percentage: decryptData(file.spo2Percentage),
            });
          });

          patientRRData.forEach((file) => {
            allList.push({
              dater: moment(file.dateOnset).format("YYYY-MM-DD HH:mm"),
              breaths: decryptData(file.breathsPerMinute),
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

  // const selectedAxis = () => {
  //   if (value === "Days") {
  //     return patientRecordsByDates;
  //   } else if (value === "Months") {
  //     return patientRecordsByMonths;
  //   } else if (value === "Hours") {
  //     return patientRecordsByHours;
  //   }
  // };

  // var itr = moment.twix(startDate, endDate).iterate("days");
  // var range = [];
  // while (itr.hasNext()) {
  //   range.push(itr.next().format("DD-MM-YY"));
  // }

  // var getDate = [];
  // range.forEach((file) => {
  //   const filteredData = patientRecordsByMonths.sort((item) =>
  //     item.includes(file)
  //   );
  // //  console.log("filteredData", filteredData);
  //   if (filteredData != "") {
  //     getDate.push(filteredData);
  //   }
  // });

  // var getTemp = [];
  // range.forEach((file) => {
  //   const filteredData1 = patientRecords0.filter((item) => item.includes(file));
  //  // console.log("filteredData1", filteredData1);
  //   if (filteredData1 != "") {
  //     getTemp.push(filteredData1);
  //   }
  // });

  // var getTemp = [];
  // const arr1 = patientRecordsByMonths
  // const arr2 = patientRecordsByHours
  // const arr3 = arr1.concat(arr2);

  //console.log("patientRecordsByMonths", patientRecordsByMonths);
  //console.log("patientRecordsByHours", patientRecordsByHours);
  //console.log("range", range);
  //console.log("getDate", getDate);
  //console.log("getTemp", getTemp);
  // console.log("patientId:", props.patientDetails.patientId);

  // const setDate = () => {
  //   if (startDate != "" && endDate != "") {
  //     return getDate;
  //   } else {
  //     return patientRecordsByMonths;
  //   }
  // };

  // const setTemp = () => {
  //   if (StartTemp != "" && endTemp != "") {
  //     return getTemp;
  //   } else {
  //     return patientRecordsByMonths;
  //   }
  // };


  return (
    <div className="trends-card">
      <div className="trends-card-sub">
        <Card className="trends-card-sec">
          <Card.Body className="mainCard1Body">
            <div className="innerMainCard1Body">
              <div className="imageDiv1">
                <span>
                  <img
                    className="patientImage1"
                    alt="Global Medics"
                    src={props.patientDetails.img}
                    style={{
                      border: props.imgBorderColor,
                    }}
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
        <Card className="trends-card-sec">
          <div className="timeDiv">
            <p style={{ color: "#209F85" }}>
              {" "}
              Your Time {moment(props.time).format("HH:mm A")} Today{" "}
              {moment(props.time).format("MMM")},{" "}
              {moment(props.time).format("YY")}{" "}
            </p>
            {/* <p style={{ marginTop: "-9px" }}>
              {" "}
              Your Time {moment(props.time).format("HH:mm A")} Today{" "}
              {moment(props.time).format("MMM")},{" "}
              {moment(props.time).format("YY")}{" "}
            </p> */}
          </div>
        </Card>
        <Card className="trends-card-sec">
          <div className="symptomDiv">
            <p style={{ color: "black", fontWeight: "bold", marginTop: "-5px" }}>
              Symptoms :
              {/* {props.patientDetails.patientSymptoms[0].patientGroup} */}
            </p>

            <div className="symptomsfstDiv">
              <div className="symptomsSecondDiv">
                {/* {  props.patientDetails.patientSymptoms.length > 0 ? 
                <> 
                {
                 props.patientDetails.patientSymptoms[0].subSymptoms.map(
                  (item, i) => {
                    return (
                      <>
                        <div style={{ width: "200%"}}>
                          <span className="symptomLabel"> {item.label} </span>
                          <br></br>
                          <span style={{paddingLeft:'5px',fontWeight:'bold',}}> {item.symptoms} </span>
                          <br></br>
                          <span className="report">
                            Reported: {item.lastUpdate}
                          </span>
                        </div>
                      </>
                    );
                  }
                )
                }
                  </>
                :
                <><p>No data </p></> 
                }  */}
                <p style={{marginLeft:"1rem"}}>No data </p>

              </div>
            </div>

          </div>

        </Card>
        <Card className="trends-card-sec1">
          {/* <div
            className="charts"
            style={{ marginTop: "10px", overflow: "auto", height: "100%" }}
          > */}
          {/* { newArr.length > 0  ? <LineChart2 height="100%" xpid={props.patientDetails.patientId}  pcdT={TempRatePatientData} pcdB={BPRatePatientData} pcdH={HRRatePatientData} pcdR={RRRatePatientData} pcdS={SPORatePatientData}/>: <><p>Data Loading</p></>}  */}

          {/* { newArr.length > 0  ? <LineChart2 height="100%" xpid={props.patientDetails.patientId}   xdata={newArr}/>: <><p>Data Loading</p></>} */}
          {/* {newArr.length > 0 ? <VitalsGraph xpid={props.patientDetails.patientId} xdata={newArr} /> : <><p>Data Loading</p></>} */}
          {/* <AxesChart height="100%" /> */}

          {newArr.length > 0 ? (
            <VitalsGraph
              xpid={props.patientDetails.patientId}
              // xdata={newArr}
            />
          ) : (
            <>
              <p>Data Loading</p>
            </>
          )}
          {/* </div> */}
        </Card>
      </div>
    </div>
  );
}

export default VitalSigns;
