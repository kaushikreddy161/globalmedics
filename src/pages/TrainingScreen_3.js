import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { BSON } from "realm-web";

import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, Divider } from "@mui/material";
import IconReject from "../assets/icon-reject.png";
import IconAccept from "../assets/icon-accept.png";
import IconCheckbox from "../assets/icon-checkbox.png";
import IconProviders from "../assets/icon-eg-providers.png";
import IconNext from "../assets/icon-next.png";
import IconDoctor from "../assets/icon-eg-doctor.png";
import IconHospital from "../assets/icon-hospital.png";
import IconInfo from "../assets/icon-help.png";

import IconToDo from "../assets/icon-training-sec-todo.png";
import IconToDo1 from "../assets/icon-training-sec-todo1.png";
import IconToDo2 from "../assets/icon-training-sec-todo2.png";

import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";

import "./Main.css";
import { Diversity1 } from "@mui/icons-material";

const TrainingScreen_3 = () => {
  const { user, pId, pName, selectedPatient } = useContext(UserContext);
  const navigate = useNavigate();

  const addMember = () => {
    // const path = `/familyMembersConsent`;
    let rtype = "loc";
    const path = `/personaliseECard`;
    //navigate(path);
    navigate(path, { state: { id: rtype } });
  }

  const onDetails = () => {
    let rtype = "loc";
    const path = `/inviteLocalCareGiver`;
    navigate(path, { state: { id: rtype } });
  };

  const onSubmit = () => {
    const path = `/trainingScreen_4`;
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


  const [statusReject3, setStatusReject3] = useState(false);


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




  return (
    // <div style={{backgroundColor:"#000000"}}>
    <Container
      style={{ background: "rgba(0,0,0,0.7)", maxWidth: "100%", minWidth: "300px" }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <div className="car-overlay">
          <FixedHeader
            title="Screen Heading"
            title2="This paragraph describes what this screen is all about"
            title3="Last Updated: 10-10-2022"
            limg="rl"
            rimg="reg"
          />
          <div className="car-ds">
            <CarouselSlider />
          </div>
        </div>
        <div className="overlay-comment2">Recommended list of tasks for you to action for the selected person.</div>
        <div className="vr-line2"><i class="arrow up"></i></div>
        <Card
          style={{
            marginTop: "0rem",
            marginBottom: "0rem",
            borderTop: "6px solid #1D5A90",
            borderRadius: "15pt",
            maxWidth: "500px",
            paddingBottom: "4rem",
            background: "rgba(0,0,0,0)",
          }}
          className="left"
        >
          <Card.Body>
            <div className="car-overlay">
              <div class="row align-items-center">
                <div class="col-2"><img src={IconToDo} alt="" style={{ width: "70%" }} /></div>
                <div class="col-8 text-green">List of “To Dos” for you to Action</div>
                <div class="col-2" style={{ textAlign: "right" }}><img src={IconInfo} alt="" /></div>
              </div>
              <div class="container">
                <div
                  className="row text-res">
                  <div class="col-2"></div>
                  <div class="col-4"></div>
                  <div class="col-2 text-green-center">Done</div>
                  <div class="col-2 text-green-center">Not Done</div>
                  <div class="col-2 text-green-right">Action</div>
                </div>
              </div>
            </div>
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
                  <div class="col-2"><img src={IconToDo1} style={{ width: "70%" }} /></div>
                  <div class="col-4 text-gray">Suggested Action Number 1</div>
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
            <div className="car-overlay">
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
                      // height: "70px",
                      verticalAlign: "middle",
                    }}
                  >
                    <div class="col-2 img-size"><img src={IconToDo2} style={{ width: "75%" }} /></div>
                    <div class="col-4 text-gray">Suggested Action Number 2</div>
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
            </div>
          </Card.Body>
        </Card>
        <div
          style={{
            textAlign: "center",
            marginTop: "-3rem",
            marginBottom: "2rem",
            width: "50%",
          }}
        >
          <Button
            style={{
              background: "#1D5A90",
              borderRadius: 50,
              width: "35%",
              color: "#ffffff",
              textTransform: "none",
            }}
            onClick={onSubmit}
            type="submit"
          >
            Next
          </Button>
        </div>
      </Grid >
    </Container >
  );
};

export default TrainingScreen_3;