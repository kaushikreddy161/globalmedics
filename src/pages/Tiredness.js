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

import AlertRefreshed from "../assets/icon-alert-refreshed.png";
import WellRested from "../assets/icon-well-rested.png";
import SlightlyRired from "../assets/icon-slightly-rired.png";

import ModeratelyTired from "../assets/icon-moderately-tired.png";
import Tired from "../assets/icon-tired.png";
import VeryTired from "../assets/icon-very-tired.png";
import Drowsy from "../assets/icon-drowsy.png";

import IconExhausted from "../assets/icon-exhausted.png";
import IconOverwhelmed from "../assets/icon-overwhelmed.png";
import IconComatose from "../assets/icon-comatose.png";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./Login.css";
import moment from "moment";

import IconPatientImage from "../assets/icon-patient-photo.png";
import { trusted } from "mongoose";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Tiredness = () => {

  const onSubmit1 = async () => {
    alert("Symptoms Added Successfully");
    const path = `/symptoms`;
    navigate(path);
  }

  const [listOne, setListOne] = useState();
  const [listTwo, setListTwo] = useState();
  const [listThree, setListThree] = useState();

  const [headacheType, setHeadacheType] = useState([]);
  const [headRegion, setHeadRegion] = useState([]);
  const [associatedSymptoms, setAssociatedSymptoms] = useState([]);
  const [anyExaggeratingFactor, setAnyExaggeratingFactor] = useState();
  const [anyRelievingFactor, setAnyRelievingFactor] = useState();

  const [list1, setList1] = useState([
    { name: "Alert & refreshed", icon: AlertRefreshed, value: "1" },
    { name: "Well rested", icon: WellRested, value: "2" },
    { name: "Slightly tired", icon: SlightlyRired, value: "3" },
  ]);
  const [list2, setList2] = useState([
    { name: "Moderately Tired", icon: ModeratelyTired, value: "1" },
    { name: "Tired", icon: Tired, value: "2" },
    { name: "Very Tired", icon: VeryTired, value: "3" },
    { name: "Drowsy", icon: Drowsy, value: "4" },
  ]);
  const [list3, setList3] = useState([
    { name: "Exhausted", icon: IconExhausted, value: "1" },
    { name: "Overwhelmed", icon: IconOverwhelmed, value: "2" },
    { name: "Comatose", icon: IconComatose, value: "3" },
  ]);


  const [mt, setMT] = useState(false);
  const [tr, setTR] = useState(false);
  const [vt, setVT] = useState(false);
  const [ds, setDS] = useState(false);

  const [moderately, setModerately] = useState([
    { name: "Moderately Tired", icon: ModeratelyTired },
  ]);
  const [tired, setTired] = useState([
    { name: "Tired", icon: Tired },
  ]);
  const [vTired, setVTired] = useState([
    { name: "Very Tired", icon: VeryTired },
  ]);
  const [drowsy, setDrowsy] = useState([
    { name: "Drowsy", icon: Drowsy },
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


  const onwebCamera = () => {
    const path = `/webCamera`;
    navigate(path);
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
        const createx = user.functions.createSymptomsUrine(
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
          title="Tiredness"
          title2="Record the level of tiredness or fatigue being experienced."
          title3=""
          limg="rl"
          rimg="rtn"
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
                    marginBottom: "0rem",
                  }}
                >
                  Mostly Energetic
                </p>
                <p
                  style={{
                    color: "#707070",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Low energy levels make it difficult to concentrate or motivate oneself, but still able to function in daily life.
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
                          {list1.map((lone, ida) => (
                            <ToggleButton
                              key={ida}
                              id={`lone-${ida}`}
                              type="radio"
                              // variant={idx % 2 ? "outline-success" : "outline-danger"}
                              variant="outline-primary"
                              // variant="outline"
                              name={`lone-${ida}`}
                              value={lone.value}
                              checked={listOne === lone.value}
                              // onChange={(e) => List2ChangeImage(ltwo, idy)}
                              onChange={(e) =>
                                setListOne(e.currentTarget.value)
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
                    marginBottom: "0rem",
                  }}
                >
                  Mild fatigue
                </p>
                <p
                  style={{
                    color: "#707070",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Difficulty in completing everyday tasks, such as getting dressed or cooking a meal. Need to take naps during the day.
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
                      <div style={{ marginLeft: "-5rem" }}>
                        <div class="row row-d">

                          {list2.map((ltwo, idb) => (
                            <div class="col-md-3 col-sm-6">
                              <ToggleButton
                                key={idb}
                                id={`ltwo-${idb}`}
                                type="radio"
                                // variant={idx % 2 ? "outline-success" : "outline-danger"}
                                variant="outline-primary"
                                // variant="outline"
                                name={`ltwo-${idb}`}
                                value={ltwo.value}
                                checked={listTwo === ltwo.value}
                                // onChange={(e) => List2ChangeImage(ltwo, idy)}
                                onChange={(e) =>
                                  setListTwo(e.currentTarget.value)
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
                            </div>
                          ))}
                        </div>
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
                    marginBottom: "0rem",
                  }}
                >
                  Severe Exhaustion
                </p>
                <p
                  style={{
                    color: "#707070",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Unable to perform basic activities of daily living. Need to stay in bed for most of the day.
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
                          {list3.map((lthree, idc) => (
                            <ToggleButton
                              key={idc}
                              id={`lthree-${idc}`}
                              type="radio"
                              // variant={idx % 2 ? "outline-success" : "outline-danger"}
                              variant="outline-primary"
                              // variant="outline"
                              name={`lthree-${idc}`}
                              value={lthree.value}
                              checked={listThree === lthree.value}
                              // onChange={(e) => List2ChangeImage(ltwo, idy)}
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
                                  whiteSpace: "nowrap"
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
              <Divider
                style={{ margin: "10pt", borderTop: "1px solid #000000" }}
              />


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
    </Container >
  );
};

export default Tiredness;
