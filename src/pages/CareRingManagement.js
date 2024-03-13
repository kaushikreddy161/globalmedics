import React, { useEffect, useContext, useState } from "react";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { UserContext } from "../contexts/user.context";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import IconNext from "../assets/icon-next.png";
import FixedHeader from "../components/FixedHeader";
import IconReject from "../assets/icon-reject.png";
import IconCheckbox from "../assets/icon-checkbox.png";

const actionList = [
  {
    careRings: "/careRings",
    addLovedOnes: "/addLovedOnes",
    localCareGiversConsent: "/localCareGiversConsent",
    familyMembersConsent: "/familyMembersConsent",
    inviteCommunity: "/inviteCommunity",
    addDoctor: "/addDoctor",
  },
];

function CareRingManagement(props) {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const { user,adbuser,pId } = useContext(UserContext);
  var adb2cId = "";

  if (activeAccount) {
   adb2cId = activeAccount.idTokenClaims.sub;
  } else {
    adb2cId = props.prop;
  }

  const navigate = useNavigate();  
  const [todoTitleList,setToDoTitlesList] = useState([]);
  const [statusAccept, setStatusAccept] = useState(false);
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

  useEffect(() => {
    loadToDo();
  }, [pId,setToDoTitlesList,todoTitleList]);
  
  
  const loadToDo = async () => {
     const tdList = user.functions.getToDoTitleList("careRingManagement");
     tdList.then((resL) => {
       if (resL) {
         console.log("line 86:", resL[0]['itemsList']);
          setToDoTitlesList(resL[0]['itemsList']);
         }
     });
  };

  // useEffect(() => {
  //   loadUser(); 
  // }, [adb2cId]);

  // const loadUser = async () => {
  //   console.log('user adb2cid:',adb2cId);
  //   //const user = await custFunctionLogin(adb2cId);
  //   console.log('user:',user);
  //   console.log('adb user:',adbuser);

  //   if (user) {
  //    // let cid = BSON.ObjectID(user.id).toString();
  //    let cid = adbuser; 
  //    const carem = user.functions.getConsentRec(cid);
  //     carem.then((resp) => {
  //       // console.log(resp);
  //       if (resp) {
  //         // console.log("first");
  //         const lovd = user.functions.getLovedOneCP(cid); // one loved one based on care manager id
  //         // console.log('else direct:',ccid);
  //         lovd.then((respL) => {
  //           //  console.log("second");
  //           if (respL) {
  //             const path = `/dailyCheckInSummary`;
  //             navigate(path);
  //           } else {
  //             const path2 = `/careManagerDetails`;
  //             navigate(path2);
  //           }
  //         });
  //       } else {
  //         const path = `/consentForm`;
  //         navigate(path);
  //       }
  //     });
  //   } else {
  //     const user = await custFunctionLogin(adb2cId);
  //   }
  // };

  const onDetails = () => {
    const path = `/seekHelp`;
    navigate(path);
  };

  const onChangeAccept = (idValue) => {
    console.log("line 144:", idValue);
   // alert(idValue);
   // alert(todoTitleList);
    if ( 'statusAccept' + idValue == false) {
      if (idValue === 1) {
        setStatusAccept1(true);
      } else if (idValue === 2) {
        setStatusAccept2(true);
      } else if (idValue === 3) {
        setStatusAccept3(true);
      } else if (idValue === 4) {
        setStatusAccept4(true);
      } else if (idValue === 5) {
        setStatusAccept5(true);
      } else if (idValue === 6) {
        setStatusAccept6(true);
      }
    } else if (statusAccept == true) {
      if (idValue === 1) {
        setStatusAccept1(false);
      } else if (idValue === 2) {
        setStatusAccept2(false);
      } else if (idValue === 3) {
        setStatusAccept3(false);
      } else if (idValue === 4) {
        setStatusAccept4(false);
      } else if (idValue === 5) {
        setStatusAccept5(false);
      } else if (idValue === 6) {
        setStatusAccept6(false);
      }
    }
  };

  const onChangeReject = (idValue) => {
      console.log("line: ", idValue);
  }

  const [statusAccept1, setStatusAccept1] = useState(false);
  const [statusAccept2, setStatusAccept2] = useState(false);
  const [statusAccept3, setStatusAccept3] = useState(false);
  const [statusAccept4, setStatusAccept4] = useState(false);
  const [statusAccept5, setStatusAccept5] = useState(false);
  const [statusAccept6, setStatusAccept6] = useState(false);

  const [statusReject2, setStatusReject2] = useState(false);
  const [statusReject3, setStatusReject3] = useState(false);
  const [statusReject4, setStatusReject4] = useState(false);
  const [statusReject5, setStatusReject5] = useState(false);
  const [statusReject6, setStatusReject6] = useState(false);

  return (
    <>
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
          title="Care Ring Management"
          title2="Please select the option that best describes what you are."
          title3="No login history found."
          limg="rl"
          rimg="vs"
        />
        <div className="form-rcard">
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
                    <div class="col-2" style={{ textAlign: "center" }}>
                     {/* {("statusAccept" + item.subItemId) === true ? 
                        <img src={IconAccept}  onClick={() => onChangeAccept(`${item.subItemId}`)}  alt={`${item.subItemId}`} /> : <img src={IconCheckbox} onClick={() => onChangeAccept(`${item.subItemId}`)} />
                      } */}
                      <img src={IconCheckbox} />
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>                    
                      {/* {('statusReject' + item.subItemId) == false ?
                        <img src={IconReject} onClick={() => onChangeReject(`${item.subItemId}`)} /> : <img src={IconCheckbox} onClick={() => onChangeReject(`${item.subItemId}`)} />
                      } */}
                      <img src={IconReject} />
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
        </Card>
      </div>
    </Grid>
  </Container>
   
       ) : null }
        </AuthenticatedTemplate>
        </>
  );
}

export default CareRingManagement;
