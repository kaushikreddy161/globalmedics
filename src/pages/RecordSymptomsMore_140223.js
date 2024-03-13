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

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./Login.css";

import SymptomsFev from "../assets/icon-sel-sym-fever.png";
import SymptomsSThroat from "../assets/icon-sel-sym-throat.png";
import SymptomsHeadache from "../assets/icon-sel-sym-headacke.png";

import SymptomsFevS from "../assets/icon-sel-sym-fever-sel.png";
import SymptomsSThroatS from "../assets/icon-sel-sym-throat-sel.png";
import SymptomsHeadacheS from "../assets/icon-sel-sym-headacke-sel.png";

import SymptomsNose from "../assets/icon-sel-sym-runnynose.png";
import SymptomsCough from "../assets/icon-sel-sym-cough.png";
import SymptomsUrine from "../assets/icon-sel-sym-urine.png";

import SymptomsNoseS from "../assets/icon-sel-sym-runnynose-sel.png";
import SymptomsCoughS from "../assets/icon-sel-sym-cough-sel.png";
import SymptomsUrineS from "../assets/icon-sel-sym-urine-sel.png";

import SymptomsBDifficulty from "../assets/icon-sel-sym-bdifficulty.png";
import SymptomsBowel from "../assets/icon-sel-sym-bowel.png";
import SymptomsEye from "../assets/icon-sel-sym-eye.png";

import SymptomsBDifficultyS from "../assets/icon-sel-sym-bdifficulty-sel.png";
import SymptomsBowelS from "../assets/icon-sel-sym-bowel-sel.png";
import SymptomsEyeS from "../assets/icon-sel-sym-eye-sel.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const RecordSymptoms = () => {
  const [radioValue, setRadioValue] = useState();

  const [listOne, setListOne] = useState();
  const [listTwo, setListTwo] = useState();

  const [fv, setFV] = useState(false);
  const [st, setST] = useState(false);
  const [ns, setNS] = useState(false);
  const [ha, setHA] = useState(false);
  const [cu, setCU] = useState(false);
  const [bd, setBD] = useState(false);
  const [bw, setBW] = useState(false);
  const [ey, setEY] = useState(false);
  const [ur, setUR] = useState(false);

  const [fever, setFever] = useState([{ name: "Fever", icon: SymptomsFev }]);
  const [sta, setSTA] = useState([
    { name: "Sore Throat", icon: SymptomsSThroat },
  ]);
  const [nose, setNOSE] = useState([{ name: "Nose", icon: SymptomsNose }]);
  const [hda, setHDA] = useState([
    { name: "Headache", icon: SymptomsHeadache },
  ]);
  const [cug, setCUG] = useState([{ name: "Cough", icon: SymptomsCough }]);
  const [btd, setBTD] = useState([
    { name: "Breathing Difficulty ", icon: SymptomsBDifficulty },
  ]);
  const [bwl, setBWL] = useState([{ name: "Bowel ", icon: SymptomsBowel }]);

  const [eye, setEYE] = useState([{ name: "Eyes ", icon: SymptomsEye }]);

  const [urn, setURN] = useState([{ name: "Urine", icon: SymptomsUrine }]);

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
    const ps = user.functions.getPatientSymptoms(pId); // one loved one based on care manager id
    ps.then((resp) => {
      if (resp) {
        for (var i=0;i<resp[0].symptoms[0].subSymptoms.length;i++)
        { 
          if (resp[0].symptoms[0].subSymptoms[i].selectionStatus == "inactive") {
            if (resp[0].symptoms[0].subSymptoms[i].label == "Fever") 
                symlist[j]={ "title": fever[0].name,"path":"/fever","icon": fever[0].icon};
            else if (resp[0].symptoms[0].subSymptoms[i].label == "Throat") 
                symlist[j]={ "title": sta[0].name,"path":"/throat","icon": sta[0].icon};
            else if (resp[0].symptoms[0].subSymptoms[i].label == "Nose") 
                symlist[j]={ "title": nose[0].name,"path":"/runnyNose","icon": nose[0].icon};
            else if (resp[0].symptoms[0].subSymptoms[i].label == "Headache") 
                symlist[j]={ "title": hda[0].name,"path":"/headache","icon": hda[0].icon};
            else if (resp[0].symptoms[0].subSymptoms[i].label == "Cough") 
                symlist[j]={ "title": cug[0].name,"path":"/cough","icon": cug[0].icon};
            else if (resp[0].symptoms[0].subSymptoms[i].label == "Breathing") 
                symlist[j]={ "title": btd[0].name,"path":"/fever","icon": btd[0].icon};
            else if (resp[0].symptoms[0].subSymptoms[i].label == "Bowel") 
                symlist[j]={ "title": bwl[0].name,"path":"/bowel","icon": bwl[0].icon};
            else if (resp[0].symptoms[0].subSymptoms[i].label == "Eyes") 
                symlist[j]={ "title": eye[0].name,"path":"/eyeIssues","icon": eye[0].icon};       
            else if (resp[0].symptoms[0].subSymptoms[i].label == "Urine") 
                symlist[j]={ "title": urn[0].name,"path":"/urine","icon": urn[0].icon};    
            j=j+1;
          }
        }
        setSList(symlist);
        // setStatus("1");
        // setSelLId(resp._id.toString());
      } else {
        alert("Patient ID not loaded..");
      }
    });
  }
};

  const onSubmit = () => {
    const path = `/recordVitals`;
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
          title="Record Symptoms"
          title2="Please record the symptoms being experienced by"
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="sr"
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
                            </ButtonGroup>
                          </div>
                      ))}
                      {/* ------------------- */}
                      <div style={{ marginLeft: "1.5rem" }}>
                        <ButtonGroup style={{ marginTop: "1.5rem" }}>

                          {/* <ToggleButton
                          key="1"
                            id="bw"
                            type="radio"
                            variant="outline-primary"
                            name="bw"
                            value="bw"
                            checked={bw}
                           // onClick={() => setBW(!bw)}
                            onClick={(e) => SymptomsChangeImage("bw", bw)}
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
                              src={bwl[0].icon}
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
                              {bwl[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                          key="2"
                            id="ey"
                            type="radio"
                            variant="outline-primary"
                            name="ey"
                            value="ey"
                            checked={ey}
                           // onClick={() => setEY(!ey)}
                            onClick={(e) => SymptomsChangeImage("ey", ey)}
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
                              src={eye[0].icon}
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
                              {eye[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                          key="3"
                            id="ur"
                            type="radio"
                            variant="outline-primary"
                            name="ur"
                            value="ur"
                            checked={ur}
                         //   onClick={() => setUR(!ur)}
                            onClick={(e) => SymptomsChangeImage("ur", ur)}
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
                              src={urn[0].icon}
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
                              {urn[0].name}
                            </div>
                          </ToggleButton> */}
                        </ButtonGroup>
                      </div>
                      {/* ------------------- */}
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
                Confirm
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default RecordSymptoms;
