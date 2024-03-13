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
import IconAccept from "../assets/icon-accept.png";
import IconCheckbox from "../assets/icon-checkbox.png";

const actionList = [
  {
    recordVitalsWelcome: "/recordVitalsWelcome",
    recordSymptomsWelcome: "/recordSymptomsWelcome",
  },
];

function RecordStatus(props) {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const { user,adbuser,custFunctionLogin, pId } = useContext(UserContext);
  var adb2cId = "";

  if (activeAccount) {
   adb2cId = activeAccount.idTokenClaims.sub;
  } else {
    adb2cId = props.prop;
  }

  const navigate = useNavigate();  

  const [todoTitleList,setToDoTitlesList] = useState([]);

  useEffect(() => {
    loadToDo();
  }, [pId,setToDoTitlesList,todoTitleList]);
  
  
  const loadToDo = async () => {
    console.log("todoList");
     const tdList = user.functions.getToDoTitleList("recordStatus");
     tdList.then((resL) => {
       if (resL) {
          setToDoTitlesList(resL[0]['itemsList']);
         }
     });
  };
  
  const onDetails = () => {
    const path = `/seekHelp`;
    navigate(path);
  };


  const [statusAccept1, setStatusAccept1] = useState(false);
  const [statusAccept2, setStatusAccept2] = useState(false);

  const [statusAccept, setStatusAccept] = useState(false);
  const [statusReject, setStatusReject] = useState(false);
  const [statusReject1, setStatusReject1] = useState(false);

  const changeAccept = () => {
    if (statusAccept == false) {
      setStatusAccept(true);
    } if (statusAccept == true) {
      setStatusAccept(false);
    }
  }

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
      style={{ minHeight: "100vh", paddingBottom: "0rem" }}
    >
        <FixedHeader
          title="Record Status"
          title2="Please select the option that best describes what you are."
          title3="No login history found."
          limg="rl"
          rimg="vsr"
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
          className="left card-w-100"
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
                    <div class="col-2" style={{  textAlign: "center" }}>
                      {statusAccept ?
                        // <img src={IconAccept} onClick={changeAccept} /> : <img src={IconCheckbox} onClick={changeAccept} />
                        <img src={IconAccept} /> : <img src={IconCheckbox}  />
                      }
                    </div>
                    <div class="col-2" style={{ textAlign: "center" }}>

                      {statusReject1 === false ?
                        <img src={IconReject} /> : <img src={IconCheckbox}  />
                        // <img src={IconReject} onClick={changeReject1} /> : <img src={IconCheckbox} onClick={changeReject1} />
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
         </Card>
      </div>
    </Grid>
  </Container>
           ) : null }
        </AuthenticatedTemplate>
        </>
  );
}

export default RecordStatus;
