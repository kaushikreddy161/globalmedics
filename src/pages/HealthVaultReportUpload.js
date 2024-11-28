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
  const { user, pId, pName, adbuser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  // console.log('location:',location.state.id);

  // const [selectDate, setsDate] = useState("");
  // const [selectTest, setsTest] = useState("");
  // const [selectReport, setsReport] = useState("");
  // const [file, setFile] = useState(null);
  // const [fileName, setFileName] = useState(null);
  // const [status, setStatus] = useState("0");
  // const datex = new Date();
  // const [lovedones, setlovedOnes] = useState([]);
  // const [selLid, setSelLId] = useState("");
  const [patientName, setpName] = useState("");


  // New Code

  const [reportsCategories, setReportsCategories] = useState("");
  const [reportsSubCategories, setReportsSubCategories] = useState("");
  const [reportsDate, setReportsDate] = useState("");
  const [reportsFile, setReportsFile] = useState(null);
  const [reportsType, setReportsType] = useState("");
  const [reportsSubCategoriesOptions, setReportsSubCategoriesOptions] = useState([]);

  const categories = {
    "Pathology Reports": ["Blood", "Urine", "Stool", "Sputum", "Others"],
    "Radiology Reports": ["X-ray", "UltraSound", "CT", "MRI", "PET", "SPECT", "Others"],
    "Other Reports": ["ECG", "Echo", "TMT", "Angiography", "Audiometry", "PFT", "Others"],
  };

  useEffect(() => {
    if (reportsCategories) {
      setReportsSubCategoriesOptions(categories[reportsCategories]);
      console.log("Reports Categories:", reportsCategories);
      console.log("Reports Sub Categories Options:", categories[reportsCategories]);
    } else {
      setReportsSubCategoriesOptions([]);
    }
  }, [reportsCategories]);

  const handleRptSubCatChange = (e) => {
    setReportsSubCategories(e.target.value);
    console.log("Sub Categories Report:", e.target.value);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      // Convert file to Blob
      const blob = new Blob([file], { type: file.type });
      // Create a URL from the Blob
      const url = URL.createObjectURL(blob);
      // Store the URL in state to display or use later
      const type = file.name.split('.').pop();
      setReportsFile(url);
      setReportsType(file.type);
      console.log('File type:', file.type);
    }
  };






  const onSubmit = async (event) => {
    event.preventDefault();
    if (user) {
      let dt = new Date();
      let id = new BSON.ObjectID();
      let cid = adbuser;
      const createx = user.functions.createHealthVaultReport(
        id,
        reportsCategories,
        reportsSubCategories,
        reportsDate,
        reportsFile,
        reportsType,
        dt.toDateString(),
        "GlobalMedics2021",
      );
      createx.then((resp) => {
        alert("Health Vault Details Updated Successfully");
        navigate(`/healthInsurance`);
      });
    } else {
      navigate(`/healthInsurance`);
    }
  };


  // const fileToBase64 = (file, cb) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function () {
  //     cb(null, reader.result);
  //   };
  //   reader.onerror = function (error) {
  //     cb(error, null);
  //   };
  // };

  // const onUploadFileChange = ({ target }) => {
  //   if (target.files < 1 || !target.validity.valid) {
  //     return;
  //   }
  //   fileToBase64(target.files[0], (err, result) => {
  //     if (result) {
  //       setFile(result);
  //       setFileName(target.files[0]);
  //       setStatus("1");
  //     }
  //   });
  // };
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
        <div style={{ height: "1rem" }}></div>
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
                            <select className="form-control"
                              style={{ color: "#707070", borderRadius: "5px" }}
                              value={reportsCategories} onChange={(e) => setReportsCategories(e.target.value)} required>
                              <option value="">-- Report Type --</option>
                              <option value="Pathology Reports">Pathology Reports</option>
                              <option value="Radiology Reports">Radiology Reports</option>
                              <option value="Other Reports">Other Reports</option>
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
                            // type="datetime-local"
                            placeholder="Select date of test as mentioned in the report"
                            // onChange={handleRptDateChange}
                            type="date"
                            name="reportsDate"
                            value={reportsDate}
                            onChange={(e) => setReportsDate(e.target.value)}
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
                            <select className="form-control"
                              style={{ color: "#707070", borderRadius: "5px" }}
                              value={reportsSubCategories} onChange={handleRptSubCatChange} required>
                              <option value="">-- Report Name --</option>
                              {reportsSubCategoriesOptions.map(option => (
                                <option key={option} value={option}>{option}</option>
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
                            class="form-control"
                            type="file"
                            name="reportsFile"
                            // value={reportsFile}
                            // onChange={(e) => setReportsFile(e.target.files[0])} required
                            onChange={handleFileUpload}
                          />

                          {/* <a href={reportsFile} target="_blank" rel="noopener noreferrer">
                            {reportsFile}
                          </a> */}

                   

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
                type="submit"
                onClick={onSubmit}
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
