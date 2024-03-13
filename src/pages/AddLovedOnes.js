import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user.context";

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import Icon_AddLovedOnes from "../assets/icon-add-loved-ones.png";
import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import cypherData from "../crypt/cypherData";
import decryptData from "../crypt/decryptData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconPatientImage from "../assets/icon-patient-photo.png";
import FixedHeader from "../components/FixedHeader";
import "./Main.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const AddLovedOnes = () => {
 const { user, adbuser } = useContext(UserContext);

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
  const [value, setValue] = useState("");
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
    //  let cid = BSON.ObjectID(user.id).toString();
    let cid = adbuser;
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
        //  setLock("true");
      });
    }
  };

  const onConfirm = () => {
    navigate(`/patientpersonalDetailsForm_1`, { state: { lid: lid } });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (
      nickName === "" &&
      relationName === "") {
      alert(
        "Please enter the data for Relation and Nickname"
      );
    } else {
      try {
        if (user) {
          //642d234d7155bf7cd3b215c5
          //  console.log('auth:',user.id);
          let dt = new Date();
          //  console.log("date:", dt.toDateString());
          let id = new BSON.ObjectID();
         // let cid = BSON.ObjectID(user.id).toString();
         let cid = adbuser;
          let pid = "";
          // console.log('pid:', pid);

          const createx = user.functions.createLovedOnes(
            id,
            cid,
            nickName,
            "",
            cid,
            "careManager",
            dt.toDateString(),
            "pending",
            "",
            "",
            "",
            pid,
            value,
            "GlobalMedics2021",
            relationName
          );
          createx.then((resp) => {
            //   console.log("lovedones id:", id.toString());
            // alert("Loved Ones Details Added Successfully");
            alert("Click On Send Invite to your Loved Ones");
            const lid = React.createContext(id.toString());
            navigate(`/LovedOnesECard`, {
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
          title="Add Your Loved Ones"
          title2="Please add details of your elderly loved ones"
          title3="Last Updated: 10-10-2022"
          // limg="all"
          rimg="alr"
        />
        <div className="form-alo">
          <Card
            style={{
              marginTop: "1.5rem",
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
                    onSubmit={onSubmit}
                  >
                    <Form.Group>
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
                          <label style={{ maxWidth: "500px" }}>
                            Relation To You
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <>
                            {status === "0" ? (
                              <select
                                className="form-control"
                                id="relationName"
                                style={{
                                  color: "#707070",
                                  borderRadius: "5px",
                                }}
                                name="relationName"
                                onChange={(e) => setrName(e.target.value)}
                              >
                                <option value="">Select any one</option>
                                <option value="Grand Father">
                                  Grand Father
                                </option>
                                <option value="Grand Mother">
                                  Grand Mother
                                </option>
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Father-in-law">
                                  Father-in-law
                                </option>
                                <option value="Mother-in-law">
                                  Mother-in-law
                                </option>
                                <option value="Brother">Brother</option>
                                <option value="Sister">Sister</option>
                                <option value="Uncle">Uncle</option>
                                <option value="Aunt">Aunt</option>
                                <option value="Cousin">Cousin</option>
                                <option value="Friend">Friend</option>
                                <option value="Other">Other</option>
                                <option value="Self">Self</option>
                              </select>
                            ) : (
                              <Form.Control
                                className="name-input"
                                type="text"
                                placeholder="Relation"
                                name="relationName"
                                value={relationName}
                                onChange={(e) => setrName(e.target.value)}
                                style={{
                                  // marginBottom: "10pt",
                                  color: "#707070",
                                  // border: "0px solid white",
                                  // marginLeft: "-0.7rem",
                                }}
                              ></Form.Control>
                            )}
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
                          <label>
                            What do you call them?
                            <span style={{ color: "red" }}>*</span>
                          </label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Nick Name"
                            name="nickName"
                            value={nickName}
                            onChange={(e) => setnName(e.target.value)}
                            style={{
                              // marginBottom: "10pt",
                              color: "#707070",
                              borderRadius: "5px",
                              // border: "0px solid white",
                              // marginLeft: "-0.7rem",
                            }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>

                      <Divider style={{ margin: "4pt" }} />
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Card.Body>

            <>
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
                    Send Invitation
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
            </>
            <div style={{ height: "5vh" }}></div>
          </Card>
        </div>
        {/* </div> */}
      </Grid>
    </Container>
  );
};

export default AddLovedOnes;
