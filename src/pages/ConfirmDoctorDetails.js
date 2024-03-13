import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user.context";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import cypherData from "../crypt/cypherData";
import decryptData from "../crypt/decryptData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FixedHeader from "../components/FixedHeader";
import "./Main.css";

const ConfirmDoctorDetails = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const [relationName, setrName] = useState("");
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [famName, setfamName] = useState("");
  const [phoneNumber, setpNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nickName, setnName] = useState("");
  const [status, setStatus] = useState("0");
  const [lid, setSelLId] = useState("");
  const [aorg, setAorg] = useState("");
  
  const [hospName, setHospName] = useState("");
  const [sName, setsName] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [regAuth, setRegAuth] = useState("");

  const datex = new Date();

  const onBack = () => {
    const path = `/careManagerDetails`;
    navigate(path);
  };

  useEffect(() => {
    // loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    //   console.log('user:',user.id);
    if (user) {
      let cid = BSON.ObjectID(user.id).toString();
      const lovd = user.functions.getLovedOneCP(cid); // one loved one based on care manager id
      // console.log('carem:',carem);
      lovd.then((resp) => {
        //   console.log(resp);
        setfName(resp.firstName);
        setlName(resp.middleName);
        setfamName(resp.familyName);
        setEmail(decryptData(resp.email));
        setpNumber(resp.phone);
        setrName(resp.relation);
        setnName(resp.displayName);
        setSelLId(resp._id.toString());
        setStatus("1");

        setHospName(resp.hospName);
        setsName(resp.surName);
        setRegNumber(resp.RegNumber);
        setRegAuth(resp.RegAuth);

        //  setLock("true");
      });
    }
  };

  const onConfirm = () => {
    if (fName === "" && hospName === ""  && email === "") {
      alert(
        "Please enter the data for the Doctor First Name, Hospital Name and Email id."
      );
    }
    else {
      navigate(`/virtualround`);
    }
  };
  

  // const onConfirm = () => {
  //   navigate(`/patientpersonalDetailsForm`, { state: { lid: lid } });
  // };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (
      email === "" ||
      nickName === "" ||
      relationName === "" ||
      phoneNumber === ""
    ) {
      alert(
        "Please enter the data for the Doctor Name, Phone Number and Mail id."
      );
    } else {
      try {
        if (user) {
          //  console.log('auth:',user.id);
          let dt = new Date();
          //  console.log("date:", dt.toDateString());
          let id = new BSON.ObjectID();
          let cid = BSON.ObjectID(user.id).toString();
          let pid = "";
          // console.log('pid:', pid);

          const createx = user.functions.createLovedOnes(
            id,
            cid,
            nickName,
            cypherData(email),
            cid,
            "careManager",
            dt.toDateString(),
            "active",
            famName,
            fName,
            lName,
            pid,
            phoneNumber,
            sName,
            hospName,
            regNumber,
            regAuth,
            "GlobalMedics2021",
            relationName
          );
          createx.then((resp) => {
            //   console.log("lovedones id:", id.toString());
            alert("Loved Ones Details Added Successfully");
            const lid = React.createContext(id.toString());
            navigate(`/patientpersonalDetailsForm`, {
              state: { lid: id.toString() },
            });
          });
        }
      } catch (error) {
        //  alert(error);
        console.log("error:", error);
      }
    }
  };

  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{
          minHeight: "100vh",
          paddingBottom: "0rem",
        }}
      >
        {/* <div
          style={{
            backgroundColor: "#EBEBEB",
            paddingTop: "2rem",
            // width: "500px",
          }}
        > */}
        <FixedHeader
          title="Confirm Details"
          title2="Please update your contact details"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="c-ad"
        />
        <div className="form-a">
          <Card
            style={{
              marginTop: "2.5rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
            }}
            className="left"
          >
            <Card.Body>
              <div className="container">
                <div className="form-container">
                  <Form
                    className="signup-form"
                    style={{ color: "#209F85" }}
                    // onSubmit={onSubmit}
                  >
                    <Form.Group>
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "5px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body style={{ marginBottom: "-1rem" }}>
                          <label>Your Title</label>
                          <br />
                          <>
                            <select className="form-control" style={{ color: "#707070" }}>
                              {/* <option value="">Select any one</option> */}
                              <option value="Dr">Dr</option>
                              <option value="Mr">Mr</option>
                              <option value="Ms">Ms</option>
                              <option value="Master">Master</option>
                              <option value="Mrs">Mrs</option>
                              <option value="Other">Other</option>
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
                          borderRadius: "5px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Please confirm your First Name</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="First Name"
                            name="fName"
                            value={fName}
                            onChange={(e) => setfName(e.target.value)}
                            style={{ color: "#707070" }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "5px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Please confirm your Middle Name</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Middle Name"
                            name="lName"
                            value={lName}
                            onChange={(e) => setlName(e.target.value)}
                            style={{ color: "#707070" }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "5px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Please confirm your Surname</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Surname"
                            name="sName"
                            value={sName}
                            onChange={(e) => setsName(e.target.value)}
                            style={{ color: "#707070" }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "5px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Please confirm name of your clinic / hospital</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="clinic / hospital Name"
                            name="hospName"
                            value={hospName}
                            onChange={(e) => setHospName(e.target.value)}
                            style={{ color: "#707070" }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "5px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Registration Number (if applicable)</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Registration Number"
                            name="regNumber"
                            value={regNumber}
                            onChange={(e) => setRegNumber(e.target.value)}
                            style={{ color: "#707070" }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "5px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Registering Authority (if Registration Number mentioned)</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Registration Authority"
                            name="regAuth"
                            value={regAuth}
                            onChange={(e) => setRegAuth(e.target.value)}
                            style={{ color: "#707070" }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "5px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Please confirm your phone number</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="+91"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setpNumber(e.target.value)}
                            style={{ color: "#707070" }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "5px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Please confirm your email address</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="name@email.com"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ color: "#707070" }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "5px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Address of your organisation</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Organisation address"
                            name="aorg"
                            value={aorg}
                            onChange={(e) => setAorg(e.target.value)}
                            style={{ color: "#707070" }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      <Divider style={{ margin: "4pt" }} />
                      <Card
                        style={{
                          margin: "auto",
                          transition: "0.3s",
                          boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                          borderRadius: "5px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Area Serviced</label>
                          <div className="mt-2">
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" name="checkboxOptions" id="checkbox1" value="option1" />
                              <label class="form-check-label text-gray1" for="checkbox1">Remote</label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="checkbox" name="checkboxOptions" id="checkbox2" value="option2" style={{textAlign:"right"}}/>
                              <label class="form-check-label text-gray1" for="checkbox2">Physical</label>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Card.Body>

            {/* <>
              {status === "0" ? (
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
                    Confirm
                  </Button>
                </div>
              ) : (
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
                    onClick={onConfirm}
                    type="submit"
                  >
                    Confirm
                  </Button>
                </div>
              )}
            </> */}
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
                    onClick={onConfirm}
                    type="submit"
                  >
                    Confirm
                  </Button>
                </div>
            <div style={{ height: "5vh" }}></div>
          </Card>
        </div>
        {/* </div> */}
      </Grid>
    </Container>
  );
};

export default ConfirmDoctorDetails;
