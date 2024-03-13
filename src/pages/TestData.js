import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user.context";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";

import { useNavigate, useLocation } from "react-router-dom";
import { BSON } from "realm-web";
import cypherData from "../crypt/cypherData";
import decryptData from "../crypt/decryptData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import Male from "../assets/img-male.png";
import Female from "../assets/img-female.png";
import Others from "../assets/img-others.png";

import "./Main.css";

const PatientPersonalDetailsForm = () => {
  const { user} = useContext(UserContext);


  // const location = useLocation();

  const navigate = useNavigate();

  const [age, setpAge] = useState("");



  const onSubmit = async (event) => {
    event.preventDefault();
    if (user) {
      let id = new BSON.ObjectID();
      const createx = user.functions.createPatientDetailData(
        id,
        age,
      );
      createx.then((resp) => {
        alert("Patient Details Added Successfully");
        navigate(`/patientPersonalDetailsForm_2`);
      });
    } else {
      navigate(`/setupCareRing`);
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




        <div className="form-p">
          <Card>
            <Card.Body>
              <label>What is their Date of Birth</label>
              <Form.Control
                className="name-input"
                type="date"
                placeholder="Enter patient’s date of birth"
                
                name="age"
                value={age}
                onChange={(e) => setpAge(e.target.value)}

                
              ></Form.Control>
            </Card.Body>
              <Button onClick={onSubmit}>Update details</Button>
          </Card>
        </div>














      </Grid>
    </Container>
  );
};

export default PatientPersonalDetailsForm;
