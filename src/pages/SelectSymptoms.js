import React, { useEffect, useContext, useState } from "react";
//import { UserContext } from "../contexts/user.context";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';

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
import "./Login.css";

import IconPatientImage from "../assets/icon-patient-photo.png";

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

const SelectSymptoms = () => {
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

  const [urn, setURN] = useState([{ name: "Urine ", icon: SymptomsUrine }]);

  const [list1, setList1] = useState([
    { name: "Fever", icon: SymptomsFev, value: "1" },
    { name: "Sore Throat", icon: SymptomsSThroat, value: "2" },
    { name: "Nose", icon: SymptomsNose, value: "3" },
  ]);
  const [list2, setList2] = useState([
    { name: "Headache", icon: SymptomsHeadache, value: "1" },
    { name: "Cough", icon: SymptomsCough, value: "2" },
    { name: "Breathing Difficulty ", icon: SymptomsBDifficulty, value: "3" },
  ]);
  const [list3, setList3] = useState([
    { name: "Bowel", icon: SymptomsBowel, value: "1" },
    { name: "Eyes", icon: SymptomsEye, value: "2" },
    { name: "Urine", icon: SymptomsUrine, value: "3" },
  ]);

  const navigate = useNavigate();

  // const { user, pId, pName } = useContext(UserContext);
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const pId = activeAccount.idTokenClaims.sub;
  const user = "";
  const pName = "";
  const selectedPatient = ""; 

  
  const datex = new Date();
  const [selLid, setSelLId] = useState("");
  const [status, setStatus] = useState("0");

  useEffect(() => {
    //  loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pId]);

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

  const SymptomsChangeImage = (val,vstatus) => {

    if(val == "fv") 
    { 
      setFV(!vstatus);
      if(!fv == true)
      {
        fever[0].icon = SymptomsFevS;   
      } else
      {
        fever[0].icon = SymptomsFev;     
      }
      setFever([...fever]);
    }


    if(val == "st")
    {
      setST(!vstatus);
       if(!st == true)
      {
        sta[0].icon = SymptomsSThroatS;   
      } else
      {
        sta[0].icon = SymptomsSThroat;     
      }
      setSTA([...sta]);
    }


    if(val == "ns") 
    {
      setNS(!vstatus);
      if(!ns == true)
      {
        nose[0].icon = SymptomsNoseS;   
      } else
      {
        nose[0].icon = SymptomsNose;     
      }
      setNOSE([...nose]);
    }


    if(val == "ha") 
    { 
      setHA(!vstatus);
      if(!ha == true)
      {
        hda[0].icon = SymptomsHeadacheS;   
      } else
      {
        hda[0].icon = SymptomsHeadache;     
      }
      setHDA([...hda]);
    }

    if(val == "cu") 
    {
      setCU(!vstatus);
      if(!cu == true)
      {
        cug[0].icon = SymptomsCoughS;   
      } else
      {
        cug[0].icon = SymptomsCough;     
      }
      setCUG([...cug]);
    } 
 
    if(val == "bd")
    { 
      setBD(!vstatus);
      if(!bd == true)
      {
        btd[0].icon = SymptomsBDifficultyS;   
      } else
      {
        btd[0].icon = SymptomsBDifficulty;     
      }
      setBTD([...btd]);
    }
    
    if(val == "bw") 
    {
      setBW(!vstatus);
      if(!bw === true)
      {
        bwl[0].icon = SymptomsBowelS;   
      } else
      {
        bwl[0].icon = SymptomsBowel;     
      }
      setBWL([...bwl]);
    }

    if(val == "ey") 
    { 
      setEY(!vstatus);
       if(!ey === true)
      {
        eye[0].icon = SymptomsEyeS;   
      } else
      {
        eye[0].icon = SymptomsEye;     
      }
      setEYE([...eye]);
    }

    if(val == "ur")
    { 
      setUR(!vstatus);
        if(!ur === true)
        {
          urn[0].icon = SymptomsUrineS;   
        } else
        {
          urn[0].icon = SymptomsUrine;     
        }
        setURN([...urn]);
    }
  }
  const onSubmit = (event) => {
   event.preventDefault();
   let symp =[];
   symp = [{"patientGroup":"Normal","symptomId":"","subSymptoms":[{"label":"Fever", "symptomsSubCatId":"","selectionStatus":fv === true ? "active" : "inactive"},{"label":"Throat", "symptomsSubCatId":"","selectionStatus":st === true ? "active" : "inactive"},{"label":"Nose", "symptomsSubCatId":"","selectionStatus":ns === true ? "active" : "inactive"},{"label":"Headache", "symptomsSubCatId":"","selectionStatus":ha === true ? "active" : "inactive"},{"label":"Cough", "symptomsSubCatId":"","selectionStatus":cu === true ? "active" : "inactive"},{"label":"Breathing", "symptomsSubCatId":"","selectionStatus":bd === true ? "active" : "inactive"},{"label":"Bowel", "symptomsSubCatId":"","selectionStatus":bw === true ? "active" : "inactive"},{"label":"Eyes", "symptomsSubCatId":"","selectionStatus":ey === true ? "active" : "inactive"},{"label":"Urine", "symptomsSubCatId":"","selectionStatus":ur === true ? "active" : "inactive"}]}];
     try {
       if (user) {
         //  console.log('auth:',user.id);
         let dt = new Date();
         let id = new BSON.ObjectID();
         let cid = BSON.ObjectID(user.id).toString();
         //  let pid = selLid;
         let pid = pId;
         const createx = user.functions.createPatientSymptoms(
           id,
           pid,
           symp,          
           "careManager",
           cid,
           dt.toDateString(),
           "active",
           "GlobalMedics2021"
         );
     //    console.log("create:", createx);
         createx.then((resp) => {
       //     console.log("resp:", resp);
           alert("Selected Symptoms Added Successfully");
           navigate(`/setVitals`);
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
        <FixedHeader
          title="Select Symptoms"
          title2="Daily feedback requested from patients"
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
                      {/* -------------------------- */}
                      <div style={{ marginLeft: "1.5rem" }}>
                        <ButtonGroup>
                          <ToggleButton
                           key="1"
                            id="fv"
                            type="radio"
                            // variant={idx % 2 ? "outline-success" : "outline-danger"}
                            variant="outline-primary"
                            // variant="outline"
                            name="fv"
                            value="fv"
                            checked={fv}
                           // onClick={() => setFV(!fv)}
                            onClick={(e) => SymptomsChangeImage("fv", fv)}
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
                              src={fever[0].icon}
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
                              {fever[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                          key="2"
                            id="st"
                            type="radio"
                            // variant={idx % 2 ? "outline-success" : "outline-danger"}
                            variant="outline-primary"
                            // variant="outline"
                            name="st"
                            value="st"
                            checked={st}
                           // onClick={(e) => setST(!st)}
                            onClick={(e) => SymptomsChangeImage("st", st)}
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
                              src={sta[0].icon}
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
                              {sta[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="ns"
                            type="radio"
                            variant="outline-primary"
                            name="ns"
                            value="ns"
                            checked={ns}
                           // onClick={() => setNS(!ns)}
                            onClick={(e) => SymptomsChangeImage("ns", ns)}
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
                              src={nose[0].icon}
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
                              {nose[0].name}
                            </div>
                          </ToggleButton>
                        </ButtonGroup>
                      </div>
                      {/* -------------------------- */}
                      <div style={{ marginLeft: "1.5rem" }}>
                        <ButtonGroup style={{ marginTop: "1.5rem" }}>
                          {/* {list2.map((ltwo, idy) => ( */}
                          <ToggleButton
                            id="ha"
                            type="radio"
                            variant="outline-primary"
                            name="ha"
                            value="ha"
                            checked={ha}
                           // onClick={() => setHA(!ha)}
                            onClick={(e) => SymptomsChangeImage("ha", ha)}
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
                              src={hda[0].icon}
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
                              {hda[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="cu"
                            type="radio"
                            variant="outline-primary"
                            name="cu"
                            value="cu"
                            checked={cu}
                           // onClick={() => setCU(!cu)}
                            onClick={(e) => SymptomsChangeImage("cu", cu)}
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
                              src={cug[0].icon}
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
                              {cug[0].name}
                            </div>
                          </ToggleButton>
                          <ToggleButton
                            id="bd"
                            type="radio"
                            variant="outline-primary"
                            name="bd"
                            value="bd"
                            checked={bd}
                          //  onClick={() => setBD(!bd)}
                            onClick={(e) => SymptomsChangeImage("bd", bd)}
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
                              src={btd[0].icon}
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
                              {btd[0].name}
                            </div>
                          </ToggleButton>

                          {/* ))} */}
                        </ButtonGroup>
                      </div>
                      {/* ------------------- */}
                      <div style={{ marginLeft: "1.5rem" }}>
                        <ButtonGroup style={{ marginTop: "1.5rem" }}>
                          {/* {list2.map((ltwo, idy) => ( */}
                          <ToggleButton
                            id="bw"
                            type="radio"
                            variant="outline-primary"
                            name="bw"
                            value="bw"
                            checked={bw}
                          //  onClick={() => setBW(!bw)}
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
                            id="ey"
                            type="radio"
                            variant="outline-primary"
                            name="ey"
                            value="ey"
                            checked={ey}
                         //   onClick={() => setEY(!ey)}
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
                            id="ur"
                            type="radio"
                            variant="outline-primary"
                            name="ur"
                            value="ur"
                            checked={ur}
                          //  onClick={() => setUR(!ur)}
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
                          </ToggleButton>

                          {/* ))} */}
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

export default SelectSymptoms;
