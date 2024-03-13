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
    // lovedOne: "/inviteALovedOne",
    // careRings: "/careRings",
    // selectServices: "/selectServices",
    healthReports: "/healthReports",
    vitals: "/vitals",
    symptoms: "/symptoms",
    // remote: "/dailyCheckInSummary",
  },
];


const FriendsModuleSummary = () => {
  const { user, pId, pName, selectedPatient } = useContext(UserContext);
  const [todoTitleList,setToDoTitlesList] = useState([]);
  const navigate = useNavigate();

  const addMember = () => {
    // const path = `/familyMembersConsent`;
    let rtype = "loc";
    const path = `/personaliseECard`;
    //navigate(path);
    navigate(path, { state: { id: rtype } });
  }

  const onSubmit = () => {
    const path = `/inviteFriends`;
    navigate(path);
  };
  
  const [CareGivers, setCareGivers] = useState([]);
  const [statusAccept, setStatusAccept] = useState(false);
  const [statusReject, setStatusReject] = useState(false);

  useEffect(() => {
  loadToDo(); 
  loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
}, [pId]);


const loadToDo = async () => {
console.log("todoList");
 const tdList = user.functions.getToDoTitleList("friendsModuleSummary");
 tdList.then((resL) => {
   if (resL) {
      setToDoTitlesList(resL[0]['itemsList']);
     }
 });
};

const loadUser = async () => {
  if (user) {
    let ccid = BSON.ObjectID(user.id).toString();
  //  console.log("pid:", pId);
    const pFamily = user.functions.getPatientCaregiver(pId); // to fetch all loved ones of that care taker
    // console.log('else direct:',ccid);
    pFamily.then((resp) => {
    //  console.log("resp:", resp);
      if (resp) {
      //  setStatus("1");
        //  setpName(resp.displayName);
        // setSelLId(resp._id.toString());
        setCareGivers(resp);
     //   console.log("res:", resp);
      } else {
        alert("Local Care Givers Not Added..");
        // navigate(`/addLovedOnes`);
      }
    });
  }
};

const [statusReject1, setStatusReject1] = useState(false);

  const changeAccept = () => {
    if (statusAccept == false) {
      setStatusAccept(true);
    } if (statusAccept == true) {
      setStatusAccept(false);
    }
  }
  const changeReject1 = () => {
    if (statusReject1 == false) {
      setStatusReject1(true);
    } if (statusReject1 == true) {
      setStatusReject1(false);
    }
  }

  const changeReject = () => {
    if (statusReject == false) {
      setStatusReject(true);
    } if (statusReject == true) {
      setStatusReject(false);
    }
  }

  const [statusAccept4, setStatusAccept4] = useState(false);
  const changeAccept4 = () => {
    if (statusAccept4 == false) {
      setStatusAccept4(true);
    } if (statusAccept4 == true) {
      setStatusAccept4(false);
    }
  }

  const [statusReject5, setStatusReject5] = useState(false);
  const changeReject5 = () => {
    if (statusReject5 == false) {
      setStatusReject5(true);
    } if (statusReject5 == true) {
      setStatusReject5(false);
    }
  }

  const [statusAccept5, setStatusAccept5] = useState(false);
  const changeAccept5 = () => {
    if (statusAccept5 == false) {
      setStatusAccept5(true);
    } if (statusAccept5 == true) {
      setStatusAccept5(false);
    }
  }

  const [statusReject6, setStatusReject6] = useState(false);
  const changeReject6 = () => {
    if (statusReject6 == false) {
      setStatusReject6(true);
    } if (statusReject6 == true) {
      setStatusReject6(false);
    }
  }

  const [statusAccept6, setStatusAccept6] = useState(false);
  const changeAccept6 = () => {
    if (statusAccept6 == false) {
      setStatusAccept6(true);
    } if (statusAccept6 == true) {
      setStatusAccept6(false);
    }
  }

  const [statusReject7, setStatusReject7] = useState(false);
  const changeReject7 = () => {
    if (statusReject7 == false) {
      setStatusReject7(true);
    } if (statusReject7 == true) {
      setStatusReject7(false);
    }
  }
  const [statusAccept7, setStatusAccept7] = useState(false);
  const changeAccept7 = () => {
    if (statusAccept7 == false) {
      setStatusAccept7(true);
    } if (statusAccept7 == true) {
      setStatusAccept7(false);
    }
  }

  const [statusReject8, setStatusReject8] = useState(false);
  const changeReject8 = () => {
    if (statusReject8 == false) {
      setStatusReject8(true);
    } if (statusReject8 == true) {
      setStatusReject8(false);
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
                  <div class="col-9 text-green">Steps to Remote Care for Friends</div>
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

              {/* {CareGivers.map((item) => ( */}
              
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

export default FriendsModuleSummary;