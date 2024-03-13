import React, { useState, useEffect, useContext } from "react";
// import * as Realm from "realm-web";
import { useMsal } from '@azure/msal-react';
import "../../pages/PatientReports/PatientReports.css";
import "../../pages/CarePlan/CarePlanGeneration.css";
import moment from "moment";
//import { MdModeEdit } from "react-icons/md";
import { AiTwotoneFlag } from "react-icons/ai";
import { Card } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import Switch from "@mui/material/Switch";
import { Button, Divider } from "@mui/material";
import noimage from "../../assets/noimage.png";
import { UserContext } from "../../../contexts/user.context";

import IconSelf from "../../../DoctorDashboard/assets/icon-nav-self.svg";
import IconRCM from "../../../DoctorDashboard/assets/icon-nav-care-manager.svg";
import IconRCG from "../../../DoctorDashboard/assets/icon-nav-care-giver.svg";
import IconFamily from "../../../DoctorDashboard/assets/icon-nav-family.svg";
import IconFriends from "../../../DoctorDashboard/assets/icon-nav-friends.svg";
import IconDoc from "../../../DoctorDashboard/assets/icon-nav-doc.svg";
import IconCarePlanGeneration from "../../../DoctorDashboard/assets/icon-care-plan-generation.png";
import IconInfo from "../../../DoctorDashboard/assets/icon-help.png";


import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";


// import Card from "@mui/material/Card";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));



function CarePlanGeneration(props) {
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
                <div className="row margin-m">
                  <div className="col-2">
                    <img className="CardImg" src={IconCarePlanGeneration} alt="" />
                  </div>
                  <div className="col-10">
                    <p className="CardText"><span className="green">Module Access for Roles</span></p>
                    <p className="CardText">Select which roles would have access to which modules for  performing the tasks allocated to them. Restricting access to other parts of the system keeps data secure.</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card className="mainCard2">
              <div className="m-a">
                <div className="row margin-t">
                  <div className="col-3"><span className="green">Target Market</span></div>
                  <div className="col-4">B2C for “Elders in India”</div>
                  <div className="col-5"></div>
                </div>
                <div className="row margin-t">
                  <div className="col-3"><span className="green">Target Program</span></div>
                  <div className="col-4">Launch Program</div>
                  <div className="col-5"></div>
                </div>
                <div className="row margin-t">
                  <div className="col-3"><span className="green">Duration</span></div>
                  <div className="col-4">From Date</div>
                  <div className="col-5">To Date </div>
                </div>
              </div>
              {/* <div className="timeDiv">
                <p style={{ color: "#209F85" }}>
                  {" "}
                  Your Time {moment(props.time).format("HH:mm A")} Today{" "}
                  {moment(props.time).format("MMM")},{" "}
                  {moment(props.time).format("YY")}{" "}
                </p> */}

              {/* <p style={{ marginTop: "-9px" }}>
                {" "}
                Your Time {moment(props.time).format("HH:mm A")} Today{" "}
                {moment(props.time).format("MMM")},{" "}
                {moment(props.time).format("YY")}{" "}
              </p> */}
              {/* </div> */}
            </Card>
          </div>
        </div>
        <div className="row">

          <Card className="CarePlan-Card">
            <div className="infoicon">
              <img src={IconInfo} alt="" />
            </div>
            <div class="CarePlan1">
              <div className="CarePlanWidth-img">
              </div>
              <div className="CarePlanWidth-text">
              </div>
              <div class="CarePlanWidth">
                Manage Care Ring
              </div>
              <div class="CarePlanWidth">
                Setup Care Plan
              </div>
              <div class="CarePlanWidth">
                Buy Products & Services
              </div>
              <div class="CarePlanWidth">
                Access Health Vault
              </div>
              <div class="CarePlanWidth">
                Update Health Status
              </div>
              <div class="CarePlanWidth">
                View Health Reports
              </div>
              <div class="CarePlanWidth">
                Perform Care
              </div>
              <div class="CarePlanWidth-right">
                Perform Care
              </div>
            </div>
            <div class="CarePlan">
              <div className="CarePlanWidth-img">
                <img src={IconSelf} alt="" />
              </div>
              <div className="CarePlanWidth-text">
                Self
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div className="CarePlanWidth-right">
                <i class="fa fa-chevron-right color-gray" aria-hidden="true"></i>
              </div>
            </div>
            <div class="CarePlan">
              <div className="CarePlanWidth-img">
                <img src={IconRCM} alt="" />
              </div>
              <div className="CarePlanWidth-text">
                Next of Kin
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div className="CarePlanWidth-right">
                <i class="fa fa-chevron-right color-gray" aria-hidden="true"></i>
              </div>
            </div>
            <div class="CarePlan">
              <div className="CarePlanWidth-img">
                <img src={IconRCG} alt="" />
              </div>
              <div className="CarePlanWidth-text">
                Local Care Giver
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div className="CarePlanWidth-right">
                <i class="fa fa-chevron-right color-gray" aria-hidden="true"></i>
              </div>
            </div>
            <div class="CarePlan">
              <div className="CarePlanWidth-img">
                <img src={IconFamily} alt="" />
              </div>
              <div className="CarePlanWidth-text">
                Family
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div className="CarePlanWidth-right">
                <i class="fa fa-chevron-right color-gray" aria-hidden="true"></i>
              </div>
            </div>
            <div class="CarePlan">
              <div className="CarePlanWidth-img">
                <img src={IconFriends} alt="" />
              </div>
              <div className="CarePlanWidth-text">
                Friends
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div className="CarePlanWidth-right">
                <i class="fa fa-chevron-right color-gray" aria-hidden="true"></i>
              </div>
            </div>
            <div class="CarePlan">
              <div className="CarePlanWidth-img">
                <img src={IconDoc} alt="" />
              </div>
              <div className="CarePlanWidth-text">
                Healthcare Providers
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div className="CarePlanWidth-right">
                <i class="fa fa-chevron-right color-gray" aria-hidden="true"></i>
              </div>
            </div>
            <div class="CarePlan">
              <div className="CarePlanWidth-img">
                <img src={IconRCM} alt="" />
              </div>
              <div className="CarePlanWidth-text">
                Care Manager
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div class="CarePlanWidth">
                <Switch defaultChecked size="small" />
              </div>
              <div className="CarePlanWidth-right">
                <i class="fa fa-chevron-right color-gray" aria-hidden="true"></i>
              </div>
            </div>


            <div className="CarePlan-btn">
              <div style={{
                width: "50%", marginTop: "10pt", marginBottom: "0pt",
              }}>
                <Button
                  style={{
                    background: "#707070",
                    borderRadius: 50,
                    width: "20%",
                    color: "#ffffff",
                    textTransform: "none",
                    fontSize: "12px",
                  }}
                  // onClick={onConfirm}
                  type="submit"
                >
                  Add Another Role
                </Button>
              </div>

              <div
                style={{
                  textAlign: "right",
                  marginTop: "10pt",
                  marginBottom: "0pt",
                  width: "50%"
                }}
              >
                <Button
                  style={{
                    background: "#1D5A90",
                    borderRadius: 50,
                    width: "20%",
                    color: "#ffffff",
                    textTransform: "none",
                    fontSize: "12px",
                  }}
                  // onClick={onConfirm}
                  type="submit"
                >
                  Confirm
                </Button>
              </div>
            </div>


          </Card>

        </div>
      </div>
    </div>

  );
}

export default CarePlanGeneration;
