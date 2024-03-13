import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user.context";

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

// const list1 = [
//   { name: "Male", icon: Male, icon1: MaleS, value: "1" },
//   { name: "Female", icon: Female, icon1: FemaleS, value: "2" },
//   { name: "Others", icon: Others, icon1: OthersS, value: "3" },
// ];

const HealthInsurance = () => {
  const [listOne, setListOne] = useState();
  // const [changeColor, setChangeColor] = useState(0);
  // const [female, setFemale] = useState(Female);
  // const [male, setMale] = useState(Male);
  //  const [others, setOthers] = useState(Others);
  const [list1, setList1] = useState([
    { name: "Male", icon: Male, value: "1" },
    { name: "Female", icon: Female, value: "2" },
    { name: "Others", icon: Others, value: "3" },
  ]);
  const { user, pId, pName } = useContext(UserContext);
  const location = useLocation();

  const navigate = useNavigate();

  const [selectDate, setsDate] = useState("");
    const [address, setpAddress] = useState("");
  const [height, setpHeight] = useState("");
  const [weight, setpWeight] = useState("");
  const [ethnicity, setpEthnicity] = useState("");

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [status, setStatus] = useState("0");

  const onBack = () => {
    const path = `/addLovedOnes`;
    navigate(path);
  };

  const onSkipNow = () => {
    const path = `/patientPersonalDetailsForm_3`;
    navigate(path);
  };

  // useEffect(() => {
  //   loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  //   setXid(pId);
  // }, [pId]);

  const loadUser = async () => {
    //   console.log('user:',user.id);
    //   console.log('location:',location.state.lid);
    if (user) {
      let ccid = BSON.ObjectID(user.id).toString();
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

            // setStatus("1");
            // setpNumber(resp[0].phone);
            // setpEmail(decryptData(resp[0].email));
            // setpName(resp[0].pfullnamee);
            // setrName(resp[0].displayName);
            // setSelLId(resp[0]._id.toString());
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
    // setpNumber("");
    // setpEmail("");
    // setpName("");
    // setrName("");
    setpAddress("");
    // setpAge("");
    // setpBloodgroup("");
    // setpDrinking("");
    // setpCigarettes("");
    setpHeight("");
    // setpMinutes("");
    // setpNoofpegs("");
    // setpOccupation("");
    setpWeight("");
    // setGender("");
    // setpCalling("");
    // setpDailySleep("");
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
        // setStatus("1");
        // setpNumber(decryptData(respy.phoneNumber));
        // setpEmail(decryptData(respy.email));
        // setpName(respy.patientName);
        setpAddress(decryptData(respy.address));
        // setpAge(respy.age);
        // setpBloodgroup(respy.bloodGroup);
        // setpDrinking(respy.hmdrinks);
        // setpCigarettes(respy.smokingYear);
        setpHeight(respy.height);
        // setpMinutes(respy.hmhoursWRC);
        // setpCigcount(respy.hmcigrattes);
        // setpNoofpegs(respy.hmdrinks);
        // setpOccupation(respy.occupation);
        setpWeight(respy.weight);
        // setGender(respy.gender);
        // setpCalling(respy.nickName);
        // setpDailySleep(respy.hrsSleepday);
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
          // setStatus("0");
          // setpNumber(respz[0].phone);
          // setpEmail(decryptData(respz[0].email));
          // setpName(pfullname);
          // setrName(respz[0].displayName);
          // setSelLId(respz[0]._id.toString());
        });
        setpEthnicity("");
        setpAddress("");
        // setpAge("");
        // setpBloodgroup("");
        // setpDrinking("");
        // setpCigarettes("");
        setpHeight("");
        // setpMinutes("");
        // setpCigcount("");
        // setpNoofpegs("");
        // setpOccupation("");
        setpWeight("");
        // setGender("");
        // setpCalling("");
        // setpDailySleep("");
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
    //   // console.log("statius:", status);
    //   try {
        if (user) {
          //  console.log('auth:',user.id);
          let dt = new Date();
          let id = new BSON.ObjectID();
          let cid = BSON.ObjectID(user.id).toString();
          // let pid = selLid;
         //   console.log("gender:", list1);
         // console.log("ethincity:", ethnicity);
          const createx = user.functions.createPatientDetailData(
            id,
            // patientName,
            // cypherData(phoneNumber),
            cypherData(address),
            // age,
            // bloodgroup,
            // cypherData(email),
            // dt.toDateString(),
            // "GlobalMedics2021",
            weight,
            height,
            // occupation,
            // gender,
            ethnicity,
            // cigcount,
            // drinking,
            // minutes,
            // cid,
            // pid,
            // dailySleep,
            // calling,
            // noofcigarettes
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
      // catch (error) {
      //   //  alert(error);
      //   console.log("error:", error);
      // }
    // }
  }
  ;

  // const handleChange = (e) => {
  //   setOption(options[+e.target.value]);
  // };

  const fileToBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.onerror = function (error) {
      cb(error, null);
    };
  };
  
  const onUploadFileChange = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return;
    }
    fileToBase64(target.files[0], (err, result) => {
      if (result) {
        setFile(result);
        setFileName(target.files[0]);
        setStatus("1");
      }
    });
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
          title="Health Insurance"
          title2="Please select type of medical reports for papa"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="rhi"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-p">
          <Card
            itemType=""
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              borderTop: "6px solid #1D5A90",
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
                    Health Insurance details
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
                          <label>Insurance Provider<span style={{ color: "red" }}>*</span></label>
                          <>
                          <select
                                className="form-control"
                                id="selectType"
                                style={{
                                  color: "#707070",
                                  borderRadius: "5px",
                                }}
                                name="selectType"
                                // onChange={(e) => setsTest(e.target.value)}
                              >
                                <option value="">Name of your Health Insurance Company</option>
                                <option value="Blood">Cigna Global</option>
                                <option value="Urine">GeoBlue Xplorer</option>
                                <option value="Stool">William Russell</option>
                                <option value="Sputum">Allianz International Medical Insurance</option>
                                <option value="Others">	Aditya Birla Health Insurance</option>
                              </select>
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
                        <Card.Body>
                          <label>Current Insurance policy valid till</label>
                          <Form.Control
                            className="name-input"
                            type="date"
                            // type="datetime-local"
                            placeholder="Select date of test as mentioned in the report"
                            name="selectTime"
                            onChange={(e) => setsDate(e.target.value)}
                            style={{
                              // marginBottom: "25pt",
                              color: "#707070",
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
                          <label>Upload Policy document</label>
                          <input
                            type="file"
                            name="filetobase64"
                            onChange={onUploadFileChange}
                            class="form-control"
                          />
                        </Card.Body>
                      </Card>
                      
                    </Form.Group>
                  </Form>
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
                Confirm
              </Button>
            </div>
            <div style={{ height: "5vh" }}></div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default HealthInsurance;
