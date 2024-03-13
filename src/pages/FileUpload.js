import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const FileUpload = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [status, setStatus] = useState("0");
  const datex = new Date();
  const onSubmit = () => {
    if (status === "1") {
      alert("Report Uploaded Successfully");
    } else {
      alert("Report Uploading Failed");
    }
    const path = `/healthReports`;
    navigate(path);
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
        // style={{ minHeight: "100vh" }}
      >
        <Card
          style={{
            // borderTop: "6px solid #1D5A90",
            borderRadius: "10px",
            padding: "20pt",
            background: "#F2F8F1",
            marginTop: "1rem",
            // marginBottom: "1rem",
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              style={{
                // maxWidth: "580px",
                maxWidth: "400pt",
                // alignItems: "center",
                // justifyContent: "center",
                marginBottom: "-1.5rem",
                marginTop: "-1rem",
              }}
            >
              {/* <div style={{ display: "flex", style: "width:580px" }}> */}

              <div>
                <ArrowBackIosIcon
                  onClick={onBack}
                  style={{ marginBottom: "1rem", cursor: "pointer" }}
                />
                <p
                  style={{
                    fontSize: "1.6rem",
                    fontFamily: "Helvetica",
                    color: "#209F85",
                    marginBottom: "0pt",
                    marginTop: "0pt",
                  }}
                >
                  Upload Reports
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Helvetica",
                    color: "#adaaa7",
                    // marginBottom: "12pt",
                    marginTop: "0pt",
                    marginRight: "4rem",
                  }}
                >
                  Please upload your medical reports
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    fontFamily: "Helvetica",
                    color: "#adaaa7",
                    marginBottom: "12pt",
                    marginTop: "0pt",
                  }}
                >
                  Last Updated: {datex.toDateString()}
                </p>
              </div>
            </Grid>
          </Box>
        </Card>
      </Grid>
      {/* start */}
      <div>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          // justifyContent="center"
          style={{ minHeight: "100vh", paddingTop: "2rem" }}
        >
          <Card
            //   sx={{ maxWidth: 500 }}
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // marginTop: "2rem",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "400pt",
                    }}
                  >
                    <div class="mb-3">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Type of Medical Report</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter Name of Medical Report Here"
                          />
                        </Form.Group>

                        {/* <input
                          class="form-control"
                          type="file"
                          id="formFileMultiple"
                          multiple
                        /> */}

                        {/* { fileName && <p className="filename">{fileName.name}</p> } */}
                        <input
                          type="file"
                          name="filetobase64"
                          onChange={onUploadFileChange}
                          class="form-control"
                        />
                        {/* </div> */}
                        {/* <br/>
      {file ? <textarea id="base64File" rows="30" cols="150" value={file} readOnly></textarea> : null } */}
                      </Form>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        onClick={onSubmit}
                        style={{
                          background: "#1D5A90",
                          borderRadius: 50,
                          minWidth: "40%",
                          color: "#ffffff",
                          textTransform: "none",
                        }}
                      >
                        Upload
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>
            </Box>
          </Card>
        </Grid>
      </div>
    </Container>
  );
};

export default FileUpload;
