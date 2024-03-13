import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';

import { BSON } from "realm-web";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, Divider } from "@mui/material";
import IconHealth from "../assets/icon-vdash-health.png";
import IconSleep from "../assets/icon-vdash-sleep.png";
import IconFood from "../assets/icon-vdash-food.png";
import IconExp from "../assets/icon-vdash-exp.png";

import IconHelp from "../assets/icon-help.png";

import iconBetter from "../assets/icon-better.png";
import iconNormal from "../assets/icon-amber.png";
import iconNoData from "../assets/icon-nodata.png";
import iconLess from "../assets/icon-alert.png";
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";

import "./Main.css";

const FaqInfo = [
  {
    name: "Dashboard",
    type: "DASHBOARD",
    video: "DASHBOARDV",
    faq: "DASHBOARDQA",
    des: "dashboard-des",
  },
]

const reports = [
  {
    bstatus: iconBetter,
    nstatus: iconNormal,
    dstatus: iconNoData,
    astatus: iconLess,
  },
];



const DailyCheckInSummary = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  const navigate = useNavigate();
  const onSubmit = () => {
    const path = `/vitalsSummary`;
    navigate(path);
  };
  const onInfo = (rtype, rvideo, rfaq,rdes) => {
    const path = `/information`;
    navigate(path, { state: { id: rtype, v: rvideo, qa: rfaq, ds: rdes } });
  };
  const { user, pId, pName, selectedPatient, adbuser } = useContext(UserContext);

  //  const pId = activeAccount.idTokenClaims.sub;
  //  const user = "";
  //  const pName = "";
  //  const selectedPatient = ""; 
  // const datex = new Date();
  // const [patientName, setpName] = useState("");
  // const [status, setStatus] = useState("0");

  // const [bprstatus, setBPRStatus] = useState("0"); // BP record status
  // const [bprdstatus, setBPRDStatus] = useState("0"); // no of days count status
  // const [prrstatus, setPRRStatus] = useState("0"); //  PR reocord status
  // const [prrdstatus, setPRRDStatus] = useState("0"); // no of days count status

  // const [selLid, setSelLId] = useState("");
  // const [bprdate, setBPRDate] = useState("");
  // const [prrdate, setPRRDate] = useState("");
  const [health, setHealth] = useState("dstatus");
  const [food, setFood] = useState("dstatus");
  const [sleep, setSleep] = useState("dstatus");
  const [experience, setExperience] = useState("dstatus");

  const [healthm, setHealthm] = useState("No Data");
  const [foodm, setFoodm] = useState("No Data");
  const [sleepm, setSleepm] = useState("No Data");
  const [experiencem, setExperiencem] = useState("No Data");

  useEffect(() => {
    loadUser();
  }, [pId]);

  // const onBack = () => {
  //   const path = `/dailyCheckIn`;
  //   navigate(path);
  // };

  const loadUser = async () => {
    if (user) {
      // let ccid = BSON.ObjectID(user.id).toString();
      let ccid = "";
      if (pId) {
        ccid = pId;
      } else {
        ccid = adbuser
      }

      const lovd = user.functions.getLovedOneCP(ccid); // one loved one based on care manager id
      lovd.then((res) => {
        if (res) {
          selectedPatient(res._id.toString());
        }
      });

      const dailyS = user.functions.getOneDailyHelathStatus(pId);
      // console.log('else direct:',ccid);
      dailyS.then((resp) => {
        //   console.log("resp:", resp);
        if (resp) {
          if (resp.howfeelingnow === "1") {
            setHealthm("Better");
            setHealth("bstatus");
          } else if (resp.howfeelingnow === "2") {
            setHealthm("Normal");
            setHealth("nstatus");
          } else if (resp.howfeelingnow === "3") {
            setHealthm("Less than Normal");
            setHealth("astatus");
          } else {
            setHealthm("No Data");
            setHealth("dstatus");
          }

          if (resp.sleeplastnight === "1") {
            setSleepm("Better");
            setSleep("bstatus");
          } else if (resp.sleeplastnight === "2") {
            setSleepm("Normal");
            setSleep("nstatus");
          } else if (resp.sleeplastnight === "3") {
            setSleepm("Less than Normal");
            setSleep("astatus");
          } else {
            setSleepm("No Data");
            setSleep("dstatus");
          }

          if (resp.eatwell === "1") {
            setFoodm("Better");
            setFood("bstatus");
          } else if (resp.eatwell === "2") {
            setFoodm("Normal");
            setFood("nstatus");
          } else if (resp.eatwell === "3") {
            setFoodm("Less than Normal");
            setFood("astatus");
          } else {
            setFoodm("No Data");
            setFood("dstatus");
          }

          if (resp.beinglooked === "1") {
            setExperiencem("Better");
            setExperience("bstatus");
          } else if (resp.beinglooked === "2") {
            setExperiencem("Normal");
            setExperience("nstatus");
          } else if (resp.beinglooked === "3") {
            setExperiencem("Less than Normal");
            setExperience("astatus");
          } else {
            setExperiencem("No Data");
            setExperience("dstatus");
          }
        } else {
          // setStatus("0");
          setHealth("dstatus");
          setFood("dstatus");
          setSleep("dstatus");
          setExperience("dstatus");

          setHealthm("No Data");
          setSleepm("No Data");
          setFoodm("No Data");
          setExperiencem("No Data");
          //    alert("Select Your Loved One..");
          // alert("Checking for Loved Ones..");
          // navigate(`/addLovedOnes`);
        }
      });
    }
  };

  // const BPData = async (pid) => {
  //   console.log("Bp pid:", pid);
  //   const lovbp = user.functions.getBloodPressureOneRecLatest(pid); // one loved one based on care manager id
  //   // console.log('else direct:',ccid);
  //   lovbp.then((resbp) => {
  //     if (resbp.length > 0) {
  //       console.log("result:", resbp);
  //       setBPRStatus("1");
  //       let ddt0 = moment(resbp[0].dateOnset).format("DD/MM/YYYY hh:mm:ss");
  //       let ddt1 = moment(resbp[0].dateOnset);
  //       let ddt2 = moment(new Date());
  //       let ddt3 = ddt2.diff(ddt1, "days");

  //       let systo = parseInt(decryptData(resbp[0].systolicPressure));
  //       let diast = parseInt(decryptData(resbp[0].diastolicPressure));

  //       //    console.log("systo:",systo);
  //       //   console.log("diast:", diast);

  //       if (systo >= 90 && systo <= 139 && diast >= 60 && diast <= 89) {
  //         // date count greater than one day
  //         setBPRDStatus("1");
  //       } else {
  //         setBPRDStatus("0");
  //       }
  //       setBPRDate(ddt0);
  //     } else {
  //       console.log("BP no record found");
  //       setBPRStatus("0");
  //     }
  //   });
  // };

  // const PRData = async (pid) => {
  //   console.log("PR pid:", pid);
  //   const lovpr = user.functions.getPulseRateOneRecLatest(pid); // one loved one based on care manager id
  //   // console.log('else direct:',ccid);
  //   lovpr.then((respr) => {
  //     if (respr.length > 0) {
  //       setPRRStatus("1");
  //       //  console.log("result:", respr);
  //       let dt0 = moment(respr[0].dateOnset).format("DD/MM/YYYY hh:mm:ss");
  //       let dt1 = moment(respr[0].dateOnset);
  //       let dt2 = moment(new Date());

  //       let dt3 = dt2.diff(dt1, "days");
  //       let beats = parseInt(decryptData(respr[0].beatsPerMinute));
  //       if (beats >= 60 && beats <= 90) {
  //         // date count greater than one day
  //         setPRRDStatus("1");
  //       } else {
  //         setPRRDStatus("0");
  //       }

  //       // console.log("no of days:", dt3);
  //       setPRRDate(dt0);
  //     } else {
  //       console.log("PR no record found");
  //       setPRRStatus("0");
  //     }
  //   });
  // };

  return (
    <Container
      style={{ background: "#EBEBEB", maxWidth: "100%", minWidth: "300px" }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Dashboard"
          title2="Quick view of the people you care for"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="vsr"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-d">
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "6px solid #1D5A90",
              borderRadius: "10pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <Card.Body>
              {/* <Card.Text style={{ color: "#209F85" }}>
                Health Status of {pName}
              </Card.Text> */}

              <div className="top-space-m">
                <div class="row">
                  <div class="col-10 text-green">Health Status of {pName}</div>
                  <div class="col-2 icon-right">
                    {FaqInfo.map((item) => (
                      <img className="info_cls" src={IconHelp}
                        onClick={() => onInfo(`${item.type}`, `${item.video}`, `${item.faq}`,`${item.des}`)}
                      />
                    ))}
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
                      className="row align-items-center text-res"
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        height: "70px",
                        verticalAlign: "middle",
                        marginLeft: "-1rem",
                        marginRight: "-2rem",
                      }}
                    >
                      <div class="col-1">
                        <img src={IconHealth} alt="" />
                      </div>
                      <div
                        class="col-6"
                        style={{ color: "#707070", paddingLeft: "1.3rem" }}
                      >
                        Health outcomes
                      </div>
                      <div
                        class="col-3"
                        style={{ textAlign: "right", color: "#707070" }}
                      >
                        <>{healthm}</>
                      </div>
                      <div class="col-2" style={{ textAlign: "left" }}>
                        <>
                          <img src={item[health]} alt="" />
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
                  {reports.map((item2) => (
                    <div
                      className="row align-items-center text-res"
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        height: "70px",
                        verticalAlign: "middle",
                        marginLeft: "-1rem",
                        marginRight: "-2rem",
                      }}
                    >
                      <div class="col-1">
                        <img src={IconSleep} alt="" />
                      </div>
                      <div
                        class="col-6"
                        style={{ color: "#707070", paddingLeft: "1.3rem" }}
                      >
                        Sleep
                      </div>
                      <div
                        class="col-3"
                        style={{ textAlign: "right", color: "#707070" }}
                      >
                        <>{sleepm}</>
                      </div>
                      <div class="col-2" style={{ textAlign: "left" }}>
                        <>
                          {sleep === "bstatus" ? (
                            <img src={iconBetter} alt="" />
                          ) : (
                            ""
                          )}
                          {sleep === "astatus" ? (
                            <img src={iconLess} alt="" />
                          ) : (
                            ""
                          )}
                          {sleep === "nstatus" ? (
                            <img src={iconNormal} alt="" />
                          ) : (
                            ""
                          )}
                          {sleep !== "bstatus" &&
                            sleep !== "astatus" &&
                            sleep !== "nstatus" ? (
                            <img src={iconNoData} alt="" />
                          ) : (
                            ""
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
                      className="row align-items-center text-res"
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        height: "70px",
                        verticalAlign: "middle",
                        marginLeft: "-1rem",
                        marginRight: "-2rem",
                      }}
                    >
                      <div class="col-1">
                        <img src={IconFood} alt="" />
                      </div>
                      <div
                        class="col-6"
                        style={{ color: "#707070", paddingLeft: "1.3rem" }}
                      >
                        Food
                      </div>
                      <div
                        class="col-3"
                        style={{ textAlign: "right", color: "#707070" }}
                      >
                        <>{foodm}</>
                      </div>
                      <div class="col-2" style={{ textAlign: "left" }}>
                        <>
                          <img src={item[food]} alt="" />
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
                      className="row align-items-center text-res"
                      style={{
                        paddingTop: "0.5rem",
                        paddingBottom: "0.5rem",
                        height: "70px",
                        verticalAlign: "middle",
                        marginLeft: "-1rem",
                        marginRight: "-2rem",
                      }}
                    >
                      <div class="col-1">
                        <img src={IconExp} alt="" />
                      </div>
                      <div
                        class="col-6"
                        style={{ color: "#707070", paddingLeft: "1.3rem" }}
                      >
                        Experience
                      </div>
                      <div
                        class="col-3"
                        style={{ textAlign: "right", color: "#707070" }}
                      >
                        <>{experiencem}</>
                      </div>
                      <div class="col-2" style={{ textAlign: "left" }}>
                        <>
                          <img src={item[experience]} alt="" />
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
                marginTop: "1rem",
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
                Check Details
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default DailyCheckInSummary;
