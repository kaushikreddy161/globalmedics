import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
// import { AuthenticatedTemplate } from '@azure/msal-react';
 import { useMsal } from '@azure/msal-react';
// import { IdTokenData } from '../components/DataDisplay';

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
// import IconDailyCheckIn from "../assets/icon-daily-checkIn.png";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

import RNRunnyNose from "../assets/icon-sym-rno-rno.png";
import RNBlockedNose from "../assets/icon-sym-rno-bno.png";
import RNSneezing from "../assets/icon-sym-rno-sne.png";
import RNRunnyNoseS from "../assets/icon-sym-rno-rno-sel.png";
import RNBlockedNoseS from "../assets/icon-sym-rno-bno-sel.png";
import RNSneezingS from "../assets/icon-sym-rno-sne-sel.png";

import AboveNose from "../assets/icon-sym-rno-anose.png";
import LeftSide from "../assets/icon-sym-rno-lnose.png";
import RightSide from "../assets/icon-sym-rno-rnose.png";

import IconYes from "../assets/icon-yes.png";
import IconNo from "../assets/icon-no.png";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import IconCamera from "../assets/icon-camera.png";

import "./Login.css";
import moment from "moment";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const RunnyNose = () => {
  const [listOne, setListOne] = useState();
  const [listTwo, setListTwo] = useState();
  const [listThree, setListThree] = useState();

  const [headacheType, setHeadacheType] = useState([]);
  const [headRegion, setHeadRegion] = useState([]);
  const [associatedSymptoms, setAssociatedSymptoms] = useState([]);
  const [anyExaggeratingFactor, setAnyExaggeratingFactor] = useState();
  const [anyRelievingFactor, setAnyRelievingFactor]= useState();

  const [an, setAN] = useState(false);
  const [ls, setLS] = useState(false);
  const [rs, setRS] = useState(false);

  const [anose, setANose] = useState([{ name: "Above nose", icon: AboveNose }]);

  const [lside, setLSide] = useState([{ name: "Left side", icon: LeftSide }]);

  const [rside, setRSide] = useState([{ name: "Right side", icon: RightSide }]);

  const [list1, setList1] = useState([
    { name: "Runny Nose", icon: RNRunnyNose, value: "1" },
    { name: "Blocked Nose", icon: RNBlockedNose, value: "2" },
    { name: "Sneezing", icon: RNSneezing, value: "3" },
  ]);

  const [list2, setList2] = useState([
    { name: "Above nose", icon: AboveNose, value: "1" },
    { name: "Left side", icon: LeftSide, value: "2" },
    { name: "Right side", icon: RightSide, value: "3" },
  ]);

  const [list3, setList3] = useState([
    { name: "Yes", icon: IconYes, value: "1" },
    { name: "No", icon: IconNo, value: "2" },
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

  const NoseChangeImage = (val) => {
    if (val.value === "an" && an === true) {
      anose[0].icon = AboveNose;
    } else if (val.value === "an" && an === false) {
      anose[0].icon = AboveNose;
    }
    setANose([...anose]);

    if (val.value === "ls" && ls === true) {
      lside[0].icon = LeftSide;
    } else if (val.value === "ls" && ls === false) {
      lside[0].icon = LeftSide;
    }
    setLSide([...lside]);

    if (val.value === "rs" && rs === true) {
      rside[0].icon = RightSide;
    } else if (val.value === "rs" && rs === false) {
      rside[0].icon = RightSide;
    }
    setRSide([...rside]);
  };

  const List1ChangeImage = (val, id) => {
    console.log("val", val);
    setListOne(val.value);
    if (val.value == 1) {
      list1[0].icon = RNRunnyNoseS;
      list1[1].icon = RNBlockedNose;
      list1[2].icon = RNSneezing;
      setList1([...list1]);
    }
    if (val.value == 2) {
      list1[0].icon = RNRunnyNose;
      list1[1].icon = RNBlockedNoseS;
      list1[2].icon = RNSneezing;
      setList1([...list1]);
    }
    if (val.value == 3) {
      list1[0].icon = RNRunnyNose;
      list1[1].icon = RNBlockedNose;
      list1[2].icon = RNSneezingS;
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
    let headR = [];
    // headR = [
    //   { 0: "Global", "status": gl},
    //   { 1: "Temporal", "status": tp},
    //   { 2: "Sinus", "status": sn},
    //   { 3: "Frontal", "status": ft},
    //   { 4: "Occipital", "status": op},
    //   { 5: "Tension", "status": ts}
    // ];
    setHeadRegion(headR);
    console.log("list 2:", headR);

    let associatedSy = [];
    // associatedSy = [
    //   { "items" : "Vomting", "status": vm},
    //   { "items" : "AlteredSensation", "status": as},
    //   { "items" : "MuscularWeakness", "status": mw}
    // ];
    setAssociatedSymptoms(associatedSy);
    console.log("list3 :", associatedSy);
    try {
      if (user) {
        // console.log('auth:',user.id);
        let dt = new Date();
        let id = new BSON.ObjectID();
        let cid = adbuser;
      //  let pid = pId;
        const createx = user.functions.createSymptomsRNose(
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
          title="Nose"
          title2="Please share details of any nose-related problems"
          title3=""
          limg="rl"
          rimg="s-rnr"
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
                  Symptom Type
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
                              checked={listOne === lone.value}
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
                  Do you have pain above or on either sides of your nose?
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
                          {/* {list2.map((ltwo, idy) => ( */}
                          <ToggleButton
                            id="an"
                            type="radio"
                            variant="outline-primary"
                            name="an"
                            value="an"
                            checked={an}
                            onClick={() => setAN(!an)}
                            onChange={(e) => NoseChangeImage("an", an)}
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
                              src={anose[0].icon}
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
                              {anose[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="ls"
                            type="radio"
                            variant="outline-primary"
                            name="ls"
                            value="ls"
                            checked={ls}
                            onClick={() => setLS(!ls)}
                            onChange={(e) => NoseChangeImage("ls", ls)}
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
                              src={lside[0].icon}
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
                              {lside[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="rs"
                            type="radio"
                            variant="outline-primary"
                            name="rs"
                            value="rs"
                            checked={rs}
                            onClick={() => setRS(!rs)}
                            onChange={(e) => NoseChangeImage("rs", rs)}
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
                              src={rside[0].icon}
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
                              {rside[0].name}
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
                  Can you smell properly?
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
                              checked={listThree === lthree.value}
                              onChange={(e) =>
                                setListThree(e.currentTarget.value)
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
                onClick={onSubmit1}
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

export default RunnyNose;
