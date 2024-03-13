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

import IconFeverMrng from "../assets/icon_fever_mrng.png";
import IconFeverAfn from "../assets/icon_fever_afn.png";
import IconFeverEng from "../assets/icon_fever_eng.png";
import IconFeverNight from "../assets/icon_fever_night.png";

import IconFeverMrngS from "../assets/icon_fever_mrng_sel.png";
import IconFeverAfnS from "../assets/icon_fever_afn_sel.png";
import IconFeverEngS from "../assets/icon_fever_eng_sel.png";
import IconFeverNightS from "../assets/icon_fever_night_sel.png";

import IconFeverChill from "../assets/icon_fever_chills.png";
import IconFeverShiv from "../assets/icon_fever_shivering.png";
import IconFeverChillS from "../assets/icon_fever_chills_sel.png";
import IconFeverShivS from "../assets/icon_fever_shivering_sel.png";

import IconHeadacheCon from "../assets/icon_headache_con.png";
import IconHeadacheInt from "../assets/icon_headache_int.png";
import IconHeadacheConS from "../assets/icon_headache_con_sel.png";
import IconHeadacheIntS from "../assets/icon_headache_int_sel.png";

import IconYes from "../assets/icon-yes.png";
import IconNo from "../assets/icon-no.png";
import IconCamera from "../assets/icon-camera.png";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./Login.css";
import moment from "moment";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Fever = () => {
  const [feverType, setFeverType] = useState();
  const [associatedSymptoms, setAssociatedSymptoms] = useState();
  const [particularTimeDay, setParticularTimeDay] = useState();
  const [feverTime,setFeverTime] = useState([]);
  const [medicineForFever,setMedicineForFever] = useState([]);
  const [fc, setFC] = useState(false);
  const [fs, setFS] = useState(false);
  const [temperature,setTemperature] = useState();

  const [chill, setChill] = useState([
    { name: "Chills", icon: IconFeverChill },
  ]);
  const [shivering, setShivering] = useState([
    { name: "Shivering", icon: IconFeverShiv },
  ]);

  const [mr, setMR] = useState(false);
  const [an, setAN] = useState(false);
  const [en, setEN] = useState(false);
  const [ng, setNG] = useState(false);

  const [mrng, setMrng] = useState([{ name: "Morning", icon: IconFeverMrng }]);
  const [afn, setAfn] = useState([{ name: "Afternoon", icon: IconFeverAfn }]);
  const [eng, setEng] = useState([{ name: "Evening", icon: IconFeverEng }]);
  const [night, setNight] = useState([{ name: "Night", icon: IconFeverNight }]);

  const [list1, setList1] = useState([
    { name: "Continuous", icon: IconHeadacheCon, value: "Continuous" },
    { name: "Intermittent", icon: IconHeadacheInt, value: "Intermittent" },
  ]);
  const [list2, setList2] = useState([
    { name: "Yes", icon: IconYes, value: "Yes" },
    { name: "No", icon: IconNo, value: "No" },
  ]);
  const [list3, setList3] = useState([
    { name: "Yes", icon: IconYes, value: "Yes" },
    { name: "No", icon: IconNo, value: "No" },
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

  // const FeverChangeImage = (val) => {
  //   if (val.value === "fc" && fc === true) {
  //     chill[0].icon = IconFeverChill;
  //   } else if (val.value === "fc" && fc === false) {
  //     chill[0].icon = IconFeverChill;
  //   }
  //   setChill([...chill]);

  //   if (val.value === "fs" && fs === true) {
  //     shivering[0].icon = IconFeverShiv;
  //   } else if (val.value === "fs" && fs === false) {
  //     shivering[0].icon = IconFeverShiv;
  //   }
  //   setShivering([...shivering]);

  //   if (mrng.value === "mr" && mr === true) {
  //     mrng[0].icon = IconFeverMrng;
  //   } else if (val.value === "mr" && mr === false) {
  //     mrng[0].icon = IconFeverMrng;
  //   }
  //   setMrng([...mrng]);

  //   if (mrng.value === "an" && an === true) {
  //     afn[0].icon = IconFeverAfn;
  //   } else if (val.value === "an" && an === false) {
  //     afn[0].icon = IconFeverAfn;
  //   }
  //   setAfn([...afn]);

  //   if (eng.value === "en" && en === true) {
  //     eng[0].icon = IconFeverEng;
  //   } else if (val.value === "en" && en === false) {
  //     eng[0].icon = IconFeverEng;
  //   }
  //   setEng([...eng]);

  //   if (night.value === "ng" && ng === true) {
  //     night[0].icon = IconFeverNight;
  //   } else if (val.value === "ng" && ng === false) {
  //     night[0].icon = IconFeverNight;
  //   }
  //   setNight([...night]);
  // };
  
  
  
  const FeverChangeImage = (val,vstatus) => {

    if(val == "fc") 
    { 
      setFC(!vstatus);
      if(!fc == true)
      {
        chill[0].icon = IconFeverChillS;   
      } else
      {
        chill[0].icon = IconFeverChill;     
      }
      setChill([...chill]);
    }

    if(val == "fs") 
    { 
      setFS(!vstatus);
      if(!fs == true)
      {
        shivering[0].icon = IconFeverShivS;   
      } else
      {
        shivering[0].icon = IconFeverShiv;     
      }
      setShivering([...shivering]);
    }

    if(val == "mr") 
    { 
      setMR(!vstatus);
      if(!mr == true)
      {
        mrng[0].icon = IconFeverMrngS;   
      } else
      {
        mrng[0].icon = IconFeverMrng;     
      }
      setMrng([...mrng]);
    }

    if(val == "an") 
    { 
      setAN(!vstatus);
      if(!an == true)
      {
        afn[0].icon = IconFeverAfnS;   
      } else
      {
        afn[0].icon = IconFeverAfn;     
      }
      setAfn([...afn]);
    }

    if(val == "en") 
    { 
      setEN(!vstatus);
      if(!en == true)
      {
        eng[0].icon = IconFeverEngS;   
      } else
      {
        eng[0].icon = IconFeverEng;     
      }
      setEng([...eng]);
    }

    if(val == "ng") 
    { 
      setNG(!vstatus);
      if(!ng == true)
      {
        night[0].icon = IconFeverNightS;   
      } else
      {
        night[0].icon = IconFeverNight;     
      }
      setNight([...night]);
    }
  };

  const List1ChangeImage = (val, id) => {
    console.log("val", val);
    setFeverType(val.value);
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

  const onSubmit1 = async () => {
    alert("Symptoms Added Successfully");
    const path = `/symptoms`;
    navigate(path);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    // feverType , temperature, particualTimeDay,medicineForFever
    let feverT = [];
    if(mr === true){
      feverT.push("Morning");
    }

    if(an === true){
      feverT.push("Afternoon");
    }
    
    if(en === true){
      feverT.push("Evening");
    }
    
    if(ng === true){
      feverT.push("Night");
    }
    
    setFeverTime(feverT);
    console.log("list 2:", feverT);

    let associatedSy = [];
    if(fc === true){
      associatedSy.push("Chills");
    }
    if(fc === true){
      associatedSy.push("Shivering");
    }
    
    setAssociatedSymptoms(associatedSy);
    console.log("list3 :", associatedSy);

    try {
      if (user) {
        // console.log('auth:',user.id);
        let dt = new Date();
        let id = new BSON.ObjectID();
        let cid = adbuser;
      //  let pid = pId;
        const createx = user.functions.createSymptomsFever(
          id,
          "GlobalMedics2021",
          associatedSy,
          datey,
          cid,
          "careManager",
          dt,
          "active",
          particularTimeDay,
          feverType,
          feverT,
          dt,
          pId,
          medicineForFever,
          temperature,      
        );
        createx.then((resp) => {
            console.log("resp:", resp);
          alert("Symptoms Added Successfully");
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
          title="Fever"
          title2="Please record your temperature"
          title3=""
          limg="rl"
          rimg="rf"
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
                  Fever Type
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
                              checked={feverType === lone.value}
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
                <div class="row">
                  <div
                    class="col-7"
                    style={{
                      color: "#209F85",
                      marginTop: "0rem",
                      marginBottom: "0rem",
                    }}
                  >
                    Temperature
                  </div>
                  <div class="col-3">
                    <Form.Control
                      className="name-input"
                      type="number"
                      name="temperature"
                      value={temperature}
                      onChange={(e) => setTemperature(e.target.value)}
                      style={{
                        color: "#ADAAA7",
                        marginTop: "0.5rem",
                        fontSize: "0.9rem",
                      }}
                    ></Form.Control>
                  </div>
                  <div
                    class="col-2"
                    style={{
                      color: "#209F85",
                      marginTop: "0rem",
                      marginBottom: "0rem",
                    }}
                  >
                    &deg;C
                  </div>
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
                            id="fc"
                            type="radio"
                            variant="outline-primary"
                            name="fc"
                            value="fc"
                            checked={fc}
                             onClick={() => setFC(!fc)}
                          //  onClick={(e) => FeverChangeImage("fc", fc)}
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
                              src={chill[0].icon}
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
                              {chill[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="fs"
                            type="radio"
                            variant="outline-primary"
                            name="fs"
                            value="fs"
                            checked={fs}
                             onClick={() => setFS(!fs)}
                           // onClick={(e) => FeverChangeImage("fs", fs)}
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
                              src={shivering[0].icon}
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
                              {shivering[0].name}
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
                  Does The Fever Occur At A Particular Time Of Day?
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
                          {list2.map((ltwo, idy) => (
                            <ToggleButton
                              key={idy}
                              id={`ltwo-${idy}`}
                              type="radio"
                              variant="outline-primary"
                              name={`ltwo-${idy}`}
                              value={ltwo.value}
                              checked={particularTimeDay === ltwo.value}
                              onChange={(e) =>
                                setParticularTimeDay(e.currentTarget.value)
                              }
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
                              <img src={ltwo.icon} style={{ width: "60%" }} />

                              <div
                                className="icon-text"
                                style={{
                                  lineHeight: "1rem",
                                  marginTop: "0.3rem",
                                  marginBottom: "0rem",
                                }}
                              >
                                {ltwo.name}
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
                  Fever Time
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
                            id="mr"
                            type="radio"
                            variant="outline-primary"
                            name="mr"
                            value="mr"
                            checked={mr}
                            onClick={() => setMR(!mr)}
                           // onClick={(e) => FeverChangeImage("mr", mr)}
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
                            id="an"
                            type="radio"
                            variant="outline-primary"
                            name="an"
                            value="an"
                            checked={an}
                            onClick={() => setAN(!an)}
                           // onClick={(e) => FeverChangeImage("an", an)}
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
                              src={afn[0].icon}
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
                              {afn[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="en"
                            type="radio"
                            variant="outline-primary"
                            name="en"
                            value="en"
                            checked={en}
                            onClick={() => setEN(!en)}
                           // onClick={(e) => FeverChangeImage("en", en)}
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
                              src={eng[0].icon}
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
                              {eng[0].name}
                            </div>
                          </ToggleButton>
                        </ButtonGroup>
                        <ButtonGroup style={{ marginTop: "1rem" }}>
                          <ToggleButton
                            id="ng"
                            type="radio"
                            variant="outline-primary"
                            name="ng"
                            value="ng"
                            checked={ng}
                            onClick={() => setNG(!ng)}
                            // onClick={(e) => FeverChangeImage("ng", ng)}
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
                              src={night[0].icon}
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
                              {night[0].name}
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
                  Are you taking any medicine for fever?
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
                          {list3.map((lthree, idz) => (
                            <ToggleButton
                              key={idz}
                              id={`lthree-${idz}`}
                              type="radio"
                              variant="outline-primary"
                              name={`lthree-${idz}`}
                              value={lthree.value}
                              checked={medicineForFever === lthree.value}
                              onChange={(e) =>
                                setMedicineForFever(e.currentTarget.value)
                              }
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
                              <img src={lthree.icon} style={{ width: "60%" }} />

                              <div
                                className="icon-text"
                                style={{
                                  lineHeight: "1rem",
                                  marginTop: "0.3rem",
                                  marginBottom: "0rem",
                                }}
                              >
                                {lthree.name}
                              </div>
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </div>
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

export default Fever;
