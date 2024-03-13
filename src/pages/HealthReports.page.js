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

import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CardCover from "@mui/joy/CardCover";

function HealthReports() {
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
            maxWidth: "500px",
          }}
        >
          <Card.Body style={{ margin: "0pt" }}>
            <div
              class="container"
              style={{ marginTop: "-1.5rem", marginBottom: "0rem" }}
            >
              <ArrowBackIosIcon
                onClick={onBack}
                style={{
                  marginTop: "0rem",
                  cursor: "pointer",
                  marginBottom: "-3.6rem",
                }}
              />
              <div class="row">
                <div className="col-sm-2" style={{ marginTop: "2.5rem" }}>
                  <img src={IconPatientImage} style={{ width: "150%" }} />
                </div>
                <div className="col-sm-8">
                  <p
                    style={{
                      fontSize: 25,
                      fontFamily: "Helvetica",
                      color: "#209F85",
                      marginBottom: "0pt",
                      marginTop: "0pt",
                      textAlign: "center",
                    }}
                  >
                    Patient Information
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
                    Last Updated: {datex.toDateString()}
                  </p>
                </div>
                <div
                  className="col-sm-2"
                  style={{ textAlign: "right", marginTop: "1.8rem" }}
                >
                  <img src={IconHealthReports} style={{ width: "auto" }} />
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>

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
                      fontSize: "1.6rem",
                      fontFamily: "Helvetica",
                      color: "#209F85",
                      marginBottom: "0pt",
                      marginTop: "0pt",
                    }}
                  >
                    Health Reports
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
                    Please upload your medical reports
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
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
              <div
                className="row"
                style={{
                  justifyContent: "space-between",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
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
                    <img src={BloodReports} />
                  </p>
                  <Typography
                    style={{
                      fontSize: "15px",
                      fontFamily: "Helvetica",
                      color: "#707070",
                    }}
                  >
                    <Link
                      overlay
                      underline="none"
                      href="#interactive-card"
                      sx={{ color: "text.tertiary" }}
                    >
                      Blood Reports
                    </Link>
                    {/* <Button variant="contained" component="label">
                      Upload
                      <input hidden accept="image/*" multiple type="file" />
                    </Button> */}
                  </Typography>

                  {/* <CardCover
                    className="gradient-cover"
                    sx={{
                      "&:hover, &:focus-within": {
                        opacity: 1,
                      },
                      opacity: 0,
                      transition: "0.1s ease-in",
                      marginLeft: "30pt",
                      marginTop: "20pt",
                      // background:
                      //   "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                    }}
                  >
                  
                    <IconButton size="sm" color="neutral" sx={{ ml: "auto" }}>
                      <AttachFileIcon />
                    </IconButton>
                  </CardCover> */}
                  {/* <p
                    style={{
                      textAlign: "center",
                      marginTop: "5pt",
                      marginBottom: "5pt",
                    }}
                  >
                    <img src={BloodReports} />
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
                    Blood Reports
                  </p> */}
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
                    <img src={UrineReports} />
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
                    Urine Reports
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
                    <img src={StoolReports} />
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
                    Stool Reports
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
                    <img src={BloodReports} />
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
                    Ultrasound Reports
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
                    <img src={GeneticReports} />
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
                    Genetic Reports
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
                    <img src={AddOtherReports} />
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
                    Add Other Reports
                  </p>
                </Card>
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

export default HealthReports;
