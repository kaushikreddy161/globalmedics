import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { Card } from "react-bootstrap";
//import { alert } from "react-bootstrap-confirmation";
import { Button, Divider } from "@mui/material";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
// import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
//import IconCheck from "../assets/icon-check.png";
//import IconUnCheck from "../assets/icon-uncheck.png";

import "./Main.css";

const AddFamilyMemberInfo = ({ t }) => {
  const { user, pId, pName } = useContext(UserContext);
  //const { emailPasswordSignup } = useContext(UserContext);

  const location = useLocation();

  const navigate = useNavigate();
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("test12345");
  const [phone, setPhone] = useState("");
  const [howFarTotheyLive, setHowFarTotheyLive] = useState("");
  const [relationToLovedOne, setRelationToLovedOne] = useState("");
  const [status, setStatus] = useState("0");
  const [value, setValue] = useState("");

  // const [lock, setLock] = useState("false")
  // const { i18n } = useTranslation();

  const onBack = () => {
    const path = `/moduleSummary`;
    navigate(path);
  };

  useEffect(() => {
  //  loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const loadUser = async () => {
  //   //   console.log('user:',user.id);
  //   if (user) {
  //     let cid = BSON.ObjectID(user.id).toString();
  //     const carem = user.functions.getOneCaremanager(cid);
  //     // console.log('carem:',carem);
  //     carem.then((resp) => {
  //       //   console.log(resp);
  //       setfName(resp.firstname);
  //       setlName(resp.lastname);
  //       setEmail(decryptData(resp.email));
  //       setPhone(resp.phone);
  //       setStatus("1");
  //       //  setLock("true");
  //     });
  //   }
  // };

  const onConfirm = () => {
    navigate(`/addCareRingMembers`);
  };

  const onSubmit = async (event) => {
     event.preventDefault();
    // console.log('user:',user.id);
    try {
      if (user) {
        let dt = new Date();
       // let id =  BSON.ObjectID(authedUser.id);  
        let id = new BSON.ObjectID();
        let cid = BSON.ObjectID(user.id).toString();    // care manager
        //let cgid = authedUser.id;                       // care giver id
        let cgid = "";
        let pid = pId;                                  // patient id
      // let pid="";
        const create = user.functions.createFamilymember(
          id,
          cgid,
          cid,
          relationToLovedOne,
          cypherData(email),
          cid,
          "careManager",
          dt.toDateString(),
          "active",
          fName,
          lName,
          cypherData(password),
          pid,
          value,
          howFarTotheyLive,
          "GlobalMedics2021",
        );

        // const update = user.function.getOnePatientandUpdate(
        //  pid,
        //  cgid 
        // );
     //    console.log('create:', create);
        create.then((resp) => {
          alert("Family Member Added Successfully");
          //  console.log("resp:", resp);
          navigate(`/role`);
        });
        // redirectNow();
      }

    //   const userx = await emailPasswordSignup(email,password);

      // const credentials = Credentials.emailPassword(
      //      email,
      //      password
      //    );
      //  const authedUser = await app.logIn(credentials);

      //  console.log("authuser:", authedUser.id);
    } catch (error) {
      //alert(error);
      console.log("Error:", error);
    }
  };

  // As explained in the Login page.
  // const redirectNow = () => {
  //   const redirectTo = location.search.replace("?redirectTo=", "");
  //   navigate(redirectTo ? redirectTo : "/");
  // };

 // const [selectedLang, setSelectedLang] = useState("en");

  // const changeLanguage = (event) => {
  //   setSelectedLang(event.target.value);
  //   i18n.changeLanguage(event.target.value);
  //   // console.log('language:', event.target.value);
  // };

  //  console.log('118n:', i18n);

  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "10vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Add Family Member"
          title2="Please add details about the person you wish to add."
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="adci"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-alci">
          <Card
            style={{
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              marginTop: "0rem",
              marginBottom: "0rem",
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
                          <label>Relation to the elderly loved one</label>
                          <select
                            className="form-control"
                            id=""
                            style={{
                              color: "#ADAAA7",
                              borderRadius: "5px",
                              marginTop: "5pt",
                              border: "1px solid #ced4da",
                            }}
                            name="relationToLovedOne"
                            onChange={(e) => setRelationToLovedOne(e.target.value)}
                          >
                            <option value="">Select any one</option>
                            <option value="Spouse">Spouse</option>
                            <option value="Brother / Sister">
                              Brother / Sister
                            </option>
                            <option value="First Cousin">First Cousin</option>
                            <option value="Distant Relative">
                              Distant Relative
                            </option>
                          </select>
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
                          <label>{t("FIRST_NAME")}</label>
                          {/* <div style={{position:"relative"}}> */}
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="First Name"
                             name="fName"
                            // value={fName}
                            onChange={(e) => setfName(e.target.value)}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
                            }}
                          ></Form.Control>
                          {/* <EditOutlinedIcon style={{position:"absolute"}}/>                       */}
                          {/* </div> */}
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
                          <label>{t("LAST_NAME")}</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Last Name"
                             name="lName"
                            // value={lName}
                             onChange={(e) => setlName(e.target.value)}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
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
                          <span style={{ color: "red" }}>*</span>
                          {/* <Form.Control
                            className="name-input"
                            type="number"
                            min="0"
                            placeholder="+91 xxxxxxxxxx"
                             name="phone"
                            // value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
                              // paddingBottom: "15px",
                            }}
                          ></Form.Control> */}
                            <PhoneInput
                            country={'in'}
                            placeholder="Enter phone number"
                            name="phone"
                            value={value}
                            onChange={setValue}
                            />
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
                            placeholder="email_id@MailProvider.com"
                            name="email"
                            // value={email}
                             onChange={(e) => setEmail(e.target.value)}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
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
                          // padding: "2pt",
                          paddingBottom: "15px",
                          border: "2px solid white",
                        }}
                      >
                        <div
                          class="container"
                          style={{ marginTop: "1rem", marginBottom: "0rem" }}
                        >
                          <label>
                            How far do they live from the elderly person?
                          </label>
                          <select
                            className="form-control"
                            id=""
                            style={{
                              color: "#ADAAA7",
                              borderRadius: "5px",
                              marginTop: "5pt",
                              border: "1px solid #ced4da",
                            }}
                            name="howFarTotheyLive"
                            onChange={(e) => setHowFarTotheyLive(e.target.value)}
                          >
                            <option value="">Select any one</option>
                            <option value="Live in the same house">
                              Live in the same house
                            </option>
                            <option value="Live in the same street / locality">
                              Live in the same street / locality
                            </option>
                            <option value="Live in the same city">
                              Live in the same city
                            </option>
                            <option value="Live in the same country">
                              Live in the same country
                            </option>
                            <option value="Live overseas">Live overseas</option>
                          </select>
                        </div>
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
                    Save Details
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
      </Grid>
    </Container>
  );
};

export default withTranslation()(AddFamilyMemberInfo);
