import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user.context";

import { Card } from "react-bootstrap";

import { alert } from "react-bootstrap-confirmation";
import VitalsPulseRate from "../assets/vitals-pulse-rate.png";
import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { BSON } from "realm-web";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import IconHealthReports from "../assets/icon-pReports.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { loadLanguages } from "i18next";
import IconPatientImage from "../assets/icon-patient-photo.png";
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";

const HealthVaultReportUpload = () => {
  const { user,pId, pName, adbuser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  // console.log('location:',location.state.id);

  const [selectDate, setsDate] = useState("");
  const [selectTest, setsTest] = useState("");
  const [selectReport, setsReport] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [status, setStatus] = useState("0");
  const datex = new Date();
  const [lovedones, setlovedOnes] = useState([]);
  const [selLid, setSelLId] = useState("");
  const [patientName, setpName] = useState("");


  const reports = [{
    type:'Pathology Reports',
    stype:[
    {name:"Blood"},
    {name:"Urine"},
    {name:"Stool"},
    {name:"Sputum"},
    {name:"Others"},
    ]},
    {
    type:'Radiology Reports',
    stype:[
    {name:"X-ray"},
    {name:"UltraSound"},
    {name:"CT"},
    {name:"MRI"},
    {name:"PET"},
    {name:"SPECT"},
    {name:"Others"},
    ]},
    {
    type:'Other Reports',
    stype:[
    {name:"ECG"},
    {name:"Echo"},
    {name:"TMT"},
    {name:"Angiography"},
    {name:"Audiometry"},
    {name:"PFT"},
    {name:"Others"},
    ]}
    ]

    const [report, setReport] = useState();
    const [desease, setDesease] = useState([])
  
    function handleReport(event) {
    setReport(event.target.value)
    setDesease(reports.find(des => des.type === event.target.value).stype);
    }
  


  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pId]);

  const loadUser = async () => {
    //   console.log('user:',user.id);
    //   console.log('location:',location.state.lid);
    if (user) {
      //let ccid = BSON.ObjectID(user.id).toString();
      let ccid ="";
   if (pId === null || pId === "") {
     ccid = adbuser;
   } else {
     ccid = pId;
   } 
    //  const lovd = user.functions.getLovedOneCP(ccid); // one loved one based on care manager idx
      const lovd = user.functions.getLovedOneP(ccid);
      // console.log('else direct:',ccid);
      lovd.then((resp) => {
        if (resp) {
          setStatus("1");
          setpName(resp[0].displayName);
          setSelLId(resp[0]._id.toString());
          setlovedOnes(resp);
        } else {
          alert("Loved Ones ID not loaded..");
        }
      });
    }
  };

  // const loadUser = async () => {
  //   //   console.log('user:',user.id);
  //       if (user) {
  //        let cid = BSON.ObjectID(user.id).toString();
  //        const carem = user.functions.getLovedOnes(cid);
  //       // console.log('carem:',carem);
  //        carem.then((resp) => {
  //             setlovedOnes(resp);
  //          });
  //      }
  //    };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (selectDate === "" || selLid === "") {
      alert("Loved Ones and Report Test Date should not be empty");
    } else {
      if (status === "1") {
        try {
          if (user) {
            //  console.log('auth:',user.id);
            let dt = new Date();
            //   console.log("date:", dt.toDateString());
            let id = new BSON.ObjectID();
            let cid = BSON.ObjectID(adbuser).toString();
          //  let pid = selLid;
            let pid = pId;
            // console.log('pid:', pid);

            const createx = user.functions.uploadnewMedicalReport(
              id,
              pid,
              selectDate,
              selectTest,
              cypherData(file),
              dt.toDateString(),
              "active",
              cid,
              "careManager",
              "GlobalMedics2021"
            );
            createx.then((resp) => {
              //  console.log("resp:", resp);
              alert("Report Uploaded Successfully");
              navigate(`/healthReports`);
            });
          }
        } catch (error) {
          //  alert(error);
          console.log("error:", error);
        }
        // alert('Report Uploaded Successfully');
      } else {
        alert("Report Uploading Failed");
        const path = `/healthReports`;
        navigate(path);
      }
    }
  };

  const onBack = () => {
    const path = `/healthReports`;
    navigate(path);
  };

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
          title="Health Vault"
          title2="Please select type of medical reports"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="hrr"
        />
        <div style={{height:"1rem"}}></div>
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-hr">
          <Card
            itemType=""
            style={{
              marginTop: "0pt",
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
                            Select Your Loved Ones
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          {/* <select
                              className="form-control"
                              id="relationName"
                              style={{ color: "#707070", borderRadius: "50px" }}
                              name="relationName"
                              onChange= {(e)=> setSelLId(e.target.value)}
                              >
                        <option value="">Select Your Loved Ones</option>       
                        {lovedones.map((option, index) => (
                            <option key={index} value={option._id} >
                              {option.displayName}
                            </option>
                          ))}
                        
                        </select>      */}
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
                              color: "#707070",
                              border: "0px solid white",
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
                          <label>Select Report Type</label>
                          <>
                          <select className="form-control" style={{
                                  color: "#707070",
                                  borderRadius: "5px",
                                }}
                                onChange={handleReport}>
                              <option>-- Report Type --</option>
                              {reports.map(des => (
                                <option value={des.type}>{des.type}</option>
                              ))}
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
                          <label>
                            Select date of test as mentioned in the report
                            <span style={{ color: "red" }}>*</span>
                          </label>
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
                          padding: "2opt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Select type of test</label>
                          <>
                            <select className="form-control" style={{
                              color: "#707070",
                              borderRadius: "5px",
                            }}>
                              <option>-- Report Name --</option>
                              {desease.map(sdes => (
                                <option value={sdes.name}>{sdes.name}</option>
                              ))}
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
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Select report from your device</label>
                          <input
                            type="file"
                            name="filetobase64"
                            onChange={onUploadFileChange}
                            class="form-control"
                          />
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
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
                Upload
              </Button>
            </div>
            <div style={{ height: "5vh" }} />
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default HealthVaultReportUpload;
