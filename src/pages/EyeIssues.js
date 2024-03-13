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

import IconEyeBoth from "../assets/icon_eye_both.png";
import IconEyeLeft from "../assets/icon_eye_left.png";
import IconEyeRight from "../assets/icon_eye_right.png";
import IconEyeBothS from "../assets/icon_eye_both_sel.png";
import IconEyeLeftS from "../assets/icon_eye_left_sel.png";
import IconEyeRightS from "../assets/icon_eye_right_sel.png";

import IconEyePain from "../assets/icon_eye_pain.png";
import IconEyeTear from "../assets/icon_eye_tear.png";
import IconEyeVision from "../assets/icon_eye_vision.png";
import IconEyeRedness from "../assets/icon_eye_redness.png";
import IconEyePainS from "../assets/icon_eye_pain_sel.png";
import IconEyeTearS from "../assets/icon_eye_tear_sel.png";
import IconEyeVisionS from "../assets/icon_eye_vision_sel.png";
import IconEyeRednessS from "../assets/icon_eye_redness_sel.png";

import IconYes from "../assets/icon-yes.png";
import IconNo from "../assets/icon-no.png";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import IconCamera from "../assets/icon-camera.png";
import moment from "moment";

import "./Login.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const EyeIssues = () => {

  const onSubmit1 = async () => {
    alert("Symptoms Added Successfully");
    const path = `/symptoms`;
    navigate(path);
  }

  const [listOne, setListOne] = useState();

  const [headacheType, setHeadacheType] = useState([]);
  const [headRegion, setHeadRegion] = useState([]);
  const [associatedSymptoms, setAssociatedSymptoms] = useState([]);
  const [anyExaggeratingFactor, setAnyExaggeratingFactor] = useState();
  const [anyRelievingFactor, setAnyRelievingFactor]= useState();

  const [ep, setEP] = useState(false);
  const [et, setET] = useState(false);
  const [ev, setEV] = useState(false);

  const [pain, setPain] = useState([{ name: "Painful", icon: IconEyePain }]);

  const [tear, setTear] = useState([{ name: "Tear", icon: IconEyeTear }]);

  const [vision, setVision] = useState([
    { name: "Vision", icon: IconEyeVision },
  ]);

  const [list1, setList1] = useState([
    { name: "Both Eyes", icon: IconEyeBoth, value: "1" },
    { name: "Left Eye", icon: IconEyeLeft, value: "2" },
    { name: "Right Eye", icon: IconEyeRight, value: "3" },
  ]);

  const [er, setER] = useState(false);
  const [redness, setRedness] = useState([
    { name: "Redness", icon: IconEyeRedness },
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

  // const EyeChangeImage = (val) => {
  //   if (val.value === "ep" && ep === true) {
  //     pain[0].icon = IconEyePain;
  //   } else if (val.value === "ep" && ep === false) {
  //     pain[0].icon = IconEyePain;
  //   }
  //   setPain([...pain]);

  //   if (val.value === "et" && et === true) {
  //     tear[0].icon = IconEyeTear;
  //   } else if (val.value === "et" && et === false) {
  //     tear[0].icon = IconEyeTear;
  //   }
  //   setTear([...tear]);

  //   if (val.value === "ev" && ev === true) {
  //     vision[0].icon = IconEyeVision;
  //   } else if (val.value === "ev" && ev === false) {
  //     vision[0].icon = IconEyeVision;
  //   }
  //   setVision([...vision]);
  // };


  const onwebCamera = () => {
    const path = `/webCamera`;
    navigate(path);
  };


  const EyeChangeImage = (val, vstatus) => {

    if (val == "ep") {
      setEP(!vstatus);
      if (!ep == true) {
        pain[0].icon = IconEyePainS;
      } else {
        pain[0].icon = IconEyePain;
      }
      setPain([...pain]);
    }

    if (val == "et") {
      setET(!vstatus);
      if (!et == true) {
        tear[0].icon = IconEyeTearS;
      } else {
        tear[0].icon = IconEyeTear;
      }
      setTear([...tear]);
    }

    if (val == "ev") {
      setEV(!vstatus);
      if (!ev == true) {
        vision[0].icon = IconEyeVisionS;
      } else {
        vision[0].icon = IconEyeVision;
      }
      setVision([...vision]);
    }

    if (val == "er") {
      setER(!vstatus);
      if (!er == true) {
        redness[0].icon = IconEyeRednessS;
      } else {
        redness[0].icon = IconEyeRedness;
      }
      setRedness([...redness]);
    }

  };

  const List1ChangeImage = (val, id) => {
    console.log("val", val);
    setListOne(val.value);
    if (val.value == 1) {
      list1[0].icon = IconEyeBothS;
      list1[1].icon = IconEyeLeft;
      list1[2].icon = IconEyeRight;
      setList1([...list1]);
    }
    if (val.value == 2) {
      list1[0].icon = IconEyeBoth;
      list1[1].icon = IconEyeLeftS;
      list1[2].icon = IconEyeRight;
      setList1([...list1]);
    }
    if (val.value == 3) {
      list1[0].icon = IconEyeBoth;
      list1[1].icon = IconEyeLeft;
      list1[2].icon = IconEyeRightS;
      setList1([...list1]);
    }
    console.log("list1", list1);
  };

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
        const createx = user.functions.createSymptomsEye(
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
          title="Eye Issues"
          title2="Please tell me if you have any eye problems"
          title3=""
          limg="rl"
          rimg="re"
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
                  Eye
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
                              <img src={lone.icon} style={{ width: "80%" }} />

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
                  Symptom Type
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
                            id="ep"
                            type="radio"
                            variant="outline-primary"
                            name="ep"
                            value="ep"
                            checked={ep}
                            // onClick={() => setEP(!ep)}
                            onClick={(e) => EyeChangeImage("ep", ep)}
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
                              src={pain[0].icon}
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
                              {pain[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="et"
                            type="radio"
                            variant="outline-primary"
                            name="et"
                            value="et"
                            checked={et}
                            // onClick={() => setET(!et)}
                            onClick={(e) => EyeChangeImage("et", et)}
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
                              src={tear[0].icon}
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
                              {tear[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="ev"
                            type="radio"
                            variant="outline-primary"
                            name="ev"
                            value="ev"
                            checked={ev}
                            // onClick={() => setEV(!ev)}
                            onClick={(e) => EyeChangeImage("ev", ev)}
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
                              src={vision[0].icon}
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
                              {vision[0].name}
                            </div>
                          </ToggleButton>
                        </ButtonGroup>
                        <ButtonGroup
                          style={{
                            marginTop: "1rem",
                          }}
                        >
                          {/* {list2.map((ltwo, idy) => ( */}
                          <div>
                            <ToggleButton
                              id="er"
                              type="radio"
                              variant="outline-primary"
                              name="er"
                              value="er"
                              checked={er}
                              // onClick={() => setER(!er)}
                              onClick={(e) => EyeChangeImage("er", er)}
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
                                src={redness[0].icon}
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
                                {redness[0].name}
                              </div>
                            </ToggleButton>
                          </div>
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

export default EyeIssues;
