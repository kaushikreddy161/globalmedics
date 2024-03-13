import React, { useState, useEffect, useContext } from "react";
// import * as Realm from "realm-web";
import { useMsal } from '@azure/msal-react';
import "./PatientReports.css";
import moment from "moment";
//import { MdModeEdit } from "react-icons/md";
import { AiTwotoneFlag } from "react-icons/ai";
import { Card } from "react-bootstrap";
import Loading from "../../components/Loading";
//import cypherData from "../../components/cypherData";
import decryptData from "../../components/decryptData";
import noimage from "../../assets/noimage.png";
import { UserContext } from "../../../contexts/user.context";

import { FaFilter } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";


import User from "../../assets/user.png";
import Device1 from "../../assets/device1.png";
import Device2 from "../../assets/device2.png";


import IconPulse from "../../assets/icon-pulse-report.png";
import IconDiastolic from "../../assets/icon-vs-diastolic.png";
import IconSystolic from "../../assets/icon-vs-systolic.png";
import IconTemperature from "../../assets/icon-vs-temp.png";
import IconSPO2 from "../../assets/icon-vs-spo2.png";
import IconBSugar from "../../assets/icon-vs-bsugar.png";
import IconRespiratory from "../../assets/icon-vs-respiratory.png";


import Speedometer from "react-d3-speedometer";
// import {Divider} from "@mui/material";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Grid from "@mui/material/Grid";

import Container from "@mui/material/Container";
// import Card from "@mui/material/Card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



function PatientOverView(props) {
  const { user } = useContext(UserContext);
  const [clinicMember, setClinicMember] = useState([]);
  const [doctorPatient, setDoctorPatient] = useState([]);
  const [loading, setLoading] = useState(true);

  const [theArray, setTheArray] = useState([]);
  const [showTextInput, setShowTextInput] = useState(true);
  const [patientsData, setPatientsData] = useState([]);
  const [duplicatePatientsData, setDuplicatePatientsData] = useState([]);
  const [noData, setNoData] = useState(true);
  const [searchText, setSearchText] = useState("");
  const excludeColumns = ["id", "timeLine", "remainder", "alerts", "img"];


  const showTextHandle = () => {
    setShowTextInput(false);
  };

  const handleChange = (value) => {
    setSearchText(value);
  };

  const showAddNew = () => {
    filterData(searchText);
    setShowTextInput(true);
  };

  const filterData = (value) => {
    // const array = value;
    setSearchText("");
    setTheArray((oldArray) => [...oldArray, value]);
    const lowercasedValue = value.toLowerCase().trim();
    const filteredData = patientsData.filter((item) => {
      return Object.keys(item).some((key) =>
        excludeColumns.includes(key)
          ? false
          : item[key].toString().toLowerCase().includes(lowercasedValue)
      );
    });
    if (lowercasedValue === "male") {
      const filteredData = patientsData.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase() === lowercasedValue
        );
      });
      setPatientsData(filteredData);
    } else if (filteredData.length === 0) {
      setNoData(false);
    } else {
      setPatientsData(filteredData);
    }
  };

  useEffect(() => {
    async function fetchData() {

      if (user) {
        //const REALM_APP_ID = "globalmedics-yxogc";
        //const app = new Realm.App({ id: REALM_APP_ID });
        //const credentials = Realm.Credentials.anonymous();
        try {
          // const user = await app.logIn(credentials);
          const doctorPatientData = user.functions.getPatientDoctor(
            props.patientDetails.patientId
          );

          doctorPatientData.then((respDoc) => {
            const clinicalMembersData = user.functions.getMultiDisciplinaryTeam();
            setDoctorPatient(respDoc);
            clinicalMembersData.then((respClinial) => {
              // const primaryDoc = doctorPatient.filter(dp => dp.doctType === "Primary")
              // console.log('primaryDoc', primaryDoc)
              const mdtData = doctorPatient.filter((dp) => dp.doctType !== "Primary");
              // setClinicDoctor(mdtData)
              // console.log('mdtData', mdtData)
              var TempClinicMemData = [];
              mdtData.forEach((file) => {
                //  console.log("file.doctId", file.doctId);
                const getClinicData = respClinial.find(
                  (d) => d._id.toString() === file.doctId
                );
                TempClinicMemData.push(getClinicData);
              });

              setClinicMember(() => TempClinicMemData);
              setLoading(false);
            });
          });
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchData();
  }, [doctorPatient]);

  const clr = () => {
    if (props.patientDetails.patienttype === "prime") {
      return "red";
    } else if (props.patientDetails.patienttype === "medium") {
      return "yellow";
    } else if (props.patientDetails.patienttype === "normal") {
      return "green";
    }
  };


  const handleRemoveClick = (index) => {
    // console.log("patientsData", patientsData);
    const list = [...theArray];
    list.splice(index, 1);
    setTheArray(list);
    // setPatientsData(prevPatientsData)
    //   const filteredArray  = duplicatePatientsData.filter(function(array_el){
    //     return theArray.filter(function(anotherOne_el){
    //        return Object.keys(array_el).some((key) =>
    //        excludeColumns.includes(key)
    //          ? false
    //          : array_el[key].toString().toLowerCase().includes(anotherOne_el)
    //      )
    //     }).length === 0
    //  });
    if (index === 0) {
      setPatientsData(duplicatePatientsData);
      setNoData(true);
      // console.log("afterDel", patientsData);
    }
    // else{
    //   setPatientsData(filteredArray)
    // }
    // console.log("index", index);
  };


  return (

    <div className="main-screen1">
      <div className="main-screen1-sub">

        <div className="row">
          <div class="col">
            <Card className="mainCard1">
              <Card.Body className="mainCard1Body">
                <div className="innerMainCard1Body1">
                  <div className="imageDiv">
                    <span>

                      {
                        props.patientDetails.img !== "" ?
                          <img
                            className="patientImage"
                            alt="Global Medics"
                            src={props.patientDetails.img}
                            style={{
                              border: props.imgBorderColor,
                            }}
                          />
                          :
                          <img
                            className="patients-image"
                            style={{
                              border: clr,
                            }}
                            alt="Global Medics" src={noimage}

                          />
                      }

                    </span>
                  </div>

                  <div className="nameDiv-1">
                    <p style={{ display: "inline-block", fontWeight: "500" }} className="margin-0">
                      {props.patientDetails.patientName}
                    </p>
                    <p className="margin-0">
                      Last Consult:{" "}
                      <span style={{ color: "#209f85" }}>
                        {props.patientDetails.lastConsult}days ago
                      </span>
                    </p>
                  </div>
                  <div className="nameDiv-2" >
                    <p className="margin-0">
                      Recovery Status:
                      <span className="recoveryButton">
                        {props.patientDetails.recoveryStatus}
                      </span>
                    </p>
                    <p className="margin-0">
                      Watch Closely{" "}
                      <AiTwotoneFlag
                        color="red"
                        size="15px"
                        style={{ marginLeft: "20px" }}
                      />
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card className="mainCard2">
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
          </div>
        </div>

        <div className="row">
          <div className="filter-bar-box">
            <Card className="filter-bar-box2">
              <Card.Body >
                <FaFilter
                  style={{
                    alignItems: "center",
                    color: "blue",
                    fontSize: "12px",
                  }}
                />
                <span className="filter-name">Filter By </span>
                {theArray.map((input, i) => (
                  <div className="filter-button" style={{ marginTop: "0.2%" }}>
                    <text>
                      <GrFormClose
                        style={{ marginTop: "0.5%", marginRight: "10px" }}
                        onClick={(e) => handleRemoveClick(i)}
                      />
                      {input}
                    </text>
                  </div>
                ))}
                {showTextInput ? (
                  <button
                    onClick={showTextHandle}
                    style={{
                      width: "100px",
                      fontSize: "12px",
                      borderStyle: "dashed",
                    }}
                  >
                    Add New +
                  </button>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Type to search..."
                      value={searchText}
                      onChange={(e) => handleChange(e.target.value)}
                      style={{
                        width: "100px",
                        fontSize: "12px",
                        borderStyle: "dashed",
                        marginLeft: "5px",
                      }}
                    />
                    <button
                      onClick={showAddNew}
                      style={{
                        width: "100px",
                        fontSize: "12px",
                        borderStyle: "dashed",
                      }}
                    >
                      Search
                    </button>
                  </>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row">
          <div class="col-3">
            <Card className="mainCard-dev">
              <div className="mainCard4Body">Category of Reports
                <div className="mainCard4Body">
                  Pathology Reports
                  <div className="mainCard4Body">
                    Blood<br /><br /><br />
                    urine<br /><br /><br />
                    Stool<br /><br /><br />
                    Sputum<br /><br /><br />
                    Others
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div class="col-9">
            <Card className="mainCard-dev">
              <div className="mainCard4Body">View (and Annotate) Report
              </div>
            </Card>
          </div>
        </div>



      </div>
    </div>

  );
}

export default PatientOverView;
