import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { BSON } from "realm-web";

import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// import Paper from "@mui/material/Paper";
// import { experimentalStyled as styled } from "@mui/material/styles";
import { Button, Divider } from "@mui/material";

import CareFamily1 from "../assets/img-care-family1.png";
import CareFamily2 from "../assets/img-care-family2.png";
import CareFamily3 from "../assets/lady2.png";
import Next from "../assets/icon-next.png";
import Complete from "../assets/icon-complete.png";
import faceIcon from "../assets/icon-patient-photo.png";

import iconBetter from "../assets/icon-better.png";
import iconNormal from "../assets/icon-amber.png";
import iconNoData from "../assets/icon-nodata.png";
import iconLess from "../assets/icon-alert.png";
import IconAccessFamily from "../assets/img-access-care-family1.png";
import IconLocalCareGivers from "../assets/icon-local-care-givers.png";
import FixedHeader from "../components/FixedHeader";
import CarouselSlider from "./CarouselSlider";

import "./Main.css";

const reports = [
  {
    bstatus: iconBetter,
    nstatus: iconNormal,
    dstatus: iconNoData,
    astatus: iconLess,
  },
];

const PatientsList = () => {
  const { user, pId, pName, selectedPatient } = useContext(UserContext);
  const navigate = useNavigate();

  const [patientsList, setpatientsList] = useState([]);


  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  const loadUser = async () => {
       console.log('user:',user.id);
    if (user) {
      let ccid = BSON.ObjectID(user.id).toString();
      //  const lovd = user.functions.getLovedOneCP(ccid); // one loved one based on care manager id
      const lovd = user.functions.getLovedOnes(ccid); // to fetch all loved ones of that care taker
        lovd.then((resp) => {
        if (resp) {
          //  setStatus("1");
          //  setpName(resp.displayName);
          //  setSelLId(resp._id.toString());
          setpatientsList(resp);
          console.log("res:", resp);
        } else {
          alert("Patients are not assigned to your ID..");
          // navigate(`/addLovedOnes`);
        }
      });
    }
  };

  const onSubmit = () => {
    const path = `/jobCategories`;
    navigate(path);
  };

  // const onBack = () => {
  //   const path = `/dailyCheckIn`;
  //   navigate(path);
  // };

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
          title="Your Patients Today"
          title2="List of patients assigned to you for today"
          limg="rl"
          rimg="rpl"
        />

        <div className="form-pl">
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
              <div class="container">
                <div
                  className="row align-items-center text-res"
                  style={{
                    paddingTop: "0rem",
                    paddingBottom: "0rem",
                    height: "70px",
                    verticalAlign: "top",
                    marginLeft: "-1rem",
                    marginRight: "-2rem",
                  }}
                >
                  <div
                    class="col-5"
                    style={{ color: "#209F85", paddingLeft: "1.5rem" }}
                  >
                    Patient Name
                  </div>
                  <div
                    class="col-4"
                    style={{ color: "#209F85", textAlign: "center" }}
                  >
                    Address
                  </div>
                  <div
                    class="col-3"
                    style={{ textAlign: "center", color: "#209F85" }}
                  >
                    Reporting Time
                  </div>
                </div>
              </div>             
                  {patientsList.map((item) => (   
                    (item.patientId !== user.id ? (
                      <>
                     <Card
                     style={{
                       margin: "auto",
                       transition: "0.3s",
                       boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                       borderRadius: "10px",
                       padding: "2opt",
                       border: "2px solid white"
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
                          <div class="col-2">
                            <img src={faceIcon} alt=""  style={{ height: "60px" }}/>
                          </div>
                          <div class="col-3" style={{ color: "#adaaa7" }}>
                            {item.firstName} {item.middleName}
                          </div>
                          <div
                            class="col-4"
                            style={{
                              textAlign: "center",
                              color: "#ADAAA7",
                            }}
                          >
                            -----
                          </div>
                          <div
                            class="col-3"
                            style={{ textAlign: "center", color: "#adaaa7" }}
                          >
                            <>09:00 AM</>
                          </div>
                        </div>                
                    </div>
                  </Card>
              <Divider style={{ margin: "4pt" }} />             
              </> 
              )
              :
              ""
              )
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
                Confirm
              </Button>
            </div>
            </Card>
          </div>
      </Grid>
    </Container>
  );
};

export default PatientsList;
