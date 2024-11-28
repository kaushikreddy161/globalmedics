import React, { useState, useEffect, useContext } from "react";
// import * as Realm from "realm-web";
import { useMsal } from '@azure/msal-react';
import "./PtOverview.css";
import moment from "moment";
//import { MdModeEdit } from "react-icons/md";
import { AiTwotoneFlag } from "react-icons/ai";
import { Card } from "react-bootstrap";
import Loading from "../../DoctorDashboard/components/Loading";
// import cypherData from "../../DoctorDashboard/components/cypherData";
import decryptData from "../../DoctorDashboard/components/decryptData";
import { UserContext } from "../../contexts/user.context";

import { useNavigate } from "react-router-dom";

import User from "../../DoctorDashboard/assets/user.png";
import Device1 from "../../DoctorDashboard/assets/device1.png";
import Device2 from "../../DoctorDashboard/assets/device2.png";

import IconPulse from "../../assets/icon-pulse-report.png";
import IconDiastolic from "../../assets/icon-vs-diastolic.png";
import IconSystolic from "../../assets/icon-vs-systolic.png";
import IconTemperature from "../../assets/icon-vs-temp.png";
import IconSPO2 from "../../assets/icon-vs-spo2.png";
import IconBSugar from "../../assets/icon-vs-bsugar.png";
import IconRespiratory from "../../assets/icon-vs-respiratory.png";
import IconInfo from '../../assets/DoctorDashboard/icon-info.png';
import Speedometer from "react-d3-speedometer";
import noimage from "../../DoctorDashboard/assets/noimage.png";
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



function PtOverview(props) {
  const { user } = useContext(UserContext);
  const [clinicMember, setClinicMember] = useState([]);
  const [doctorPatient, setDoctorPatient] = useState([]);
  const [loading, setLoading] = useState(true);
  const [patientChatBotData, setPatientChatBotData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (user) {
        //const REALM_APP_ID = "globalmedics-yxogc";
        //const app = new Realm.App({ id: REALM_APP_ID });
        //const credentials = Realm.Credentials.anonymous();
        try {

          const chatbotPatientData = await user.functions.GetchatbotAssistantData(props.patientDetails.patientId);
          setPatientChatBotData(chatbotPatientData);
          console.log("Patient ChatBot Detail", chatbotPatientData);
          console.log("Patient Overview Details", props.patientDetails.patientId);

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

  const navigate = useNavigate();
  const onGraph = () => {
    // console.log("hello");
    navigate(`/trends`);
  };


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

    <div className="container-fluid ms-3 pe-5">
      <div className='pt-2 info'><img src={IconInfo} className='imgs' /></div>
      <div class="row">
        <div class="col-6">
          <Card className="mainCard-pt">
            <div className="mainCard3Body">
              <p className="patientdetails">Patient Particulars</p>
              <hr className="hr" />

              <div class="container">
                <div class="row">
                  <div class="col-md-6">

                    <div class="mb-3">
                      <p className="patientDetails">Gender: <span class="pt_dl">{props.patientDetails.gender}</span></p>
                    </div>
                    <div class="mb-3">
                      <p className="patientDetails">Age: <span class="pt_dl">{props.patientDetails.age}</span></p>
                    </div>
                    <div class="mb-3">
                      <p className="patientDetails">Phone&#8239;Number: <span class="pt_dl">{props.patientDetails.phoneNumber}</span></p>
                    </div>
                    <div class="mb-3">
                      <p className="patientDetails">Email Address: <span class="pt_dl">{props.patientDetails.email}</span></p>
                    </div>
                    <div class="mb-3">
                      <p className="patientDetails">Address: <span class="pt_dl">{props.patientDetails.address}</span></p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <p className="patientDetails">Blood Group: <span class="pt_dl">{props.patientDetails.bloodGroup}</span></p>
                    </div>
                    <div class="mb-3">
                      <p className="patientDetails">Height: <span class="pt_dl">{props.patientDetails.height} cm</span></p>
                    </div>
                    <div class="mb-3">
                      <p className="patientDetails">Weight: <span class="pt_dl">{props.patientDetails.weight} kg</span></p>
                    </div>
                    <div class="mb-3">
                      <p className="patientDetails">BMI: <span class="pt_dl">{props.patientDetails.bmi}</span></p>
                    </div>
                  </div>
                </div>
              </div>




























              {/* <div className="mainCard3Body11">
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
                    <p>{props.patientDetails.phoneNumber}</p>
                  </div>
                  <div className="emailId1">
                    <p className="patientDetails">Email Address:</p>
                    <p>{props.patientDetails.email}</p>
                  </div>
                </div>
              </div> */}



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
          <Card className="mainCard-right-pt">
            <div className="mainCard4Body">
              <p className="multiDiciplinaryText">
                Symptoms
              </p>
              <hr className="hr" />
            </div>
          </Card>
        </div>
      </div>

      <div className="row" style={{ marginTop: "0rem" }}>
        <div class="col">
          <Card className="mainCard-vital-pt">
            <div className="mainCard4Body">
              <p className="multiDiciplinaryText">
                Vitals
              </p>
              <hr className="hr" />
              {/* <hr style={{ width:"95%", border: "2px solid #209F85",marginBottom:"0rem",marginTop:"0rem", }} /> */}

              <div class="row">
                <div class="col guage-center">

                  <Grid item xs={4} sm={4} md={4} onClick={onGraph}>
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
      <div className="row" style={{ marginTop: "0rem" }}>
        <div class="col">
          <Card className="mainCard-mdt">
            <div className="mainCard4Body">
              <p className="multiDiciplinaryText">
                Multi Diciplinary Team (MDT)
              </p>
              <hr className="hr" />
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
              <hr className="hr" />
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
          <Card className="mainCard-dev-pt">
            <div className="mainCard4Body">
              <p className="multiDiciplinaryText">
                Devices
              </p>
              <hr className="hr" />
              <table className="docters-table">
                {/* <colgroup>
                  <col style={{ width: '5%' }} />
                  <col style={{ width: '65%' }} />
                  <col style={{ width: '30%' }} />
                </colgroup> */}
                <thead>
                  <tr>
                    <th>Device Name</th>
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


      <div className="row">
        <div class="col">
          <Card className="mainCard-dev-pt">
            <div className="mainCard4Body">
              <p className="multiDiciplinaryText">
                Chat Bot Conversesion History
              </p>
              <hr className="hr" />
              <table className="docters-table">
                {/* <colgroup>
                  <col style={{ width: '5%' }} />
                  <col style={{ width: '65%' }} />
                  <col style={{ width: '30%' }} />
                </colgroup> */}
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Chief Complaints</th>
                    <th>Medical History</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>Fiver</td>
                    <td>No medical History</td>
                    <td>Consult</td>
                  </tr>
                  <tr>
                    <tr>
                      <td></td>
                      <td>Fiver</td>
                      <td>No medical History</td>
                      <td>Consultion Done</td>
                    </tr>
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

export default PtOverview;
