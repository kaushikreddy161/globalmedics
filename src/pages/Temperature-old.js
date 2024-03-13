import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user.context";

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import moment from "moment";
import FixedHeader from "../components/FixedHeader";
import AddDevice from "../assets/icon-add-device.png";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import CarouselSlider from "./CarouselSlider";
import "./Main.css";

const Temperature = () => {
  const { user, pId, pName } = useContext(UserContext);

  const navigate = useNavigate();
  let dt2 = moment(new Date()).format("YYYY-MM-DDThh:mm:ss");

  const [dateTime, setdTime] = useState(dt2);
  const [beats, setbeats] = useState("");
  const datex = new Date();
  const datey = new Date(dateTime);
  const [lovedones, setlovedOnes] = useState([]);
  const [selLid, setSelLId] = useState("");
  const [status, setStatus] = useState("0");
  const [patientName, setpName] = useState("");

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
    navigate(`/comingSoon`);
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (datey === "" || beats === "") {
      alert("All the fields are mandatory");
    } else {
      try {
        if (user) {
          //  console.log('auth:',user.id);
          let dt = new Date();
          let id = new BSON.ObjectID();
          let cid = BSON.ObjectID(user.id).toString();
          // let pid = selLid;
          let pid = pId;
          const createx = user.functions.createTemperature(
            id,
            cypherData(beats),
            datey,
            cid,
            "careManager",
            datex,
            "active",
            datex,
            pid,
            "GlobalMedics2021",
            "bpm"
          );
          createx.then((resp) => {
            console.log("resp:", resp);
            alert("Temperature Record Added Successfully");
            navigate(`/vitals`);
          });
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
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Temperature"
          title2="Body temperature measured with a Thermometer"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="tr"
        />
                <div className="car-ds">
          <CarouselSlider />
        </div>

        <div className="form-pr">
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
                <div className="form-container">
                  <Form
                    className="signup-form"
                    style={{ color: "#209F85" }}
                    onSubmit={onSubmit}
                  >
                    <Form.Group>
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
                            // placeholder=""
                            value={dateTime}
                            name="dateTime"
                            onChange={(e) => setdTime(e.target.value)}
                            style={{
                              color: "#ADAAA7",
                              marginTop: "0.5rem",
                              marginLeft: "-0.7rem",
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
                            Temperature
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            // placeholder="Greater Value"
                            name="beats"
                            onChange={(e) => setbeats(e.target.value)}
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
                            &deg;C
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

export default Temperature;
