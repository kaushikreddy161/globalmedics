import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider } from "@mui/material";
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
// import { set } from "date-fns";
// import IconHealthReports from "../assets/icon-pReports.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
//import InputAdornment from '@mui/material/InputAdornment';
//import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { withTranslation } from "react-i18next";
// import { useTranslation } from "react-i18next";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import IconPatientImage from "../assets/icon-patient-photo.png";
// import IconCManager from "../assets/icon-cmanager.png";
import FixedHeader from "../components/FixedHeader";
import "./Main.css";

//import PhoneInput from 'react-phone-number-input';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// const datex = new Date();

const CareManagerDetails = ({ t }) => {
  const { user } = useContext(UserContext);
  // const location = useLocation();
  // const datex = new Date();

  const navigate = useNavigate();
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("0");
  const [value, setValue]= useState("");
  // const [lock, setLock] = useState("false")
  // const { i18n } = useTranslation();

  // const onBack = () => {
  //   const path = `/moduleSummary`;
  //   navigate(path);
  // };

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
     
    if (user) {
   let em = (user._profile.data.email).toString();
     setEmail(em);
      let cid = BSON.ObjectID(user.id).toString();
      const carem = user.functions.getOneCaremanager(cid);
      carem.then((resp) => {

        if(resp) {
        setfName(resp.firstname);
        setlName(resp.lastname);
        setEmail(decryptData(resp.email));
        setValue(resp.phone);
        setStatus("1");
        //  setLock("true");
        } else {
          const careg = user.functions.getOneCaregiver(cid);
          careg.then((respg) => {
            if(respg) {
            setfName(respg.firstname);
            setlName(respg.lastname);
            setEmail(decryptData(respg.email));
            setValue(respg.phone);
            setStatus("1");
            //  setLock("true");
            } 
          });
        }
      });
    }
  };

  const onConfirm = () => {
    navigate(`/addLovedOnes`);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // console.log('user:',user.id);

    try {
      if (user) {
        let dt = new Date();
        let id = BSON.ObjectID(user.id);
        let pid = BSON.ObjectID(user.id).toString();

        const create = user.functions.createCaremanager(
          id,
          cypherData(email),
          cypherData(password),
          fName,
          lName,
          value,
          dt.toDateString(),
          "active",
          "GlobalMedics2021",
          pid
        );
        // console.log('create:', create);
        create.then((resp) => {
          alert("Account Details Updated Successfully");
          //  console.log("resp:", resp);
          navigate(`/role`);
        });
        // redirectNow();
      }
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
          title="Account Details"
          title2="Please validate / update your account details to secure your account."
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="adr"
        />
        <div className="form-w">
          <Card
            style={{
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              // marginTop: "0rem",
              // marginBottom: "0rem",
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
                          <label>{t("FIRST_NAME")}</label>
                          {/* <div style={{position:"relative"}}> */}
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="First Name"
                            name="fName"
                            value={fName}
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
                            value={lName}
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
                          <label>{t("EMAIL")}</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="email_id@MailProvider.com"
                            name="email"
                            value={email}
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
                      {/* <Card
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
                          <label>{t("PASSWORD")}</label>
                          <Form.Control
                            className="name-input"
                            type="password"
                            placeholder="**********"
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
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
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>{t("PHONE")}</label>
                          {/* <Form.Control
                            className="name-input"
                            type="number"
                            min="0"
                            placeholder="+91 xxxxxxxxxx"
                            name="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
                            }}
                          ></Form.Control> */}
                           {/* <div> */}
                             <PhoneInput
                             country={'in'}
                            placeholder="Enter phone number"
                            name="phone"
                            value={value}
                            onChange={setValue}
                            />
                      {/* </div> */}
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
                    marginBottom: "0pt",
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
                    marginBottom: "0pt",
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

export default withTranslation()(CareManagerDetails);
