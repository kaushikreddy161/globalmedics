import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { useMsal } from '@azure/msal-react';
import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { withTranslation } from "react-i18next";
import FixedHeader from "../components/FixedHeader";
import axios from "axios";
import "./Main.css";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import ReactLanguageSelect from 'react-languages-select';
import 'react-languages-select/css/react-languages-select.css';
import AddIcon from '../assets/add.png';
import DeleteIcon from '../assets/delete.png';
import IconGoogle from '../assets/icon-ad-google.png';
import IconFacebook from '../assets/icon-ad-facebook.png';
import IconTwitter from '../assets/icon-ad-twitter.png';
import IconLinkedIn from '../assets/icon-ad-linkedin.png';
import IconApple from '../assets/icon-ad-apple.png';
import IconMailVerify from '../assets/icon-mail-verify.png';


async function facebookPIC(fuserid, access_token) {
  // let userInfo = await axios.get("https://graph.facebook.com/v3.2/"+fuserid+"/picture?access_token="+access_token+"&type=square",
  // let userInfo = await axios.get(`https://graph.facebook.com/me?fields=name,gender,location,picture&access_token=${access_token}`, 
  let userInfo = await axios.get(`https://graph.facebook.com/me?fields=name&access_token=${access_token}`,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        //   Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
    });
  //console.log("userInfo facebook:", userInfo);
}

const CareManagerDetails = ({ t }) => {
  const { user, adbuser } = useContext(UserContext);
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const [fgpicture, setFGPicture] = useState("");

  const googlePIC = async (access_token) => {
    let userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
    setFGPicture(userInfo.data.picture);
    // console.log("userInfo google:", userInfo.data.picture);
  }

  //console.log("Id Calims :", activeAccount.idTokenClaims.family_name);

  const navigate = useNavigate();
  const [fName, setfName] = useState('Rakesh');
  const [lName, setlName] = useState('Kumar');
  const [email, setEmail] = useState('rakesh.kush87@gmail.com');
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("0");
  const [value, setValue] = useState("");

  useEffect(() => {
    // if (activeAccount.idTokenClaims.idp) {
    //   if (activeAccount.idTokenClaims.idp === "google.com") {
    //     // console.log("logged in through adb2c google");
    //     // const { access_token, refresh_token } = res.data; // now I have valid access_token
    //     googlePIC(activeAccount.idTokenClaims.idp_access_token);
    //   } else if (activeAccount.idTokenClaims.idp === "facebook.com") {
    //     //  console.log("logged in through adb2c facebook");
    //     facebookPIC(activeAccount.idTokenClaims.oid, activeAccount.idTokenClaims.idp_access_token);
    //   } else {
    //     console.log("logged in through adb2c");
    //   }
    // }

    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adbuser]);

  const loadUser = async () => {
    // fetchAndCovertToBlob();
    if (user) {
      let cid = adbuser;
      const carem = user.functions.getOneCareManagerADB(cid);
      carem.then((resp) => {
        if (resp) {
          setfName(resp.firstname);
          setlName(resp.lastname);
          setEmail(decryptData(resp.email));
          setValue(resp.phone);
          setStatus("1");
          const lovd = user.functions.getSelfDataLovedOne(cid); // one loved one based on care manager id
          lovd.then((respp) => {
            if (respp) {
              console.log("Not added loved one");
            }
            else {
              console.log('new loved one');
              addCMasLoved(resp.firstname, resp.lastname, resp.email, resp.phone);
            }
          });
        }
      });
    }
  };

  const addCMasLoved = async (fn, ln, em, ph) => {   // adding caremanager as  Loved One by default
    if (user) {
      let dt = new Date();
      let id = new BSON.ObjectID();
      let cid = adbuser;
      let pid = adbuser;
      let familyn = fn + " " + ln;
      const createx = user.functions.createLovedOnes(
        id,
        cid,
        familyn,
        em,
        cid,
        "self",
        dt.toDateString(),
        "active",
        ln,
        fn,
        "",
        pid,
        ph,
        "GlobalMedics2021",
        "self"
      );
      createx.then((respl) => {
        if (respl) {
          console.log("lovedones id:", id.toString());
        }
      });
    }
  };
  const onConfirm = () => {
    navigate(`/karmaKlub`);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (user) {
        let dt = new Date();
        let id = new BSON.ObjectID();
        let pid = adbuser;
        const create = user.functions.createCaremanagerADB(
          id,
          cypherData(email),
          pid,
          fName,
          lName,
          value,
          dt.toDateString(),
          "active",
          "GlobalMedics2021",
          pid
        );
        create.then((resp) => {
          alert("Account Details Updated Successfully");
          navigate(`/role`);
        });
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };



  const [addEmailField, setAddEmailField] = useState([]);

  const handleAddEmail = () => {
    setAddEmailField([...addEmailField, { value: '' }]);
  };

  const handleInputEmailChange = (index, event) => {
    const values = [...addEmailField];
    values[index].value = event.target.value;
    setAddEmailField(values);
  };

  const handleRemoveEmail = (index) => {
    const values = [...addEmailField];
    values.splice(index, 1);
    setAddEmailField(values);
  };


  const [addPhoneField, setAddPhoneField] = useState([]);

  const handleAddPhone = () => {
    setAddPhoneField([...addPhoneField, { value: '' }]);
  };

  const handleInputPhoneChange = (index, event) => {
    const values = [...addPhoneField];
    values[index].value = event.target.value;
    setAddPhoneField(values);
  };

  const handleRemovePhone = (index) => {
    const values = [...addPhoneField];
    values.splice(index, 1);
    setAddPhoneField(values);
  };

  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "10vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Account Details"
          title2="Please validate / update your account details to secure your account."
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="adr"
          simg={fgpicture}
        />
        <div className="form-w">
          <Card
            style={{
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              marginTop: "0rem",
              marginBottom: "0rem",
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
                          borderRadius: "10px",
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>First Name</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="First Name"
                            name="fName"
                            value={fName}
                            onChange={(e) => setfName(e.target.value)}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#707070",
                              border: "1px solid #ced4da",
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
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Last Name</label>
                          <Form.Control
                            className="name-input"
                            type="text"
                            placeholder="Last Name"
                            name="lName"
                            value={lName}
                            onChange={(e) => setlName(e.target.value)}
                            style={{
                              marginTop: "2pt",
                              marginBottom: "0pt",
                              color: "#707070",
                              border: "1px solid #ced4da",
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
                          padding: "2pt",
                          border: "2px solid white",
                        }}
                      >
                        <Card.Body>
                          <label>Email</label>
                          <div class="row">
                            <div class="col-10">
                              <Form.Control
                                className="name-input"
                                type="text"
                                placeholder="email_id@MailProvider.com"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                  marginTop: "2pt",
                                  marginBottom: "0pt",
                                  color: "#707070",
                                  border: "1px solid #ced4da",
                                  // width: "100%",
                                }}
                              ></Form.Control>
                            </div>
                            
                            <div class="col-2">
                              <button className="add-input-btn" type="button" onClick={handleAddEmail}><img alt="" src={AddIcon} style={{ width: "50%" }} /></button>
                            </div>
                          </div>

                          {addEmailField.map((addEmailField, index) => (
                            <div class="row">
                              <div class="col-9">
                                <div key={index} className="mt-2">
                                  <Form.Control
                                    className="add-email"
                                    type="text"
                                    value={addEmailField.value}
                                    onChange={(event) => handleInputEmailChange(index, event)}
                                  ></Form.Control>
                                </div>
                              </div>
                              <div class="col-1" style={{textAlign:"right"}}>
                              <button className="add-input-btn" type="button"><img src={IconMailVerify} className="add-icons"/></button>
                            </div>
                              <div class="col-2" style={{textAlign:"right"}}>
                                <button className="add-input-btn" type="button" onClick={() => handleRemoveEmail(index)}><img src={DeleteIcon} className="add-icons" /></button>
                              </div>
                            </div>

                          ))}

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
                          <label>Mobile</label>
                          <div class="row">
                            <div class="col-10">
                              <PhoneInput
                                country={'in'}
                                placeholder="Enter phone number"
                                name="phone"
                                value={value}
                                onChange={setValue}
                                style={{
                                  marginTop: "2pt",
                                  marginBottom: "0pt",
                                  color: "#707070",
                                  width: "100%"
                                }}
                              />
                            </div>
                            <div class="col-2">
                              <button className="add-input-btn" type="button" onClick={handleAddPhone}><img alt="" src={AddIcon} style={{ width: "50%" }} /></button>
                            </div>
                          </div>

                          {addPhoneField.map((addPhoneField, index) => (
                            <div class="row">
                              <div class="col-10">
                                <div key={index} className="mt-2">
                                  <Form.Control
                                    className="add-email"
                                    type="text"
                                    value={addPhoneField.value}
                                    onChange={(event) => handleInputPhoneChange(index, event)}
                                  ></Form.Control>
                                </div>
                              </div>
                              <div class="col-2">
                                <button className="add-input-btn" type="button" onClick={() => handleRemovePhone(index)}><img alt="" src={DeleteIcon} style={{ width: "50%" }} /></button>
                              </div>
                            </div>
                          ))}
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
                          <label>Social Media</label>
                          <div className="social-icons">
                          <img src={IconGoogle} className="social-media-icons"/>
                          <img src={IconFacebook} className="social-media-icons"/>
                          <img src={IconTwitter} className="social-media-icons"/>
                          <img src={IconLinkedIn} className="social-media-icons"/>
                          <img src={IconApple} className="social-media-icons"/>
                          </div>
                        </Card.Body>
                      </Card>
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
                    marginBottom: "0pt",
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
                    // onClick={onSubmit}
                    type="submit"
                  >
                    Save Details
                  </Button>
                </div>
              ) : (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "10pt",
                    marginBottom: "0pt",
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
      </Grid>
    </Container>
  );
};

export default withTranslation()(CareManagerDetails);
