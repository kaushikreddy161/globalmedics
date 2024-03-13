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

import ImgBetter from "../assets/icon-pain-free.png";

import ImgVeryMild from "../assets/icon-very-mild.png";
import ImgDiscomforting from "../assets/icon-discomforting.png";
import ImgTolerable from "../assets/icon-tolerable.png";

import ImgDistressing from "../assets/icon-distressing.png";
import ImgModerate from "../assets/icon-moderate.png";
import ImgIntense from "../assets/icon-intense.png";

import ImgSeverePain from "../assets/icon-severe-pain.png";
import ImgUtterlyHorrible from "../assets/icon-utterly-horrible.png";
import ImgExcruciatingUnbearable from "../assets/icon-excruciating-unbearable.png";
import ImgUnimaginableUnspeakable from "../assets/icon-unimaginable-unspeakable.png";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./Login.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SeverityPain = () => {
  const [radioValue, setRadioValue] = useState();
  const [listOne, setListOne] = useState();
  const [listTwo, setListTwo] = useState();
  const [listThree, setListThree] = useState();
  const [listFour, setListFour] = useState();
  const [listFive, setListFive] = useState();

  const [vm, setVM] = useState(false);

  const [vomt, setVomt] = useState([
    { name: "Pain Free", icon: ImgBetter },
  ]);

  const HeadChangeImage = (val, vstatus) => {

    if (val == "vm") {
      setVM(!vstatus);
      if (!vm == true) {
        vomt[0].icon = ImgBetter;
      } else {
        vomt[0].icon = ImgBetter;
      }
      setVomt([...vomt]);
    }
  }
  const list1 = [
    { name: "Pain Free", icon: ImgBetter, value: "1" },
    // { name: "Same", icon: ImgSame, value: "2" },
    // { name: "Worse", icon: ImgWorse, value: "3" },
  ];
  const list2 = [
    { name: "Very Mild ", icon: ImgVeryMild, value: "2" },
    { name: "Discomforting", icon: ImgDiscomforting, value: "3" },
    { name: "Tolerable ", icon: ImgTolerable, value: "4" },
  ];
  const list3 = [
    { name: "Distressing ", icon: ImgDistressing, value: "5" },
    { name: "Moderate", icon: ImgModerate, value: "6" },
    { name: "Intense ", icon: ImgIntense, value: "7" },
  ];
  const list4 = [
    { name: "Severe Pain", icon: ImgSeverePain, value: "8" },
    { name: "Utterly horrible", icon: ImgUtterlyHorrible, value: "9" },
    { name: "Excruciating ", icon: ImgExcruciatingUnbearable, value: "10" },
    { name: "Unimaginable", icon: ImgUnimaginableUnspeakable, value: "11" },
  ];


  const { user, pId, pName } = useContext(UserContext);
  const datex = new Date();
  const [selLid, setSelLId] = useState("");
  const [status, setStatus] = useState("0");

  const navigate = useNavigate();

  const onRecord = () => {
    const path = `/kindEmergency`;
    navigate(path);
  };

  const onSubmit = () => {
    const path = `/locationPain`;
    navigate(path);
  };

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
          title="Severity of Pain"
          title2="What Kind of an emergency do you have?"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="rsp"
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
                    marginBottom: "0rem",
                  }}
                >
                  No Pain
                </p>
                <p
                  style={{
                    color: "#ADAAA7",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  No pain at all
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
                            key="1"
                            id="spain-1"
                            type="radio"
                            variant="outline-primary"
                            value="1"
                            name="spain-1"
                              checked={listTwo === "1"}
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


                          {/* {list1.map((lone, idx) => ( 
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
                              className="icon-dc"
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
                           ))} */}
                        </ButtonGroup>
                      </div>
                    </Grid>
                  </Box>
                </div>
              </div>
              <Divider style={{ margin: "10pt" }} />
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0rem",
                  }}
                >
                  Minor Pain
                </p>
                <p
                  style={{
                    color: "#ADAAA7",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Nagging, annoying, but doesn’t really interfere with daily living activities.
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
                              key={ltwo.value}
                              id={`spain-${ltwo.value}`}
                              type="radio"
                              // variant={idx % 2 ? "outline-success" : "outline-danger"}
                              variant="outline-primary"
                              // variant="outline"
                              name={`spain-${ltwo.value}`}
                              value={ltwo.value}
                              checked={listTwo === ltwo.value}
                              onChange={(e) => setListTwo(e.currentTarget.value)}
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
                              className="icon-dc"
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
              <Divider style={{ margin: "10pt" }} />
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0rem",
                  }}
                >
                  Moderate Pain
                </p>
                <p
                  style={{
                    color: "#ADAAA7",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Interferes significantly with daily living activities. Requires lifestyle changes but patient remains independent.
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
                              key={lthree.value}
                              id={`spain-${lthree.value}`}
                              type="radio"
                              // variant={idx % 2 ? "outline-success" : "outline-danger"}
                              variant="outline-primary"
                              // variant="outline"
                              name={`spain-${lthree.value}`}
                              value={lthree.value}
                              checked={listTwo === lthree.value}
                              onChange={(e) => setListTwo(e.currentTarget.value)}
                              style={{
                                borderTop: "6px solid #1D5A90",
                                borderRadius: "10pt",
                                boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                                marginRight: "2rem",
                                borderLeft: "0px solid #fff",
                                borderRight: "0px solid #fff",
                                borderBottom: "0px solid #fff",
                              }}
                              className="icon-dc"
                            >
                              <img
                                src={lthree.icon}
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
              <Divider style={{ margin: "10pt" }} />
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Severe Pain
                </p>
                <p
                  style={{
                    color: "#ADAAA7",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  Disabling; unable to perform daily living activities. Patient is disabled and unable to function independently.
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
                      <div style={{marginLeft:"-5rem"}}>
                        <div class="row row-d">
                        
                          {list4.map((lfour, idxx) => (

                          <div class="col-md-3 col-sm-6">
                            <ToggleButton
                              key={lfour.value}
                              id={`spain-${lfour.value}`}
                              type="radio"
                              // variant={idx % 2 ? "outline-success" : "outline-danger"}
                              variant="outline-primary"
                              // variant="outline"
                              name={`spain-${lfour.value}`}
                              value={lfour.value}
                              checked={listTwo === lfour.value}
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
                                // display:"flex",
                                // flexWrap: "wrap",
                              }}
                              className="icon-dc"
                            >
                              <img src={lfour.icon} style={{ width: "60%" }} />

                              <div
                                className="icon-text"
                                style={{
                                  lineHeight: "1rem",
                                  marginTop: "0.3rem",
                                  marginBottom: "0rem",
                                }}
                              >
                                {lfour.name}
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
            </Card.Body>
           
            <div
              style={{
                textAlign: "center",
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
              }}
            >
              <Button
                style={{
                  background: "#1D5A90",
                  borderRadius: 50,
                  width: "50%",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  textTransform: "none",
                }}
                onClick={onSubmit}
              >
                Record another
              </Button>
            </div>
            <div
              style={{
                textAlign: "center",
                marginTop: "0rem",
                marginBottom: "0.5rem",
              }}
            >
              <Button
                style={{
                  background: "#707070",
                  borderRadius: 50,
                  width: "50%",
                  color: "#ffffff",
                  fontSize: "0.9rem",
                  textTransform: "none",
                }}
                onClick={onRecord}
              >
                Done
              </Button>
            </div>


          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default SeverityPain;

