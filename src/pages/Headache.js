import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider, TextField } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import CarouselSlider from "./CarouselSlider";
import FixedHeader from "../components/FixedHeader";
import "./Main.css";
import { Form } from "react-bootstrap";
import moment from "moment";

import IconHeadacheCon from "../assets/icon_headache_con.png";
import IconHeadacheInt from "../assets/icon_headache_int.png";
import IconHeadacheConS from "../assets/icon_headache_con_sel.png";
import IconHeadacheIntS from "../assets/icon_headache_int_sel.png";

import IconHeadacheVom from "../assets/icon_headache_vom.png";
import IconHeadacheAlt from "../assets/icon_headache_alt.png";
import IconHeadacheMus from "../assets/icon_headache_mus.png";

import IconHeadacheVomS from "../assets/icon_headache_vom-sel.png";
import IconHeadacheAltS from "../assets/icon_headache_alt-sel.png";
import IconHeadacheMusS from "../assets/icon_headache_mus-sel.png";

import IconHeadache_Frontal from "../assets/icon_headache_frontal.png";
import IconHeadache_Global from "../assets/icon_headache_global.png";
import IconHeadache_Occipital from "../assets/icon_headache_occipital.png";
import IconHeadache_Sinus from "../assets/icon_headache_sinus.png";
import IconHeadache_Temporal from "../assets/icon_headache_temporal.png";
import IconHeadache_Tension from "../assets/icon_headache_tension.png";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import IconCamera from "../assets/icon-camera.png";

import "./Login.css";
import { pushAll } from "@amcharts/amcharts4/.internal/core/utils/Array";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Headache = () => {
  const [headacheType, setHeadacheType] = useState([]);
  const [headRegion, setHeadRegion] = useState([]);
  const [associatedSymptoms, setAssociatedSymptoms] = useState([]);
  const [anyExaggeratingFactor, setAnyExaggeratingFactor] = useState();
  const [anyRelievingFactor, setAnyRelievingFactor]= useState();
  const [vm, setVM] = useState(false);
  const [as, setAS] = useState(false);
  const [mw, setMW] = useState(false);

  const [vomt, setVomt] = useState([
    { name: "Vomiting", icon: IconHeadacheVom },
  ]);
  const [asen, setASen] = useState([
    { name: "Altered Sensations", icon: IconHeadacheAlt },
  ]);
  const [mweak, setMWeak] = useState([
    { name: "Muscular weakness", icon: IconHeadacheMus },
  ]);

  const [gl, setGL] = useState(false);
  const [tp, setTP] = useState(false);
  const [sn, setSN] = useState(false);
  const [ft, setFT] = useState(false);
  const [op, setOP] = useState(false);
  const [ts, setTS] = useState(false);

  const [global, setGlobal] = useState([
    { name: "Global", icon: IconHeadache_Global },
  ]);
  const [tempo, setTempo] = useState([
    { name: "Temporal", icon: IconHeadache_Temporal },
  ]);
  const [sinus, setSinus] = useState([
    { name: "Sinus", icon: IconHeadache_Sinus },
  ]);
  const [frontal, setFrontal] = useState([
    { name: "Frontal", icon: IconHeadache_Frontal },
  ]);
  const [occipital, setOccipital] = useState([
    { name: "Occipital", icon: IconHeadache_Occipital },
  ]);
  const [tension, setTension] = useState([
    { name: "Tension", icon: IconHeadache_Tension },
  ]);

  const [list1, setList1] = useState([
    { name: "Continuous", icon: IconHeadacheCon, value: "Continuous" },
    { name: "Intermittent", icon: IconHeadacheInt, value: "Intermittent" },
  ]);


  const navigate = useNavigate();

 const { user, pId, pName, adbuser } = useContext(UserContext);
 const { instance } = useMsal();
 const activeAccount = instance.getActiveAccount();
 let dt2 = moment(new Date()).format("YYYY-MM-DDThh:mm:ss");
 const [dateTime, setdTime] = useState(dt2);
 const datey = new Date(dateTime);


  const datex = new Date();
  const [selLid, setSelLId] = useState("");
  const [status, setStatus] = useState("0");

  useEffect(() => {
    //  loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pId]);

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
          setSelLId(resp._id.toString());
        } else {
          alert("Loved Ones ID not loaded..");
        }
      });
    }
  };

  // const HeadChangeImage = (val) => {
  //   if (val.value === "vm" && vm === true) {
  //     vomt[0].icon = IconHeadacheVomS;
  //   } else if (val.value === "vm" && vm === false) {
  //     vomt[0].icon = IconHeadacheVom;
  //   }
  //   setVomt([...vomt]);

  //   if (val.value === "as" && as === true) {
  //     asen[0].icon = IconHeadacheAltS;
  //   } else if (val.value === "as" && as === false) {
  //     asen[0].icon = IconHeadacheAltS;
  //   }
  //   setASen([...asen]);

  //   if (val.value === "mw" && mw === true) {
  //     mweak[0].icon = IconHeadacheMusS;
  //   } else if (val.value === "mw" && mw === false) {
  //     mweak[0].icon = IconHeadacheMus;
  //   }
  //   setMWeak([...mweak]);
  // };


  const HeadChangeImage = (val, vstatus) => {

    if (val == "vm") {
      setVM(!vstatus);
      if (!vm == true) {
        vomt[0].icon = IconHeadacheVomS;
      } else {
        vomt[0].icon = IconHeadacheVom;
      }
      setVomt([...vomt]);
    }

    if (val == "as") {
      setAS(!vstatus);
      if (!as == true) {
        asen[0].icon = IconHeadacheAltS;
      } else {
        asen[0].icon = IconHeadacheAlt;
      }
      setASen([...asen]);
    }


    if (val == "mw") {
      setMW(!vstatus);
      if (!mw == true) {
        mweak[0].icon = IconHeadacheMusS;
      } else {
        mweak[0].icon = IconHeadacheMus;
      }
      setMWeak([...mweak]);
    }
  };
  
  const List1ChangeImage = (val, id) => {
    console.log("val", val);
    setHeadacheType(val.value);
    if (val.value == 1) {
      list1[0].icon = IconHeadacheConS;
      list1[1].icon = IconHeadacheInt;
      setList1([...list1]);
    }
    if (val.value == 2) {
      list1[0].icon = IconHeadacheCon;
      list1[1].icon = IconHeadacheIntS;
      setList1([...list1]);
    }
    console.log("list1", list1);
  };

  const onwebCamera = () => {
    const path = `/webCamera`;
    navigate(path);
  };


  const onSubmit = async (event) => {
    event.preventDefault();
    let headR = [];
    if(gl === true){
      headR.push("Global");      
    }
    if(tp === true){
      headR.push("Temporal");
    }
    if(sn === true){
      headR.push("Sinus");
    }
    if(ft === true){
      headR.push("Frontal");
    }
    if(op === true){
      headR.push("Occipital");
    }
    if(ts === true){
      headR.push("Tension");      
    } 
   
    setHeadRegion(headR);
    console.log("list 2:", headR);

    let associatedSy = [];
    if(vm === true){
      associatedSy.push("Vomting");
    }
    if(as === true){
      associatedSy.push("AlteredSensation");
    }
    if(mw === true){
      associatedSy.push("MuscularWeakness");
    }    
  
    setAssociatedSymptoms(associatedSy);
    console.log("list3 :", associatedSy);
    try {
      if (user) {
        let dt = new Date();
        let id = new BSON.ObjectID();
        let cid = adbuser;
        const createx = user.functions.createSymptomsHeadache(
          id,
          "GlobalMedics2021",
          anyExaggeratingFactor,
          anyRelievingFactor,
          associatedSy,
          datey,
          cid,
          "careManager",
          dt,
          "active",
          headR,
          headacheType,
          dt,
          pId      
        );
        createx.then((resp) => {
            console.log("resp:", resp);
          alert("Headache Symptoms Added Successfully");
          navigate(`/symptoms`);
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
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Headache"
          title2="Please share details of your headache"
          title3=""
          limg="rl"
          rimg="rh"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-dc">
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <Card.Body>
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Date & time of onset
                </p>
                <Form.Control
                  className="name-input"
                  type="datetime-local"
                  // placeholder=""
                  value={dateTime}
                  name="dateTime"
                  onChange={(e) => setdTime(e.target.value)}
                  style={{
                    color: "#ADAAA7",
                    marginTop: "0.5rem",
                    // marginLeft: "0.7rem",
                    fontSize: "0.9rem",
                  }}
                ></Form.Control>
              </div>

              <Divider
                style={{ margin: "10pt", borderTop: "1px solid #000000" }}
              />
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Headache Type
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
                          {list1.map((lone, idx) => (
                            <ToggleButton
                              key={idx}
                              id={`lone-${idx}`}
                              type="radio"
                              // variant={idx % 2 ? "outline-success" : "outline-danger"}
                              variant="outline-primary"
                              // variant="outline"
                              name={`lone-${idx}`}
                              value={lone.value}
                              checked={headacheType === lone.value}
                              // onChange={(e) =>
                              //   setListOne(e.currentTarget.value)
                              onChange={(e) => List1ChangeImage(lone, idx)}
                              style={{
                                borderTop: "6px solid #1D5A90",
                                borderRadius: "10pt",
                                boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                marginRight: "2rem",
                                // marginLeft: "4rem",
                                borderLeft: "0px solid #fff",
                                borderRight: "0px solid #fff",
                                borderBottom: "0px solid #fff",
                              }}
                              className="icon-sv"
                            >
                              <img src={lone.icon} style={{ width: "60%" }} />

                              <div
                                className="icon-text"
                                style={{
                                  lineHeight: "1rem",
                                  marginTop: "0.3rem",
                                  marginBottom: "0rem",
                                }}
                              >
                                {lone.name}
                              </div>
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </div>
                    </Grid>
                  </Box>
                </div>
              </div>
              <Divider
                style={{ margin: "10pt", borderTop: "1px solid #000000" }}
              />
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Headache Region
                </p>
                <div className="form-container">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0",
                      }}
                    >
                      <div style={{ marginLeft: "1.5rem" }}>
                        <ButtonGroup>
                          <ToggleButton
                            id="gl"
                            type="radio"
                            variant="outline-primary"
                            name="gl"
                            value="gl"
                            checked={gl}
                            onClick={() => setGL(!gl)}
                            // onChange={(e) => HeadChangeImage("gl", gl)}
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
                              src={global[0].icon}
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
                              {global[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="tp"
                            type="radio"
                            variant="outline-primary"
                            name="tp"
                            value="tp"
                            checked={tp}
                            onClick={() => setTP(!tp)}
                            // onChange={(e) => HeadChangeImage("tp", tp)}
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
                              src={tempo[0].icon}
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
                              {tempo[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="sn"
                            type="radio"
                            variant="outline-primary"
                            name="sn"
                            value="sn"
                            checked={sn}
                            onClick={() => setSN(!sn)}
                            // onChange={(e) => HeadChangeImage("sn", sn)}
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
                              src={sinus[0].icon}
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
                              {sinus[0].name}
                            </div>
                          </ToggleButton>
                        </ButtonGroup>
                        <ButtonGroup style={{ marginTop: "1rem" }}>
                          <ToggleButton
                            id="ft"
                            type="radio"
                            variant="outline-primary"
                            name="ft"
                            value="ft"
                            checked={ft}
                            onClick={() => setFT(!ft)}
                            // onChange={(e) => HeadChangeImage("ft", ft)}
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
                              src={frontal[0].icon}
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
                              {frontal[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="op"
                            type="radio"
                            variant="outline-primary"
                            name="op"
                            value="op"
                            checked={op}
                            onClick={() => setOP(!op)}
                            // onChange={(e) => HeadChangeImage("op", op)}
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
                              src={occipital[0].icon}
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
                              {occipital[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="ts"
                            type="radio"
                            variant="outline-primary"
                            name="ts"
                            value="ts"
                            checked={ts}
                            onClick={() => setTS(!ts)}
                            // onChange={(e) => HeadChangeImage("ts", ts)}
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
                              src={tension[0].icon}
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
                              {tension[0].name}
                            </div>
                          </ToggleButton>

                          {/* ))} */}
                        </ButtonGroup>
                      </div>
                    </Grid>
                  </Box>
                </div>
              </div>

              <Divider
                style={{ margin: "10pt", borderTop: "1px solid #000000" }}
              />
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Associated Symptoms
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
                            id="vm"
                            type="radio"
                            variant="outline-primary"
                            name="vm"
                            value="vm"
                            checked={vm}
                            // onClick={() => setVM(!vm)}
                            onClick={(e) => HeadChangeImage("vm", vm)}
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
                              src={vomt[0].icon}
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
                              {vomt[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="as"
                            type="radio"
                            variant="outline-primary"
                            name="as"
                            value="as"
                            checked={as}
                            // onClick={() => setAS(!as)}
                            onClick={(e) => HeadChangeImage("as", as)}
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
                              src={asen[0].icon}
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
                              {asen[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="mw"
                            type="radio"
                            variant="outline-primary"
                            name="mw"
                            value="mw"
                            checked={mw}
                            // onClick={() => setMW(!mw)}
                            onClick={(e) => HeadChangeImage("mw", mw)}
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
                              src={mweak[0].icon}
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
                              {mweak[0].name}
                            </div>
                          </ToggleButton>
                        </ButtonGroup>
                      </div>
                    </Grid>
                  </Box>
                </div>
              </div>

              <Divider
                style={{ margin: "10pt", borderTop: "1px solid #000000" }}
              />
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Any exaggerating factors?
                </p>
                <div className="form-container">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      style={{
                        // maxWidth: "590px",
                        alignItems: "left",
                        justifyContent: "left",
                        margin: "0",
                      }}
                    >
                      <>
                        <select
                          className="form-control"
                          id="bloodgroup"
                          style={{
                            color: "#ADAAA7",
                            borderRadius: "5px",
                          }}
                          name="anyExaggeratingFactor"
                            onChange={(e) =>
                              setAnyExaggeratingFactor(e.target.value)
                            }
                        >
                          <option value="">Select any one</option>
                          <option value="BendingForward">Bending Forward</option>
                          <option value="Straining">Straining</option>
                          <option value="Light">Light</option>
                          <option value="Sound">Sound</option>
                        </select>
                      </>
                    </Grid>
                  </Box>
                </div>
              </div>
              <Divider
                style={{ margin: "10pt", borderTop: "1px solid #000000" }}
              />
              
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Any relieving factors?
                </p>
                <div className="form-container">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      style={{
                        // maxWidth: "590px",
                        alignItems: "left",
                        justifyContent: "left",
                        margin: "0",
                      }}
                    >
                      <>
                        <select
                          className="form-control"
                          id="bloodgroup"
                          style={{
                            color: "#ADAAA7",
                            borderRadius: "5px",
                          }}
                          name="anyRelievingFactor"
                           onChange={(e) =>
                             setAnyRelievingFactor(e.target.value)
                           }
                        >
                          <option value="">Select any one</option>
                          <option value="Dark">Dark</option>
                          <option value="Quiet">Quiet</option>
                          <option value="Pressing">Pressing</option>
                        </select>
                      </>
                    </Grid>
                  </Box>
                </div>
              </div>

              {/* <Divider
                style={{ margin: "10pt", borderTop: "1px solid #000000" }}
              />
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Take a picture
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
                              type="radio"
                              variant="outline-primary"
                              className="icon-sv btn-webcamera"
                              onClick={onwebCamera}
                            >
                              <img src={IconCamera} className="PhotoCam"  />
                              <div
                                className="icon-text"
                                style={{
                                  lineHeight: "1rem",
                                  marginTop: "0.3rem",
                                  marginBottom: "0rem",
                                }}
                              >
                                Click Photo
                              </div>
                            </ToggleButton>
                          
                        </ButtonGroup>
                      </div>
                    </Grid>
                  </Box>
                </div>
              </div> */}



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
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default Headache;
