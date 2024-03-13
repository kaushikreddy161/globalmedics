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

import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import IconFeverMrng from "../assets/icon_fever_mrng.png";
import IconFeverAfn from "../assets/icon_fever_afn.png";
import IconFeverEng from "../assets/icon_fever_eng.png";
import IconFeverNight from "../assets/icon_fever_night.png";
import IconOther from "../assets/icon-day-other.png";
import IconOtherS from "../assets/icon-day-other-sel.png";

import IconFeverMrngS from "../assets/icon_fever_mrng_sel.png";
import IconFeverAfnS from "../assets/icon_fever_afn_sel.png";
import IconFeverEngS from "../assets/icon_fever_eng_sel.png";
import IconFeverNightS from "../assets/icon_fever_night_sel.png";


import IconWaterBottle from "../assets/icon-water-bottle.png";
import IconTea from "../assets/icon-tea.png";
import IconSoftDrinks from "../assets/icon-soft-drinks.png";
import IconAlcohol from "../assets/icon-alcohol.png";

import IconCamera from "../assets/icon-camera.png";

import IconCarbohydrates from "../assets/icon-ntr-carbohydrates.png";
import IconProtein from "../assets/icon-ntr-protein.png";
import IconSugar from "../assets/icon-ntr-sugar.png";
import IconFat from "../assets/icon-ntr-fat.png";
import IconDietary from "../assets/icon-ntr-dietary-fibre.png";

import IconUnsaturated from "../assets/icon-ntr-unsaturated-fat.png";
import IconSaturatedFat from "../assets/icon-ntr-saturated-fat.png";
import IconTransFat from "../assets/icon-ntr-trans-fat.png";
import IconCholesterol from "../assets/icon-ntr-cholesterol.png";
import IconSodium from "../assets/icon-ntr-sodium.png";
import IconTrans from "../assets/icon-ntr-trans-fat.png";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./Login.css";
import moment from "moment";

const hydrationList1 = [
  {
    icon: IconCarbohydrates,
    title: "Carbohydrates",
  },
  {
    icon: IconProtein,
    title: "Protein",
  },
  {
    icon: IconSugar,
    title: "Sugar",
  },
  {
    icon: IconFat,
    title: "Fat",
  },
  {
    icon: IconDietary,
    title: "Dietary Fibre",
  }
];
const hydrationList2 = [
  {
    icon: IconUnsaturated,
    title: "Unsaturated Fat",
  },
  {
    icon: IconSaturatedFat,
    title: "Saturated Fat",
  },
  {
    icon: IconUnsaturated,
    title: "Polyunsaturated Fat",
  },
  {
    icon: IconUnsaturated,
    title: "Monounsaturated Fat",
  },
  {
    icon: IconTransFat,
    title: "Trans Fat",
  },
];
const hydrationList3 = [
  {
    icon: IconCholesterol,
    title: "Cholesterol",
  },
  {
    icon: IconSodium,
    title: "Sodium",
  },
  {
    icon: IconTrans,
    title: "Potassium",
  },
  // {
  //   icon: IconAlcohol,
  //   title: "Fat",
  // },
  // {
  //   icon: IconAlcohol,
  //   title: "Dietary Fibre",
  // },
];

const Carouselsettings = {
  showArrows: false,
  interval: 3500,
  dynamicHeight: false,
  stopOnHover: false,
  infiniteLoop: true,
  showStatus: false,
  transitionTime: 500,
  showThumbs: false,
  showIndicators: true,
  swipeable: true,
  emulateTouch: true,
  autoPlay: false,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Nutrition = () => {
  const [mr, setMR] = useState(false);
  const [an, setAN] = useState(false);
  const [en, setEN] = useState(false);
  const [ng, setNG] = useState(false);
  const [dot, setDOT] = useState(false);

  const [mrng, setMrng] = useState([{ name: "Morning", icon: IconFeverMrng }]);
  const [afn, setAfn] = useState([{ name: "Afternoon", icon: IconFeverAfn }]);
  const [eng, setEng] = useState([{ name: "Evening", icon: IconFeverEng }]);
  const [night, setNight] = useState([{ name: "Night", icon: IconFeverNight }]);
  const [dOther, setDOther] = useState([{ name: "Other", icon: IconOther }]);


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



  const HydChangeImage = (val, vstatus) => {

    if (val == "mr") {
      setMR(!vstatus);
      if (!mr == true) {
        mrng[0].icon = IconFeverMrngS;
      } else {
        mrng[0].icon = IconFeverMrng;
      }
      setMrng([...mrng]);
    }

    if (val == "an") {
      setAN(!vstatus);
      if (!an == true) {
        afn[0].icon = IconFeverAfnS;
      } else {
        afn[0].icon = IconFeverAfn;
      }
      setAfn([...afn]);
    }

    if (val == "en") {
      setEN(!vstatus);
      if (!en == true) {
        eng[0].icon = IconFeverEngS;
      } else {
        eng[0].icon = IconFeverEng;
      }
      setEng([...eng]);
    }

    if (val == "ng") {
      setNG(!vstatus);
      if (!ng == true) {
        night[0].icon = IconFeverNightS;
      } else {
        night[0].icon = IconFeverNight;
      }
      setNight([...night]);
    }

    if (val == "dot") {
      setDOT(!vstatus);
      if (!dot == true) {
        dOther[0].icon = IconOtherS;
      } else {
        dOther[0].icon = IconOther;
      }
      setDOther([...dOther]);
    }

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
          title="Update Nutrition"
          title2="Record details of the food consumed"
          title3=""
          limg="rl"
          rimg="ntc"
        />
        {/* <div className="car-ds"> */}
          <CarouselSlider />
        {/* </div> */}
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
                  With Meals In
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
                            // onClick={() => setEP(!ep)}
                            onClick={(e) => HydChangeImage("mr", mr)}
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
                            // onClick={() => setET(!et)}
                            onClick={(e) => HydChangeImage("an", an)}
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
                            // onClick={() => setEV(!ev)}
                            onClick={(e) => HydChangeImage("en", en)}
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
                        <ButtonGroup
                          style={{
                            marginTop: "1rem",
                          }}
                        >

                          <div>
                            <ToggleButton
                              id="ng"
                              type="radio"
                              variant="outline-primary"
                              name="ng"
                              value="ng"
                              checked={ng}
                              // onClick={() => setER(!er)}
                              onClick={(e) => HydChangeImage("ng", ng)}
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
                            <ToggleButton
                              id="dot"
                              type="radio"
                              variant="outline-primary"
                              name="dot"
                              value="dot"
                              checked={dot}
                              // onClick={() => setER(!er)}
                              onClick={(e) => HydChangeImage("dot", dot)}
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
                                src={dOther[0].icon}
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
                                {dOther[0].name}
                              </div>
                            </ToggleButton>

                          </div>
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
                  Record Hydration in mL of Liquids consumed
                </p>

                <Carousel {...Carouselsettings}>
                  <div>
                    {hydrationList1.map((item) => (
                      <Card
                        style={{
                          marginTop: "0.7rem",
                          transition: "0.3s",
                          // boxShadow: "5 5px 5px -6px rgba(0,0,0,0.3)",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2opt",
                          border: "1px solid white",
                        }}
                      >
                        <div class="container">
                          <div
                            className="row align-items-center text-res"
                            style={{
                              paddingTop: "0.3rem",
                              paddingBottom: "0.3rem",
                              height: "70px",
                              verticalAlign: "middle",
                            }}
                          >
                            <div class="col-2"><img src={item.icon} alt="GM" style={{ width: "85%" }} /></div>
                            <div class="col-5 text-gray">{item.title}</div>
                            <div class="col-3" style={{ textAlign: "center" }}>
                              <Form.Control
                                className="name-input"
                                type="number"
                                placeholder=""
                                name=""
                                min="0"
                                // value={pName}
                                // disabled={true}
                                // onChange={(e) => setrName(e.target.value)}
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "0pt",
                                  color: "#707070",
                                }}
                              ></Form.Control>
                            </div>
                            <div class="col-2">
                              g
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div>
                    {hydrationList2.map((item) => (
                      <Card
                        style={{
                          marginTop: "0.7rem",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2opt",
                          border: "1px solid white",
                        }}
                      >
                        <div class="container">
                          <div
                            className="row align-items-center text-res"
                            style={{
                              paddingTop: "0.3rem",
                              paddingBottom: "0.3rem",
                              height: "70px",
                              verticalAlign: "middle",
                            }}
                          >
                            <div class="col-2"><img src={item.icon} alt="GM" style={{ width: "85%" }} /></div>
                            <div class="col-5 text-gray">{item.title}</div>
                            <div class="col-3" style={{ textAlign: "center" }}>
                              <Form.Control
                                className="name-input"
                                type="number"
                                placeholder=""
                                name=""
                                min="0"
                                // value={pName}
                                // disabled={true}
                                // onChange={(e) => setrName(e.target.value)}
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "0pt",
                                  color: "#707070",
                                }}
                              ></Form.Control>
                            </div>
                            <div class="col-2">
                              g
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  <div>
                    {hydrationList3.map((item) => (
                      <Card
                        style={{
                          marginTop: "0.7rem",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2opt",
                          border: "1px solid white",
                        }}
                      >
                        <div class="container">
                          <div
                            className="row align-items-center text-res"
                            style={{
                              paddingTop: "0.3rem",
                              paddingBottom: "0.3rem",
                              height: "70px",
                              verticalAlign: "middle",
                            }}
                          >
                            <div class="col-2"><img src={item.icon} alt="GM" style={{ width: "85%" }} /></div>
                            <div class="col-5 text-gray">{item.title}</div>
                            <div class="col-3" style={{ textAlign: "center" }}>
                              <Form.Control
                                className="name-input"
                                type="number"
                                placeholder=""
                                name=""
                                min="0"
                                // value={pName}
                                // disabled={true}
                                // onChange={(e) => setrName(e.target.value)}
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "0pt",
                                  color: "#707070",
                                }}
                              ></Form.Control>
                            </div>
                            <div class="col-2">
                              mg
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                    <Card
                  style={{
                    marginTop: "0.7rem",
                    transition: "0.3s",
                    boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                    borderRadius: "10px",
                    padding: "2opt",
                    border: "2px solid white",
                  }}
                >
                  <div class="container">
                    <div
                      className="row align-items-center text-res"
                      style={{
                        paddingTop: "0.3rem",
                        paddingBottom: "0.3rem",
                        height: "70px",
                        verticalAlign: "middle",
                      }}
                    >
                      <div class="col-2"></div>
                      <div class="col-5 text-gray">
                      <Form.Control
                                className="name-input"
                                type="text"
                                placeholder="Any Other"
                                name=""
                                // value={pName}
                                // disabled={true}
                                // onChange={(e) => setrName(e.target.value)}
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "0pt",
                                  color: "#707070",
                                }}
                              ></Form.Control>
                      </div>
                      <div class="col-3" style={{ textAlign: "center" }}>
                        <Form.Control
                          className="name-input"
                          type="number"
                          placeholder=""
                          name=""
                          min="0"
                          // value={pName}
                          // disabled={true}
                          // onChange={(e) => setrName(e.target.value)}
                          style={{
                            marginBottom: "0pt",
                            marginTop: "0pt",
                            color: "#707070",
                          }}
                        ></Form.Control>
                      </div>
                      <div class="col-2">
                        mg
                      </div>
                    </div>
                  </div>
                </Card>
                  </div>

                  

                </Carousel>

                

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
                // onClick={onSubmit}
                type="submit"
              >
                Confirm
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default Nutrition;
