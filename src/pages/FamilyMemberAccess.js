import React, { useEffect, useContext, useState } from "react";
// import { UserContext } from "../contexts/user.context";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';

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
import IconNext from "../assets/icon-next.png";
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";

import "./Main.css";

const FamilyMemberAccess = () => {
 // const { user, pId, pName, selectedPatient } = useContext(UserContext);
  const navigate = useNavigate();
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const pId = activeAccount.idTokenClaims.sub;
  const user = "";
  const pName = "";
  const selectedPatient = ""; 

  const addMember = () => {
    // const path = `/familyMembersConsent`;
    let rtype = "yli";
    const path = `/personaliseECard`;
    navigate(path, { state: { id: rtype } });
  }
  const onSubmit = () => {
    const path = `/localCareGiverCustomiseAccess`;
    navigate(path);
  };
  const onDetails = () => {
    const path = `/localCareGiverCustomiseAccess`;
    navigate(path);
  };

  const [patientFamily, setpatientFamily] = useState([]);
  // const { user, selectedPatient } = useContext(UserContext);

useEffect(() => {
  loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
}, [user.id]);

const loadUser = async () => {
 // console.log("PID:", pId);
  if (user) {
    let ccid = BSON.ObjectID(user.id).toString();
  //  console.log("pid:", pId);
    const pFamily = user.functions.getPatientFamily(pId); // to fetch all loved ones of that care taker
    // console.log('else direct:',ccid);
    pFamily.then((resp) => {
   //   console.log("resp:", resp);
      if (resp) {
      //  setStatus("1");
        //  setpName(resp.displayName);
        // setSelLId(resp._id.toString());
        setpatientFamily(resp);
     //   console.log("res:", resp);
      } else {
        alert("Family Members Not Added..");
        // navigate(`/addLovedOnes`);
      }
    });
  }
};

const [statusAccept, setStatusAccept] = useState(false);
const [statusReject, setStatusReject] = useState(false);

const changeAccept = () => {
  if(statusAccept == false) {
    setStatusAccept(true);
  } if(statusAccept == true) {
    setStatusAccept(false);
  }
}
const changeReject = () => {
  if(statusReject == false) {
    setStatusReject(true);
  } if(statusReject == true) {
    setStatusReject(false);
  }
}

let pname = pName;

const [statusAccept1, setStatusAccept1] = useState(false);
const [statusReject1, setStatusReject1] = useState(false);

const changeAccept1 = () => {
  if(statusAccept1 == false) {
    setStatusAccept1(true);
  } if(statusAccept1 == true) {
    setStatusAccept1(false);
  }
}
const changeReject1 = () => {
  if(statusReject1 == false) {
    setStatusReject1(true);
  } if(statusReject1 == true) {
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
          title="Family Member Access"
          title2="Please accept requests from people you are comfortable to support <<Papa>> as <<Family Members>>."
          title3="Last Updated: 10-10-2022"
          limg="rl"
          rimg="adci"
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
              borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
            }}
            className="left"
          >
            <Card.Body>
              <div class="row">
                <div class="col-10 text-green">Accept received invites</div>
                <div class="col-2 icon-right"><img src={IconHelp} alt="" /></div>
              </div>
              <p style={{ marginTop: "1rem", marginBottom: "2rem", color: "#707070" }}>These people are requesting access to support {pname} as "Family Members". Please accept their</p>
              <div class="container">
                <div
                  className="row align-items-center text-res"

                >
                  <div class="col-2"></div>
                  <div class="col-3 text-gray">From Name</div>
                  <div class="col-2 text-gray">Accept</div>
                  <div class="col-2 text-gray">Reject</div>
                  <div class="col-3 text-gray-right">Customise Access</div>
                </div>

              </div>
              {patientFamily.map((item) => (
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
                      <div class="col-2 img-size"><img src={ImgCareGiver} alt="" className="image-size"/></div>
                      <div class="col-3 text-green">{item.firstname} {item.lastname}</div>
                      <div class="col-2" style={{cursor:"pointer",textAlign:"center"}}>
                    {/* { statusAccept ?
                      <img src={IconAccept} onClick={changeAccept}/> : <img src={IconCheckbox} onClick={changeAccept}/>
                     } */}
                     <img src={IconAccept} onClick={changeAccept}/>
                      </div>
                      <div class="col-2" style={{cursor:"pointer",textAlign:"center"}}>
                      { statusReject ?
                      <img src={IconReject} onClick={changeReject}/> : <img src={IconCheckbox} onClick={changeReject}/>
                     }
                      </div>
                      <div class="col-3" style={{ textAlign: "right", cursor: "pointer" }} onClick={onDetails}>
                        <><img src={IconNext} alt="" />
                        </>
                      </div>
                    </div>
                  </div>
                </Card>
               ))}
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
                      marginLeft: "-1rem",
                      marginRight: "-2rem",
                    }}
                  >
                    <div class="col-2 img-size" style={{cursor: "pointer"}}><img src={ImgNewCareGiver} alt="" className="image-size" onClick={addMember}/></div>
                    <div class="col-10 text-green">Add New Member</div>
                    {/* <div class="col-2">                 
                     { statusDefault ?
                      <img src={IconAccept} onClick={changeImage}/> : <img src={IconCheckbox} onClick={changeImage}/>
                     }
                    </div>
                    <div class="col-2"></div>
                    <div class="col-3" style={{ textAlign: "right", paddingRight: "2rem", cursor: "pointer" }} onClick={addMember} >
                      <><img src={IconNext} alt=""  />
                      </>
                    </div> */}
                  </div>

                </div>

              </Card>
            </Card.Body>
            {/* <div
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
                Confirm
              </Button>
            </div> */}
          </Card>
        </div>
      </Grid>
    </Container>
  );
};

export default FamilyMemberAccess;