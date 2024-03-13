import React, { useEffect, useContext, useState } from "react";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { UserContext } from "../contexts/user.context";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CarouselSlider from "./CarouselSlider";
import { Button } from "@mui/material";
import IconNext from "../assets/icon-next.png";
import FixedHeader from "../components/FixedHeader";
import IconReject from "../assets/icon-reject.png";
import IconAccept from "../assets/icon-accept.png";
import IconCheckbox from "../assets/icon-checkbox.png";
import IconSelectService from "../assets/icon-select-service.png";
import IconKarmaKlub from "../assets/icon-karma-klub-new.png";
import IconSubscriptions from "../assets/icon-subscriptions.png";

const actionList = [
  {
    YourAccount: "/careManagerDetails",
    KarmaKlub: "/karmaKlub",
    Subscriptions: "/subscriptions",
  },
];

function YourAccount(props) {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const { user,adbuser,custFunctionLogin } = useContext(UserContext);
  var adb2cId = "";

  if (activeAccount) {
   adb2cId = activeAccount.idTokenClaims.sub;
  } else {
    adb2cId = props.prop;
  }
  const navigate = useNavigate();  

  
  const onDetails = () => {
    const path = `/seekHelp`;
    navigate(path);
  };


  const [statusAccept1, setStatusAccept1] = useState(false);
  const [statusAccept2, setStatusAccept2] = useState(false);
  const [statusAccept3, setStatusAccept3] = useState(false);

  const [statusReject1, setStatusReject1] = useState(false);
  const [statusReject2, setStatusReject2] = useState(false);
  const [statusReject3, setStatusReject3] = useState(false);



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
  const changeAccept2 = () => {
    if (statusAccept2 == false) {
      setStatusAccept2(true);
    } if (statusAccept2 == true) {
      setStatusAccept2(false);
    }
  }
  const changeReject2 = () => {
    if (statusReject2 == false) {
      setStatusReject2(true);
    } if (statusReject2 == true) {
      setStatusReject2(false);
    }
  }

  const changeReject3 = () => {
    if (statusReject3 == false) {
      setStatusReject3(true);
    } if (statusReject3 == true) {
      setStatusReject3(false);
    }
  }

  const changeAccept3 = () => {
    if (statusAccept3 == false) {
      setStatusAccept3(true);
    } if (statusAccept3 == true) {
      setStatusAccept3(false);
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
          title="Your Account"
          title2="Please select the option that best describes what you are."
          title3="No login history found."
          limg="rl"
          rimg="rr"
        />
      <div className="car-ds">
        <CarouselSlider />
      </div>
      <div className="form-tdl">
        <Card
          itemType=""
          style={{
            marginTop: "0rem",
            marginBottom: "100pt",
            borderTop: "6px solid #1D5A90",
            borderRadius: "15pt",
            maxWidth: "500px",
            // width:"500px",
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
                  <div class="col-2"><img src={IconSelectService} className="image-header-size1"/></div>
                  <div class="col-4 text-gray-todo">Your Account</div>
                  <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                    {statusAccept1 ?
                      <img src={IconAccept} onClick={changeAccept1} /> : <img src={IconCheckbox} onClick={changeAccept1} />
                    }
                  </div>
                  <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                    {statusReject1 === false ?
                      <img src={IconReject} onClick={changeReject1} /> : <img src={IconCheckbox} onClick={changeReject1} />
                    }
                  </div>
                          {actionList.map((item) => (
                            <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }} onClick={() => navigate(item.YourAccount)}>
                              <><img src={IconNext} alt="" />
                              </>
                            </div>
                          ))}
                </div>
              </div>
            </Card>
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
                  <div class="col-2"><img src={IconKarmaKlub} className="image-header-size1" /></div>
                  <div class="col-4 text-gray-todo">Karma Klub</div>
                  <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                    {statusAccept2 ?
                      <img src={IconAccept} onClick={changeAccept2} /> : <img src={IconCheckbox} onClick={changeAccept2} />
                    }
                  </div>
                  <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                    {statusReject2 === false ?
                      <img src={IconReject} onClick={changeReject2} /> : <img src={IconCheckbox} onClick={changeReject2} />
                    }
                  </div>
                  {actionList.map((item) => (
                            <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }} onClick={() => navigate(item.KarmaKlub)}>
                              <><img src={IconNext} alt="" />
                              </>
                            </div>
                  ))}
                </div>
              </div>
            </Card>
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
                  <div class="col-2"><img src={IconSubscriptions} className="image-header-size1" /></div>
                  <div class="col-4 text-gray-todo">Subscriptions</div>
                  <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                    {statusAccept3 ?
                      <img src={IconAccept} onClick={changeAccept3} /> : <img src={IconCheckbox} onClick={changeAccept3} />
                    }
                  </div>
                  <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                    {statusReject3 === false ?
                      <img src={IconReject} onClick={changeReject3} /> : <img src={IconCheckbox} onClick={changeReject3} />
                    }
                  </div>
                          {actionList.map((item) => (
                            <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }} onClick={() => navigate(item.Subscriptions)}>
                              <><img src={IconNext} alt="" />
                              </>
                            </div>
                          ))}
                </div>
              </div>
            </Card>
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

export default YourAccount;
