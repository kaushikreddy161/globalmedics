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
import CarouselSlider from "./CarouselSlider";
import "./Main.css";

const ManageConsent = () => {
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
        //  setLock("true");
      });
    }
  };

  const onConfirm = () => {
    navigate(`/patientpersonalDetailsForm`, { state: { lid: lid } });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (
      email === "" ||
      nickName === "" ||
      relationName === "" ||
      phoneNumber === ""
    ) {
      alert(
        "Please enter the data for Relation, Email, Phone Number and Nickname"
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
        <FixedHeader
          title="Customise Access"
          title2="Set permission levels for Carer to access Papa’s health data."
          limg="rl"
          rimg="rc"
        />
                <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-hr">
          <Card
            style={{
              marginTop: "1.5rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
            }}
            className="left"
          >
            <div style={{ height: "5vh" }}></div>
          </Card>
        </div>
        {/* </div> */}
      </Grid>
    </Container>
  );
};

export default ManageConsent;
