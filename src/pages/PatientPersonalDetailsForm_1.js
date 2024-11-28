import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user.context";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';


import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import IconHealthReports from "../assets/icon-pReports.png";
import IconPatientInfo from "../assets/icon-pnt-info.png";
import IconPatientImage from "../assets/icon-patient-photo.png";
import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useNavigate, useLocation } from "react-router-dom";
import { BSON } from "realm-web";
import cypherData from "../crypt/cypherData";
import decryptData from "../crypt/decryptData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import Box from "@mui/material/Box";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import Male from "../assets/img-male.png";
import Female from "../assets/img-female.png";
import Others from "../assets/img-others.png";

import MaleS from "../assets/img-male-sel.png";
import FemaleS from "../assets/img-female-sel.png";
import OthersS from "../assets/img-others-sel.png";

import Mobile from "../assets/icon-mob.png";
import eMail from "../assets/icon-adrs.png";
import Calling from "../assets/icon-call.png";
import LAdrs from "../assets/icon-ladrs.png";
import Ethnicity from "../assets/icon-thin.png";
import Occupation from "../assets/icon-ocp.png";
import Height from "../assets/icon-height.png";
import Weight from "../assets/icon-weight.png";
import BloodGroup from "../assets/icon-bloodg.png";
import Sleep from "../assets/icon-sleep.png";
import Walk from "../assets/icon-walk.png";
import Cigarettes from "../assets/icon-cig.png";
import Drinks from "../assets/icon-drink.png";

import AddDevice from "../assets/icon-add-device.png";

import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
import "./Main.css";

const PatientPersonalDetailsForm = () => {
  const [listOne, setListOne] = useState();
  const [list1, setList1] = useState([
    { name: "Male", icon: Male, value: "1" },
    { name: "Female", icon: Female, value: "2" },
    { name: "Others", icon: Others, value: "3" },
  ]);
  const { user, pId, pName, adbuser } = useContext(UserContext);

  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  // const pId = activeAccount.idTokenClaims.sub;
  // const user = "";
  // const pName = "";

  const location = useLocation();
  const navigate = useNavigate();
  const [patientName, setpName] = useState("");
  const [address, setpAddress] = useState("");
  const [phoneNumber, setpNumber] = useState("");
  const [gender, setGender] = useState("");
  const [age, setpAge] = useState("");
  const [height, setpHeight] = useState("");
  const [weight, setpWeight] = useState("");
  const [occupation, setpOccupation] = useState("");
  const [noofpegs, setpNoofpegs] = useState("");
  const [bloodgroup, setpBloodgroup] = useState("");
  const [noofcigarettes, setpCigarettes] = useState("");
  const [minutes, setpMinutes] = useState("");
  const [cigcount, setpCigcount] = useState("");
  const [email, setpEmail] = useState("");
  const [lovedones, setlovedOnes] = useState([]);
  const [selLid, setSelLId] = useState("");
  const datex = new Date();
  const [xid, setXid] = useState("");
  const [status, setStatus] = useState("0");
  const [relationName, setrName] = useState("");
  const [drinking, setpDrinking] = useState("");
  const [ethnicity, setpEthnicity] = useState("");
  const [calling, setpCalling] = useState("");
  const [dailySleep, setpDailySleep] = useState("");

  // xid = "6310b1b7f45b3251b9a67f58";

  const onBack = () => {
    const path = `/addLovedOnes`;
    navigate(path);
  };

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
    setXid(pId);
  }, [pId]);

  const loadUser = async () => {
    //   console.log('user:',user.id);
    //   console.log('location:',location.state.lid);
    if (user) {
      // let ccid = BSON.ObjectID(user.id).toString();
      let ccid = adbuser;
      if (location.state) {
        //  setXid(location.state.lid.toString());
        //  console.log("xxxid:", location.state.lid.toString());
        handleChange(location.state.lid.toString());
      } else {
        //  const lovd = user.functions.getLovedOneCP(ccid); // one loved one based on care manager id
        const lovd = user.functions.getLovedOneP(pId);
        //console.log('else direct patient:',ccid);
        lovd.then((resp) => {
          if (resp) {
            const pfullnamee =
              resp[0].firstName +
              "" +
              resp[0].middleName +
              "" +
              resp[0].familyName;

            setStatus("1");
            setpNumber(resp[0].phone);
            setpEmail(decryptData(resp[0].email));
            setpName(resp[0].pfullnamee);
            setrName(resp[0].displayName);
            setSelLId(resp[0]._id.toString());
            //  setLock("true");
            handleChange(resp[0]._id.toString());
          } else {
            alert("Loved Ones Not Created..");
            navigate(`/addLovedOnes`);
          }
        });
      }
    }
  };

  const emptyData = () => {
    setpNumber("");
    setpEmail("");
    setpName("");
    setrName("");
    setpAddress("");
    setpAge("");
    setpBloodgroup("");
    setpDrinking("");
    setpCigarettes("");
    setpHeight("");
    setpMinutes("");
    setpNoofpegs("");
    setpOccupation("");
    setpWeight("");
    setGender("");
    setpCalling("");
    setpDailySleep("");
  };

  const changeImage = (val, id) => {
    // console.log("val", val);
    setListOne(val.value);
    if (val.value == 1) {
      list1[0].icon = MaleS;
      list1[1].icon = Female;
      list1[2].icon = Others;
      setList1([...list1]);
    }
    if (val.value == 2) {
      list1[0].icon = Male;
      list1[1].icon = FemaleS;
      list1[2].icon = Others;
      setList1([...list1]);
    }
    if (val.value == 3) {
      list1[0].icon = Male;
      list1[1].icon = Female;
      list1[2].icon = OthersS;
      setList1([...list1]);
    }
    // console.log("list1", list1);
  };

  const handleChange = async (e) => {
    emptyData();
    const pato = user.functions.getOnePatientDetailData(e);
    // console.log('carem:',carem);
    pato.then((respy) => {
      if (respy) {
        setStatus("1");
        setpNumber(decryptData(respy.phoneNumber));
        setpEmail(decryptData(respy.email));
        setpName(respy.patientName);
        setpAddress(decryptData(respy.address));
        setpAge(respy.age);
        setpBloodgroup(respy.bloodGroup);
        setpDrinking(respy.hmdrinks);
        setpCigarettes(respy.smokingYear);
        setpHeight(respy.height);
        setpMinutes(respy.hmhoursWRC);
        setpCigcount(respy.hmcigrattes);
        setpNoofpegs(respy.hmdrinks);
        setpOccupation(respy.occupation);
        setpWeight(respy.weight);
        setGender(respy.gender);
        setpCalling(respy.nickName);
        setpDailySleep(respy.hrsSleepday);
      } else {
        // let ccid = BSON.ObjectID(user.id).toString();

        //   const lovedp = user.functions.getLovedOneCP(ccid);
        const lovedp = user.functions.getLovedOneP(e);

        // console.log('carem:',carem);
        lovedp.then((respz) => {
          const pfullname =
            respz[0].firstName +
            "" +
            respz[0].middleName +
            "" +
            respz[0].familyName;
          //  console.log("abcabac:",respz);
          setStatus("0");
          setpNumber(respz[0].phone);
          setpEmail(decryptData(respz[0].email));
          setpName(pfullname);
          setrName(respz[0].displayName);
          setSelLId(respz[0]._id.toString());
        });
        setpEthnicity("");
        setpAddress("");
        setpAge("");
        setpBloodgroup("");
        setpDrinking("");
        setpCigarettes("");
        setpHeight("");
        setpMinutes("");
        setpCigcount("");
        setpNoofpegs("");
        setpOccupation("");
        setpWeight("");
        setGender("");
        setpCalling("");
        setpDailySleep("");
      }
    });
  };

  const onConfirm = () => {
    //  navigate(`/setupCareRing`);
    navigate(`/chronicConditions`);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // if (
    //   email === "" ||
    //   patientName === "" ||
    //   selLid === "" ||
    //   phoneNumber === ""
    // ) {
    //   alert(
    //     "Please enter the data for Loved Ones, Email, Phone Number and Patient Name"
    //   );
    // } else {
    // console.log("statius:", status);
    // try {
    if (user) {
      //  console.log('auth:',user.id);
      let dt = new Date();
      let id = new BSON.ObjectID();
      let cid = adbuser;
      //  let cid = BSON.ObjectID(user.id).toString();
      let pid = pId;
      //   console.log("gender:", list1);
      // console.log("ethincity:", ethnicity);
      const createx = user.functions.createPatientDetailData(
        id,
        formData.patientName,
        formData.phoneNumber,
        formData.address,
        formData.age,
        formData.bloodgroup,
        formData.email,
        dt.toDateString(),
        "GlobalMedics2021",
        formData.weight,
        formData.height,
        formData.occupation,
        formData.gender,
        formData.ethnicity,
        formData.cigcount,
        formData.drinking,
        formData.minutes,
        cid,
        pid,
        formData.dailySleep,
        formData.calling,
        formData.noofcigarettes
      );
      createx.then((resp) => {
        //  console.log("resp:", resp);
        alert("Patient Details Added Successfully");
        //   navigate(`/setupCareRing`);
        navigate(`/chronicConditions`);

      });
    } else {
      navigate(`/setupCareRing`);
    }
    // }
    //  catch (error) {
    //   //  alert(error);
    //   console.log("error:", error);
    // }
    // }
  };

  // const handleChange = (e) => {
  //   setOption(options[+e.target.value]);
  // };

  // New Code


  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    patientName: "",
    phoneNumber: "",
    address: "",
    age: "",
    bloodgroup: "",
    email: "",
    weight: "",
    height: "",
    occupation: "",
    gender: "",
    ethnicity: "",
    cigcount: "",
    drinking: "",
    minutes: "",
    dailySleep: "",
    calling: "",
    noofcigarettes: "",
  });

  // Move to the next step
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Move to the previous step
  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleChangen = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSkipNow = () => {
    const path = `/chronicConditions`;
    navigate(path);
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
          title="Patient Particulars"
          title2="Please upload patient’s medical reports"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="ppr"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-p">
          <Card
            itemType=""
            style={{
              marginTop: "10pt",
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
                    <Form.Group onSubmit={onSubmit}>
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
                          <label>Select your Loved One</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Loved Ones"
                            name="relationName"
                            value={pName}
                            disabled={true}
                            onChange={(e) => setrName(e.target.value)}
                            style={{
                              marginBottom: "0pt",
                              marginTop: "5pt",
                              color: "#ADAAA7",
                              // border: "0px solid white",
                            }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      {currentStep === 1 && (
                        <>
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
                              <label>What is their name?</label>
                              <Form.Control
                                className="name-input"
                                type="text"
                                placeholder="Enter patient’s name"
                                name="patientName"
                                value={formData.patientName}
                                onChange={handleChangen}
                                // onChange={(e) => setpName(e.target.value)}
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "5pt",
                                  color: "#ADAAA7",
                                  // border: "0px solid white",
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
                            <Card.Body style={{ marginBottom: "-1.3rem" }}>
                              <label>What do you call them?</label>
                              <span style={{ color: "red" }}>*</span>
                              <Form.Group
                                as={Row}
                                className="mb-3"
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "5pt",
                                }}
                              >
                                <Col xs="10" md="11">
                                  <Form.Control
                                    type="text"
                                    placeholder="Nick Name"
                                    name="calling"
                                    value={formData.calling}
                                    onChange={handleChangen}
                                    // onChange={(e) => setpCalling(e.target.value)}
                                    style={{ color: "#ADAAA7" }}
                                  />
                                </Col>
                                <Form.Label
                                  column
                                  xs="2"
                                  md="1"
                                  style={{
                                    marginTop: "-0.2rem",
                                    marginBottom: "0rem",
                                    // marginLeft: "-1rem",
                                  }}
                                >
                                  <img src={Calling} />
                                </Form.Label>
                              </Form.Group>
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
                            <Card.Body style={{ marginBottom: "-1.3rem" }}>
                              <label>
                                What is their Phone Number?
                                <span style={{ color: "red" }}>*</span>
                              </label>
                              <Form.Group
                                as={Row}
                                className="mb-3"
                                // controlId="formPlaintextPassword"
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "5pt",
                                }}
                              >
                                <Col xs="10" md="11">
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter patient’s contact number"
                                    style={{ color: "#ADAAA7" }}
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChangen}
                                    // onChange={(e) => setpNumber(e.target.value)}
                                    min="0"
                                  />
                                </Col>
                                <Form.Label
                                  column
                                  xs="2"
                                  md="1"
                                  style={{
                                    marginTop: "-0.3rem",
                                    marginBottom: "0rem",
                                  }}
                                >
                                  <img src={Mobile} />
                                </Form.Label>
                              </Form.Group>
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
                            <Card.Body style={{ marginBottom: "-1.3rem" }}>
                              <label>What is their email address?</label>
                              <Form.Group
                                as={Row}
                                className="mb-3"
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "5pt",
                                }}
                              >
                                <Col xs="10" md="11">
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter patient’s email"
                                    style={{ color: "#ADAAA7" }}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChangen}
                                  // onChange={(e) => setpEmail(e.target.value)}
                                  />
                                </Col>
                                <Form.Label
                                  column
                                  xs="2"
                                  md="1"
                                  style={{
                                    marginTop: "-.3rem",
                                    marginBottom: "0rem",
                                  }}
                                >
                                  <img src={eMail} />
                                </Form.Label>
                              </Form.Group>
                            </Card.Body>
                          </Card>

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
                              onClick={nextStep}
                              type="submit"
                            >
                              Continue and Save Details
                            </Button>
                          </div>

                          {/* <button type="button" onClick={nextStep}>Continue</button> */}
                        </>
                      )}
                      {currentStep === 2 && (
                        <>
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
                              <label>What is their Date of Birth</label>
                              <Form.Control
                                className="name-input"
                                type="date"
                                placeholder="Enter patient’s date of birth"
                                name="age"
                                value={formData.age}
                                onChange={handleChangen}
                                // onChange={(e) => setpAge(e.target.value)}
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "5pt",
                                  color: "#ADAAA7",
                                  // border: "0px solid white",
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
                              <label id="sex">What is their sex</label>

                              <div
                                className="container"
                                style={{ marginTop: "5pt", marginBotto: "0pt" }}
                              >
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
                                        margin: "0rem",
                                      }}
                                    >
                                      <ButtonGroup>
                                        {list1.map((lone, idx) => (
                                          // <div className="card-g">
                                          <ToggleButton
                                            key={idx}
                                            id={`lone-${idx}`}
                                            type="radio"
                                            variant="outline-primary"
                                            name={`lone-${idx}`}
                                            value={lone.value}
                                            checked={listOne === lone.value}
                                            // onChange={(e) => changeImage(lone, idx)}
                                            onChange={handleChangen}
                                            style={{
                                              borderTop: "6px solid #1D5A90",
                                              borderRadius: "10pt",
                                              boxShadow:
                                                "0 18px 40px -12px rgba(0,0,0,0.3)",
                                              marginRight: "1rem",

                                              borderLeft: "0px solid #fff",
                                              borderRight: "0px solid #fff",
                                              borderBottom: "0px solid #fff",
                                              // width: "90px",
                                              // height: "90px",
                                            }}
                                            className="card-g"
                                          >
                                            <img src={lone.icon} />

                                            <br />
                                            <span>{lone.name}</span>
                                          </ToggleButton>
                                          // </div>
                                        ))}
                                      </ButtonGroup>
                                    </Grid>
                                  </Box>
                                </div>
                              </div>
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
                            <Card.Body style={{ marginBottom: "-1.3rem" }}>
                              <label>What is their address</label>
                              <Form.Group
                                as={Row}
                                className="mb-3"
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "5pt",
                                }}
                              >
                                <Col xs="10" md="11">
                                  <Form.Control
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChangen}
                                    // onChange={(e) => setpAddress(e.target.value)}
                                    style={{ color: "#ADAAA7" }}
                                  />
                                </Col>
                                <Form.Label
                                  column
                                  xs="2"
                                  md="1"
                                  style={{
                                    marginTop: "-.3rem",
                                    marginBottom: "0rem",
                                  }}
                                >
                                  <img src={LAdrs} />
                                </Form.Label>
                              </Form.Group>
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
                            <Card.Body style={{ marginBottom: "-1rem" }}>
                              <label>What is their Ethnicity</label>
                              <>
                                <Form.Group as={Row} className="mb-3">
                                  <Col xs="10" md="11">
                                    {ethnicity === "" ? (
                                      <select
                                        className="form-control"
                                        id="ethnicity"
                                        style={{
                                          color: "#ADAAA7",
                                          borderRadius: "10px",
                                          marginTop: "5pt",
                                        }}
                                        name="ethnicity"
                                        onChange={handleChangen}
                                        // onChange={(e) =>
                                        //   setpEthnicity(e.target.value)
                                        // }
                                      >
                                        <option value="">Select any one</option>
                                        <option value="Indian">Indian</option>
                                        <option value="Non-Indian">
                                          Non-Indian
                                        </option>
                                      </select>
                                    ) : (
                                      <Form.Control
                                        className="email-input"
                                        type="text"
                                        //  placeholder="Number of pegs per day. Please enter “0” if they do not drink."
                                        name="ethnicity"
                                        value={formData.ethnicity}
                                        onChange={handleChangen}
                                        // onChange={(e) =>
                                        //   setpEthnicity(e.target.value)
                                        // }
                                        style={{
                                          marginBottom: "0pt",
                                          marginTop: "5pt",
                                          // border: "0px solid white",
                                          color: "#ADAAA7",
                                        }}
                                      ></Form.Control>
                                    )}
                                  </Col>
                                  <Form.Label
                                    column
                                    xs="2"
                                    md="1"
                                    style={{
                                      marginTop: "-0.1rem",
                                      marginBottom: "0rem",
                                      marginLeft: "-0.6rem",
                                    }}
                                  >
                                    <img src={Ethnicity} />
                                  </Form.Label>
                                </Form.Group>
                              </>
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
                            <Card.Body style={{ marginBottom: "-1.3rem" }}>
                              <label>What is / was their Occupation?</label>
                              <Form.Group
                                as={Row}
                                className="mb-3"
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "5pt",
                                }}
                              >
                                <Col xs="10" md="11">
                                  <Form.Control
                                    type="text"
                                    placeholder="What work did they do for a living?"
                                    name="occupation"
                                    value={formData.occupation}
                                    onChange={handleChangen}
                                    // onChange={(e) => setpOccupation(e.target.value)}
                                    style={{ color: "#ADAAA7" }}
                                  />
                                </Col>
                                <Form.Label
                                  column
                                  xs="2"
                                  md="1"
                                  style={{
                                    marginTop: "-.3rem",
                                    marginBottom: "0rem",
                                    // marginLeft: "-0.2rem",
                                  }}
                                >
                                  <img src={Occupation} />
                                </Form.Label>
                              </Form.Group>
                            </Card.Body>
                          </Card>
                          <Divider style={{ margin: "4pt" }} />


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
                              onClick={nextStep}
                            >
                              Update details
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
                              onClick={onSkipNow}
                            >
                              Skip for now
                            </Button>
                          </div>
                          {/* <button type="button" onClick={prevStep}>Back</button>
                          <button type="button" onClick={nextStep}>Continue</button> */}
                        </>
                      )}

                      {currentStep === 3 && (
                        <>
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
                            <Card.Body style={{ marginBottom: "-1.3rem" }}>
                              <label>What is their Height</label>
                              <Form.Group
                                as={Row}
                                className="mb-3"
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "5pt",
                                }}
                              >
                                <Col xs="10" md="11">
                                  <Form.Control
                                    type="number"
                                    placeholder="Enter in CM"
                                    name="height"
                                    value={formData.height}
                                    onChange={handleChangen}
                                    // onChange={(e) => setpHeight(e.target.value)}
                                    style={{ color: "#ADAAA7" }}
                                    min="0"
                                  />
                                </Col>
                                <Form.Label
                                  column
                                  xs="2"
                                  md="1"
                                  style={{
                                    marginTop: "-.3rem",
                                    marginBottom: "0rem",
                                    // marginLeft: "-0.6rem",
                                  }}
                                >
                                  <img src={Height} />
                                </Form.Label>
                              </Form.Group>
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
                            <Card.Body style={{ marginBottom: "-1.3rem" }}>
                              <label>What is their Weight</label>
                              <Form.Group
                                as={Row}
                                className="mb-3"
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "5pt",
                                }}
                              >
                                <Col xs="10" md="11">
                                  <Form.Control
                                    type="number"
                                    placeholder="Enter patient’s weight in KG"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChangen}
                                    // onChange={(e) => setpWeight(e.target.value)}
                                    style={{ color: "#ADAAA7" }}
                                    min="0"
                                  />
                                </Col>
                                <Form.Label
                                  column
                                  xs="2"
                                  md="1"
                                  style={{
                                    marginTop: "-.3rem",
                                    marginBottom: "0rem",
                                    marginLeft: "-0.8rem",
                                  }}
                                >
                                  <img src={Weight} />
                                </Form.Label>
                              </Form.Group>
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
                            <Card.Body style={{ marginBottom: "-1rem" }}>
                              <label>What is their Blood Group</label>
                              <br />
                              <>
                                <Form.Group as={Row} className="mb-3">
                                  <Col xs="10" md="11">
                                    {bloodgroup === "" ? (
                                      <select
                                        className="form-control"
                                        id="bloodgroup"
                                        style={{
                                          color: "#ADAAA7",
                                          borderRadius: "10px",
                                        }}
                                        name="bloodgroup"
                                        onChange={handleChangen}
                                        // onChange={(e) =>
                                        //   setpBloodgroup(e.target.value)
                                        // }
                                      >
                                        <option value="">Select any one</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="Other">Other</option>
                                      </select>
                                    ) : (
                                      <Form.Control
                                        className="name-input"
                                        type="text"
                                        placeholder=""
                                        name="bloodgroup"
                                        value={formData.bloodgroup}
                                        onChange={handleChangen}
                                        // onChange={(e) =>
                                        //   setpBloodgroup(e.target.value)
                                        // }
                                        style={{
                                          marginBottom: "0pt",
                                          marginTop: "5pt",
                                          // border: "0px solid white",
                                          color: "#ADAAA7",
                                        }}
                                      ></Form.Control>
                                    )}
                                  </Col>
                                  <Form.Label
                                    column
                                    xs="2"
                                    md="1"
                                    style={{
                                      marginTop: "-0.5rem",
                                      marginBottom: "0rem",
                                      marginLeft: "-0.5rem",
                                    }}
                                  >
                                    <img src={BloodGroup} />
                                  </Form.Label>
                                </Form.Group>
                              </>
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
                            <Card.Body style={{ marginBottom: "-1.3rem" }}>
                              <label>How many hours do they sleep daily?</label>
                              <Form.Group
                                as={Row}
                                className="mb-3"
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "5pt",
                                }}
                              >
                                <Col xs="10" md="11">
                                  <Form.Control
                                    type="number"
                                    placeholder="Average number of hours sleep per night"
                                    style={{ color: "#ADAAA7" }}
                                    name="dailySleep"
                                    value={formData.dailySleep}
                                    onChange={handleChangen}
                                    // onChange={(e) => setpDailySleep(e.target.value)}
                                    min="0"
                                  />
                                </Col>
                                <Form.Label
                                  column
                                  xs="2"
                                  md="1"
                                  style={{
                                    marginTop: "-.3rem",
                                    marginBottom: "0rem",
                                    marginLeft: "-0.5rem",
                                  }}
                                >
                                  <img src={Sleep} />
                                </Form.Label>
                              </Form.Group>
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
                            <Card.Body style={{ marginBottom: "-1.3rem" }}>
                              <label>
                                How many hours in a week do they walk/ run /cycle ?
                              </label>
                              <Form.Group
                                as={Row}
                                className="mb-3"
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "5pt",
                                }}
                              >
                                <Col xs="10" md="11">
                                  <Form.Control
                                    type="number"
                                    placeholder="Hours"
                                    name="minutes"
                                    value={formData.minutes}
                                    onChange={handleChangen}
                                    // onChange={(e) => setpMinutes(e.target.value)}
                                    style={{ color: "#ADAAA7" }}
                                    min="0"
                                  />
                                </Col>
                                <Form.Label
                                  column
                                  xs="2"
                                  md="1"
                                  style={{
                                    marginTop: "-.3rem",
                                    marginBottom: "0rem",
                                    // marginLeft: "-0.5rem",
                                  }}
                                >
                                  <img src={Walk} />
                                </Form.Label>
                              </Form.Group>
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
                            <Card.Body style={{ marginBottom: "-1.3rem" }}>
                              <label>
                                How many cigarettes do they smoke in a day ?
                              </label>
                              <Form.Group
                                as={Row}
                                className="mb-3"
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "5pt",
                                }}
                              >
                                <Col xs="10" md="11">
                                  <Form.Control
                                    type="number"
                                    placeholder="Number of cigarettes. “0” if they do not smoke"
                                    style={{ color: "#ADAAA7" }}
                                    name="cigcount"
                                    value={formData.cigcount}
                                    onChange={handleChangen}
                                    // onChange={(e) => setpCigcount(e.target.value)}
                                    min="0"
                                  />
                                </Col>
                                <Form.Label
                                  column
                                  xs="2"
                                  md="1"
                                  style={{
                                    marginTop: "-.3rem",
                                    marginBottom: "0rem",
                                    marginLeft: "-0.5rem",
                                  }}
                                >
                                  <img src={Cigarettes} />
                                </Form.Label>
                              </Form.Group>
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
                              <label>Since what year have you been smoking?</label>
                              <Form.Control
                                className="email-input"
                                type="text"
                                placeholder="Enter Year"
                                name="noofcigarettes"
                                value={formData.noofcigarettes}
                                onChange={handleChangen}
                                // onChange={(e) => setpCigarettes(e.target.value)}
                                style={{
                                  marginBottom: "0pt",
                                  marginTop: "5pt",
                                  // border: "0px solid white",
                                  color: "#ADAAA7",
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
                            <Card.Body style={{ marginBottom: "-1.3rem" }}>
                              <label>How many drinks do they have in a week?</label>
                              <>
                                <Form.Group
                                  as={Row}
                                  className="mb-3"
                                  style={{
                                    marginBottom: "0pt",
                                    marginTop: "5pt",
                                  }}
                                >
                                  <Col xs="10" md="11">
                                    {drinking === "" ? (
                                      <select
                                        className="form-control"
                                        id="drinking"
                                        style={{
                                          color: "#ADAAA7",
                                          borderRadius: "10px",
                                          marginTop: "5pt",
                                          marginBottom: "0pt",
                                        }}
                                        name="drinking"
                                        onChange={handleChangen}
                                        // onChange={(e) =>
                                        //   setpDrinking(e.target.value)
                                        // }
                                      >
                                        <option value="">Select any one</option>
                                        <option value="Never">Never</option>
                                        <option value="Occasionally">
                                          Occasionally
                                        </option>
                                        <option value="1-3 times in a week">
                                          1-3 times in a week
                                        </option>
                                        <option value="4-7 times a week">
                                          4-7 times a week
                                        </option>
                                      </select>
                                    ) : (
                                      <Form.Control
                                        className="email-input"
                                        type="text"
                                        placeholder=""
                                        name="drinking"
                                        value={formData.drinking}
                                        onChange={handleChangen}
                                        // onChange={(e) =>
                                        //   setpDrinking(e.target.value)
                                        // }
                                        style={{
                                          marginBottom: "0pt",
                                          marginTop: "5pt",
                                          // border: "0px solid white",
                                          color: "#ADAAA7",
                                        }}
                                      ></Form.Control>
                                    )}
                                  </Col>
                                  <Form.Label
                                    column
                                    xs="2"
                                    md="1"
                                    style={{
                                      marginTop: "0.2rem",
                                      marginBottom: "0rem",
                                      marginLeft: "-0.5rem",
                                    }}
                                  >
                                    <img src={Drinks} />
                                  </Form.Label>
                                </Form.Group>
                              </>
                            </Card.Body>
                          </Card>

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
                              type="submit"
                              // onClick={onSubmit}
                            >
                              Update details
                            </Button>
                          </div>
                        </>
                      )}
                      <Divider style={{ margin: "4pt" }} />
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Card.Body>
            {/* <>
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
            </> */}
            <div style={{ height: "5vh" }}></div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default PatientPersonalDetailsForm;
