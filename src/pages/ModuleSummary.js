import React, { useEffect, useContext, useState } from "react";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { UserContext } from "../contexts/user.context";
import { useNavigate } from "react-router-dom";
// import { BSON } from "realm-web";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// import Form from "react-bootstrap/Form";
import { Button } from "@mui/material";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import IconCallAmbulance from "../assets/icon-call-ambulance.png";

import MSPoint1 from "../assets/icon-src-loved-one.png";
import MSPoint2 from "../assets/icon-src-look-after.png";
import MSPoint3 from "../assets/icon-src-history-vitals.png";
import MSPoint4 from "../assets/icon-src-monitor-manage.png";
import MSPoint5 from "../assets/icon-src-record-history.png";

import IconNext from "../assets/icon-next.png";
import FixedHeader from "../components/FixedHeader";
import IconReject from "../assets/icon-reject.png";
import IconAccept from "../assets/icon-accept.png";
import IconCheckbox from "../assets/icon-checkbox.png";

import LoadingScreen from "./LoadingScreen";

const actionList = [
  {
    addLovedOne: "/addLovedOnes",
    addPeople: "/careRings",
    recordHistory: "/healthReports",
    recordVitalSymptoms: "/recordStatus",
    monitorManage: "/dailyCheckInSummary",
  },
];


function ModuleSummary(props) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 8000)
  }, [])





  console.log("props:", props.prop);

  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const { user,adbuser,custFunctionLogin,pId } = useContext(UserContext);
  var adb2cId = "";

  if (activeAccount) {
   adb2cId = activeAccount.idTokenClaims.sub;
   console.log("active account");
  } else {
    console.log("prop");
    adb2cId = props.prop;
  }

  const navigate = useNavigate();  
  const [todoTitleList,setToDoTitlesList] = useState([]);

  useEffect(() => {
    loadUser(); 
    loadToDo();
  }, [adb2cId,setToDoTitlesList,todoTitleList]);

const loadToDo = async () => {
  console.log("todoList");
  console.log("todo USer:", user);
  if (user) {
   const tdList = user.functions.getToDoTitleList("moduleSummary");
   tdList.then((resL) => {
     console.log("todo data:", resL);
     if (resL) {
        setToDoTitlesList(resL[0]['itemsList']);
       }
   });
  }
};

  const loadUser = async () => {
    console.log('user adb2cid:',adb2cId);
    const user = await custFunctionLogin(adb2cId);
    console.log('user:',user);
    console.log('adb user:',adbuser);

    if (user) {
     // let cid = BSON.ObjectID(user.id).toString();
     let cid = adbuser; 
     const carem = user.functions.getConsentRec(cid);
      carem.then((resp) => {
        // console.log(resp);
        if (resp) {
          // console.log("first");
          const lovd = user.functions.getLovedOneCP(cid); // one loved one based on care manager id
          // console.log('else direct:',ccid);
          lovd.then((respL) => {
            //  console.log("second");
            if (respL) {
              const path = `/dailyCheckInSummary`;
              navigate(path);
            } else {
              // const path2 = `/careManagerDetails`;
              const path2 =`/lovedOneWelcome`;                
              navigate(path2);
            }
          });
        } else {
          const path = `/consentForm`;
          navigate(path);
        }
      });
    } else {
      const user = await custFunctionLogin(adb2cId);
    }
  };

  const onSubmit = () => {
    loadUser();
  };
  const onDetails = () => {
    const path = `/seekHelp`;
    navigate(path);
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

  const [statusAccept2, setStatusAccept2] = useState(false);

  const changeAccept2 = () => {
    if (statusAccept2 == false) {
      setStatusAccept2(true);
    } if (statusAccept2 == true) {
      setStatusAccept2(false);
    }
  }

  const [statusReject2, setStatusReject2] = useState(false);

  const changeReject2 = () => {
    if (statusReject2 == false) {
      setStatusReject2(true);
    } if (statusReject2 == true) {
      setStatusReject2(false);
    }
  }
  const [statusReject3, setStatusReject3] = useState(false);

  const changeReject3 = () => {
    if (statusReject3 == false) {
      setStatusReject3(true);
    } if (statusReject3 == true) {
      setStatusReject3(false);
    }
  }

  const [statusAccept3, setStatusAccept3] = useState(false);
  const changeAccept3 = () => {
    if (statusAccept3 == false) {
      setStatusAccept3(true);
    } if (statusAccept3 == true) {
      setStatusAccept3(false);
    }
  }

  const [statusReject4, setStatusReject4] = useState(false);
  const changeReject4 = () => {
    if (statusReject4 == false) {
      setStatusReject4(true);
    } if (statusReject4 == true) {
      setStatusReject4(false);
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

  return (
    <>
{
  loading ?
<LoadingScreen
        color={"red"}
        loading={loading}
        size={30}
      />
      
  :



       <AuthenticatedTemplate>
       {activeAccount ? (     
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
        title="Steps to Remote Care"
        title2="Follow these steps to set up the system for remotely managing
        the health of your elderly loved ones."
        // title3="Last Updated: 10-10-2022"
        limg="rl"
        rimg="rcs"
      />
      {/* <div className="car-ds">
        <CarouselSlider />
      </div> */}
      <div className="form-mcard">
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
            {/* <div class="row align-items-center">
              <div class="col-2"><img src={IconCallAmbulance} alt="" style={{ width: "70%" }} /></div>
              <div class="col-10 text-green">Call Ambulance & Hospital</div>
            </div> */}
            <div class="container">
              <div
                className="row align-items-center text-res"

              >
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
              onClick={onSubmit}
              type="submit"
            >
              Get Started
            </Button>
          </div>
        </Card>
      </div>
    </Grid>
  </Container>
       ) : null }
        </AuthenticatedTemplate>
        }
        </>
  );
}

export default ModuleSummary;
