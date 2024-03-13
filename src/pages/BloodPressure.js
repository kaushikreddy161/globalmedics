import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user.context";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import VitalsBloodPressure from "../assets/vitals-blood-pressure.png";
import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import moment from "moment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconPatientImage from "../assets/icon-patient-photo.png";
import AddDevice from "../assets/icon-add-device.png";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import CarouselSlider from "./CarouselSlider";
import FixedHeader from "../components/FixedHeader";
import GoogleFit from "../GoogleFit";
import ComingSoon from "./ComingSoon";
import IconInfo from "../assets/icon-help.png";

const FaqInfo=[
  {
    name: "Blood Pressure",
    type: "BP",
    video: "BPV",
    faq: "BPQA",
  },
]

const BloodPressure = () => {
   const { user, pId, pName, adbuser } = useContext(UserContext);
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
 
  
  const onInfo = (rtype,rvideo,rfaq) => {
    const path = `/information`;
    navigate(path, { state: { id: rtype, v:rvideo, qa:rfaq} });
  };


  const navigate = useNavigate();
  let dt2 = moment(new Date()).format("YYYY-MM-DDThh:mm:ss");

  const [dateTime, setdTime] = useState(dt2);
  const [systolic, setsystolic] = useState("");
  const [diastolic, setdiastolic] = useState("");
  const datex = new Date();
  const datey = new Date(dateTime);
  const [lovedones, setlovedOnes] = useState([]);
  const [selLid, setSelLId] = useState("");
  const [patientName, setpName] = useState("");
  const [status, setStatus] = useState("0");

  useEffect(() => {
    // loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
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
          setpName(resp.displayName);
          setSelLId(resp._id.toString());
          setlovedOnes(resp);
        } else {
          alert("Loved Ones ID not loaded..");
        }
      });
    }
  };

  const onAddDevice = () => {
    // console.log("hello");
    navigate(`/deviceConsent`);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
     console.log('data:', datey);
     console.log('diastolic:', diastolic);
     console.log('systolic:', systolic);
    if (datey === "" || diastolic === "" || systolic === "") {
      alert("All the fields are mandatory");
    } else {
      try {
        if (user) {
          //  console.log('auth:',user.id);

          const dt = new Date();
          let id = new BSON.ObjectID();
          let cid = BSON.ObjectID(user.id).toString();
          //  let pid = selLid;
          let pid = pId;
          // console.log('pid:', pid);
          const createx = user.functions.createBloodPressure(
            id,
            datey,
            cypherData(diastolic),
            cid,
            "careManager",
            datex,
            "active",
            datex,
            pid,
            "GlobalMedics2021",
            cypherData(systolic),
            "mmHg"
          );
          createx.then((resp) => {
            //  console.log("resp:", resp);
            alert("Blood Pressure Record Added Successfully");
          });
          navigate(`/vitals`);
        }
      } catch (error) {
        //  alert(error);
        console.log("error:", error);
      }
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
        style={{
          minHeight: "100vh",
          paddingBottom: "0rem",
        }}
      >
        <FixedHeader
          title="Blood Pressure"
          title2="Blood Pressure cuff measurements"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="bpr"
        />
                <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-bp">
          <Card
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              // maxWidth: "500px",
              // display: "flex",
              // justifyContent: "center",
            }}
            className="left"
          >
            <Card.Body>
              <div className="container">
                <div className="form-container">
                  <Form
                    className="signup-form"
                    style={{ color: "#209F85" }}
                    onSubmit={onSubmit}
                  >
                    <div className="info_img">
                      {FaqInfo.map((item) => (
                        <img src={IconInfo}
                          onClick={() => onInfo(`${item.type}`, `${item.video}`, `${item.faq}`)}
                        />
                      ))}
                    </div>
                    <Form.Group>
                      {/* <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2opt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>
                            Your Loved Ones
                            <span style={{ color: "red" }}>*</span>
                          </label>

                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Loved Ones"
                            name="patientName"
                            value={pName}
                            disabled={true}
                            onChange={(e) => setpName(e.target.value)}
                            style={{
                              marginBottom: "10pt",
                              color: "#ADAAA7",
                              border: "0px solid white",
                            }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} /> */}
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2opt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>
                            Date and time of recording
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <Form.Control
                            className="name-input"
                            type="datetime-local"
                            value={dateTime}
                            // placeholder=""
                            name="dateTime"
                            onChange={(e) => setdTime(e.target.value)}
                            style={{
                              // marginBottom: "25pt",
                              color: "#ADAAA7",
                              // border: "0px solid white",
                              // marginLeft: "-0.7rem",
                              fontSize: "0.9rem",
                            }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2opt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>
                            Systolic Blood Pressure (Greater of the two values)
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            // placeholder="Greater Value"
                            name="systolic"
                            onChange={(e) => setsystolic(e.target.value)}
                            style={{
                              marginTop: "5pt",
                              color: "#ADAAA7",
                              width: "30%",
                            }}
                          ></Form.Control>
                          <Form.Label
                            style={{
                              display: "flex",
                              marginTop: "-2rem",
                              marginLeft: "8rem",
                            }}
                          >
                            mmHg
                          </Form.Label>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "10px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>
                            Diastolic Blood Pressure (Lesser of two the values)
                            <span style={{ color: "red" }}>*</span>
                            <span style={{ paddingRight: "2rem" }}>&#160;</span>
                          </label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            // placeholder="Lesser Value"
                            name="phondiastoliceNumber"
                            onChange={(e) => setdiastolic(e.target.value)}
                            style={{
                              marginTop: "5pt",
                              color: "#ADAAA7",
                              width: "30%",
                            }}
                          ></Form.Control>
                          <Form.Label
                            style={{
                              display: "flex",
                              marginTop: "-2rem",
                              marginLeft: "8rem",
                            }}
                          >
                            mmHg
                          </Form.Label>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />

                      <div
                        style={{
                          marginTop: "2rem",
                          marginBottom: "1rem",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <ButtonGroup>
                          <ToggleButton
                            // key={idx}
                            // id={`lone-${idx}`}
                            type="radio"
                            variant="outline-primary"
                            // name={`lone-${idx}`}
                            // value={lone.value}
                            // checked={listOne === lone.value}
                            // onChange={(e) => changeImage(lone, idx)}
                            onClick={onAddDevice}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              // marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                              width: "90px",
                              height: "90px",
                            }}
                          >
                            <img src={AddDevice} style={{ width: "50%" }} />

                            <br />
                            <span>Add Device</span>
                          </ToggleButton>
                        </ButtonGroup>
                      </div>
                    </Form.Group>
                  </Form>
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
                Confirm
              </Button>
            </div>
            <div style={{ height: "5vh" }} />
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default BloodPressure;
