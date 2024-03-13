import React from "react";
import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import EmergencyContact from "../assets/icon-emergency-contact.png";
import FamilyHistory from "../assets/icon-family-history.png";
import Immunisations from "../assets/icon-immunisations.png";
import PatientAnyother from "../assets/icon-patient-anyother.png";
import PersonalDetails from "../assets/icon-personal-details.png";
import PreviousHistory from "../assets/icon-previous-history.png";
import PreviousReports from "../assets/icon-previous-reports.png";
import { Button, TextField } from "@mui/material";

function HealthDetails() {
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
                  <p
                    style={{
                      fontSize: 25,
                      fontFamily: "Helvetica",
                      color: "#209F85",
                      marginBottom: "0pt",
                      marginTop: "0pt",
                    }}
                  >
                    Health Details
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
                    Please upload your medical reports
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
                  {/* <img src={IconHealthReports} /> */}
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card
          style={{
            marginTop: "10pt",
            marginBottom: "100pt",
            borderTop: "8px solid #1D5A90",
            borderRadius: "15pt",
          }}
        >
          <Card.Body>
            <div className="container">
              <div
                className="row"
                style={{
                  justifyContent: "space-between",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* <p
                  style={{
                    fontSize: "16px",
                    fontFamily: "Helvetica",
                    color: "#209F85",
                    textAlign: "left",
                  }}
                >
                  Attach Previous Reports
                </p> */}

                {/* <Button variant="contained" component="label">
                  Upload File
                  <input type="file" hidden />
                </Button> */}

                {/* <label
                  for="formFileSm"
                  class="form-label"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Helvetica",
                    color: "#209F85",
                    textAlign: "left",
                  }}
                >
                  Attach Previous Reports
                </label>
                <input
                  class="form-control form-control-sm"
                  id="formFileSm"
                  type="file"
                  style={{ marginBottom: "20pt" }}
                /> */}
                <Card
                  style={{
                    width: "18%",
                    height: "18vh",
                    borderRadius: 14,
                    alignItems: "center",
                    borderTop: "5px solid #1D5A90",
                    marginRight: "32pt",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "5pt",
                      marginBottom: "5pt",
                    }}
                  >
                    <img src={PersonalDetails} />
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "0pt",
                      fontSize: "15px",
                      fontFamily: "Helvetica",
                      color: "#707070",
                    }}
                  >
                    Personal Details
                  </p>
                </Card>
                <Card
                  style={{
                    width: "18%",
                    height: "18vh",
                    borderRadius: 14,
                    alignItems: "center",
                    borderTop: "5px solid #1D5A90",
                    marginRight: "32pt",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "5pt",
                      marginBottom: "5pt",
                    }}
                  >
                    <img src={PreviousHistory} />
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "0pt",
                      fontSize: "15px",
                      fontFamily: "Helvetica",
                      color: "#707070",
                    }}
                  >
                    Previous History
                  </p>
                </Card>
                <Card
                  style={{
                    width: "18%",
                    height: "18vh",
                    borderRadius: 14,
                    alignItems: "center",
                    borderTop: "5px solid #1D5A90",
                    marginRight: "32pt",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "5pt",
                      marginBottom: "5pt",
                    }}
                  >
                    <img src={EmergencyContact} />
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "0pt",
                      fontSize: "15px",
                      fontFamily: "Helvetica",
                      color: "#707070",
                    }}
                  >
                    Emergency Contact
                  </p>
                </Card>
              </div>
              <div
                className="row"
                style={{
                  justifyContent: "space-between",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30pt",
                }}
              >
                <Card
                  style={{
                    width: "18%",
                    height: "18vh",
                    borderRadius: 14,
                    alignItems: "center",
                    borderTop: "5px solid #1D5A90",
                    marginRight: "32pt",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "5pt",
                      marginBottom: "5pt",
                    }}
                  >
                    <img src={FamilyHistory} />
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "0pt",
                      fontSize: "15px",
                      fontFamily: "Helvetica",
                      color: "#707070",
                    }}
                  >
                    Family History
                  </p>
                </Card>
                <Card
                  style={{
                    width: "18%",
                    height: "18vh",
                    borderRadius: 14,
                    alignItems: "center",
                    borderTop: "5px solid #1D5A90",
                    marginRight: "32pt",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "5pt",
                      marginBottom: "5pt",
                    }}
                  >
                    <img src={Immunisations} />
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "0pt",
                      fontSize: "15px",
                      fontFamily: "Helvetica",
                      color: "#707070",
                    }}
                  >
                    Immunisations
                  </p>
                </Card>
                <Card
                  style={{
                    width: "18%",
                    height: "18vh",
                    borderRadius: 14,
                    alignItems: "center",
                    borderTop: "5px solid #1D5A90",
                    marginRight: "32pt",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "5pt",
                      marginBottom: "5pt",
                    }}
                  >
                    <img src={PreviousReports} />
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "0pt",
                      fontSize: "15px",
                      fontFamily: "Helvetica",
                      color: "#707070",
                    }}
                  >
                    Previous Reports
                  </p>
                </Card>
              </div>
              <div
                className="row"
                style={{
                  justifyContent: "space-between",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "30pt",
                }}
              >
                <Card
                  style={{
                    width: "18%",
                    height: "18vh",
                    borderRadius: 14,
                    alignItems: "center",
                    borderTop: "5px solid #1D5A90",
                    marginRight: "32pt",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "5pt",
                      marginBottom: "5pt",
                    }}
                  >
                    <img src={PatientAnyother} />
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "0pt",
                      fontSize: "15px",
                      fontFamily: "Helvetica",
                      color: "#707070",
                    }}
                  >
                    Any other
                  </p>
                </Card>
                {/* <Card
                  style={{
                    width: "18%",
                    height: "18vh",
                    borderRadius: 14,
                    alignItems: "center",
                    borderTop: "5px solid #1D5A90",
                    marginRight: "32pt",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "5pt",
                      marginBottom: "5pt",
                    }}
                  >
                    <img src={Immunisations} />
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "0pt",
                      fontSize: "15px",
                      fontFamily: "Helvetica",
                      color: "#707070",
                    }}
                  >
                    Immunisations
                  </p>
                </Card> */}
                {/* <Card
                  style={{
                    width: "18%",
                    height: "18vh",
                    borderRadius: 14,
                    alignItems: "center",
                    borderTop: "5px solid #1D5A90",
                    marginRight: "32pt",
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "5pt",
                      marginBottom: "5pt",
                    }}
                  >
                    <img src={PreviousReports} />
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "0pt",
                      fontSize: "15px",
                      fontFamily: "Helvetica",
                      color: "#707070",
                    }}
                  >
                    Previous Reports
                  </p>
                </Card> */}
              </div>
            </div>
          </Card.Body>
          {/* <Button
            style={{ background: "#1D5A90", borderRadius: 50 }}
            variant="contained"
            color="primary"
            onClick={onSubmit}
            type="submit"
          >
            {editing ? "Update" : "Create"} Patient
          </Button> */}
          <div
            style={{
              textAlign: "center",
              marginTop: "30pt",
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
              Confirm
            </Button>
          </div>
        </Card>
        <br />
      </div>
    </div>
  );
}

export default HealthDetails;
