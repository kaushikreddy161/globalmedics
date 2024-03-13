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

function PatientOverView(props) {
 // const { instance } = useMsal();
 // const activeAccount = instance.getActiveAccount();
  const { user } = useContext(UserContext);

  const [clinicMember, setClinicMember] = useState([]);
  const [doctorPatient, setDoctorPatient] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(){

        if (user) {
          // const REALM_APP_ID = "globalmedics-yxogc";
          // const app = new Realm.App({ id: REALM_APP_ID });
          // const credentials = Realm.Credentials.anonymous();
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
    // color based on daily checking feedback
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
        <div style={{ display: "flex" }} className="row">
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
                    RecoveryStatus:
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

        <div className="row" style={{ marginBottom: "7vh", display: "flex" }}>
          <Card className="mainCard33">
            <div className="mainCard3Body">
              <p className="patientdetails">Patient Details</p>
              <hr style={{ border: "1px solid #209F85" }} />
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
                    {/* <p>{decryptData(props.patientDetails.phoneNumber)}</p> */}
                  </div>
                  <div className="emailId1">
                    <p className="patientDetails">Email Address:</p>
                    {/* <p>{decryptData(props.patientDetails.email)}</p> */}
                  </div>
                </div>
              </div>
              <div>
                <hr style={{ border: "1px solid #209F85" }} />
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
                      <p className="patientDetails">
                        Next of Kin Email Address
                      </p>
                      <p>{props.patientDetails.nextOfKinEmail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="mainCard4">
            <div className="mainCard4Body">
              <p className="multiDiciplinaryText">
                Multi Diciplinary Team (MDT) Details
              </p>
              <hr style={{ border: "1px solid #209F85" }} />
              <div className="mainCard4Body11">
                <div>
                  <p className="patientDetails">Patient Group</p>
                  <p>{props.patientDetails.patientGroup}</p>
                </div>
                <div>
                  <p className="patientDetails">Last Updated</p>
                  <p>{props.patientDetails.lastUpdated}</p>
                </div>
                <div>
                  <p className="patientDetails">Medics Group</p>
                  <p>{props.patientDetails.medicsGroup}</p>
                </div>
              </div>
              <br />
              <p className="clinicalTeamMem">Clinical Team Members</p>
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
      </div>
   
  );
}

export default PatientOverView;
