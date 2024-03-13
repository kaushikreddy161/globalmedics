import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { BSON } from "realm-web";

import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, Divider } from "@mui/material";
import ImgCareGiver from "../assets/img-care-giver.png";
import ImgNewCareGiver from "../assets/img-new-care-giver.png";
import IconHelp from "../assets/icon-help.png";
import IconReject from "../assets/icon-reject.png";
import IconAccept from "../assets/icon-accept.png";
import IconCheckbox from "../assets/icon-checkbox.png";
import IconChronicIll from "../assets/icon-ec-chronic-ill.png";
import IconBasicInfo from "../assets/icon-ec-basic-info.png";
import IconPatientHistory from "../assets/icon-ec-patient-history.png";
import IconAllergies from "../assets/icon-ec-allergies.png";
import IconCurrent from "../assets/icon-ec-current.png";

import IconNext from "../assets/icon-next.png";
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";

import "./Main.css";

// const CareGivers = [
//   {
//     name: "Ramesh",
//     image: ImgCareGiver1,
//   },
//   {
//     name: "Regina Joseph",
//     image: ImgCareGiver2,
//   },
//   {
//     name: "Swathi",
//     image: ImgCareGiver3,
//   },
// ];

const EmergencyGuidanceHealthStatus = () => {
  const { user, pId, pName, selectedPatient } = useContext(UserContext);
  const navigate = useNavigate();


  const onSubmit = () => {
    const path = `/emergencyGuidanceHealthStatus3`;
    navigate(path);
  };

  const onDetails = () => {
    const path = `/seekHelp`;
    navigate(path);
  };
  
  const [CareGivers, setCareGivers] = useState([]);

useEffect(() => {
  loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
}, [user.id]);

const loadUser = async () => {
  if (user) {
    let ccid = BSON.ObjectID(user.id).toString();
  //  console.log("pid:", pId);
    const pFamily = user.functions.getPatientCaregiver(pId); // to fetch all loved ones of that care taker
    // console.log('else direct:',ccid);
    pFamily.then((resp) => {
    //  console.log("resp:", resp);
      if (resp) {
      //  setStatus("1");
        //  setpName(resp.displayName);
        // setSelLId(resp._id.toString());
        setCareGivers(resp);
     //   console.log("res:", resp);
      } else {
        alert("Local Care Givers Not Added..");
        // navigate(`/addLovedOnes`);
      }
    });
  }
};


  const [statusAccept, setStatusAccept] = useState(false);
  const [statusReject, setStatusReject] = useState(false);

  const changeAccept = () => {
    if (statusAccept == false) {
      setStatusAccept(true);
    } if (statusAccept == true) {
      setStatusAccept(false);
    }
  }
  const changeReject = () => {
    if (statusReject == false) {
      setStatusReject(true);
    } if (statusReject == true) {
      setStatusReject(false);
    }
  }





  
  let pname = pName;

  const [statusAccept1, setStatusAccept1] = useState(false);
  const [statusReject1, setStatusReject1] = useState(false);

  const changeAccept1 = () => {
    if (statusAccept1 == false) {
      setStatusAccept1(true);
    } if (statusAccept1 == true) {
      setStatusAccept1(false);
    }
  }
  const changeReject1 = () => {
    if (statusReject1 == false) {
      setStatusReject1(true);
    } if (statusReject1 == true) {
      setStatusReject1(false);
    }
  }

  const [statusAccept2, setStatusAccept2] = useState(false);
  // const [statusReject2, setStatusReject2] = useState(false);

  const changeAccept2 = () => {
    if (statusAccept2 == false) {
      setStatusAccept2(true);
    } if (statusAccept2 == true) {
      setStatusAccept2(false);
    }
  }
  // const changeReject2 = () => {
  //   if (statusReject2 == false) {
  //     setStatusReject2(true);
  //   } if (statusReject2 == true) {
  //     setStatusReject2(false);
  //   }
  // }

  // const [statusAccept3, setStatusAccept3] = useState(false);
  const [statusReject3, setStatusReject3] = useState(false);

  // const changeAccept3 = () => {
  //   if (statusAccept3 == false) {
  //     setStatusAccept3(true);
  //   } if (statusAccept3 == true) {
  //     setStatusAccept3(false);
  //   }
  // }
  const changeReject3 = () => {
    if (statusReject3 == false) {
      setStatusReject3(true);
    } if (statusReject3 == true) {
      setStatusReject3(false);
    }
  }

  const [statusAccept3, setStatusAccept3] = useState(false);
  const changeAccept3 = () => {
    if (statusAccept3 == false) {
      setStatusAccept3(true);
    } if (statusAccept3 == true) {
      setStatusAccept3(false);
    }
  }

  const [statusReject4, setStatusReject4] = useState(false);
  const changeReject4 = () => {
    if (statusReject4 == false) {
      setStatusReject4(true);
    } if (statusReject4 == true) {
      setStatusReject4(false);
    }
  }
  const [statusAccept4, setStatusAccept4] = useState(false);
  const changeAccept4 = () => {
    if (statusAccept4 == false) {
      setStatusAccept4(true);
    } if (statusAccept4 == true) {
      setStatusAccept4(false);
    }
  }

  const [statusReject5, setStatusReject5] = useState(false);
  const changeReject5 = () => {
    if (statusReject5 == false) {
      setStatusReject5(true);
    } if (statusReject5 == true) {
      setStatusReject5(false);
    }
  }




  return (
    <Container
      style={{ background: "#EBEBEB", maxWidth: "100%", minWidth: "300px" }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Emergency Guidance"
          title2="Manage Emergency situation with this handy “To Dos”"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="reg"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-d">
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "6px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <Card.Body>
              {/* <div style={{ verticalAlign: "middle" }}> */}
                <div class="row align-items-center">
                  <div class="col-2"><img src={IconPatientHistory} alt="" style={{ width: "70%" }} /></div>
                  <div class="col-10 text-green">Patient History</div>
                </div>
              {/* </div> */}
              <div class="container">
                <div
                  className="row align-items-center text-res"

                >
                  <div class="col-2"></div>
                  <div class="col-4"></div>
                  <div class="col-2 text-green-center">Done</div>
                  <div class="col-2 text-green-center">To Do</div>
                  <div class="col-2 text-green-right">Action</div>
                </div>

              </div>
              {/* {CareGivers.map((item) => ( */}
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
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      // height: "90px",
                      verticalAlign: "middle",
                    }}
                  >
                    <div class="col-2"><img src={IconBasicInfo} className="image-header-size" /></div>
                    <div class="col-4 text-gray">Basic Information Available</div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                      {statusAccept ?
                        <img src={IconAccept} onClick={changeAccept} /> : <img src={IconCheckbox} onClick={changeAccept} />
                      }
                    </div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>

                      {statusReject1 ?
                        <img src={IconReject} onClick={changeReject1} /> : <img src={IconCheckbox} onClick={changeReject1} />
                      }
                    </div>
                    <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }} onClick={onDetails}>
                      <><img src={IconNext} alt="" />
                      </>
                    </div>
                  </div>
                </div>
              </Card>
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
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                    }}
                  >
                    <div class="col-2"><img src={IconChronicIll} className="image-header-size" /></div>
                    <div class="col-4 text-gray">Chronic Illnesses Recorded</div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                      {statusAccept2 ?
                        <img src={IconAccept} onClick={changeAccept2} /> : <img src={IconCheckbox} onClick={changeAccept2} />
                      }
                    </div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>

                      {statusReject3 ?
                        <img src={IconReject} onClick={changeReject3} /> : <img src={IconCheckbox} onClick={changeReject3} />
                      }
                    </div>
                    <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }} onClick={onDetails}>
                      <><img src={IconNext} alt="" />
                      </>
                    </div>
                  </div>
                </div>
              </Card>
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
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                    }}
                  >
                    <div class="col-2"><img src={IconAllergies} className="image-header-size" /></div>
                    <div class="col-4 text-gray">Allergies Indicated</div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                      {statusAccept3 ?
                        <img src={IconAccept} onClick={changeAccept3} /> : <img src={IconCheckbox} onClick={changeAccept3} />
                      }
                    </div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>

                      {statusReject4 ?
                        <img src={IconReject} onClick={changeReject4} /> : <img src={IconCheckbox} onClick={changeReject4} />
                      }
                    </div>
                    <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }} onClick={onDetails}>
                      <><img src={IconNext} alt="" />
                      </>
                    </div>
                  </div>
                </div>
              </Card>
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
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                    }}
                  >
                    <div class="col-2"><img src={IconCurrent} className="image-header-size" /></div>
                    <div class="col-4 text-gray">Current Medications listed</div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                      {statusAccept4 ?
                        <img src={IconAccept} onClick={changeAccept4} /> : <img src={IconCheckbox} onClick={changeAccept4} />
                      }
                    </div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>

                      {statusReject5 ?
                        <img src={IconReject} onClick={changeReject5} /> : <img src={IconCheckbox} onClick={changeReject5} />
                      }
                    </div>
                    <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }} onClick={onDetails}>
                      <><img src={IconNext} alt="" />
                      </>
                    </div>
                  </div>
                </div>
              </Card>
              

            </Card.Body>
            <div
              style={{
                textAlign: "center",
                marginTop: "1rem",
                marginBottom: "2rem",
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
                Next
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default EmergencyGuidanceHealthStatus;