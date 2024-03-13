import React, { useEffect, useContext, useState } from "react";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { Container } from 'react-bootstrap';
import { IdTokenData } from '../components/DataDisplay';
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Grid from "@mui/material/Grid";
import FixedHeader from "../components/FixedHeader";
import PhoneInput from 'react-phone-input-2';
import { Button, Divider } from "@mui/material";

/***
 * Component to detail ID token claims with a description for each claim. For more details on ID token claims, please check the following links:
 * ID token Claims: https://docs.microsoft.com/en-us/azure/active-directory/develop/id-tokens#claims-in-an-id-token
 * Optional Claims:  https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-optional-claims#v10-and-v20-optional-claims-set
 */
export const Home = () => {
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();

  //  console.log("instance:", activeAccount.idTokenClaims.family_name);
   // console.log("instance:", activeAccount.idTokenClaims.given_name);
    const [fName, setfName] = useState();
    const [lName, setlName] = useState();
   
   // const [fName, setfName] = useState(activeAccount.idTokenClaims.family_name);
    //const [lName, setlName] = useState(activeAccount.idTokenClaims.given_name);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [status, setStatus] = useState("0");
    const [value, setValue]= useState("");

    const onConfirm = () => {
      //  navigate(`/addLovedOnes`);
      console.log("Home");
      };
    
      const onSubmit = async (event) => {
        event.preventDefault();
      };

    return (
        <>
        <AuthenticatedTemplate>
       {activeAccount ? (
       <Container>
       <IdTokenData idTokenClaims={activeAccount.idTokenClaims} />
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
        />
        <div className="form-w">
          <Card
            style={{
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
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
                            }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      {/* <Divider style={{ margin: "4pt" }} /> */}
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
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
                            }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      {/* <Divider style={{ margin: "4pt" }} /> */}
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
                              color: "#ADAAA7",
                              border: "1px solid #ced4da",
                            }}
                          ></Form.Control>
                        </Card.Body>
                      </Card>
                      {/* <Divider style={{ margin: "4pt" }} /> */}
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
                          <label>PHONE</label>
                             <PhoneInput
                             country={'in'}
                            placeholder="Enter phone number"
                            name="phone"
                            value={value}
                            onChange={setValue}
                            />
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
                    onClick={onSubmit}
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
                ) : null}
            </AuthenticatedTemplate>
        </>
    );
};