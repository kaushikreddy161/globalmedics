import React, { useEffect, useContext, useState } from "react";
// import { UserContext } from "../contexts/user.context";
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
import IconHealthReports from "../assets/icon-pReports.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import IconAlzheimer from "../assets/icon-CC-alzheimer.png";
import IconArthritis from "../assets/icon-CC-arthritis.png";
import IconDiabetes from "../assets/icon-CC-diabetes.png";
import IconHeart from "../assets/icon-CC-heart.png";
import IconHypertension from "../assets/icon-CC-hypertension.png";
import IconKidney from "../assets/icon-CC-kidney.png";
import IconLung from "../assets/icon-CC-lung.png";
import IconParkinson from "../assets/icon-CC-parkinson.png";
import IconCancer from "../assets/icon-sym-sum-cnr.png";

import IconAlzheimerS from "../assets/icon-CC-alzheimer-sel.png";
import IconArthritisS from "../assets/icon-CC-arthritis-sel.png";
import IconDiabetesS from "../assets/icon-CC-diabetes-sel.png";
import IconHeartS from "../assets/icon-CC-heart-sel.png";
import IconHypertensionS from "../assets/icon-CC-hypertension-sel.png";
import IconKidneyS from "../assets/icon-CC-kidney-sel.png";
import IconLungS from "../assets/icon-CC-lung-sel.png";
import IconParkinsonS from "../assets/icon-CC-parkinson-sel.png";
import IconCancerS from "../assets/icon-sym-sum-cnr-sel.png";

import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";
import Typography from "@mui/material/Typography";

const list = [
  {
    name: "Heart Disease",
    source: IconHeart,
    navDir: "/comingSoon",
  },
  {
    name: "Diabetes",
    source: IconDiabetes,
    navDir: "/comingSoon",
  },
  {
    name: "Blood Pressure",
    source: IconHypertension,
    navDir: "/comingSoon",
  },
  {
    name: "Arthritis",
    source: IconArthritis,
    navDir: "/comingSoon",
  },
  {
    name: "Lung Disease",
    source: IconLung,
    navDir: "/comingSoon",
  },
  {
    name: "Alzheimer’s",
    source: IconAlzheimer,
    navDir: "/comingSoon",
  },
  {
    name: "Parkinson’s Disease",
    source: IconParkinson,
    navDir: "/comingSoon",
  },
  {
    name: "Kidney Disease",
    source: IconKidney,
    navDir: "/comingSoon",
  },
  {
    name: "Cancer",
    source: IconCancer,
    navDir: "/comingSoon",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ChronicConditions = () => {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const pId = activeAccount.idTokenClaims.sub;
  const user = "";

    const onBack = () => {
    const path = `/moduleSummaryTwo`;
    navigate(path);
  };
  const onNext = () => {
   // const path = `/bloodPressure`;
    //navigate(path);
  };
  //const { user } = useContext(UserContext);
  const datex = new Date();

  const [hd, setHD] = useState(false);
  const [di, setDI] = useState(false);
  const [bp, setBP] = useState(false);
  const [ar, setAR] = useState(false);
  const [ld, setLD] = useState(false);
  const [al, setAL] = useState(false);
  const [pd, setPD] = useState(false);
  const [kd, setKD] = useState(false);
  const [ca, setCA] = useState(false);

  const [heart, setHeart] = useState([{ name: "Heart Disease", icon: IconHeart }]);
  const [diabetes, setDia] = useState([{ name: "Diabetes", icon: IconDiabetes }]);
  const [bloodP, setBloodP] = useState([{ name: "Blood Pressure", icon: IconHypertension }]);
  const [arthritis, setArthritis] = useState([{ name: "Arthritis", icon: IconArthritis }]);
  const [lung, setLung] = useState([{ name: "Lung Disease", icon: IconLung }]);
  const [alzheimer, setAlzheimer] = useState([{ name: "Alzheimer’s", icon: IconAlzheimer }]);
  const [parkinson, setParkinson] = useState([{ name: "Parkinson’s Disease", icon: IconParkinson }]);
  const [kidney, setKidney] = useState([{ name: "Kidney Disease", icon: IconKidney }]);
  const [cancer, setCancer] = useState([{ name: "Cancer", icon: IconCancer }]);

  const SymptomsChangeImage = (val,vstatus) => {

    if(val == "hd") 
    { 
      setHD(!vstatus);
      if(!hd == true)
      {
        heart[0].icon = IconHeartS;   
      } else
      {
        heart[0].icon = IconHeart;     
      }
      setHeart([...heart]);
    }


    if(val == "di")
    {
      setDI(!vstatus);
       if(!di == true)
      {
        diabetes[0].icon = IconDiabetesS;   
      } else
      {
        diabetes[0].icon = IconDiabetes;     
      }
      setDia([...diabetes]);
    }


    if(val == "bp") 
    {
      setBP(!vstatus);
      if(!bp == true)
      {
        bloodP[0].icon = IconHypertensionS;   
      } else
      {
        bloodP[0].icon = IconHypertension;     
      }
      setBloodP([...bloodP]);
    }


    if(val == "ar") 
    { 
      setAR(!vstatus);
      if(!ar == true)
      {
        arthritis[0].icon = IconArthritisS;   
      } else
      {
        arthritis[0].icon = IconArthritis;     
      }
      setArthritis([...arthritis]);
    }

    if(val == "ld") 
    {
      setLD(!vstatus);
      if(!ld == true)
      {
        lung[0].icon = IconLungS;   
      } else
      {
        lung[0].icon = IconLung;     
      }
      setLung([...lung]);
    } 
 
    if(val == "al")
    { 
      setAL(!vstatus);
      if(!al == true)
      {
        alzheimer[0].icon = IconAlzheimerS;   
      } else
      {
        alzheimer[0].icon = IconAlzheimer;     
      }
      setAlzheimer([...alzheimer]);
    }
    
    if(val == "pd") 
    {
      setPD(!vstatus);
      if(!pd === true)
      {
        parkinson[0].icon = IconParkinsonS;   
      } else
      {
        parkinson[0].icon = IconParkinson;     
      }
      setParkinson([...parkinson]);
    }

    if(val == "kd") 
    { 
      setKD(!vstatus);
       if(!kd === true)
      {
        kidney[0].icon = IconKidneyS;   // S 
      } else
      {
        kidney[0].icon = IconKidney;     
      }
      setKidney([...kidney]);
    }

    if(val == "ca")
    { 
      setCA(!vstatus);
        if(!ca === true)
        {
          cancer[0].icon = IconCancerS;    // S
        } else
        {
          cancer[0].icon = IconCancer;     
        }
        setCancer([...cancer]);
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    ///  const path = `/healthVaultReportUpload`;
     // navigate(path, { state: { id: rtype } });
    alert("Selected Chronic Conditions Added Successfully");
  }
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
       title="Chronic Conditions"
       title2="Please select all the pre-existing chronic illnesses"
       title3="No login history found."
       limg="rl"
       rimg="cdr"
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
                          name="hd"
                          value="hd"
                          checked={hd}
                         // onClick={() => setFV(!fv)}
                          onClick={(e) => SymptomsChangeImage("hd", hd)}
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
                            src={heart[0].icon}
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
                            {heart[0].name}
                          </div>
                        </ToggleButton>
                        <ToggleButton
                        key="2"
                          id="st"
                          type="radio"
                          // variant={idx % 2 ? "outline-success" : "outline-danger"}
                          variant="outline-primary"
                          // variant="outline"
                          name="di"
                          value="di"
                          checked={di}
                         // onClick={(e) => setST(!st)}
                          onClick={(e) => SymptomsChangeImage("di", di)}
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
                            src={diabetes[0].icon}
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
                            {diabetes[0].name}
                          </div>
                        </ToggleButton>
                        <ToggleButton
                          id="ns"
                          type="radio"
                          variant="outline-primary"
                          name="bp"
                          value="bp"
                          checked={bp}
                         // onClick={() => setNS(!ns)}
                          onClick={(e) => SymptomsChangeImage("bp", bp)}
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
                            src={bloodP[0].icon}
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
                            {bloodP[0].name}
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
                          name="ar"
                          value="ar"
                          checked={ar}
                         // onClick={() => setHA(!ha)}
                          onClick={(e) => SymptomsChangeImage("ar", ar)}
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
                            src={arthritis[0].icon}
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
                            {arthritis[0].name}
                          </div>
                        </ToggleButton>
                        <ToggleButton
                          id="cu"
                          type="radio"
                          variant="outline-primary"
                          name="ld"
                          value="ld"
                          checked={ld}
                         // onClick={() => setCU(!cu)}
                          onClick={(e) => SymptomsChangeImage("ld", ld)}
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
                            src={lung[0].icon}
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
                            {lung[0].name}
                          </div>
                        </ToggleButton>
                        <ToggleButton
                          id="bd"
                          type="radio"
                          variant="outline-primary"
                          name="al"
                          value="al"
                          checked={al}
                        //  onClick={() => setBD(!bd)}
                          onClick={(e) => SymptomsChangeImage("al", al)}
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
                            src={alzheimer[0].icon}
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
                            {alzheimer[0].name}
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
                          name="pd"
                          value="pd"
                          checked={pd}
                        //  onClick={() => setBW(!bw)}
                          onClick={(e) => SymptomsChangeImage("pd", pd)}
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
                            src={parkinson[0].icon}
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
                            {parkinson[0].name}
                          </div>
                        </ToggleButton>
                        <ToggleButton
                          id="ey"
                          type="radio"
                          variant="outline-primary"
                          name="kd"
                          value="kd"
                          checked={kd}
                       //   onClick={() => setEY(!ey)}
                          onClick={(e) => SymptomsChangeImage("kd", kd)}
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
                            src={kidney[0].icon}
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
                            {kidney[0].name}
                          </div>
                        </ToggleButton>
                        <ToggleButton
                          id="ur"
                          type="radio"
                          variant="outline-primary"
                          name="ca"
                          value="ca"
                          checked={ca}
                        //  onClick={() => setUR(!ur)}
                          onClick={(e) => SymptomsChangeImage("ca", ca)}
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
                            src={cancer[0].icon}
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
                            {cancer[0].name}
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
              Submit
            </Button>
          </div>
        </Card>
      </div>
    </Grid>
  </Container>
    // <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
    //   <Grid
    //     container
    //     spacing={0}
    //     direction="column"
    //     alignItems="center"
    //     style={{ minHeight: "100vh", paddingBottom: "0rem" }}
    //   >
    // <FixedHeader
    //       title="Chronic Conditions"
    //       title2="Please select all the pre-existing chronic illnesses"
    //       title3="No login history found."
    //       limg="rl"
    //       rimg="cdr"
    //     />
    //     <div style={{ height: "1rem" }}></div>
    //     <div className="car-hr">
    //       <CarouselSlider />
    //     </div>
    //     <div className="form-cd">
    //       <Card
    //         style={{
    //           borderTop: "6px solid #1D5A90",
    //           borderRadius: "10px",
    //           padding: "20pt",
    //           maxWidth: "500px",
    //           position: "absolute",
    //           zIndex: "1",
    //         }}
    //         className="left"
    //       >
    //          <Typography
    //       style={{
    //         marginTop: "-1rem",
    //         marginBottom: "0.5rem",
    //         color: "#209F85",
    //         marginLeft: "-1rem",
    //         fontFamily: "Helvetica",
    //         fontSize: "16px",
    //       }}
    //     >
    //       Select the ailments
    //     </Typography>
    //         <Box sx={{ flexGrow: 1 }}>
    //           <Grid
    //             container
    //             item
    //             spacing={3}
    //             // container
    //             // spacing={{ xs: 2, md: 3 }}
    //             // columns={{ xs: 4, sm: 8, md: 12 }}
    //             style={{
    //               maxWidth: "500px",
    //               alignItems: "center",
    //               justifyContent: "center",
    //             }}
    //           >
    //             {list.map((item) => (
    //               <Grid item xs={4} sm={4} md={4}>
    //                 <>
    //                   <Item
    //                     onClick={() => onSubmit(`${item.type}`)}
    //                     sx={{ cursor: "pointer" }}
    //                     style={{
    //                       borderTop: "6px solid #1D5A90",
    //                       borderRadius: "10pt",
    //                       boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
    //                     }}
    //                     className="CatCard"
    //                   >
    //                     <p className="CatImg">
    //                       <img
    //                         src={item.source}
    //                         style={{
    //                           width: "60%",
    //                         }}
    //                       />
    //                     </p>
    //                     <p className="CatName">{item.name}</p>
    //                   </Item>
    //                 </>
    //               </Grid>
    //             ))}
    //           </Grid>
    //         </Box>
    //         <div
    //           style={{
    //             textAlign: "center",
    //             marginTop: "10pt",
    //             marginBottom: "10pt",
    //           }}
    //         >
    //           <Button
    //             style={{
    //               background: "#1D5A90",
    //               borderRadius: 50,
    //               width: "50%",
    //               color: "#ffffff",
    //               textTransform: "none",
    //             }}
    //             onClick={onSubmit}
    //             type="submit"
    //           >
    //             Submit
    //           </Button>
    //         </div>
    //       </Card>
    //     </div>
    //     <div style={{ height: "50vh" }}></div>
    //   </Grid>
    // </Container>
  );
};

export default ChronicConditions;
