import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Form from "react-bootstrap/Form";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ModuleSummaryThree() {
  const navigate = useNavigate();
  const onSubmit = () => {
    const path = `/dailyCheckIn`;
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
        <div
          style={{
            paddingTop: "1rem",
            marginTop: "0rem",
            marginBottom: "0rem",
          }}
        >
          <Card
            style={{
              maxWidth: "350px",
              border: "none",
              borderRadius: "10pt",
              backgroundColor: "#F2F8F1",
              marginTop: "0rem",
              marginBottom: "0rem",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginTop: "1rem",
                marginBottom: "0rem",
              }}
            >
              <img
                src={require("../assets/logo.png")}
                className="img-fluid"
                style={{ width: "17%" }}
              />
              <p
                style={{
                  color: "#209F85",
                  fontFamily: "Helvetica",
                  fontWeight: "normal",
                  fontSize: "1.4rem",
                  marginBottom: "0rem",
                }}
              >
                Global Medics
              </p>
            </div>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "#209F85",
                  marginTop: "0rem",
                  marginBottom: "1.5rem",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                }}
              >
                Steps to Remote Care
              </Card.Title>
              <Card.Subtitle
                className="mb-2 "
                style={{
                  textAlign: "center",
                  color: "#89C1B5",
                  fontWeight: "normal",
                  fontSize: "0.9rem",
                }}
              >
                We will take you through these steps to set up the system for
                remotely managing the health of your elderly loved ones.
              </Card.Subtitle>

              <table
                style={{
                  color: "#ADAAA7",
                  fontSize: "0.85rem",
                  // marginLeft: "1rem",
                  marginTop: "2rem",
                }}
              >
                <colgroup>
                  <col style={{ width: "15%" }} />
                  <col style={{ width: "10%" }} />
                  <col style={{ width: "75%" }} />
                </colgroup>
                <tr>
                  <td></td>
                  <td>
                    <img src={require("../assets/wel-1a.png")} />
                  </td>
                  <td style={{ paddingLeft: "0.5rem" }}>
                    Add the loved ones you want care for
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td style={{ paddingTop: "1rem" }}>
                    <img src={require("../assets/wel-2a.png")} />
                  </td>
                  <td style={{ paddingTop: "1rem", paddingLeft: "0.5rem" }}>
                    Record History & Vital Signs
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: "1rem" }}>
                    <img
                      src={require("../assets/indication.png")}
                      style={{ width: "100%", paddingRight: "0.5rem" }}
                    />
                  </td>
                  <td style={{ paddingTop: "1rem" }}>
                    <img src={require("../assets/wel-3a.png")} />
                  </td>
                  <td style={{ paddingTop: "1rem", paddingLeft: "0.5rem" }}>
                    Monitor and manage their health remotely
                  </td>
                </tr>
              </table>

              <div
                style={{
                  textAlign: "center",
                  marginTop: "3rem",
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
                  Monitor Reports
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Grid>
    </Container>
  );
}

export default ModuleSummaryThree;
