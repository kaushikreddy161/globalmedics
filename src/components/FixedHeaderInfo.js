import React, { useEffect, useContext, useState, createContext } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import IconRole from "../assets/icon-role.png";
import CareManager from "../assets/icon-care-manager.png";
import Patient from "../assets/icon-patient.png";
import Others from "../assets/icon-addOther.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconPatientImage from "../assets/icon-patient-photo.png";
import "./FixedHeader.css";

import IconFeedbackLeft from "../assets/icon-feedback1.png";
import IconFeedbackRightOld from "../assets/icon-feedback2.png";
import IconFeedbackRight from "../assets/icon-feedback-coins.png";

import Icon_AddLovedOnes from "../assets/icon-add-loved-ones.png";
import IconPatientInfo from "../assets/icon-pnt-info.png";
import IconSetupCareRing from "../assets/icon-setup-care-ring.png";
import IconHealthReports from "../assets/icon-pReports.png";
import VitalsBloodPressure from "../assets/vitals-blood-pressure.png";
import VitalsPulseRate from "../assets/vitals-pulse-rate.png";
import VitalsOxygenSaturation from "../assets/vitals-oxygen-saturation.png";
import VitalsBloodSugar from "../assets/vitals-blood-sugar.png";
import VitalsBreathingRate from "../assets/vitals-breathing-rate.png";
import VitalsTemperature from "../assets/vitals-temperature.png";
import IconDailyCheckIn from "../assets/icon-daily-checkIn.png";
import IconVitalsSummary from "../assets/icon-vitals-summary.png";
import IconVitalsDashboard from "../assets/icon-vitals-dashboard.png";
import IconCManager from "../assets/icon-cmanager.png";
import IconCRConsent from "../assets/icon-care-rings-consent.png";
import IconAddCarerInfo from "../assets/icon-add-local-care-info.png";
import IconSymptoms from "../assets/icon-symptoms.png";
import IconSymNose from "../assets/icon-sym-rnose.png";
import IconSymCough from "../assets/icon-sym-cough.png";
import IconSymUrine from "../assets/icon-sym-urine.png";
import IconSymBowel from "../assets/icon-sym-bowel.png";
import IconAddDoctor from "../assets/icon-add-doctor.png";
import IconCarer from "../assets/icon-carer.png";
import IconPatientList from "../assets/icon-patients-list.png";
import IconServices from "../assets/icon-services.png";
import IconCareTaker from "../assets/icon-care-taker.png";
import IconHeadache from "../assets/icon-sym-headache.png";
import IconThroat from "../assets/icon-sym-throat.png";
import IconEye from "../assets/icon-sym-eye.png";
import IconFever from "../assets/icon-sym-fever.png";
import IconDeviceRegistration from "../assets/icon-dev-reg.png";
import IconDeviceConsent from "../assets/icon-dev-con.png";
import IconGoogleFit from "../assets/icon-google-fit.png";
import ImgCareCustomiseAccess from "../assets/img-care-giver-detail.png";
import IconChronicCondition from "../assets/icon-chronic-condition.png";
import IconInfoHealing from "../assets/icon-info-healling.png";
import IconInviteCommunity from "../assets/icon-invite-community.png";
import IconKarmaKlub from "../assets/icon-karma-klub.png";
import IconEmail from "../assets/icon-email.png";
import IconHeaderCamera from "../assets/icon-camera-header.png";
import IconHearMedication from "../assets/icon-hear-medi.png";
import IconBPMedication from "../assets/icon-bp-medi.png";
import IconDBMedication from "../assets/icon-diabetes-medi.png";
import IconArthriMedication from "../assets/icon-arthri-medi.png";
import IconLungMedication from "../assets/icon-fh-lung-medi.png";
import IconAlzheMedication from "../assets/icon-fh-alzhe-medi.png";
import IconSetMedication from "../assets/icon-set-medi.png";
import IconHealthInsurance from "../assets/icon-h-insurance.png";
import IconSeverityPain from "../assets/icon-SeverityPain.png";
import IconEmergencyConsent from "../assets/icon-emergency-consent.png";
import IconAnyOther from "../assets/icon-any-other.png";
import IconAlertnessCheck from "../assets/icon-alertness-check.png";
import IconVerbalResponsiveness from "../assets/icon-verbal-responsiveness.png";
import IconPainCheck from "../assets/icon-pain-check.png";
import IconEmergencyGuidance from "../assets/icon-emergency-guidance.png";
import IconRemoteCareSteps from "../assets/icon-remote-care-steps.png";
import IconStepsToRemoteCare from "../assets/icon-steps-to-remote-care.png";
import IconTiredness from "../assets/icon-tiredness.png";

import CarouselSlider from "../pages/CarouselSlider";
import { UserContext } from "../contexts/user.context";
import { useMsal } from '@azure/msal-react';
import axios from "axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FixedHeaderInfo(props) {
   console.log("props:", props);
  const navigate = useNavigate();
  const { user, pId, pName, adbuser,patientSelfId } = useContext(UserContext);
  console.log("pId:", pId);
  console.log("adbuser:", adbuser);
  console.log("ptientSelfID", patientSelfId);

  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const [fgpicture, setFGPicture]= useState("");
  const [fName, setfName] = useState(activeAccount.idTokenClaims.family_name);
  const [lName, setlName] = useState(activeAccount.idTokenClaims.given_name);
  


  const onBack = () => {
    const path = `/careManagerDetails`;
    navigate(path);
  };
  
async function facebookPIC(fuserid,access_token){
  // let userInfo = await axios.get("https://graph.facebook.com/v3.2/"+fuserid+"/picture?access_token="+access_token+"&type=square",
 // let userInfo = await axios.get(`https://graph.facebook.com/me?fields=name,gender,location,picture&access_token=${access_token}`, 
  let userInfo = await axios.get(`https://graph.facebook.com/me?fields=name&access_token=${access_token}`, 
  {
     headers: {
       'Access-Control-Allow-Origin': '*',
    //   Authorization: `Bearer ${access_token}`,
       "Content-Type": "application/json",
     },
   });
   console.log("userInfo facebook:", userInfo);
 }

  const googlePIC = async (access_token) => {
    let userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", 
    {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    });
    setFGPicture(userInfo.data.picture);
    console.log("userInfo google in fixed header:", userInfo.data.picture);
  }

  useEffect(() => {    
    if (activeAccount){
        if (activeAccount.idTokenClaims.idp){
          if (activeAccount.idTokenClaims.idp === "google.com"){
            console.log("logged in through adb2c google");
            // const { access_token, refresh_token } = res.data; // now I have valid access_token
            googlePIC(activeAccount.idTokenClaims.idp_access_token);
          } else if (activeAccount.idTokenClaims.idp === "facebook.com"){
            console.log("logged in through adb2c facebook");
            facebookPIC(activeAccount.idTokenClaims.oid,activeAccount.idTokenClaims.idp_access_token);
            } else {
            console.log("logged in through adb2c");
          }
        }
      } 
      //  loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    

  const onSubmit = async (event) => {
    event.preventDefault();
    navigate(-1);
  };
  const datex = new Date();

  let title = props.title;
  let title2 = props.title2;
  let title3 = "" + props.title3;
  let limg = "";
  let rimg = "";
  let pname = "";
  if (pName) {
    pname = pName;
  } else {
    pname = lName + " " + fName;
  }


  if (props.limg === "if-h") {
    // feedback page left image
    if (fgpicture !== "" && (patientSelfId === adbuser || pId === adbuser)) {
      limg = fgpicture;
    } else {
    limg = IconInfoHealing;
    }
  }

// right hand side image 

 if (props.rimg === "adr") {
    rimg = IconCManager;
  } 



  // One line description for header 

  if (props.title2 === "role-des") {
    // role page information description
    title2 = "Choose the role that best describes what you want to do.";
  }
  else if (props.title2 == "dashboard-des") {
    title2 = "";
  }


  return (
    <Card
      style={{
        // borderTop: "6px solid #1D5A90",
        borderRadius: "10px",
        padding: "20pt",
        background: "#F2F8F1",
        marginTop: "0rem",
        marginBottom: "0rem",
        maxWidth: "500px",
        // position: "fixed",
        // zIndex: "2",
      }}
    >
      <Box>
        <Grid
          container
          style={{
            maxWidth: "500px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            class="container"
            style={{ marginTop: "-1rem", marginBottom: "-1rem" }}
          >
            <div class="row">
              <div className="col-2" style={{ marginBottom: "0rem" }}>
                <ArrowBackIosIcon
                  // onClick={onBack}
                  onClick={onSubmit}
                  style={{
                    marginTop: "0rem",
                    cursor: "pointer",
                    marginBottom: "0rem",
                  }}
                />
              </div>
              <div className="col-8">
                <p
                  style={{
                    // fontSize: "1.5rem",
                    fontFamily: "Helvetica",
                    color: "#209F85",
                    marginBottom: "0pt",
                    marginTop: "-0.1rem",
                    textAlign: "center",
                  }}
                  className="title"
                >
                  {title}
                </p>
              </div>
            </div>
            <div class="row">
              <div className="col-2">
                <p
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    // marginTop: "0rem",
                    // marginBottom: "0rem",
                  }}
                  className="pnt-icon"
                >
                  <img
                    src={limg}
                    style={{
                      // alignItems: "center",
                      // display: "flex",
                      // justifyContent: "center",
                      // marginLeft: "-1rem",
                      marginTop: "0rem",
                      width: "150%",
                      height: "auto",
                      borderRadius: "50px",
                      // maxWidth: "90px",
                      // minWidth: "45px",
                    }}
                  />
                </p>
                <p
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "0rem",
                    marginBottom: "0rem",
                    color: "#707070",
                    textAlign: "center",
                  }}
                  className="pnt-name"
                >

                  {pname}
                </p>
              </div>
              <div className="col-7">
                <p
                  style={{
                    // fontSize: "100%",
                    fontFamily: "Helvetica",
                    color: "#707070",
                    marginBottom: "12pt",
                    marginTop: "0pt",
                    textAlign: "center",
                  }}
                  className="title2"
                >
                  {title2}
                </p>
              </div>
              <div className="col-3" style={{ marginTop: "0rem" }}>
                <img
                  src={rimg}
                  // style={{ width: "auto", minWidth: "30px", maxWidth: "90px" }}
                  style={{ width: "120%" }}
                />
              </div>
            </div>
          </div>
        </Grid>
      </Box>
    </Card>
  );
}
export default FixedHeaderInfo;
