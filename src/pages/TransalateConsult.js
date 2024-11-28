import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user.context";

import { Card } from "react-bootstrap";

import { alert } from "react-bootstrap-confirmation";
import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { BSON } from "realm-web";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import UserIcon from "../assets/icon-care-taker.png";
import RpsIcon from "../assets/icon-Health-Vaulth-Welcome.png";


const TransalateConsult = () => {
  const { user, pId, pName, adbuser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  // New Code

  const [patientName, setpName] = useState('');
  const [pSex, setpSex] = useState("");
  const [pNum, setpNum] = useState('');
  const [pNotes, setpNotes] = useState('');
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


  //   const file = event.target.files[0]; // Get the selected file
  // if (file) {
  //   // Convert file to Blob
  //   const blob = new Blob([file], { type: file.type });
  //   // Create a URL from the Blob
  //   const url = URL.createObjectURL(blob);
  //   // Store the URL in state to display or use later
  //   const type = file.name.split('.').pop();
  //   setReportsFile(url);
  //   setReportsType(file.type);
  //   console.log('File type:', file.type);
  // }


  const onSubmit = async (event) => {
    event.preventDefault();
    if (!patientName || !pNum || !reportsFile) {
      alert("Fill in mandatory fields: Patient Name, Patient Id and Patient Reports");
      return;
    }
    if (user) {
      try {
        let dt = new Date();
        let id = new BSON.ObjectID();
        let cid = adbuser;
        const createx = await user.functions.createHealthVaultReport(
          id,
          patientName,
          pNum,
          reportsFile,
          reportsType,
          pNotes,
          dt.toDateString(),
          "GlobalMedics2021",
        );

        createx.then((resp) => {
          alert("Health Vault Details Updated Successfully");

          setpName('');
          setpNum('');
          setReportsFile(null);
          setpNotes('');

          navigate(`/healthVaultReportUpload`);
        });


        alert("Health Vault Details Updated Successfully");
      } catch (error) {
        console.error("Error updating Health Vault details:", error);
        alert("Failed to update Health Vault details. Please try again.");
      }
    }
  };



  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   if (!patientName || !pNum || !reportsFile) {
  //     alert("Fill in mandatory fields: Patient Name, Patient Id and Patient Reports");
  //     return;
  //   }
  //   if (user) {
  //     let dt = new Date();
  //     let id = new BSON.ObjectID();
  //     let cid = adbuser;
  //     const createx = user.functions.createHealthVaultReport(
  //       id,
  //       patientName,
  //       pNum,
  //       reportsFile,
  //       reportsType,
  //       pNotes,
  //       dt.toDateString(),
  //       "GlobalMedics2021",
  //     );
  //     createx.then((resp) => {
  //       alert("Health Vault Details Updated Successfully");

  //             setpName('');
  //             setpNum('');
  //             setReportsFile(null);
  //             setpNotes('');

  //       navigate(`/healthVaultReportUpload`);
  //     });
  //   } else {
  //     alert("Failed to update Health Vault details")
  //     // navigate(`/healthVaultReportUpload`);
  //   }
  // };


  // const onSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!patientName || !pNum || !reportsFile) {
  //     alert("Fill in mandatory fields: Patient Name, Patient Id and Patient Reports");
  //     return;
  //   }

  //   if (user) {
  //     let dt = new Date();
  //     let id = new BSON.ObjectID();
  //     let cid = adbuser;
  //     const createx = user.functions.createCardionHealthVaultReport(
  //       id,
  //       patientName,
  //       pNum,
  //       reportsFile,
  //       reportsType,
  //       pNotes,
  //       dt.toDateString(),
  //       "GlobalMedics2021",
  //     );
  //     createx.then((resp) => {
  //       alert("Health Vault Details Updated Successfully");

  //       setpName('');
  //       setpNum('');
  //       setReportsFile(null);
  //       setpNotes('');

  //       navigate(`/healthVaultReportUpload`);
  //     });
  //   } else {
  //     navigate(`/healthInsurance`);
  //   }
  // };

  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }} className="card-rts">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >


        <div className="form-rpt">
          <Card
            itemType=""
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              background: "#F2F8F1",
              borderRadius: "15pt",
              maxWidth: "500px",
              minHeight: "150px",
              color: "#707070",
            }}
          >
            <Card.Body>
              <h1 className="title-rpt-scn">Transalate Consult</h1>
              <div className="row">
                <div className="col-3"><img src={UserIcon} className="img-responsive" /></div>
                <div className="col-6 text-center">
                  Use the microphone in your mobile device to transcribe and translate conversation
                </div>
                <div className="col-3 text-end"><img src={RpsIcon} className="img-responsive" /></div>
              </div>
              <div className="row">
                <div className="col-3 text-center">Dr. Doctor</div>
                <div className="col-6 text-center"></div>
                <div className="col-3 text-end"></div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <Form
          // className="signup-form"
          // style={{ color: "#209F85" }}
          onSubmit={onSubmit}
        >
          <div className="form-rpt">

            <Card
              itemType=""
              style={{
                marginTop: "0pt",
                marginBottom: "10pt",
                borderTop: "8px solid #1D5A90",
                borderRadius: "15pt",
                maxWidth: "500px",
              }}
            >
              <Card.Body>
                <div className="container">
                  <div className="form-container">
                    <p class="tnsl-heading">Select Patient</p>
                    <div className="row align-items-center">
                      <div className="col-4">
                        <label className="form-label">Name</label>
                      </div>
                      <div className="col-8">

                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fas fa-search"></i>
                          </span>
                          <input type="text" className="form-control" placeholder="Search..." />
                        </div>

                        {/* <input type="text" className="form-control" id="inputField"
                          placeholder="Enter patient’s name"
                          name="patientName"
                          value={patientName}
                          onChange={(e) => setpName(e.target.value)} /> */}
                      </div>
                    </div>


                    <div className="row align-items-center mt-2">
                      <div className="col-4">
                        <label className="form-label">Patient ID</label>
                      </div>
                      <div className="col-8">
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fas fa-search"></i>
                          </span>
                          <input type="text" className="form-control" placeholder="Search..." />
                        </div>
                        {/* <input type="text" className="form-control" id="inputField"
                          placeholder="Enter patient ID"
                          name="patientNumber"
                          value={pNum}
                          onChange={(e) => setpNum(e.target.value)}
                        /> */}
                      </div>
                    </div>

                    <div className="row align-items-center mt-2">
                      <div className="col-4">
                        {/* <label className="form-label">Patient ID<span className="red">*</span></label> */}

                      </div>
                      <div className="col-8" style={{ textAlign: "right" }}>
                        Age/Sex/Location
                      </div>
                    </div>

                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="form-rpt">
            <Card
              itemType=""
              style={{
                marginTop: "0pt",
                marginBottom: "0pt",
                borderTop: "8px solid #1D5A90",
                borderRadius: "15pt",
                maxWidth: "500px",
              }}
            >
              <Card.Body>
                <div className="container">
                  <div className="form-container">
                  <p class="tnsl-heading">Transcribe Speech to Text</p>
                    
                    <div class="mb-3 mt-4">
                      <label for="exampleFormControlTextarea1" class="form-label">Translate Text</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"
                        name="pNotes"
                        value={pNotes}
                        // onChange={(e) => setpNotes(e.target.value)}
                      ></textarea>
                    </div>

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

            </Card>
          </div>
        </Form>
      </Grid>
    </Container>
  );
};

export default TransalateConsult;
