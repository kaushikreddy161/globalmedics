import React, { useContext, useState, useEffect } from "react";
// gs import { UserContext } from "../contexts/user.context";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import moment from "moment";
import CarouselSlider from "./CarouselSlider";
import Switch from '@mui/material/Switch';
import FixedHeader from "../components/FixedHeader";
import SetVitalsTem from "../assets/icon-select-vit-tem.png";
import SetVitalsBPressure from "../assets/icon-select-vit-bprs.png";
import SetVitalsPRate from "../assets/icon-select-vit-prate.png";
import SetVitalsRes from "../assets/icon-select-vit-respiratory.png";
import SetVitalsSPO2 from "../assets/icon-select-vit-spo2.png";
import SetVitalsBSugar from "../assets/icon-select-vit-bsugar.png";
import IconInfo from "../assets/icon-help.png";

const SetVitals = () => {
 // const { user, pId, pName } = useContext(UserContext);
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const pId = activeAccount.idTokenClaims.sub;
  const user = "";
  const pName = "";
  const selectedPatient = ""; 


  const onInfo = () => {
    const path = `/information`;
    navigate(path);
  };

  const navigate = useNavigate();
  let dt2 = moment(new Date()).format("YYYY-MM-DDThh:mm:ss");

  const [dateTime, setdTime] = useState(dt2);
  const [systolic, setsystolic] = useState("");
  const [diastolic, setdiastolic] = useState("");
  const datex = new Date();
  const datey = new Date(dateTime);

  const [bpstatus,setBPStatus] = useState(false);
  const [prstatus,setPRStatus] = useState(false);
  const [rrstatus,setRRStatus] = useState(false);
  const [spstatus,setSPStatus] = useState(false);
  const [bsstatus,setBSStatus] = useState(false);  
  const [tpstatus,setTPStatus] = useState(false);

  const [bpSMin,setbpSMin] = useState("");
  const [bpDMin,setbpDMin] = useState("");
  const [prRMin,setprRMin] = useState("");
  const [rrRMin,setrrRMin] = useState("");
  const [spRMin,setspRMin] = useState("");
  const [bsRMin,setbsRMin] = useState("");
  const [tpRMin,settpRMin] = useState("");

  const [bpSMax,setbpSMax] = useState("");
  const [bpDMax,setbpDMax] = useState("");
  const [prRMax,setprRMax] = useState("");
  const [rrRMax,setrrRMax] = useState("");
  const [spRMax,setspRMax] = useState("");
  const [bsRMax,setbsRMax] = useState("");
  const [tpRMax,settpRMax] = useState("");

  const [bprFreq,setbprFreq] = useState("");
  const [prrFreq,setprrFreq] = useState("");
  const [rrrFreq,setrrrFreq] = useState("");
  const [sprFreq,setsprFreq] = useState("");
  const [bsrFreq,setbsrFreq] = useState("");
  const [tprFreq,settprFreq] = useState("");
 
  const [bpUnits,setbpUnits] = useState("");
  const [prUnits,setprUnits] = useState("");
  const [rrUnits,setrrUnits] = useState("");
  const [spUnits,setspUnits] = useState("");
  const [bsUnits,setbsUnits] = useState("");
  const [tpUnits,settpUnits] = useState("");
 

  useEffect(() => {
    // loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pId]);

  // const loadUser = async () => {
  //   //   console.log('user:',user.id);
  //       if (user) {
  //        let cid = BSON.ObjectID(user.id).toString();
  //        const carem = user.functions.getLovedOnes(cid);
  //       // console.log('carem:',carem);
  //        carem.then((resp) => {
  //             setlovedOnes(resp);
  //          });
  //      }
  //    };

  const onAddDevice = () => {
    // console.log("hello");
    navigate(`/comingSoon`);
  };

    // const onSubmit = async (event) => {
    //   event.preventDefault();
    //   console.log("submit");
    //   console.log("bpstatus:", bpstatus);
    //   console.log("frequency:", bprFreq);
    //   console.log("units:", bpUnits);
    //   console.log("bpsMin:", bpSMin);
    //   console.log("bpsMax:", bpSMax);
    //   console.log("bpdMin:", bpDMin);
    //   console.log("bpdmax:", bpDMax);
    // };

    const onSubmit = (event) => {
      event.preventDefault();
      let vital =[];
      vital = [
        {"title":"BloodPressure", "vitalsSubCatId":"","selectionStatus":bpstatus === true ? "active" : "inactive","dMin":bpDMin,"dMax":bpDMax,"sMin":bpSMin,"sMax":bpSMax,"rFrequency":bprFreq,"units":bpUnits},
        {"title":"PulseRate", "vitalsSubCatId":"","selectionStatus":prstatus === true ? "active" : "inactive","rMin":prRMin,"rMax":prRMax,"rFrequency":prrFreq,"units":prUnits},
        {"title":"RespiratoryRate", "vitalsSubCatId":"","selectionStatus":rrstatus === true ? "active" : "inactive","rMin":rrRMin,"rMax":rrRMax,"rFrequency":rrrFreq,"units":rrUnits},
        {"title":"SPO2", "vitalsSubCatId":"","selectionStatus":spstatus === true ? "active" : "inactive","rMin":spRMin,"rMax":spRMax,"rFrequency":sprFreq,"units":spUnits},
        {"title":"BloodSugar", "vitalsSubCatId":"","selectionStatus":bsstatus === true ? "active" : "inactive","rMin":bsRMin,"rMax":bsRMax,"rFrequency":bsrFreq,"units":bsUnits},
        {"title":"Temperature", "vitalsSubCatId":"","selectionStatus":tpstatus === true ? "active" : "inactive","rMin":tpRMin,"rMax":tpRMax,"rFrequency":tprFreq,"units":tpUnits}
      ];
        try {
          if (user) {
            //  console.log('auth:',user.id);
            let dt = new Date();
            let id = new BSON.ObjectID();
            let cid = BSON.ObjectID(user.id).toString();
            //  let pid = selLid;
            let pid = pId;
            const createx = user.functions.createPatientVitals(
              id,
              pid,
              "Normal",
              vital,          
              "careManager",
              cid,
              dt.toDateString(),
              "active",
              "GlobalMedics2021"
            );
            createx.then((resp) => {
              alert("Selected Vitals Added Successfully");
              navigate(`/setVitals`);
            });
          }
        } catch (error) {
          //  alert(error);
          console.log("error:", error);
        }
     };
   

  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{
          minHeight: "100vh",
          paddingBottom: "0rem",
        }}
      >
        <FixedHeader
          title="Set Vitals"
          title2="Select the vitals and their frequency of recording, depending on conditions."
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="vs"
        />
                <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-bp">
          <Card
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              // maxWidth: "500px",
              // display: "flex",
              // justifyContent: "center",
            }}
            className="left"
          >
            <Card.Body>
              <div className="container">
                <div className="form-container">
                  <Form
                    className="signup-form"
                    style={{ color: "#209F85" }}
                    onSubmit={onSubmit}
                  >
                    <div class="container">
                      <div class="row align-items-center">
                        <div class="col-6">Select Vitals</div>
                        <div class="col-3"></div>
                        <div
                          class="col-3"
                          style={{ textAlign: "right", cursor:"pointer" }}
                        >
                          <img src={IconInfo} onClick={onInfo}/>
                        </div>
                      </div>
                    </div>

                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-1rem",
                        marginRight: "-1rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            // height: "70px",
                            verticalAlign: "middle",
                            // marginLeft: "-1rem",
                            marginRight: "-2rem",
                          }}
                        >
                          <div class="row align-items-center m-space">
                            <div class="col-2">
                              <img src={SetVitalsBPressure} />
                            </div>
                            <div class="col-4 dark-green">
                            Blood Pressure
                            </div>
                            <div class="col-6" style={{ textAlign: "right" }}>
                              <Switch
                               name="bpstatus"
                               value={bpstatus}
                               onChange={(e) => setBPStatus(!bpstatus)}
                               color="primary"
                              />
                            </div>
                          </div>
                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-3 text-gray">Recording frequency</div>
                            <div class="col-3 text-gray" style={{ textAlign: "right" }}>Once every</div>
                            <div class="col-3" style={{ textAlign: "right" }}><input
                              type="number"
                              class="form-control"
                              name="bprFreq"
                              value={bprFreq}
                              onChange={(e) => setbprFreq(e.target.value)}
                              placeholder=""
                              min={0}
                              style={{
                                textAlign: "center",
                                borderRadius: "10px",
                              }}
                            /></div>
                            <div class="col-3">
                              <select class="form-control text-gray2 "
                                name="bpUnits"
                                onChange={(e) => setbpUnits(e.target.value)}
                              >
                                <option value="">hr / days</option>
                                <option value="hours">Hours</option>
                                <option value="days">Days</option>
                              </select>
                            </div>
                          </div>
                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-3 dark-green">Systolic</div>
                            <div class="col-3 text-gray"></div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Minimum</div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Maximum</div>
                          </div>
                          <div class="row align-items-center">
                            <div class="col-6 text-gray">Normal range<br />In mm HG</div>
                            <div class="col-3"><input
                              type="number"
                              class="form-control"
                              name="dpSMin"
                              value={bpSMin}
                              onChange={(e) => setbpSMin(e.target.value)}
                              min="0"
                              placeholder="115"
                              style={{
                                textAlign: "center",
                                borderRadius: "10px",
                                paddingLeft: "1.4rem",
                                color:"#707070",
                              }}
                            /></div>
                            <div class="col-3">
                              <input
                                type="number"
                                class="form-control"
                                name="dpSMax"
                              value={bpSMax}
                              onChange={(e) => setbpSMax(e.target.value)}
                                min="0"
                                placeholder="125"
                                style={{
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  paddingLeft: "1.4rem",
                                  color:"#707070",
                                }}
                              />
                            </div>
                          </div>
                          
                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-3 dark-green">Diastolic</div>
                            <div class="col-3 text-gray"></div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Minimum</div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Maximum</div>
                          </div>
                          <div class="row align-items-center">
                            <div class="col-6 text-gray">Normal range<br />In mm HG</div>
                            <div class="col-3"><input
                              type="number"
                              class="form-control"
                              name="dpDMin"
                              value={bpDMin}
                              onChange={(e) => setbpDMin(e.target.value)}
                              min="0"
                              placeholder="115"
                              style={{
                                textAlign: "center",
                                borderRadius: "10px",
                                paddingLeft: "1.4rem",
                                color:"#707070",
                              }}
                            /></div>
                            <div class="col-3">
                              <input
                                type="number"
                                class="form-control"
                                name="dpDMax"
                                value={bpDMax}
                                onChange={(e) => setbpDMax(e.target.value)}
                                min="0"
                                placeholder="125"
                                style={{
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  paddingLeft: "1.4rem",
                                  color:"#707070",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-1rem",
                        marginRight: "-1rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            // height: "70px",
                            verticalAlign: "middle",
                            // marginLeft: "-1rem",
                            marginRight: "-2rem",
                          }}
                        >
                          <div class="row align-items-center m-space">
                            <div class="col-2">
                              <img src={SetVitalsPRate} />
                            </div>
                            <div class="col-4 dark-green">
                              Pulse Rate
                            </div>
                            <div class="col-6" style={{ textAlign: "right" }}>
                            <Switch
                               name="prstatus"
                               value={prstatus}
                               onChange={(e) => setPRStatus(!prstatus)}
                               color="primary"
                              />
                            </div>
                          </div>
                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-3 text-gray">Recording frequency</div>
                            <div class="col-3 text-gray" style={{ textAlign: "right" }}>Once every</div>
                            <div class="col-3" style={{ textAlign: "right" }}><input
                              type="number"
                              class="form-control"
                              name="prrFreq"
                              value={prrFreq}
                              onChange={(e) => setprrFreq(e.target.value)}
                              placeholder=""
                              min={0}
                              style={{
                                textAlign: "center",
                                borderRadius: "10px",
                                // paddingLeft: "1.4rem",
                              }}
                            /></div>
                            <div class="col-3">
                            <select class="form-control text-gray2 "
                                name="prUnits"
                                onChange={(e) => setprUnits(e.target.value)}
                              >
                                <option value="">hr / days</option>
                                <option value="hours">Hours</option>
                                <option value="days">Days</option>
                              </select>
                            </div>
                          </div>
                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-3 text-gray"></div>
                            <div class="col-3 text-gray"></div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Minimum</div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Maximum</div>
                          </div>
                          <div class="row align-items-center">
                            <div class="col-6 text-gray">Normal range<br />Beats per minute</div>
                            <div class="col-3"><input
                              type="number"
                              class="form-control"
                              name="prRMin"
                              value={prRMin}
                              onChange={(e) => setprRMin(e.target.value)}
                              // readonly="readonly"
                              placeholder="115"
                              style={{
                                color:"#707070",
                                textAlign: "center",
                                borderRadius: "10px",
                                paddingLeft: "1.4rem",
                                
                              }}
                            /></div>
                            <div class="col-3">
                              <input
                                type="number"
                                class="form-control"
                                name="prRMax"
                                value={prRMax}
                                onChange={(e) => setprRMax(e.target.value)}
                                min="0"
                                placeholder="125"
                                style={{
                                  color:"#707070",
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  paddingLeft: "1.4rem",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    
                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-1rem",
                        marginRight: "-1rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            // height: "70px",
                            verticalAlign: "middle",
                            // marginLeft: "-1rem",
                            marginRight: "-2rem",
                          }}
                        >
                          <div class="row align-items-center m-space">
                            <div class="col-2">
                              <img src={SetVitalsRes} />
                            </div>
                            <div class="col-4 dark-green">
                            Respiratory  Rate
                            </div>
                            <div class="col-6" style={{ textAlign: "right" }}>
                            <Switch
                               name="rrstatus"
                               value={rrstatus}
                               onChange={(e) => setRRStatus(!rrstatus)}
                               color="primary"
                              />
                            </div>
                          </div>
                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-3 text-gray">Recording frequency</div>
                            <div class="col-3 text-gray" style={{ textAlign: "right" }}>Once every</div>
                            <div class="col-3" style={{ textAlign: "right" }}><input
                              type="number"
                              class="form-control"
                              placeholder=""
                              name="rrrFreq"
                              value={rrrFreq}
                              onChange={(e) => setrrrFreq(e.target.value)}
                              min={0}
                              style={{
                                textAlign: "center",
                                borderRadius: "10px",
                                // paddingLeft: "1.4rem",
                              }}
                            /></div>
                            <div class="col-3">
                            <select class="form-control text-gray2 "
                                name="rrUnits"
                                onChange={(e) => setrrUnits(e.target.value)}
                              >
                                <option value="">hr / days</option>
                                <option value="hours">Hours</option>
                                <option value="days">Days</option>
                              </select>
                            </div>
                          </div>
                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-3 text-gray"></div>
                            <div class="col-3 text-gray"></div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Minimum</div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Maximum</div>
                          </div>
                          <div class="row align-items-center">
                            <div class="col-6 text-gray">Normal range<br />Breaths per minute</div>
                            <div class="col-3"><input
                              type="number"
                              class="form-control"
                              name="rrRMin"
                              value={rrRMin}
                              onChange={(e) => setrrRMin(e.target.value)}
                              // value={115}
                              // readonly="readonly"
                              min="0"
                              placeholder="115"
                              style={{
                                color:"#707070",
                                textAlign: "center",
                                borderRadius: "10px",
                                paddingLeft: "1.4rem",
                              }}
                            /></div>
                            <div class="col-3">
                              <input
                                type="number"
                                class="form-control"
                                name="rrRMax"
                                value={rrRMax}
                                onChange={(e) => setrrRMax(e.target.value)}
                                min="0"
                                placeholder="125"
                                style={{
                                  color:"#707070",
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  paddingLeft: "1.4rem",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-1rem",
                        marginRight: "-1rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            // height: "70px",
                            verticalAlign: "middle",
                            // marginLeft: "-1rem",
                            marginRight: "-2rem",
                          }}
                        >
                          <div class="row align-items-center m-space">
                            <div class="col-2">
                              <img src={SetVitalsSPO2} />
                            </div>
                            <div class="col-4 dark-green">
                              SPO2
                            </div>
                            <div class="col-6" style={{ textAlign: "right" }}>
                            <Switch
                               name="spstatus"
                               value={spstatus}
                               onChange={(e) => setSPStatus(!spstatus)}
                               color="primary"
                              />
                            </div>
                          </div>
                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-3 text-gray">Recording frequency</div>
                            <div class="col-3 text-gray" style={{ textAlign: "right" }}>Once every</div>
                            <div class="col-3" style={{ textAlign: "right" }}><input
                              type="number"
                              class="form-control"
                              placeholder=""
                              name="sprFreq"
                              value={sprFreq}
                              onChange={(e) => setsprFreq(e.target.value)}
                              min={0}
                              style={{
                                textAlign: "center",
                                borderRadius: "10px",
                                // paddingLeft: "1.4rem",
                              }}
                            /></div>
                            <div class="col-3">
                            <select class="form-control text-gray2 "
                                name="spUnits"
                                onChange={(e) => setspUnits(e.target.value)}
                              >
                                <option value="">hr / days</option>
                                <option value="hours">Hours</option>
                                <option value="days">Days</option>
                              </select>
                            </div>
                          </div>
                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-3 text-gray"></div>
                            <div class="col-3 text-gray"></div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Minimum</div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Maximum</div>
                          </div>
                          <div class="row align-items-center">
                            <div class="col-6 text-gray">Normal range<br />In Percentage</div>
                            <div class="col-3"><input
                              type="number"
                              class="form-control" 
                              name="spRMin"
                              value={spRMin}
                              onChange={(e) => setspRMin(e.target.value)}
                              min="0"
                              placeholder="93"
                              style={{
                                color:"#707070",
                                textAlign: "center",
                                borderRadius: "10px",
                                paddingLeft: "1.4rem",
                              }}
                            /></div>
                            <div class="col-3">
                              <input
                                type="number"
                                class="form-control"
                                name="spRMax"
                                value={spRMax}
                                onChange={(e) => setspRMax(e.target.value)}
                                min="0"
                                placeholder="100"
                                style={{
                                  color:"#707070",
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  paddingLeft: "1.4rem",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-1rem",
                        marginRight: "-1rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            // height: "70px",
                            verticalAlign: "middle",
                            // marginLeft: "-1rem",
                            marginRight: "-2rem",
                          }}
                        >
                          <div class="row align-items-center m-space">
                            <div class="col-2">
                              <img src={SetVitalsBSugar} />
                            </div>
                            <div class="col-4 dark-green">
                            Blood Sugar
                            </div>
                            <div class="col-6" style={{ textAlign: "right" }}>
                            <Switch
                               name="bsstatus"
                               value={bsstatus}
                               onChange={(e) => setBSStatus(!bsstatus)}
                               color="primary"
                              />
                            </div>
                          </div>
                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-3 text-gray">Recording frequency</div>
                            <div class="col-3 text-gray" style={{ textAlign: "right" }}>Once every</div>
                            <div class="col-3" style={{ textAlign: "right" }}><input
                              type="number"
                              class="form-control"
                              placeholder=""
                              name="bsrFreq"
                              value={bsrFreq}
                              onChange={(e) => setbsrFreq(e.target.value)}
                              min={0}
                              style={{
                                textAlign: "center",
                                borderRadius: "10px",
                                // paddingLeft: "1.4rem",
                              }}
                            /></div>
                            <div class="col-3">
                            <select class="form-control text-gray2 "
                                name="bsUnits"
                                onChange={(e) => setbsUnits(e.target.value)}
                              >
                                <option value="">hr / days</option>
                                <option value="hours">Hours</option>
                                <option value="days">Days</option>
                              </select>
                            </div>
                          </div>
                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-3 text-gray"></div>
                            <div class="col-3 text-gray"></div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Minimum</div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Maximum</div>
                          </div>
                          <div class="row align-items-center">
                            <div class="col-6 text-gray">Normal range<br />In mg / dl</div>
                            <div class="col-3"><input
                              type="number"
                              class="form-control"
                              name="bsRMin"
                              value={bsRMin}
                              onChange={(e) => setbsRMin(e.target.value)}
                              min="0"
                              placeholder="93"
                              style={{
                                color:"#707070",
                                textAlign: "center",
                                borderRadius: "10px",
                                paddingLeft: "1.4rem",
                              }}
                            /></div>
                            <div class="col-3">
                              <input
                                type="number"
                                class="form-control"
                                name="bsRMax"
                                value={bsRMax}
                                onChange={(e) => setbsRMax(e.target.value)}
                                min="0"
                                placeholder="100"
                                style={{
                                  color:"#707070",
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  paddingLeft: "1.4rem",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      style={{
                        transition: "0.3s",
                        boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                        borderRadius: "10px",
                        marginTop: "0.7rem",
                        marginBottom: "0rem",
                        marginLeft: "-1rem",
                        marginRight: "-1rem",
                        paddingRight: "0rem",
                        border: "2px solid white",
                      }}
                    >
                      <div class="container">
                        <div
                          className="row align-items-center text-res"
                          style={{
                            paddingTop: "0.5rem",
                            paddingBottom: "0.5rem",
                            // height: "70px",
                            verticalAlign: "middle",
                            // marginLeft: "-1rem",
                            marginRight: "-2rem",
                          }}
                        >
                          <div class="row align-items-center m-space">
                            <div class="col-2">
                              <img src={SetVitalsTem} />
                            </div>
                            <div class="col-4 dark-green">
                            Temperature
                            </div>
                            <div class="col-6" style={{ textAlign: "right" }}>
                            <Switch
                               name="tpstatus"
                               value={tpstatus}
                               onChange={(e) => setTPStatus(!tpstatus)}
                               color="primary"
                              />
                            </div>
                          </div>
                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-3 text-gray">Recording frequency</div>
                            <div class="col-3 text-gray" style={{ textAlign: "right" }}>Once every</div>
                            <div class="col-3" style={{ textAlign: "right" }}><input
                              type="number"
                              class="form-control"
                              placeholder=""
                              name="tprFreq"
                              value={tprFreq}
                              onChange={(e) => settprFreq(e.target.value)}
                              min={0}
                              style={{
                                textAlign: "center",
                                borderRadius: "10px",
                                // paddingLeft: "1.4rem",
                              }}
                            /></div>
                            <div class="col-3">
                            <select class="form-control text-gray2 "
                                name="tpUnits"
                                onChange={(e) => settpUnits(e.target.value)}
                              >
                                <option value="">hr / days</option>
                                <option value="hours">Hours</option>
                                <option value="days">Days</option>
                              </select>
                            </div>
                          </div>
                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-3 text-gray"></div>
                            <div class="col-3 text-gray"></div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Minimum</div>
                            <div class="col-3" style={{ textAlign: "center", color: "#707070" }}>Maximum</div>
                          </div>
                          <div class="row align-items-center">
                            <div class="col-6 text-gray">Normal range<br />In  C/ F</div>
                            <div class="col-3"><input
                              type="number"
                              class="form-control"
                              name="tpRMin"
                              value={tpRMin}
                              onChange={(e) => settpRMin(e.target.value)}
                              min="0"
                              placeholder="93"
                              style={{
                                color:"#707070",
                                textAlign: "center",
                                borderRadius: "10px",
                                paddingLeft: "1.4rem",
                              }}
                            /></div>
                            <div class="col-3">
                              <input
                                type="number"
                                class="form-control"
                                name="tpRMax"
                                value={tpRMax}
                                onChange={(e) => settpRMax(e.target.value)}
                                min="0"
                                placeholder="100"
                                style={{
                                  color:"#707070",
                                  textAlign: "center",
                                  borderRadius: "10px",
                                  paddingLeft: "1.4rem",
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Form>
                </div>
              </div>
            </Card.Body>
            <div
              style={{
                textAlign: "center",
                marginTop: "10pt",
                marginBottom: "10pt",
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
                Set
              </Button>
            </div>
            <div style={{ height: "5vh" }} />
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default SetVitals;
