import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";

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

import VitalsTem from "../assets/icon-set-vit-tem.png";
import VitalsBPressure from "../assets/icon-set-vit-bprs.png";
import VitalsPRate from "../assets/icon-set-vit-prate.png";

import VitalsTemS from "../assets/icon-set-vit-tem-sel.png";
import VitalsBPressureS from "../assets/icon-set-vit-bprs-sel.png";
import VitalsPRateS from "../assets/icon-set-vit-prate-sel.png";

import VitalsRes from "../assets/icon-set-vit-respiratory.png";
import VitalsSPO2 from "../assets/icon-set-vit-spo2.png";
import VitalsBSugar from "../assets/icon-set-vit-bsugar.png";

import VitalsResS from "../assets/icon-set-vit-respiratory-sel.png";
import VitalsSPO2S from "../assets/icon-set-vit-spo2-sel.png";
import VitalsBSugarS from "../assets/icon-set-vit-bsugar-sel.png";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./Login.css";

import IconPatientImage from "../assets/icon-patient-photo.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SetVitals = () => {
  const [radioValue, setRadioValue] = useState();

  const [listOne, setListOne] = useState();
  const [listTwo, setListTwo] = useState();

  const [te, setTE] = useState(false);
  const [bp, setBP] = useState(false);
  const [pr, setPR] = useState(false);
  const [rr, setRR] = useState(false);
  const [sp, setSP] = useState(false);
  const [bs, setBS] = useState(false);

  const [tempe, setTempe] = useState([
    { name: "Temperature", icon: VitalsTem },
  ]);

  const [bpr, setBPR] = useState([
    { name: "Blood Pressure", icon: VitalsBPressure },
  ]);

  const [pra, setPRA] = useState([{ name: "Pulse Rate", icon: VitalsPRate }]);

  const [rra, setRRA] = useState([
    { name: "Respiratory Rate", icon: VitalsRes },
  ]);

  const [spo, setSPO] = useState([{ name: "SPO2", icon: VitalsSPO2 }]);

  const [bsr, setBSR] = useState([
    { name: "Blood Sugar ", icon: VitalsBSugar },
  ]);

  const [list1, setList1] = useState([
    { name: "Temperature", icon: VitalsTem, value: "1" },
    { name: "Blood Pressure", icon: VitalsBPressure, value: "2" },
    { name: "Pulse Rate", icon: VitalsPRate, value: "3" },
  ]);
  const [list2, setList2] = useState([
    { name: "Respiratory Rate", icon: VitalsRes, value: "1" },
    { name: "SPO2", icon: VitalsSPO2, value: "2" },
    { name: "Blood Sugar ", icon: VitalsBSugar, value: "3" },
  ]);

  const navigate = useNavigate();

  const { user, pId, pName } = useContext(UserContext);
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

  const VitalChangeImage = (val,vstatus) => {
    console.log("inside:", vstatus);

    if(val == "te")
    {
      setTE(!vstatus);      
      if(!vstatus == true)
     {
       tempe[0].icon = VitalsTemS;   
     } else 
     {
       tempe[0].icon = VitalsTem;     
     }
      setTempe([...tempe]);
    }


    if(val == "bp")
    { 
      setBP(!vstatus);
      if(!bp == true)
      {
        bpr[0].icon = VitalsBPressureS;   
      } else
      {
        bpr[0].icon = VitalsBPressure;     
      }
      setBPR([...bpr]);
    }

    if(val == "pr")
    {
      setPR(!vstatus);
      if(!pr == true)
      {
        pra[0].icon = VitalsPRateS;   
      } else
      {
        pra[0].icon = VitalsPRate;     
      }
      setPRA([...pra]);
    } 

    if(val == "rr")
    {
      setRR(!vstatus);
      if(!rr == true)
      {
        rra[0].icon = VitalsResS;   
      } else
      {
        rra[0].icon = VitalsRes;     
      }
      setRRA([...rra]);
    }

    if(val == "sp")
    {
      setSP(!vstatus);
      if(!sp == true)
      {
        spo[0].icon = VitalsSPO2S;   
      } else
      {
        spo[0].icon = VitalsSPO2;     
      }
      setSPO([...spo]);
    }

    if(val == "bs")
    {
      setBS(!vstatus);
      if(!bs === true)
      {
        bsr[0].icon = VitalsBSugarS;   
      } else
      {
        bsr[0].icon = VitalsBSugar;     
      }
      setBSR([...bsr]);
    }
  };

  const onSubmit = () => {
    const path = `/setVitals`;
    navigate(path);
  };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     if (user) {
  //       //  console.log('auth:',user.id);
  //       let dt = new Date();
  //       let id = new BSON.ObjectID();
  //       let cid = BSON.ObjectID(user.id).toString();
  //       //  let pid = selLid;
  //       let pid = pId;
  //       const createx = user.functions.createDailyCheckinFeedback(
  //         id,
  //         pid,
  //         listOne,
  //         listTwo,
  //         cid,
  //         "careManager",
  //         dt,
  //         "active",
  //         "GlobalMedics2021"
  //       );
  //       createx.then((resp) => {
  //         //  console.log("resp:", resp);
  //         alert("Feedback Added Successfully");
  //         navigate(`/selectVitals`);
  //       });
  //     }
  //   } catch (error) {
  //     //  alert(error);
  //     console.log("error:", error);
  //   }
  // };

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
          title="Select Vitals"
          title2="Daily feedback requested from patients"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="dcr"
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
                  {/* How well did you eat? */}
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
                      {/* -------------------------- */}
                      <div style={{ marginLeft: "1.5rem" }}>
                        <ButtonGroup>
                          <ToggleButton
                            id="te"
                            type="radio"
                            // variant={idx % 2 ? "outline-success" : "outline-danger"}
                            variant="outline-primary"
                            // variant="outline"
                            name="te"
                            value="te"
                            checked={te}
                         //   onClick={() => setTE(!te)}
                            onClick={(e) => VitalChangeImage("te", te)}
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
                              src={tempe[0].icon}
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
                              {tempe[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="bp"
                            type="radio"
                            // variant={idx % 2 ? "outline-success" : "outline-danger"}
                            variant="outline-primary"
                            // variant="outline"
                            name="bp"
                            value="bp"
                            checked={bp}
                           // onClick={(e) => setBP(!bp)}
                            onClick={(e) => VitalChangeImage("bp", bp)}
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
                              src={bpr[0].icon}
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
                              {bpr[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="pr"
                            type="radio"
                            variant="outline-primary"
                            name="pr"
                            value="pr"
                            checked={pr}
                          //  onClick={() => setPR(!pr)}
                            onClick={(e) => VitalChangeImage("pr", pr)}
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
                              src={pra[0].icon}
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
                              {pra[0].name}
                            </div>
                          </ToggleButton>
                        </ButtonGroup>
                      </div>
                      {/* ------------------- */}
                      <div style={{ marginLeft: "1.5rem" }}>
                        {/* <ButtonGroup>
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
                              onChange={(e) => List1ChangeImage(lone, idx)}
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
                                src={lone.icon}
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
                                {lone.name}
                              </div>
                            </ToggleButton>
                          ))}
                        </ButtonGroup> */}
                        <ButtonGroup style={{ marginTop: "1.5rem" }}>
                          {/* {list2.map((ltwo, idy) => ( */}
                          <ToggleButton
                            id="rr"
                            type="radio"
                            variant="outline-primary"
                            name="rr"
                            value="rr"
                            checked={rr}
                           // onClick={() => setRR(!rr)}
                            onClick={(e) => VitalChangeImage("rr", rr)}
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
                              src={rra[0].icon}
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
                              {rra[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="sp"
                            type="radio"
                            variant="outline-primary"
                            name="sp"
                            value="sp"
                            checked={sp}
                          //  onClick={() => setSP(!sp)}
                            onClick={(e) => VitalChangeImage("sp", sp)}
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
                              src={spo[0].icon}
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
                              {spo[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="bs"
                            type="radio"
                            variant="outline-primary"
                            name="bs"
                            value="bs"
                            checked={bs}
                            //onClick={() => setBS(!bs)}
                            onClick={(e) => VitalChangeImage("bs", bs)}
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
                              src={bsr[0].icon}
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
                              {bsr[0].name}
                            </div>
                          </ToggleButton>
                          {/* ))} */}
                        </ButtonGroup>
                      </div>
                    </Grid>
                  </Box>
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
                Select Vitals
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default SetVitals;
