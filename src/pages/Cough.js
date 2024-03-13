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

import CoughDry from "../assets/icon-sym-cou-dry.png";
import CoughChesty from "../assets/icon-sym-cou-che.png";
import CoughProductive from "../assets/icon-sym-cou-pro.png";
import CoughDryS from "../assets/icon-sym-cou-dry-sel.png";
import CoughChestyS from "../assets/icon-sym-cou-che-sel.png";
import CoughProductiveS from "../assets/icon-sym-cou-pro-sel.png";

import CoughOccasional from "../assets/icon-sym-cou-occ.png";
import CoughFrequent from "../assets/icon-sym-cou-fre.png";
import CoughOccasionalS from "../assets/icon-sym-cou-occ-sel.png";
import CoughFrequentS from "../assets/icon-sym-cou-fre-sel.png";

import CoughBlood from "../assets/icon-sym-cou-blo.png";
import CoughWheezing from "../assets/icon-sym-cou-whe.png";
import CoughChest from "../assets/icon-sym-cou-chest.png";
import CoughBloodS from "../assets/icon-sym-cou-blo-sel.png";
import CoughWheezingS from "../assets/icon-sym-cou-whe-sel.png";
import CoughChestS from "../assets/icon-sym-cou-chest-sel.png";

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

const Cough = () => {
  const onSubmit1 = async () => {
    alert("Symptoms Added Successfully");
    const path = `/symptoms`;
    navigate(path);
  }
  const [radioValue, setRadioValue] = useState();
  const [listOne, setListOne] = useState();
  const [listTwo, setListTwo] = useState();
  const [listThree, setListThree] = useState();

  const [headacheType, setHeadacheType] = useState([]);
  const [headRegion, setHeadRegion] = useState([]);
  const [associatedSymptoms, setAssociatedSymptoms] = useState([]);
  const [anyExaggeratingFactor, setAnyExaggeratingFactor] = useState();
  const [anyRelievingFactor, setAnyRelievingFactor]= useState();

  const [list1, setList1] = useState([
    { name: "Dry", icon: CoughDry, value: "1" },
    { name: "Chesty", icon: CoughChesty, value: "2" },
    { name: "Productive", icon: CoughProductive, value: "3" },
  ]);
  const [list2, setList2] = useState([
    { name: "Occasional", icon: CoughOccasional, value: "1" },
    { name: "Frequent", icon: CoughFrequent, value: "2" },
  ]);
  const [list3, setList3] = useState([
    { name: "Blood", icon: CoughBlood, value: "1" },
    { name: "Wheezing", icon: CoughWheezing, value: "2" },
    { name: "Chest Pain", icon: CoughChest, value: "3" },
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

  const List1ChangeImage = (val, id) => {
    console.log("val", val);
    setListOne(val.value);
    if (val.value == 1) {
      list1[0].icon = CoughDryS;
      list1[1].icon = CoughChesty;
      list1[2].icon = CoughProductive;
      setList1([...list1]);
    }
    if (val.value == 2) {
      list1[0].icon = CoughDry;
      list1[1].icon = CoughChestyS;
      list1[2].icon = CoughProductive;
      setList1([...list1]);
    }
    if (val.value == 3) {
      list1[0].icon = CoughDry;
      list1[1].icon = CoughChesty;
      list1[2].icon = CoughProductiveS;
      setList1([...list1]);
    }
    console.log("list1", list1);
  };

  const List2ChangeImage = (val, id) => {
    console.log("val", val);
    setListTwo(val.value);
    if (val.value == 1) {
      list2[0].icon = CoughOccasionalS;
      list2[1].icon = CoughFrequent;
      setList2([...list2]);
    }
    if (val.value == 2) {
      list2[0].icon = CoughOccasional;
      list2[1].icon = CoughFrequentS;
      setList2([...list2]);
    }
    console.log("list2", list2);
  };

  const List3ChangeImage = (val, id) => {
    console.log("val", val);
    setListThree(val.value);
    if (val.value == 1) {
      list3[0].icon = CoughBloodS;
      list3[1].icon = CoughWheezing;
      list3[2].icon = CoughChest;
      setList3([...list3]);
    }
    if (val.value == 2) {
      list3[0].icon = CoughBlood;
      list3[1].icon = CoughWheezingS;
      list3[2].icon = CoughChest;
      setList3([...list3]);
    }
    if (val.value == 3) {
      list3[0].icon = CoughBlood;
      list3[1].icon = CoughWheezing;
      list3[2].icon = CoughChestS;
      setList3([...list3]);
    }
    console.log("list3", list3);
  };

  const onwebCamera = () => {
    const path = `/webCamera`;
    navigate(path);
  };


  const onSubmit = async (event) => {
    event.preventDefault();
    let headR = [];
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
        const createx = user.functions.createSymptomsCough(
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
          title="Cough"
          title2="Please share if you are struggling with cough"
          title3=""
          limg="rl"
          rimg="s-cur"
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
                  Cough Type
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

              {/* <Divider
                style={{
                  marginTop: "20pt",
                  marginBottom: "10pt",
                  marginLeft: "10pt",
                  marginRight: "10pt",
                  borderTop: "1px solid #000000",
                }}
              /> */}
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Frequency
                </p>
                <div className="form-container">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      // spacing={{ xs: 2, md: 3 }}
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
                              // variant={idx % 2 ? "outline-success" : "outline-danger"}
                              variant="outline-primary"
                              // variant="outline"
                              name={`ltwo-${idy}`}
                              value={ltwo.value}
                              checked={listTwo === ltwo.value}
                              onChange={(e) => List2ChangeImage(ltwo, idy)}
                              // onChange={(e) =>
                              //   setListTwo(e.currentTarget.value)
                              // }
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
                          {list3.map((lthree, idz) => (
                            <ToggleButton
                              key={idz}
                              id={`lthree-${idz}`}
                              type="radio"
                              // variant={idx % 2 ? "outline-success" : "outline-danger"}
                              variant="outline-primary"
                              // variant="outline"
                              name={`lthree-${idz}`}
                              value={lthree.value}
                              checked={listThree === lthree.value}
                              // onChange={(e) =>
                              //   setListThree(e.currentTarget.value)
                              onChange={(e) => List3ChangeImage(lthree, idz)}
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

export default Cough;
