import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user.context";
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

import IconCancerMedications from "../assets/icon-cancer-medi.png";

import IconInfo from "../assets/icon-help.png";

import Box from "@mui/material/Box";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";


import IconMorning from "../assets/icon_fever_mrng.png";
import IconAfternoon from "../assets/icon_fever_afn.png";
import IconEvening from "../assets/icon_fever_eng.png";
import IconNight from "../assets/icon_fever_night.png";

import IconMorningS from "../assets/icon_fever_mrng_sel.png";
import IconAfternoonS from "../assets/icon_fever_afn_sel.png";
import IconEveningS from "../assets/icon_fever_eng_sel.png";
import IconNightS from "../assets/icon_fever_night_sel.png";

import IconTablet from "../assets/icon-tab-medi.png";
import IconCapsule from "../assets/icon-cap-medi.png";
import IconLiquid from "../assets/icon-syrup-medi.png";
import IconInjection from "../assets/icon-inj-medi.png";
import IconInhaler from "../assets/icon-inh-medi.png";
import IconDrops from "../assets/icon-drops-medi.png";

import IconTabletS from "../assets/icon-tab-medi-sel.png";
import IconCapsuleS from "../assets/icon-cap-medi-sel.png";
import IconLiquidS from "../assets/icon-syrup-medi-sel.png";
import IconInjectionS from "../assets/icon-inj-medi-sel.png";
import IconInhalerS from "../assets/icon-inh-medi-sel.png";
import IconDropsS from "../assets/icon-drops-medi-sel.png";



const CancerMedications_1 = () => {
  const { user, pId, pName } = useContext(UserContext);

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

  const [bpstatus, setBPStatus] = useState(false);

  const [fm, setFM] = useState(false);
  const [fa, setFA] = useState(false);
  const [fe, setFE] = useState(false);
  const [fn, setFN] = useState(false);

  const [mrng, setMrng] = useState([
    { name: "Morning", icon: IconMorning },
  ]);
  const [aftr, setAftr] = useState([
    { name: "Afternoon", icon: IconAfternoon },
  ]);
  const [evng, setEvng] = useState([
    { name: "Evening", icon: IconEvening },
  ]);
  const [ngt, setNgt] = useState([
    { name: "Night", icon: IconNight },
  ]);

  const [tb, setTB] = useState(false);
  const [cs, setCS] = useState(false);
  const [lq, setLQ] = useState(false);
  const [ij, setIJ] = useState(false);
  const [ih, setIH] = useState(false);
  const [tc, setTC] = useState(false);


  const [tab, setTab] = useState([
    { name: "Tablet", icon: IconTablet },
  ]);
  const [capsl, setCapsl] = useState([
    { name: "Capsule", icon: IconCapsule },
  ]);
  const [lqid, setLqid] = useState([
    { name: "Liquid", icon: IconLiquid },
  ]);
  const [ijcn, setIjcn] = useState([
    { name: "Injection", icon: IconInjection },
  ]);
  const [ihalr, setIhalr] = useState([
    { name: "Inhaler", icon: IconInhaler },
  ]);
  const [tpcl, setTpcl] = useState([
    { name: "Drops", icon: IconDrops },
  ]);

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

  const FrequentyChangeImage = (val, vstatus) => {
    if (val == "fm") {
      setFM(!vstatus);
      if (!fm == true) {
        mrng[0].icon = IconMorningS;
      } else {
        mrng[0].icon = IconMorning;
      }
      setMrng([...mrng]);
    }
    if (val == "fa") {
      setFA(!vstatus);
      if (!fa == true) {
        aftr[0].icon = IconAfternoonS;
      } else {
        aftr[0].icon = IconAfternoon;
      }
      setAftr([...aftr]);
    }
    if (val == "fe") {
      setFE(!vstatus);
      if (!fe == true) {
        evng[0].icon = IconEveningS;
      } else {
        evng[0].icon = IconEvening;
      }
      setEvng([...evng]);
    }
    if (val == "fn") {
      setFN(!vstatus);
      if (!fn == true) {
        ngt[0].icon = IconNightS;
      } else {
        ngt[0].icon = IconNight;
      }
      setNgt([...ngt]);
    }
  };

  const MedicineTypeChange = (val, vstatus) => {
    if (val == "tb") {
      setTB(!vstatus);
      if (!tb == true) {
        tab[0].icon = IconTabletS;
      } else {
        tab[0].icon = IconTablet;
      }
      setTab([...tab]);
    }
    if (val == "cs") {
      setCS(!vstatus);
      if (!cs == true) {
        capsl[0].icon = IconCapsuleS;
      } else {
        capsl[0].icon = IconCapsule;
      }
      setCapsl([...capsl]);
    }
    if (val == "lq") {
      setLQ(!vstatus);
      if (!lq == true) {
        lqid[0].icon = IconLiquidS;
      } else {
        lqid[0].icon = IconLiquid;
      }
      setLqid([...lqid]);
    }
    if (val == "ij") {
      setIJ(!vstatus);
      if (!ij == true) {
        ijcn[0].icon = IconInjectionS;
      } else {
        ijcn[0].icon = IconInjection;
      }
      setIjcn([...ijcn]);
    }
    if (val == "ih") {
      setIH(!vstatus);
      if (!ih == true) {
        ihalr[0].icon = IconInhalerS;
      } else {
        ihalr[0].icon = IconInhaler;
      }
      setIhalr([...ihalr]);
    }
    if (val == "tc") {
      setTC(!vstatus);
      if (!tc == true) {
        tpcl[0].icon = IconDropsS;
      } else {
        tpcl[0].icon = IconDrops;
      }
      setTpcl([...tpcl]);
    }
  };

  const onAddDevice = () => {
    // console.log("hello");
    navigate(`/comingSoon`);
  };

  const onSubmit = () => {
    const path = `/cancerMedications_2`;
    navigate(path);
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
          title="Set Medications"
          title2="Select the vitals and their frequency of recording, depending on conditions."
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="rsm"
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
                    style={{ color: "#099143" }}
                    onSubmit={onSubmit}
                  >
                    <div class="container">
                      <div class="row">
                        <div class="col-9">Set Medications for ailments</div>
                        <div
                          class="col-3"
                          style={{ textAlign: "right", cursor: "pointer" }}
                        >
                          <img src={IconInfo} onClick={onInfo} />
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
                              <img src={IconCancerMedications} />
                            </div>
                            <div class="col-8 dark-green">
                            Medications for Cancer
                            </div>
                            <div class="col-2" style={{ textAlign: "right" }}>
                              <Switch
                                name="bpstatus"
                                value={bpstatus}
                                onChange={(e) => setBPStatus(!bpstatus)}
                              // color="primary"
                              />
                            </div>
                          </div>

                          <div class="row align-items-center" style={{ marginTop: "1.5rem" }}>
                            <div class="col-12 text-gray">
                              <input
                                type="text"
                                class="form-control"
                                name="bprFreq"
                                // value={bprFreq}
                                // onChange={(e) => setbprFreq(e.target.value)}
                                placeholder="Medicine name"
                                min={0}
                              />
                            </div>
                          </div>

                          <div class="row align-items-center" style={{ marginTop: "0.5rem" }}>
                            <div class="col-11 text-gray-right">Allow Brand Substitution</div>
                            <div class="col-1">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                              </div>
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


                          



                          <div class="row align-items-center" style={{ marginTop: "0.5rem" }}>
                          <div className="medi-head">Medicine strength</div>
                            <div className="container">
                              <div class="row align-items-center">
                                
                                <div class="col-5 text-gray">Strength</div>
                                <div class="col-7"><select class="form-control text-gray2 "
                                  name="bpUnits"
                                // onChange={(e) => setbpUnits(e.target.value)}
                                >
                                  <option value="">Choose Unit</option>
                                  <option value="units">Mg</option>
                                  <option value="units">mcg</option>
                                  <option value="units">G</option>
                                  <option value="units">mL</option>
                                  <option value="units">%</option>
                                </select>
                                </div>
                                <Divider className="hr-line" />
                              </div>
                              <div className="medi-head">Medication Type</div>
                              <p
                                style={{
                                  color: "#ADAAA7",
                                  marginTop: "0rem",
                                  marginBottom: "1rem",
                                }}
                              >
                                Type of medication
                              </p>
                              <div className="form-container">
                                <Box sx={{ flexGrow: 1 }}>
                                  <Grid
                                    container
                                    spacing={{ xs: 2, md: 3 }}
                                    columns={{ xs: 4, sm: 8, md: 12 }}
                                    style={{
                                      // maxWidth: "590px",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      margin: "0",
                                    }}
                                  >
                                    <div style={{ marginLeft: "1.5rem",marginBottom:"1rem" }}>
                                      <ButtonGroup>
                                        <ToggleButton
                                          id="tb"
                                          type="radio"
                                          variant="outline-primary"
                                          name="tb"
                                          value="tb"
                                          checked={tb}
                                          // onClick={() => setVM(!vm)}
                                          onClick={(e) => MedicineTypeChange("tb", tb)}
                                          style={{
                                            borderTop: "6px solid #1D5A90",
                                            borderRadius: "10pt",
                                            boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                            marginRight: "2rem",
                                            borderLeft: "0px solid #fff",
                                            borderRight: "0px solid #fff",
                                            borderBottom: "0px solid #fff",
                                          }}
                                          className="icon-sv"
                                        >
                                          <img
                                            src={tab[0].icon}
                                            style={{
                                              width: "60%",
                                            }}
                                          />

                                          <div
                                            className="icon-text"
                                            style={{
                                              lineHeight: "1rem",
                                              marginTop: "0.3rem",
                                              marginBottom: "0rem",
                                            }}
                                          >
                                            {tab[0].name}
                                          </div>
                                        </ToggleButton>
                                        <ToggleButton
                                          id="cs"
                                          type="radio"
                                          variant="outline-primary"
                                          name="cs"
                                          value="cs"
                                          checked={cs}
                                          // onClick={() => setAS(!as)}
                                          onClick={(e) => MedicineTypeChange("cs", cs)}
                                          style={{
                                            borderTop: "6px solid #1D5A90",
                                            borderRadius: "10pt",
                                            boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                            marginRight: "2rem",
                                            borderLeft: "0px solid #fff",
                                            borderRight: "0px solid #fff",
                                            borderBottom: "0px solid #fff",
                                          }}
                                          className="icon-sv"
                                        >
                                          <img
                                            src={capsl[0].icon}
                                            style={{
                                              width: "60%",
                                            }}
                                          />

                                          <div
                                            className="icon-text"
                                            style={{
                                              lineHeight: "1rem",
                                              marginTop: "0.3rem",
                                              marginBottom: "0rem",
                                            }}
                                          >
                                            {capsl[0].name}
                                          </div>
                                        </ToggleButton>
                                        <ToggleButton
                                          id="lq"
                                          type="radio"
                                          variant="outline-primary"
                                          name="lq"
                                          value="lq"
                                          checked={lq}
                                          // onClick={() => setMW(!mw)}
                                          onClick={(e) => MedicineTypeChange("lq", lq)}
                                          style={{
                                            borderTop: "6px solid #1D5A90",
                                            borderRadius: "10pt",
                                            boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                            marginRight: "2rem",
                                            borderLeft: "0px solid #fff",
                                            borderRight: "0px solid #fff",
                                            borderBottom: "0px solid #fff",
                                          }}
                                          className="icon-sv"
                                        >
                                          <img
                                            src={lqid[0].icon}
                                            style={{
                                              width: "60%",
                                            }}
                                          />

                                          <div
                                            className="icon-text"
                                            style={{
                                              lineHeight: "1rem",
                                              marginTop: "0.3rem",
                                              marginBottom: "0rem",
                                            }}
                                          >
                                            {lqid[0].name}
                                          </div>
                                        </ToggleButton>
                                      </ButtonGroup>
                                      <ButtonGroup style={{ marginTop: "1rem" }}>
                                        <ToggleButton
                                          id="ij"
                                          type="radio"
                                          variant="outline-primary"
                                          name="ij"
                                          value="ij"
                                          checked={ij}
                                          // onClick={() => setVM(!vm)}
                                          onClick={(e) => MedicineTypeChange("ij", ij)}
                                          style={{
                                            borderTop: "6px solid #1D5A90",
                                            borderRadius: "10pt",
                                            boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                            marginRight: "2rem",
                                            borderLeft: "0px solid #fff",
                                            borderRight: "0px solid #fff",
                                            borderBottom: "0px solid #fff",
                                          }}
                                          className="icon-sv"
                                        >
                                          <img
                                            src={ijcn[0].icon}
                                            style={{
                                              width: "60%",
                                            }}
                                          />

                                          <div
                                            className="icon-text"
                                            style={{
                                              lineHeight: "1rem",
                                              marginTop: "0.3rem",
                                              marginBottom: "0rem",
                                            }}
                                          >
                                            {ijcn[0].name}
                                          </div>
                                        </ToggleButton>
                                        <ToggleButton
                                          id="ih"
                                          type="radio"
                                          variant="outline-primary"
                                          name="ih"
                                          value="ih"
                                          checked={ih}
                                          // onClick={() => setVM(!vm)}
                                          onClick={(e) => MedicineTypeChange("ih", ih)}
                                          style={{
                                            borderTop: "6px solid #1D5A90",
                                            borderRadius: "10pt",
                                            boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                            marginRight: "2rem",
                                            borderLeft: "0px solid #fff",
                                            borderRight: "0px solid #fff",
                                            borderBottom: "0px solid #fff",
                                          }}
                                          className="icon-sv"
                                        >
                                          <img
                                            src={ihalr[0].icon}
                                            style={{
                                              width: "60%",
                                            }}
                                          />

                                          <div
                                            className="icon-text"
                                            style={{
                                              lineHeight: "1rem",
                                              marginTop: "0.3rem",
                                              marginBottom: "0rem",
                                            }}
                                          >
                                            {ihalr[0].name}
                                          </div>
                                        </ToggleButton>
                                        <ToggleButton
                                          id="tc"
                                          type="radio"
                                          variant="outline-primary"
                                          name="tc"
                                          value="tc"
                                          checked={tc}
                                          // onClick={() => setVM(!vm)}
                                          onClick={(e) => MedicineTypeChange("tc", tc)}
                                          style={{
                                            borderTop: "6px solid #1D5A90",
                                            borderRadius: "10pt",
                                            boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                            marginRight: "2rem",
                                            borderLeft: "0px solid #fff",
                                            borderRight: "0px solid #fff",
                                            borderBottom: "0px solid #fff",
                                          }}
                                          className="icon-sv"
                                        >
                                          <img
                                            src={tpcl[0].icon}
                                            style={{
                                              width: "60%",
                                            }}
                                          />

                                          <div
                                            className="icon-text"
                                            style={{
                                              lineHeight: "1rem",
                                              marginTop: "0.3rem",
                                              marginBottom: "0rem",
                                            }}
                                          >
                                            {tpcl[0].name}
                                          </div>
                                        </ToggleButton>
                                      </ButtonGroup>

                                    </div>
                                  </Grid>
                                </Box>
                                
                                <div class="row align-items-center">
                                <div class="col-5 text-gray">Others</div>
                                <div class="col-7"><select class="form-control text-gray2 "
                                  name="bpUnits"
                                // onChange={(e) => setbpUnits(e.target.value)}
                                >
                                  <option value="">Select type of Medications</option>
                                  <option value="medication">Cream</option>
                                  <option value="medication">Ointment</option>
                                  <option value="medication">Gel</option>
                                  <option value="medication">Foam</option>
                                  <option value="medication">Lotion</option>
                                  <option value="medication">Patch</option>
                                  <option value="medication">Powder</option>
                                  <option value="medication">Spray</option>
                                  <option value="medication">Suppository</option>
                                </select>
                                </div>
                                
                              </div>

                              </div>
                            </div>
                            {/* <Divider className="hr-line" /> */}
                            {/* <div class="container">

                              <div class="row align-items-center" >

                                <div class="col-5 text-gray">Dosage</div>
                                <div class="col-3"><input
                                  type="number"
                                  class="form-control"
                                  name="bprFreq"
                                  // value={bprFreq}
                                  // onChange={(e) => setbprFreq(e.target.value)}
                                  placeholder=""
                                  min={0}
                                  max={4}
                                  style={{
                                    textAlign: "center",
                                    borderRadius: "10px",
                                  }}
                                /></div>
                                <div class="col-4">
                                  <select class="form-control text-gray2 "
                                    name="bpUnits"
                                  // onChange={(e) => setbpUnits(e.target.value)}
                                  >
                                    <option value="">Tablets / mL</option>
                                    <option value="hours">Tablets</option>
                                    <option value="days">mL</option>
                                  </select>
                                </div>

                                <Divider className="hr-line" /></div>
                              <div className="container">
                                <p
                                  style={{
                                    color: "#ADAAA7",
                                    marginTop: "0rem",
                                    marginBottom: "1rem",
                                  }}
                                >
                                  Frequency
                                </p>
                                <div className="form-container">
                                  <Box sx={{ flexGrow: 1 }}>
                                    <Grid
                                      container
                                      spacing={{ xs: 2, md: 3 }}
                                      columns={{ xs: 4, sm: 8, md: 12 }}
                                      style={{
                                        // maxWidth: "590px",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0",
                                      }}
                                    >
                                      <div style={{ marginLeft: "1.5rem" }}>
                                        <ButtonGroup>
                                          <ToggleButton
                                            id="fm"
                                            type="radio"
                                            variant="outline-primary"
                                            name="fm"
                                            value="fm"
                                            checked={fm}
                                            // onClick={() => setVM(!vm)}
                                            onClick={(e) => FrequentyChangeImage("fm", fm)}
                                            style={{
                                              borderTop: "6px solid #1D5A90",
                                              borderRadius: "10pt",
                                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                              marginRight: "2rem",
                                              borderLeft: "0px solid #fff",
                                              borderRight: "0px solid #fff",
                                              borderBottom: "0px solid #fff",
                                            }}
                                            className="icon-sv"
                                          >
                                            <img
                                              src={mrng[0].icon}
                                              style={{
                                                width: "60%",
                                              }}
                                            />

                                            <div
                                              className="icon-text"
                                              style={{
                                                lineHeight: "1rem",
                                                marginTop: "0.3rem",
                                                marginBottom: "0rem",
                                              }}
                                            >
                                              {mrng[0].name}
                                            </div>
                                          </ToggleButton>
                                          <ToggleButton
                                            id="fa"
                                            type="radio"
                                            variant="outline-primary"
                                            name="fa"
                                            value="fa"
                                            checked={fa}
                                            // onClick={() => setAS(!as)}
                                            onClick={(e) => FrequentyChangeImage("fa", fa)}
                                            style={{
                                              borderTop: "6px solid #1D5A90",
                                              borderRadius: "10pt",
                                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                              marginRight: "2rem",
                                              borderLeft: "0px solid #fff",
                                              borderRight: "0px solid #fff",
                                              borderBottom: "0px solid #fff",
                                            }}
                                            className="icon-sv"
                                          >
                                            <img
                                              src={aftr[0].icon}
                                              style={{
                                                width: "60%",
                                              }}
                                            />

                                            <div
                                              className="icon-text"
                                              style={{
                                                lineHeight: "1rem",
                                                marginTop: "0.3rem",
                                                marginBottom: "0rem",
                                              }}
                                            >
                                              {aftr[0].name}
                                            </div>
                                          </ToggleButton>
                                          <ToggleButton
                                            id="fe"
                                            type="radio"
                                            variant="outline-primary"
                                            name="fe"
                                            value="fe"
                                            checked={fe}
                                            // onClick={() => setMW(!mw)}
                                            onClick={(e) => FrequentyChangeImage("fe", fe)}
                                            style={{
                                              borderTop: "6px solid #1D5A90",
                                              borderRadius: "10pt",
                                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                              marginRight: "2rem",
                                              borderLeft: "0px solid #fff",
                                              borderRight: "0px solid #fff",
                                              borderBottom: "0px solid #fff",
                                            }}
                                            className="icon-sv"
                                          >
                                            <img
                                              src={evng[0].icon}
                                              style={{
                                                width: "60%",
                                              }}
                                            />

                                            <div
                                              className="icon-text"
                                              style={{
                                                lineHeight: "1rem",
                                                marginTop: "0.3rem",
                                                marginBottom: "0rem",
                                              }}
                                            >
                                              {evng[0].name}
                                            </div>
                                          </ToggleButton>
                                        </ButtonGroup>
                                        <ButtonGroup style={{ marginTop: "1rem" }}>
                                          <ToggleButton
                                            id="fn"
                                            type="radio"
                                            variant="outline-primary"
                                            name="fn"
                                            value="fn"
                                            checked={fn}
                                            // onClick={() => setVM(!vm)}
                                            onClick={(e) => FrequentyChangeImage("fn", fn)}
                                            style={{
                                              borderTop: "6px solid #1D5A90",
                                              borderRadius: "10pt",
                                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                              marginRight: "2rem",
                                              borderLeft: "0px solid #fff",
                                              borderRight: "0px solid #fff",
                                              borderBottom: "0px solid #fff",
                                            }}
                                            className="icon-sv"
                                          >
                                            <img
                                              src={ngt[0].icon}
                                              style={{
                                                width: "60%",
                                              }}
                                            />

                                            <div
                                              className="icon-text"
                                              style={{
                                                lineHeight: "1rem",
                                                marginTop: "0.3rem",
                                                marginBottom: "0rem",
                                              }}
                                            >
                                              {ngt[0].name}
                                            </div>
                                          </ToggleButton>
                                        </ButtonGroup>
                                      </div>
                                    </Grid>
                                  </Box>
                                </div>
                              </div>


                              <div class="row align-items-center">
                                <Divider className="hr-line" />
                                <div class="col-5 text-gray">Or, every</div>
                                <div class="col-3"><input
                                  type="number"
                                  class="form-control"
                                  name="bprFreq"
                                  // value={bprFreq}
                                  // onChange={(e) => setbprFreq(e.target.value)}
                                  placeholder=""
                                  min={0}
                                  // max={4}
                                  style={{
                                    textAlign: "center",
                                    borderRadius: "10px",
                                  }}
                                /></div>
                                <div class="col-4">
                                  <select class="form-control text-gray2 "
                                    name="bpUnits"
                                  // onChange={(e) => setbpUnits(e.target.value)}
                                  >
                                    <option value="">Hours / Days</option>
                                    <option value="hours">Hours</option>
                                    <option value="days">Days</option>
                                  </select>
                                </div>

                                <div class="col-4 text-gray">Before a Meal</div>
                                <div class="col-2">
                                  <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                  </div>
                                </div>

                                <div class="col-5 text-gray-right">After a Meal</div>
                                <div class="col-1">
                                  <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2" />
                                  </div>
                                </div>

                                <Divider className="hr-line" />
                              </div>
                              <div class="row align-items-center">
                                <div class="col-8 text-gray">Medicines to be taken till</div>
                                <div class="col-4">
                                  <Form.Control
                                    className="name-input"
                                    type="date"
                                    // placeholder=""
                                    // value={dateTime}
                                    name="dateTime"
                                    // onChange={(e) => setdTime(e.target.value)}
                                    style={{
                                      color: "#ADAAA7",
                                      marginTop: "0.5rem",
                                      // marginLeft: "0.7rem",
                                      fontSize: "0.9rem",
                                    }}
                                  ></Form.Control>
                                </div>

                                <Divider className="hr-line" />
                              </div>
                              <div class="row align-items-center">
                                <div class="col-5 text-gray">Instructions / Warnings</div>
                                <div class="col-7"><input
                                  type="text"
                                  class="form-control"
                                  name="bprFreq"
                                  // value={bprFreq}
                                  // onChange={(e) => setbprFreq(e.target.value)}
                                  placeholder=""
                                  min={0}

                                />
                                </div>
                              </div>
                            </div> */}
                            {/* <div
                              style={{
                                textAlign: "center",
                                marginTop: "50pt",
                                marginBottom: "10pt",
                              }}
                            >
                              <Button
                                style={{
                                  background: "#1D5A90",
                                  borderRadius: 50,
                                  width: "55%",
                                  color: "#ffffff",
                                  textTransform: "none",
                                }}
                                onClick={onSubmit}
                                type="submit"
                              >
                                Add Another Medicine
                              </Button>
                            </div> */}



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
                marginTop: "40pt",
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
                Save & Continue
              </Button>
            </div>
            <div style={{ height: "5vh" }} />
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default CancerMedications_1;
