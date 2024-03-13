import React, { useState, useEffect,useContext } from "react";
// import * as Realm from "realm-web";
import { useMsal } from '@azure/msal-react';
import "./patientoverview.css";
import moment from "moment";
//import { MdModeEdit } from "react-icons/md";
import { AiTwotoneFlag } from "react-icons/ai";
import { Card } from "react-bootstrap";
import Loading from "../../components/Loading";
//import cypherData from "../../components/cypherData";
import decryptData from "../../components/decryptData";
import noimage from "../../assets/noimage.png";
import { UserContext } from "../../../contexts/user.context";

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
  return (

    <div className="main-screen1">

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
                  <p style={{ display: "inline-block", fontWeight: "500" }}>
                    {props.patientDetails.patientName}
                  </p>
                  <p>
                    Last Consult:{" "}
                    <span style={{ color: "#209f85" }}>
                      {props.patientDetails.lastConsult}days ago
                    </span>
                  </p>
                </div>
                <div className="nameDiv-2" >
                  <p>
                    Recovery Status:
                    <span className="recoveryButton">
                      {props.patientDetails.recoveryStatus}
                    </span>
                  </p>
                  <p>
                    Watch Closely{" "}
                    <AiTwotoneFlag
                      color="red"
                      size="15px"
                      style={{ marginLeft: "30px" }}
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




      <div class="row">
        <div class="col-6">
          <Card className="mainCard33a">
            <div className="mainCard3Body">
              <p className="patientdetails">Patient Particulars</p>
              <hr className="hr" />
              <div className="mainCard3Body11">
                <div style={{ display: "flex" }}>
                  <div className="genderAge1">
                    <div>
                      <p className="patientDetails">Gender:</p>
                      <p>{props.patientDetails.gender}</p>
                    </div>
                    <div>
                      <p className="patientDetails">Age:</p>
                      <p>{props.patientDetails.age}</p>
                    </div>
                  </div>
                  {/* <MdModeEdit size='20px' style={{ marginLeft: '285px', marginTop: '5px' }} /> */}
                </div>
                <div style={{ display: "flex" }}>
                  <div className="hgtWgtBmi1">
                    <div>
                      <p className="patientDetails">Height:</p>
                      <p>{props.patientDetails.height} cm</p>
                    </div>
                    <div>
                      <p className="patientDetails">Weight:</p>
                      <p>{props.patientDetails.weight} kg</p>
                    </div>
                  </div>
                  <div className="bmi1">
                    <p className="patientDetails">BMI:</p>
                    <p>{props.patientDetails.bmi}</p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div className="bgPNEmail1">
                    <div>
                      <p className="patientDetails">
                        Blood&#8239;&#8239;Group:
                      </p>
                      <p>{props.patientDetails.bloodGroup}</p>
                    </div>
                  </div>
                  <div className="PhoneNo1">
                    <p className="patientDetails">Phone&#8239;Number:</p>
                    <p>{decryptData(props.patientDetails.phoneNumber)}</p>
                  </div>
                  <div className="emailId1">
                    <p className="patientDetails">Email Address:</p>
                    {/* <p>{decryptData(props.patientDetails.email)}</p> */}
                  </div>
                </div>
              </div>
              {/* <div>
                <hr className="hr" />
                <div className="mainCard3Body22">
                  <div>
                    <p className="patientDetails">Next of Kin Full Name</p>
                    <p>{props.patientDetails.nextOfKinFullName}</p>
                  </div>
                  <div className="nextOf">
                    <div>
                      <p className="patientDetails">Next of Kin Phone Number</p>
                      <p>{props.patientDetails.nextOfKinPhoneNumber}</p>
                    </div>
                    <div>
                      <p className="patientDetails-mail">
                        Next of Kin Email Address
                      </p>
                      <p>{props.patientDetails.nextOfKinEmail}</p>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </Card>
        </div>
        <div class="col-6">
          <Card className="mainCard-right">
            <div className="mainCard4Body">
              <p className="multiDiciplinaryText">
                Symptoms
              </p>
            </div>
          </Card>
        </div>
      </div>

      <div className="row" style={{marginTop:"0rem"}}>
        <div class="col">
          <Card className="mainCard-vital">
            <div className="mainCard4Body">
              <p className="multiDiciplinaryText">
                Vitals
              </p>
              {/* <hr style={{ width:"95%", border: "2px solid #209F85",marginBottom:"0rem",marginTop:"0rem", }} /> */}

              <div class="row">
                <div class="col guage-center">

                  <Grid item xs={4} sm={4} md={4}>
                    <>
                      <Item className="gauge-card">
                        <Speedometer
                          minValue={0}
                          maxValue={180}
                          maxSegmentLabels={12}
                          needleHeightRatio={0.8}
                          ringWidth={15}
                          width={130}
                          height={100}
                          segments={6}
                          // value={pulValue}
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
                        <p className="vital-name">Pulse Rate</p>
                      </Item>
                    </>
                  </Grid>

                </div>
                <div class="col guage-center">
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                    <Item className="gauge-card">
                        <Speedometer
                          minValue={0}
                          maxValue={180}
                          maxSegmentLabels={12}
                          needleHeightRatio={0.8}
                          ringWidth={15}
                          width={130}
                          height={100}
                          segments={6}
                          // value={pulValue}
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
                        <p className="vital-name">Systolic Pressure</p>
                      </Item>
                    </>
                  </Grid>
                </div>
                <div class="col guage-center">
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                    <Item className="gauge-card">
                        <Speedometer
                          minValue={0}
                          maxValue={180}
                          maxSegmentLabels={12}
                          needleHeightRatio={0.8}
                          ringWidth={15}
                          width={130}
                          height={100}
                          segments={6}
                          // value={pulValue}
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
                        <p className="vital-name">Diastolic Pressure</p>
                      </Item>
                    </>
                  </Grid>
                </div>
                <div class="col guage-center">
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                    <Item className="gauge-card">
                        <Speedometer
                          minValue={0}
                          maxValue={180}
                          maxSegmentLabels={12}
                          needleHeightRatio={0.8}
                          ringWidth={15}
                          width={130}
                          height={100}

                          segments={6}
                          // value={pulValue}
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
                        <p className="vital-name">Blood Sugar</p>
                      </Item>
                    </>
                  </Grid>
                </div>
                <div class="col guage-center">
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                    <Item className="gauge-card">
                        <Speedometer
                          minValue={0}
                          maxValue={180}
                          maxSegmentLabels={12}
                          needleHeightRatio={0.8}
                          ringWidth={15}
                          width={130}
                          height={100}
                          segments={6}
                          // value={pulValue}
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
                        <p className="vital-name">Respiratory Rate</p>
                      </Item>
                    </>
                  </Grid>
                </div>
                <div class="col guage-center">
                  <Grid item xs={4} sm={4} md={4}>
                    <>
                    <Item className="gauge-card">
                        <Speedometer
                          minValue={0}
                          maxValue={180}
                          maxSegmentLabels={12}
                          needleHeightRatio={0.8}
                          ringWidth={15}
                          width={130}
                          height={100}
                          segments={6}
                          // value={pulValue}
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
                        <p className="vital-name">SPO2</p>
                      </Item>
                    </>
                  </Grid>
                </div>
                
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="row" style={{marginTop:"0rem"}}>
        <div class="col">
          <Card className="mainCard-mdt">
            <div className="mainCard4Body">
              <p className="multiDiciplinaryText">
                Multi Diciplinary Team (MDT)
              </p>
              {/* <hr className="hr" /> */}
              <table className="docters-table">
                <thead>
                  <th>
                    <tr>Name</tr>
                  </th>
                  <th>
                    <tr>Role</tr>
                  </th>
                </thead>
                <tbody>
                  {loading && (
                    <div className="text-center">
                      <Loading />
                    </div>
                  )}
                  {clinicMember &&
                    clinicMember.map((doctor, i) => {
                      return (
                        <>
                          <tr key={i + 1}>
                            <td>
                              <img
                                className="Team-images"
                                src={doctor.img}
                                alt={`image-${i}`}
                                key={i}
                              />
                              <span className="doctorsName">
                                {doctor.memberName}
                              </span>
                            </td>
                            <td className="doctorsRole">{doctor.memberRole}</td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        <div class="col">
          <Card className="mainCard-vs">
            <div className="mainCard4Body">
              <p className="multiDiciplinaryText">
                Care Ring Summary
              </p>
              {/* <hr style={{ width:"95%", border: "2px solid #209F85",marginBottom:"0rem",marginTop:"0rem", }} /> */}
              <table className="docters-table">
                <colgroup>
                  <col style={{ width: '15%' }} />
                  <col style={{ width: '55%' }} />
                  <col style={{ width: '30%' }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th></th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src={User} alt="Care ring summary" style={{ width: "60%" }} /></td>
                    <td>Care Ring 1</td>
                    <td>Next of Kin</td>
                  </tr>
                  <tr>
                    <td><img src={User} alt="Care ring summary" style={{ width: "60%" }} /></td>
                    <td>Care Ring 2</td>
                    <td>Family Member</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
      <div className="row">
        <div class="col">
          <Card className="mainCard-dev">
            <div className="mainCard4Body">
              <p className="multiDiciplinaryText">
                Devices
              </p>
              {/* <hr style={{ width:"95%", border: "2px solid #209F85",marginBottom:"0rem",marginTop:"0rem", }} /> */}
              <table className="docters-table">
                {/* <colgroup>
                  <col style={{ width: '5%' }} />
                  <col style={{ width: '65%' }} />
                  <col style={{ width: '30%' }} />
                </colgroup> */}
                <thead>
                  <tr>
                    <th>Device</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                    <th>Vitals</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img src={Device1} alt="Care ring summary" style={{ width: "10%" }} /> Smart watch</td>
                    <td>Fire-Boltt</td>
                    <td>Ninja Call Pro Max</td>
                    <td>SPo02, Sleep, Heart Rate, Breath</td>
                  </tr>
                  <tr>
                    <td><img src={Device2} alt="Care ring summary" style={{ width: "10%" }} /> Smart watch</td>
                    <td>Samsung Care+</td>
                    <td>Galaxy Watch4 Bluetooth</td>
                    <td>SPo02, Sleep, Heart Rate, Breath, Steps</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>



    </div>

  );
}

export default PatientOverView;
