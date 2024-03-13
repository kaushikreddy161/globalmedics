// import React, { useEffect, useState } from "react";
import React, { useContext, useState, useEffect } from "react";
//import { UserContext } from "../contexts/user.context";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";

import IconFeedbackLeft from "../assets/icon-feedback1.png";
import IconFeedbackRight from "../assets/icon-feedback2.png";

import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";

import { useNavigate, useLocation } from "react-router-dom";
import { BSON } from "realm-web";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import set from "date-fns/set/index.js";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { useHistory } from "react-router-dom";
import FixedHeader from "../components/FixedHeader";
import "./Main.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const styles = {
  cardAction: {
    display: "red",
    textAlign: "initial",
  },
};

const UserHelpForm = () => {
 // const { user } = useContext(UserContext);
  
 const location = useLocation();
 const { instance } = useMsal();
 const activeAccount = instance.getActiveAccount();
 const pId = activeAccount.idTokenClaims.sub;
 const user = "";
 const pName = "";
 const selectedPatient = ""; 
  const navigate = useNavigate();
  const [likePage, setlPage] = useState("");
  const [notLPage, setnLPage] = useState("");
  const [improve, setimprove] = useState("");

  const datex = new Date();
  const [selLid, setSelLId] = useState("");
  const [status, setStatus] = useState("0");

  // const history = useHistory();

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onBack = () => {
    // const path = `/healthReports`;
    // navigate(path);
    navigate(-1);
  };

  const loadUser = async () => {
    //   console.log('user:',user.id);
    //   console.log('location:',location.state.lid);
    if (user) {
      let ccid = BSON.ObjectID(user.id).toString();
      const lovd = user.functions.getLovedOneCP(ccid); // one loved one based on care manager id
      // console.log('else direct:',ccid);
      lovd.then((resp) => {
        if (resp) {
          setStatus("1");
          setSelLId(resp._id.toString());
        } else {
          alert("Loved Ones ID not loaded..");
        }
      });
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (user) {
        //  console.log('auth:',user.id);
        let dt = new Date();
        let id = new BSON.ObjectID();
        let cid = BSON.ObjectID(user.id).toString();
        let pid = selLid;
        const createx = user.functions.feedback(
          id,
          pid,
          "allpages",
          likePage,
          notLPage,
          improve,
          cid,
          "careManager",
          dt,
          "active",
          "GlobalMedics2021"
        );
        createx.then((resp) => {
          //  console.log("resp:", resp);
          alert("Feedback Submitted Successfully");
          // navigate(`/moduleSummary`);
          navigate(-1);
        });
      }
    } catch (error) {
      //  alert(error);
      console.log("error:", error);
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
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        {/* <div
          style={{
            backgroundColor: "#EBEBEB",
            paddingTop: "2rem",
          }}
        > */}
        <FixedHeader
          title="Help"
          title2="Please write to us for any help you need in using the service."
          title3=" No Data Available"
          limg="fl"
          rimg="hlp"
        />
        <div className="form-f">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              marginTop: "0rem",
              marginBottom: "2rem",
              borderRadius: "10px",
              padding: "5pt",
              maxWidth: "500px",
              // position: "absolute",
              zIndex: "1",
            }}
            className="left"
          >
            <Card.Body>
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
                      padding: "2opt",
                      border: "2px solid white",
                    }}
                  >
                    <Card.Body>
                      <label>Please enter your query here</label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        style={{ marginTop: "0.5rem" }}
                        onChange={(e) => setlPage(e.target.value)}
                      />
                    </Card.Body>
                  </Card>
                  <Divider style={{ margin: "4pt" }} />
                 </Form.Group>
              </Form>
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
                onClick={onSubmit}
                type="submit"
                // onClick={history.goback}
              >
                Send
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default UserHelpForm;
