import React, { useContext, useState, useEffect } from "react";
//import { UserContext } from "../contexts/user.context";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import cypherData from "../crypt/cypherData";
import decryptData from "../crypt/decryptData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FixedHeader from "../components/FixedHeader";
import "./Main.css";

const AddDoctor = () => {
  // const { user } = useContext(UserContext);

  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const pId = activeAccount.idTokenClaims.sub;
  const user = "";
  const pName = "";
  const selectedPatient = ""; 

  
  const navigate = useNavigate();
  const [relationName, setrName] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [famName, setfamName] = useState("");
  const [phoneNumber, setpNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nickName, setnName] = useState("");
  const [status, setStatus] = useState("0");
  const [lid, setSelLId] = useState("");
  const datex = new Date();

  const onBack = () => {
    const path = `/careManagerDetails`;
    navigate(path);
  };

  useEffect(() => {
    // loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    //   console.log('user:',user.id);
    if (user) {
      let cid = BSON.ObjectID(user.id).toString();
      const lovd = user.functions.getLovedOneCP(cid); // one loved one based on care manager id
      // console.log('carem:',carem);
      lovd.then((resp) => {
        //   console.log(resp);
        setfName(resp.firstName);
        setlName(resp.middleName);
        setfamName(resp.familyName);
        setEmail(decryptData(resp.email));
        setpNumber(resp.phone);
        setrName(resp.relation);
        setnName(resp.displayName);
        setSelLId(resp._id.toString());
        setStatus("1");
        //  setLock("true");
      });
    }
  };

  const onConfirm = () => {
    navigate(`/patientpersonalDetailsForm`, { state: { lid: lid } });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (
      email === "" ||
      nickName === "" ||
      relationName === "" ||
      phoneNumber === ""
    ) {
      alert(
        "Please enter the data for the Doctor Name, Phone Number and Mail id."
      );
    } else {
      try {
        if (user) {
          //  console.log('auth:',user.id);
          let dt = new Date();
          //  console.log("date:", dt.toDateString());
          let id = new BSON.ObjectID();
          let cid = BSON.ObjectID(user.id).toString();
          let pid = "";
          // console.log('pid:', pid);

          const createx = user.functions.createLovedOnes(
            id,
            cid,
            nickName,
            cypherData(email),
            cid,
            "careManager",
            dt.toDateString(),
            "active",
            famName,
            fName,
            lName,
            pid,
            phoneNumber,
            "GlobalMedics2021",
            relationName
          );
          createx.then((resp) => {
            //   console.log("lovedones id:", id.toString());
            alert("Loved Ones Details Added Successfully");
            const lid = React.createContext(id.toString());
            navigate(`/patientpersonalDetailsForm`, {
              state: { lid: id.toString() },
            });
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
        style={{
          minHeight: "100vh",
          paddingBottom: "0rem",
        }}
      >
        {/* <div
          style={{
            backgroundColor: "#EBEBEB",
            paddingTop: "2rem",
            // width: "500px",
          }}
        > */}
        <FixedHeader
          title="Add Doctor"
          title2="Please tell us a little more about the loved one that you wish to remotely care for."
          title3="Last Updated: 10-10-2022"
          // limg="all"
          rimg="c-ad"
        />
        <div className="form-a">
          <Card
            style={{
              marginTop: "1.5rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
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
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>What is the doctor’s first name?</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Clinic / Hospital Name"
                            name="fName"
                            value={fName}
                            onChange={(e) => setfName(e.target.value)}
                            style={{
                              // marginBottom: "10pt",
                              color: "#ADAAA7",
                              // border: "0px solid white",
                              // marginLeft: "-0.7rem",
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
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>What is the doctor’s middle name?</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Middle Name"
                            name="lName"
                            value={lName}
                            onChange={(e) => setlName(e.target.value)}
                            style={{
                              // marginBottom: "10pt",
                              color: "#ADAAA7",
                              // border: "0px solid white",
                              // marginLeft: "-0.7rem",
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
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Name of Doctor’s Clinic</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Last/Family Name"
                            name="famName"
                            value={famName}
                            onChange={(e) => setfamName(e.target.value)}
                            style={{
                              // marginBottom: "10pt",
                              color: "#ADAAA7",
                              // border: "0px solid white",
                              // marginLeft: "-0.7rem",
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
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>What is their Phone Number?</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="+91"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setpNumber(e.target.value)}
                            style={{
                              // marginBottom: "10pt",
                              color: "#ADAAA7",
                              // border: "0px solid white",
                              // marginLeft: "-0.7rem",
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
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>What is their email address?</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="name@email.com"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                              // marginBottom: "10pt",
                              color: "#ADAAA7",
                              borderRadius: "10px",
                              // border: "0px solid white",
                              // marginLeft: "-0.7rem",
                            }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Card.Body>

            <>
              {status === "0" ? (
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
                    Send Invite
                  </Button>
                </div>
              ) : (
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
                    onClick={onConfirm}
                    type="submit"
                  >
                    Confirm
                  </Button>
                </div>
              )}
            </>
            <div style={{ height: "5vh" }}></div>
          </Card>
        </div>
        {/* </div> */}
      </Grid>
    </Container>
  );
};

export default AddDoctor;
