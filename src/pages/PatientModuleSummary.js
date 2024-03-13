import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Form from "react-bootstrap/Form";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PatientModuleSUmmary() {
  const navigate = useNavigate();
  const onSubmit = () => {
    const path = `/consentForm`;
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
        <div style={{ paddingTop: "1rem" }}>
          <Card
            style={{
              maxWidth: "350px",
              border: "none",
              borderRadius: "10pt",
              backgroundColor: "#F2F8F1",
            }}
          >
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "#209F85",
                  marginTop: "1rem",
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
                We will take you through these 4 steps to set up the system for
                remotely managing the health of your loved ones.
              </Card.Subtitle>

              <table
                style={{
                  color: "#ADAAA7",
                  fontSize: "0.85rem",
                  // marginLeft: "1rem",
                  marginTop: "2rem",
                }}
              >
                <tr>
                  <td>
                    {/* <img
                      src={require("../assets/indication.png")}
                      style={{ width: "80%" }}
                    /> */}
                  </td>
                  <td>
                    <img src={require("../assets/wel-1.png")} />
                  </td>
                  <td style={{ paddingLeft: "0.5rem" }}>
                    Onboard / confirm people who would look after you (Care Ring
                    members)
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td style={{ paddingTop: "1rem" }}>
                    <img src={require("../assets/wel-2.png")} />
                  </td>
                  <td style={{ paddingTop: "1rem", paddingLeft: "0.5rem" }}>
                    Record History, Vital Signs and Symptoms
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td style={{ paddingTop: "1rem" }}>
                    <img src={require("../assets/wel-3.png")} />
                  </td>
                  <td style={{ paddingTop: "1rem", paddingLeft: "0.5rem" }}>
                    Monitor and manage your health remotely
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td style={{ paddingTop: "1rem" }}>
                    <img src={require("../assets/wel-4.png")} />
                  </td>
                  <td style={{ paddingTop: "1rem", paddingLeft: "0.5rem" }}>
                    Consult doctor when required
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
                  Let us get started!
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Grid>
    </Container>
  );
}

export default PatientModuleSUmmary;
