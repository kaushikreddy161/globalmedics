import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";

import { Card } from "react-bootstrap";
import { alert } from "react-bootstrap-confirmation";
import { Button, Divider, TextField } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BSON } from "realm-web";
import decryptData from "../crypt/decryptData";
import cypherData from "../crypt/cypherData";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import CarouselSlider from "./CarouselSlider";
import FixedHeader from "../components/FixedHeader";
import "./Main.css";

import VitalsTem from "../assets/icon-set-vit-tem.png";
import VitalsBPressure from "../assets/icon-set-vit-bprs.png";
import VitalsPRate from "../assets/icon-set-vit-prate.png";

import VitalsTemS from "../assets/icon-set-vit-tem-sel.png";
import VitalsBPressureS from "../assets/icon-set-vit-bprs-sel.png";
import VitalsPRateS from "../assets/icon-set-vit-prate-sel.png";

import VitalsRes from "../assets/icon-set-vit-respiratory.png";
import VitalsSPO2 from "../assets/icon-set-vit-spo2.png";
import VitalsBSugar from "../assets/icon-set-vit-bsugar.png";

import VitalsResS from "../assets/icon-set-vit-respiratory-sel.png";
import VitalsSPO2S from "../assets/icon-set-vit-spo2-sel.png";
import VitalsBSugarS from "../assets/icon-set-vit-bsugar-sel.png";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import AddRecord from "../assets/icon-add-records.png";
import AddRecordS from "../assets/icon-add-records.png";

import "./Login.css";

import IconPatientImage from "../assets/icon-patient-photo.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const RecordVitalsMore = () => {
  const [radioValue, setRadioValue] = useState();

  const [listOne, setListOne] = useState();
  const [listTwo, setListTwo] = useState();

  const [te, setTE] = useState(false);
  const [bp, setBP] = useState(false);
  const [pr, setPR] = useState(false);
  const [rr, setRR] = useState(false);
  const [sp, setSP] = useState(false);
  const [bs, setBS] = useState(false);

  const [ar, setAR] = useState(false);

  const [tempe, setTempe] = useState([
    { name: "Temperature", icon: VitalsTem },
  ]);

  const [bpr, setBPR] = useState([
    { name: "Blood Pressure", icon: VitalsBPressure },
  ]);

  const [pra, setPRA] = useState([{ name: "Pulse Rate", icon: VitalsPRate }]);

  const [rra, setRRA] = useState([
    { name: "Respiratory Rate", icon: VitalsRes },
  ]);

  const [spo, setSPO] = useState([{ name: "SPO2", icon: VitalsSPO2 }]);

  const [bsr, setBSR] = useState([
    { name: "Blood Sugar ", icon: VitalsBSugar },
  ]);
  const [adr, setADR] = useState([{ name: "More ", icon: AddRecord }]);
  const [list1, setList1] = useState([
    { name: "Temperature", icon: VitalsTem, value: "1" },
    { name: "Blood Pressure", icon: VitalsBPressure, value: "2" },
    { name: "Pulse Rate", icon: VitalsPRate, value: "3" },
  ]);
  const [list2, setList2] = useState([
    { name: "Respiratory Rate", icon: VitalsRes, value: "1" },
    { name: "SPO2", icon: VitalsSPO2, value: "2" },
    { name: "Blood Sugar ", icon: VitalsBSugar, value: "3" },
  ]);

  const navigate = useNavigate();

  const { user, pId, pName } = useContext(UserContext);
  const datex = new Date();
  const [selLid, setSelLId] = useState("");
  const [status, setStatus] = useState("0");
  const [slist, setSList] = useState([]);

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
}, [pId]);

const loadUser = async () => {
  //   console.log('user:',user.id);
  //   console.log('location:',location.state.lid);
  let symlist = [];
  if (user) {
    let ccid = BSON.ObjectID(user.id).toString();
    let j=0;
    const ps = user.functions.getPatientVitals(pId); // one loved one based on care manager id
    ps.then((resp) => {
      if (resp) {
        for (var i=0;i<resp[0].vitalsList.length;i++)
        { 
          if (resp[0].vitalsList[i].selectionStatus == "inactive") {
            if (resp[0].vitalsList[i].title == "BloodPressure") 
                symlist[j]={ "title": bpr[0].name,"path":"/bloodPressure","icon": bpr[0].icon};
            else if (resp[0].vitalsList[i].title == "PulseRate") 
                symlist[j]={ "title": pra[0].name,"path":"/pulseRate","icon": pra[0].icon};
            else if (resp[0].vitalsList[i].title == "RespiratoryRate") 
                symlist[j]={ "title": rra[0].name,"path":"/breathingRate","icon": rra[0].icon};
            else if (resp[0].vitalsList[i].title == "SPO2") 
                symlist[j]={ "title": spo[0].name,"path":"/oxygenSaturation","icon": spo[0].icon};
            else if (resp[0].vitalsList[i].title == "BloodSugar") 
                symlist[j]={ "title": bsr[0].name,"path":"/bloodSugar","icon": bsr[0].icon};
            else if (resp[0].vitalsList[i].title == "Temperature") 
                symlist[j]={ "title": tempe[0].name,"path":"/temperature","icon": tempe[0].icon};    
            j=j+1;
          }
        }
        setSList(symlist);
      } else {
        alert("Patient ID not loaded..");
      }
    });
  }
};

  const VitalChangeImage = (val) => {
    if (val.value === "te" && te === true) {
      tempe[0].icon = VitalsTemS;
    } else if (val.value === "te" && te === false) {
      tempe[0].icon = VitalsTem;
    }
    setTempe([...tempe]);

    if (val.value === "bp" && bp === true) {
      bpr[0].icon = VitalsBPressureS;
    } else if (val.value === "bp" && bp === false) {
      bpr[0].icon = VitalsBPressure;
    }
    setBPR([...bpr]);

    if (val.value === "pr" && pr === true) {
      pra[0].icon = VitalsPRateS;
    } else if (val.value === "pr" && pr === false) {
      pra[0].icon = VitalsPRate;
    }
    setPRA([...pra]);

    if (val.value === "rr" && rr === true) {
      rra[0].icon = VitalsResS;
    } else if (val.value === "rr" && rr === false) {
      rra[0].icon = VitalsRes;
    }
    setRRA([...rra]);

    if (val.value === "sp" && sp === true) {
      spo[0].icon = VitalsSPO2S;
    } else if (val.value === "sp" && sp === false) {
      spo[0].icon = VitalsSPO2;
    }
    setSPO([...spo]);

    if (val.value === "bs" && bs === true) {
      bsr[0].icon = VitalsBSugarS;
    } else if (val.value === "bs" && bs === false) {
      bsr[0].icon = VitalsBSugar;
    }
    setBSR([...bsr]);

    if (val.value === "ar" && ar === true) {
      adr[0].icon = AddRecordS;
    } else if (val.value === "ar" && ar === false) {
      adr[0].icon = AddRecord;
    }
    setADR([...adr]);
  };
 
  const onSubmit = () => {
    const path = `/dailyCheckOut`;
    navigate(path);
  };

  const onAddMore = () => {
    const path = `/recordSymptomsMore`;
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
        <FixedHeader
          title="Record Vitals"
          title2="Please record measured values for selected vitals for"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="dcr"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-dc">
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <Card.Body>
              <div className="container">
                <p
                  style={{
                    color: "#209F85",
                    marginTop: "0rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {/* How well did you eat? */}
                </p>
                <div className="form-container">
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      style={{
                        // maxWidth: "590px",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0",
                      }}
                    >
                        {slist.map((data, index) => (
                          <div style={{ marginLeft: "1.5rem" }}>
                            <ButtonGroup>
                             <ToggleButton
                             key={index}
                            id="fv"
                            type="radio"
                            variant="outline-primary"
                            name="fv"
                          //  value="fv"
                          //  checked={fv}
                            onClick={() => navigate(data.path)}
                            style={{
                              borderTop: "6px solid #1D5A90",
                              borderRadius: "10pt",
                              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                              marginRight: "2rem",
                              borderLeft: "0px solid #fff",
                              borderRight: "0px solid #fff",
                              borderBottom: "0px solid #fff",
                            }}
                            className="icon-sv"
                          >
                            <img
                              src={data.icon}
                              style={{
                                width: "60%",
                              }}
                            />

                            <div
                              className="icon-text"
                              style={{
                                lineHeight: "1rem",
                                marginTop: "0.3rem",
                                marginBottom: "0rem",
                              }}
                            >
                              {data.title}
                            </div>
                          </ToggleButton> 
                          <div style={{height:"2px"}}></div>
                            </ButtonGroup>
                          </div>
                      ))}                                             
                    </Grid>
                  </Box>
                </div>
              </div>
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
              >
                Done
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default RecordVitalsMore;
