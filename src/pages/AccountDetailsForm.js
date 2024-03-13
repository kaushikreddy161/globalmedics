import React from "react";
import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import IconHealthReports from "../assets/icon-pReports.png";
import BloodReports from "../assets/icon-bloodReports.png";
import GeneticReports from "../assets/icon-geneticReports.png";
import StoolReports from "../assets/icon-stoolReports.png";
import UltrasoundReports from "../assets/icon-ultrasound.png";
import UrineReports from "../assets/icon-urineReports.png";
import AddOtherReports from "../assets/icon-addOther.png";
import { Button, TextField } from "@mui/material";
import { Form } from "react-bootstrap";

import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CardCover from "@mui/joy/CardCover";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
const onBack = () => {
  const path = `/healthReports`;
  navigate(path);
};

function AccountDetailsForm() {
  return (
    <div
      style={{
        backgroundColor: "#EBEBEB",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "50%",
          paddingTop: "20pt",
          marginLeft: "30%",
        }}
      >
        <Card
          style={{
            backgroundColor: "#F2F8F1",
            borderRadius: "15pt",
          }}
        >
          <Card.Body style={{ margin: "0pt" }}>
            <div class="container" style={{ margin: "0pt" }}>
              <div class="row">
                <div className="col-sm">
                  <ArrowBackIosIcon
                    onClick={onBack}
                    style={{ marginBottom: "1rem", cursor: "pointer" }}
                  />
                  <p
                    style={{
                      fontSize: 25,
                      fontFamily: "Helvetica",
                      color: "#209F85",
                      marginBottom: "0pt",
                      marginTop: "0pt",
                    }}
                  >
                    Account Details
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontFamily: "Helvetica",
                      color: "#adaaa7",
                      marginBottom: "12pt",
                      marginTop: "0pt",
                    }}
                  >
                    Please upload patient’s medical reports
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      fontFamily: "Helvetica",
                      color: "#adaaa7",
                      marginBottom: "0pt",
                      marginTop: "0pt",
                    }}
                  >
                    Last Updated: 12:00 PM, 15th July
                  </p>
                </div>
                <div className="col-sm" style={{ textAlign: "right" }}>
                  <img src={IconHealthReports} />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card
          itemType=""
          style={{
            marginTop: "10pt",
            marginBottom: "100pt",
            borderTop: "8px solid #1D5A90",
            borderRadius: "15pt",
          }}
        >
          <Card.Body>
            <div className="container">
              <div className="form-container">
                <Form className="signup-form" style={{ color: "#209F85" }}>
                  <Form.Group>
                    <label>What is patient’s name</label>
                    <Form.Control
                      className="name-input"
                      type="text"
                      placeholder="Enter patient’s name"
                      name=""
                      style={{
                        marginBottom: "10pt",
                        color: "#ADAAA7",
                        borderRadius: "50px",
                      }}
                    ></Form.Control>
                    <label>What is patient’s contact number</label>
                    <Form.Control
                      className="name-input"
                      type="number"
                      placeholder="Enter patient’s contact number"
                      name=""
                      style={{
                        marginBottom: "10pt",
                        color: "#ADAAA7",
                        borderRadius: "50px",
                      }}
                    ></Form.Control>
                    <label>What is patient’s date of birth</label>
                    <Form.Control
                      className="name-input"
                      type="date"
                      placeholder="Enter patient’s date of birth"
                      name=""
                      style={{
                        marginBottom: "10pt",
                        color: "#ADAAA7",
                        borderRadius: "50px",
                      }}
                    ></Form.Control>
                    <label id="sex">What is patient’s sex</label>
                    <br />
                    <input type="radio" value="Male" name="gender" />{" "}
                    <span style={{ color: "#ADAAA7" }}>Male</span>
                    <br />
                    <input type="radio" value="Female" name="gender" />{" "}
                    <span style={{ color: "#ADAAA7" }}>Female</span>
                    <br />
                    <input type="radio" value="Other" name="gender" />{" "}
                    <span style={{ color: "#ADAAA7" }}>Other</span>
                    <br />
                    {/* <select class="form-control" id="sex">
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select> */}
                    {/* <Form.Control
            className="name-input"
            type="text"
            placeholder="Sex"
            name=""
            style={{marginBottom: "10pt" }}
          ></Form.Control> */}
                    <label style={{ marginTop: "10pt" }}>
                      What is patient’s address
                    </label>
                    <Form.Control
                      className="name-input"
                      type="text"
                      placeholder="Enter address"
                      name=""
                      style={{
                        marginBottom: "10pt",
                        color: "#ADAAA7",
                        borderRadius: "50px",
                      }}
                    ></Form.Control>
                    {/* <label>What is Patient’s Ethinicity</label>
                    <Form.Control
                      className="email-input"
                      type="text"
                      placeholder="Enter patient’s Ethinicity"
                      name=""
                      style={{ marginBottom: "10pt" }}
                    ></Form.Control> */}
                    <label>What is patient’s occupation</label>
                    <Form.Control
                      className="name-input"
                      type="text"
                      placeholder="Enter patient’s occupation"
                      name=""
                      style={{
                        marginBottom: "10pt",
                        borderRadius: "50px",
                        color: "#ADAAA7",
                      }}
                    ></Form.Control>
                    <label>What is patient’s height</label>
                    <Form.Control
                      className="name-input"
                      type="number"
                      placeholder="Enter in CM"
                      name=""
                      style={{
                        marginBottom: "10pt",
                        borderRadius: "50px",
                        color: "#ADAAA7",
                      }}
                    ></Form.Control>
                    <label>What is patient’s weight</label>
                    <Form.Control
                      className="name-input"
                      type="number"
                      placeholder="Enter patient’s in KG"
                      name=""
                      style={{
                        marginBottom: "10pt",
                        borderRadius: "50px",
                        color: "#ADAAA7",
                      }}
                    ></Form.Control>
                    <label>What is patient’s blood group</label>
                    <br />
                    <select
                      className="form-control"
                      id="sex"
                      style={{ color: "#ADAAA7", borderRadius: "50px" }}
                    >
                      <option>Select any one</option>
                      <option>A+</option>
                      <option>A-</option>
                      <option>B+</option>
                      <option>B-</option>
                      <option>O+</option>
                      <option>O-</option>
                      <option>AB+</option>
                      <option>AB-</option>
                    </select>
                    {/* <Form.Control
            className="email-input"
            type="text"
            placeholder="Enter patient’s Blood Group"
            name=""
            style={{ marginBottom: "10pt" }}
          ></Form.Control> */}
                    <label style={{ marginTop: "10pt" }}>
                      How many cigarettes do they smoke in a day?
                    </label>
                    <Form.Control
                      className="email-input"
                      type="number"
                      placeholder="Number of cigarettes. Please enter “0” if they do not smoke."
                      name=""
                      style={{
                        marginBottom: "10pt",
                        borderRadius: "50px",
                        color: "#ADAAA7",
                      }}
                    ></Form.Control>
                    <label>How many drinks do they have in a day?</label>
                    <Form.Control
                      className="email-input"
                      type="text"
                      placeholder="Number of pegs per day. Please enter “0” if they do not drink."
                      name=""
                      style={{
                        marginBottom: "10pt",
                        borderRadius: "50px",
                        color: "#ADAAA7",
                      }}
                    ></Form.Control>
                    <label>
                      How many minutes in a day do they walk / run / cycle?
                    </label>
                    <Form.Control
                      className="email-input"
                      type="text"
                      placeholder="Minutes"
                      name=""
                      style={{
                        marginBottom: "10pt",
                        borderRadius: "50px",
                        color: "#ADAAA7",
                      }}
                    ></Form.Control>
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
            >
              Save Details
            </Button>
          </div>
        </Card>
        <br />
      </div>
    </div>
  );
}

export default AccountDetailsForm;
