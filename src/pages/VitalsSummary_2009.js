import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";

import { Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import ListGroup from "react-bootstrap/ListGroup";
import { Form } from "react-bootstrap";
import { Button, Divider, TextField } from "@mui/material";

import IconVitalsSummary from "../assets/icon-vitals-summary.png";
import IconPulse from "../assets/icon-pulse-report.png";
import iconBloodPressure from "../assets/icon-blood-report.png";
import iconVerified from "../assets/icon-varified.png";
import iconAlert from "../assets/icon-alert.png";
import moment from "moment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconPatientImage from "../assets/icon-patient-photo.png";

const reports = [
  {
    ptime: "3 days",
    pstatus: iconVerified,
    btime: "10 minutes",
    bstatus: iconAlert,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const VitalsSummary = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    const path = `/role`;
    navigate(path);
  };

  const { user } = useContext(UserContext);
  const datex = new Date();
  const [patientName, setpName] = useState("");
  const [status, setStatus] = useState("0");

  const [bprstatus, setBPRStatus] = useState("0"); // BP record status
  const [bprsstatus, setBPRSStatus] = useState("0"); // sistolic status
  const [bprdstatus, setBPRDStatus] = useState("0"); // diastolic status
  const [prrstatus, setPRRStatus] = useState("0"); //  PR reocord status
  const [prrdstatus, setPRRDStatus] = useState("0"); // no of days count status

  const [selLid, setSelLId] = useState("");
  const [bprdate, setBPRDate] = useState("");
  const [prrdate, setPRRDate] = useState("");
  const [TempPRPatientData, setTempPRPatientData] = useState([]);
  const [TempBPPatientData, setTempBPPatientData] = useState([]);
  const [sysValue, setSysValue] = useState("0");
  const [diaValue, setDiaValue] = useState("0");
  const [pulValue, setPulValue] = useState("0");

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBack = () => {
    const path = `/dailyCheckIn`;
    navigate(path);
  };

  const loadUser = async () => {
    //   console.log('user:',user.id);
    //   console.log('location:',location.state.lid);
    if (user) {
      let ccid = BSON.ObjectID(user.id).toString();
      const lovd = user.functions.getLovedOneCP(ccid); // one loved one based on care manager id
      // console.log('else direct:',ccid);
      lovd.then((resp) => {
        if (resp) {
          setStatus("1");
          setpName(resp.displayName);
          setSelLId(resp._id.toString());
          PRData(resp._id.toString());
          BPData(resp._id.toString());
        } else {
          alert("Loved Ones Not Created..");
          // navigate(`/addLovedOnes`);
        }
      });
    }
  };

  const BPData = async (pid) => {
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

  const PRData = async (pid) => {
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

  const pulseGraph = (gt) => {
    const pathx = `/vitalsGraph`;
    if (gt === "PR") {
      navigate(pathx, { state: { id: TempPRPatientData, type: "PR" } });
    } else if (gt === "SS") {
      navigate(pathx, { state: { id: TempBPPatientData, type: "SS" } });
    } else if (gt === "DS") {
      navigate(pathx, { state: { id: TempBPPatientData, type: "DS" } });
    }
  };

  const pulseGuage = (gt) => {
    const pathy = `/vitalsGuage`;
    if (gt === "PR") {
      navigate(pathy, { state: { id: pulValue, type: "PR" } });
    } else if (gt === "SS") {
      navigate(pathy, { state: { id: sysValue, type: "SS" } });
    } else if (gt === "DS") {
      navigate(pathy, { state: { id: diaValue, type: "DS" } });
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
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <div
          style={{
            backgroundColor: "#EBEBEB",
            paddingTop: "2rem",
          }}
        >
          <Card
            style={{
              backgroundColor: "#F2F8F1",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
          >
            <Card.Body style={{ margin: "0pt" }}>
              <div
                class="container"
                style={{ marginTop: "-1.5rem", marginBottom: "0rem" }}
              >
                <ArrowBackIosIcon
                  onClick={onBack}
                  style={{
                    marginTop: "0rem",
                    cursor: "pointer",
                    marginBottom: "-3.6rem",
                  }}
                />
                <div class="row">
                  <div className="col-sm-2" style={{ marginTop: "2.5rem" }}>
                    <img src={IconPatientImage} style={{ width: "130%" }} />
                  </div>
                  <div className="col-sm-8">
                    <p
                      style={{
                        fontSize: 25,
                        fontFamily: "Helvetica",
                        color: "#209F85",
                        marginBottom: "0pt",
                        marginTop: "0pt",
                        textAlign: "center",
                      }}
                    >
                      Vitals Summary
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontFamily: "Helvetica",
                        color: "#adaaa7",
                        marginBottom: "12pt",
                        marginTop: "0pt",
                        textAlign: "center",
                      }}
                    >
                      Summary Report of vitals.
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        fontFamily: "Helvetica",
                        color: "#adaaa7",
                        marginBottom: "0pt",
                        marginTop: "0pt",
                        textAlign: "center",
                      }}
                    >
                      Last Updated: {datex.toDateString()}
                    </p>
                  </div>
                  <div
                    className="col-sm-2"
                    style={{
                      marginTop: "1rem",
                      marginLeft: "-1.5rem",
                      textAlign: "left",
                    }}
                  >
                    <img src={IconVitalsSummary} style={{ width: "auto" }} />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>

          <Card
            itemType=""
            style={{
              marginTop: "10pt",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
          >
            <Card.Body>
              <div class="container">
                <div class="row" style={{ paddingBottom: "1.5rem" }}>
                  <div class="col-2"></div>
                  <div class="col-4" style={{ color: "#209F85" }}></div>
                  <div
                    class="col-4"
                    style={{ textAlign: "center", color: "#ADAAA7" }}
                  >
                    Time since last update
                  </div>
                  <div
                    class="col-2"
                    style={{ textAlign: "center", color: "#ADAAA7" }}
                  >
                    Status
                  </div>
                </div>
              </div>
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
                      class="row"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
                    >
                      <div class="col-2">
                        <img src={IconPulse} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`PR`)}
                      >
                        Pulse Rate
                      </div>
                      <div
                        class="col-4"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <>{prrstatus === "1" ? prrdate : "No Data"}</>
                      </div>
                      <div
                        class="col-2"
                        style={{ textAlign: "center", cursor: "pointer" }}
                        onClick={() => pulseGuage(`PR`)}
                      >
                        <>
                          {prrstatus === "1" && prrdstatus === "1" ? (
                            <img src={item.pstatus} />
                          ) : (
                            <img src={item.bstatus} />
                          )}
                        </>
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
                      class="row"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
                    >
                      <div class="col-2">
                        <img src={iconBloodPressure} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`SS`)}
                      >
                        Systolic Pressure
                      </div>
                      <div
                        class="col-4"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <>{bprstatus === "1" ? bprdate : "No Data"}</>
                      </div>
                      <div
                        class="col-2"
                        style={{ textAlign: "center", cursor: "pointer" }}
                        onClick={() => pulseGuage(`SS`)}
                      >
                        <>
                          {bprstatus === "1" && bprsstatus === "1" ? (
                            <img src={item.pstatus} />
                          ) : (
                            <img src={item.bstatus} />
                          )}
                        </>
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
                      class="row"
                      style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
                    >
                      <div class="col-2">
                        <img src={iconBloodPressure} />
                      </div>
                      <div
                        class="col-4"
                        style={{ color: "#209F85", cursor: "pointer" }}
                        onClick={() => pulseGraph(`DS`)}
                      >
                        Diastolic Pressure
                      </div>
                      <div
                        class="col-4"
                        style={{ textAlign: "center", color: "#ADAAA7" }}
                      >
                        <>{bprstatus === "1" ? bprdate : "No Data"}</>
                      </div>
                      <div
                        class="col-2"
                        style={{ textAlign: "center", cursor: "pointer" }}
                        onClick={() => pulseGuage(`DS`)}
                      >
                        <>
                          {bprstatus === "1" && bprdstatus === "1" ? (
                            <img src={item.pstatus} />
                          ) : (
                            <img src={item.bstatus} />
                          )}
                        </>
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
      </Grid>
    </Container>
  );
};

export default VitalsSummary;
