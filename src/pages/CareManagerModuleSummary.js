import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { BSON } from "realm-web";

import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button, Divider } from "@mui/material";
import ImgCareGiver from "../assets/img-care-giver.png";
import ImgNewCareGiver from "../assets/img-new-care-giver.png";
import IconHelp from "../assets/icon-help.png";
import IconReject from "../assets/icon-reject.png";
import IconAccept from "../assets/icon-accept.png";
import IconCheckbox from "../assets/icon-checkbox.png";

// import IconProviders from "../assets/icon-eg-providers.png";

import IconSymptoms from "../assets/icon-rc-record-symptoms.png";
import IconProviders from "../assets/icon-eg-providers-n.png";
import IconNext from "../assets/icon-next.png";

import IconManageLove from "../assets/icon-manage-love.png";
import IconManageCare from "../assets/icon-manage-care.png";
import IconSetUpServices from "../assets/icon-set-up-services.png";
import IconHealthVault from "../assets/icon-health-vault.png";
import IconRemoteCare from "../assets/icon-rc-record-vitals.png";
import IconMonitor from "../assets/icon-rc-monitor.png";

import IconInfo from "../assets/icon-help.png";

import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";

import "./Main.css";

const actionList = [
  {
    lovedOne: "/inviteALovedOne",
    careRings: "/careRings",
    selectServices: "/selectServices",
    healthReports: "/healthReports",
    vitals: "/vitals",
    symptoms: "/symptoms",
    remote: "/dailyCheckInSummary",
  },
];


const CareManagerModuleSummary = () => {
  const { user, pId, pName, selectedPatient,adbuser } = useContext(UserContext);
  const navigate = useNavigate();
  
  const addMember = () => {
    // const path = `/familyMembersConsent`;
    let rtype = "loc";
    const path = `/personaliseECard`;
    //navigate(path);
    navigate(path, { state: { id: rtype } });
  }

  const onDetails = () => {
    // const path = `/seekHelp`;
    const path = `/comingSoon`;
    navigate(path);
  };
  
  const [CareGivers, setCareGivers] = useState([]);
  const [todoTitleList,setToDoTitlesList] = useState([]);
  const [todoUserList,setToDoUserList] = useState([]);

useEffect(() => {
  loadToDo();
  loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
}, [pId,setToDoTitlesList,todoTitleList]);


const loadToDo = async () => {
  console.log("todoList");
   const tdList = user.functions.getToDoTitleList("careManagerModuleSummary");
   tdList.then((resL) => {
     if (resL) {
        setToDoTitlesList(resL[0]['itemsList']);
       }
   });

   const tdListUser = user.functions.getToDoTitleList(pId,"careManagerModuleSummary");
   tdListUser.then((resUL) => {
     if (resUL) {
       console.log("resul:", resUL);
      setToDoUserList(resUL);
    //  console.log("ToDouser:", resUL[0]['todoList']);
       }
   });
};

const loadUser = async () => {
  if (user) {
    const pFamily = user.functions.getPatientCaregiver(pId); // to fetch all loved ones of that care taker
    pFamily.then((resp) => {
      if (resp) {
        setCareGivers(resp);
      } else {
        alert("Local Care Givers Not Added..");
        // navigate(`/addLovedOnes`);
      }
    });
  }
};


  const [statusAccept, setStatusAccept] = useState(false);
  const [statusReject, setStatusReject] = useState(false);

  const changeAccept = () => {
    if (statusAccept == false) {
      setStatusAccept(true);
    } if (statusAccept == true) {
      setStatusAccept(false);
    }
  }
  const changeReject = () => {
    if (statusReject == false) {
      setStatusReject(true);
    } if (statusReject == true) {
      setStatusReject(false);
    }
  }
  
  let pname = pName;

  const [statusAccept1, setStatusAccept1] = useState(false);
  const [statusReject1, setStatusReject1] = useState(false);

  const changeAccept1 = () => {
    if (statusAccept1 == false) {
      setStatusAccept1(true);
    } if (statusAccept1 == true) {
      setStatusAccept1(false);
    }
  }
  const changeReject1 = () => {
    if (statusReject1 == false) {
      setStatusReject1(true);
    } if (statusReject1 == true) {
      setStatusReject1(false);
    }
  }

  return (
    <Container
      style={{ background: "#EBEBEB", maxWidth: "100%", minWidth: "300px" }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Remote Care Steps"
          title2="Here are some simple steps to enable remote care for your loved ones."
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="rcs"
        />
        <div className="car-ds">
          <CarouselSlider />
        </div>
        <div className="form-d">
          <Card
            itemType=""
            style={{
              marginTop: "0rem",
              marginBottom: "100pt",
              borderTop: "6px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <Card.Body>
                <div class="row align-items-center">
                  <div class="col-1"><img src={IconProviders} alt="" style={{width:"140%"}}/></div>
                  <div class="col-9 text-green">Steps to Remote Care for Next of Kin</div>
                  <div class="col-2"><img src={IconInfo} alt="" /></div>
                </div>
              <div class="text-gray3">Follow these steps to set up the system for remotely managing the health of your elderly loved ones.</div>
              <div class="container">
                <div
                  className="row text-res">
                  <div class="col-2"></div>
                  <div class="col-4"></div>
                  <div class="col-2 text-green-center">Done</div>
                  <div class="col-2 text-green-center">To Do</div>
                  <div class="col-2 text-green-right">Action</div>
                  </div>
                </div>
                {todoTitleList.map((item) => (
                <Card
                style={{
                  marginTop: "0.7rem",
                  transition: "0.3s",
                  boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  borderRadius: "10px",
                  padding: "2opt",
                  border: "2px solid white",
                }}
              >
                <div class="container">
                  <div
                    className="row align-items-center text-res"
                    style={{
                      paddingTop: "0.5rem",
                      paddingBottom: "0.5rem",
                      height: "70px",
                      verticalAlign: "middle",
                    }}
                  >
                    <div class="col-2"><img src={require('../assets/'+ item.icon)} alt="GM" style={{ width: "55%" }} /></div>
                    <div class="col-4 text-gray">{item.title}</div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                      {statusAccept ?
                        <img src={IconAccept} onClick={changeAccept} /> : <img src={IconCheckbox} onClick={changeAccept} />
                      }
                    </div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>

                      {statusReject1 === false ?
                        <img src={IconReject} onClick={changeReject1} /> : <img src={IconCheckbox} onClick={changeReject1} />
                      }
                    </div>
                    <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }} >
                      <><img src={IconNext} alt="" onClick={() => navigate('/'+item.action)}/>
                      </>
                    </div>
                   </div>
                </div>
              </Card>
                ))}
              
            </Card.Body>
            <div
              style={{
                textAlign: "center",
                marginTop: "1rem",
                marginBottom: "2rem",
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
                Done
              </Button>
            </div>
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default CareManagerModuleSummary;