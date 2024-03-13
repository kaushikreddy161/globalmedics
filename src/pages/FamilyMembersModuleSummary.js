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


const FamilyMembersModuleSummary = () => {
  const { user, pId, pName, selectedPatient } = useContext(UserContext);
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

useEffect(() => {
  loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
}, [user.id]);

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

  const [statusAccept2, setStatusAccept2] = useState(false);
  // const [statusReject2, setStatusReject2] = useState(false);

  const changeAccept2 = () => {
    if (statusAccept2 == false) {
      setStatusAccept2(true);
    } if (statusAccept2 == true) {
      setStatusAccept2(false);
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
                  <div class="col-9 text-green">Steps to Remote Care for Family Member</div>
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
                    <div class="col-2"><img src={IconManageLove} style={{ width: "55%" }} /></div>
                    <div class="col-4 text-gray">Manage Loved Ones (patients)</div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                      {statusAccept ?
                        <img src={IconAccept} onClick={changeAccept} /> : <img src={IconCheckbox} onClick={changeAccept} />
                      }
                    </div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>

                      {statusReject1 ?
                        <img src={IconReject} onClick={changeReject1} /> : <img src={IconCheckbox} onClick={changeReject1} />
                      }
                    </div>
                    {/* <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }} onClick={onLovedOneWelcome}>
                      <><img src={IconNext} alt="" />
                      </>
                    </div> */}
                    {actionList.map((item) => (
                    <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }}>
                      <><img src={IconNext} alt="" onClick={() => navigate(item.lovedOne)}/>
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
                    <div class="col-2 img-size"><img src={IconManageCare} style={{ width: "55%" }} /></div>
                    <div class="col-4 text-gray">Manage Care Rings of Caring</div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                      {statusAccept2 ?
                        <img src={IconAccept} onClick={changeAccept2} /> : <img src={IconCheckbox} onClick={changeAccept2} />
                      }
                    </div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>

                      {statusReject3 ?
                        <img src={IconReject} onClick={changeReject3} /> : <img src={IconCheckbox} onClick={changeReject3} />
                      }
                    </div>
                    {actionList.map((item) => (
                    <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }}>
                      <><img src={IconNext} alt="" onClick={() => navigate(item.careRings)}/>
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
                    <div class="col-2 img-size"><img src={IconSetUpServices} style={{ width: "55%" }} /></div>
                    <div class="col-4 text-gray">Set up Services</div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                      {statusAccept3 ?
                        <img src={IconAccept} onClick={changeAccept3} /> : <img src={IconCheckbox} onClick={changeAccept3} />
                      }
                    </div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>

                      {statusReject4 ?
                        <img src={IconReject} onClick={changeReject4} /> : <img src={IconCheckbox} onClick={changeReject4} />
                      }
                    </div>
                    {actionList.map((item) => (
                    <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }}>
                      <><img src={IconNext} alt="" onClick={() => navigate(item.selectServices)}/>
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
                    <div class="col-2 img-size"><img src={IconHealthVault} style={{ width: "55%" }} /></div>
                    <div class="col-4 text-gray">Update Health Vault</div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                      {statusAccept4 ?
                        <img src={IconAccept} onClick={changeAccept4} /> : <img src={IconCheckbox} onClick={changeAccept4} />
                      }
                    </div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>

                      {statusReject5 ?
                        <img src={IconReject} onClick={changeReject5} /> : <img src={IconCheckbox} onClick={changeReject5} />
                      }
                    </div>
                    {actionList.map((item) => (
                    <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }}>
                      <><img src={IconNext} alt="" onClick={() => navigate(item.healthReports)}/>
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
                    <div class="col-2 img-size"><img src={IconRemoteCare} style={{ width: "55%" }} /></div>
                    <div class="col-4 text-gray">Record Vitals</div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                      {statusAccept5 ?
                        <img src={IconAccept} onClick={changeAccept5} /> : <img src={IconCheckbox} onClick={changeAccept5} />
                      }
                    </div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>

                      {statusReject6 ?
                        <img src={IconReject} onClick={changeReject6} /> : <img src={IconCheckbox} onClick={changeReject6} />
                      }
                    </div>
                    {actionList.map((item) => (
                    <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }}>
                      <><img src={IconNext} alt="" onClick={() => navigate(item.vitals)}/>
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
                    <div class="col-2 img-size"><img src={IconSymptoms} style={{ width: "55%" }} /></div>
                    <div class="col-4 text-gray">Record Symptoms</div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                      {statusAccept6 ?
                        <img src={IconAccept} onClick={changeAccept6} /> : <img src={IconCheckbox} onClick={changeAccept6} />
                      }
                    </div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>

                      {statusReject7 ?
                        <img src={IconReject} onClick={changeReject7} /> : <img src={IconCheckbox} onClick={changeReject7} />
                      }
                    </div>
                    {actionList.map((item) => (
                    <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }}>
                      <><img src={IconNext} alt="" onClick={() => navigate(item.symptoms)}/>
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
                  // verticalAlign:"center",
                  // verticalAlign:"middle"
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
                    <div class="col-2 img-size"><img src={IconMonitor} style={{ width: "55%" }} /></div>
                    <div class="col-4 text-gray">Monitor Remotely</div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>
                      {statusAccept7 ?
                        <img src={IconAccept} onClick={changeAccept7} /> : <img src={IconCheckbox} onClick={changeAccept7} />
                      }
                    </div>
                    <div class="col-2" style={{ cursor: "pointer", textAlign: "center" }}>

                      {statusReject8 ?
                        <img src={IconReject} onClick={changeReject8} /> : <img src={IconCheckbox} onClick={changeReject8} />
                      }
                    </div>
                    {actionList.map((item) => (
                    <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }}>
                      <><img src={IconNext} alt="" onClick={() => navigate(item.remote)}/>
                      </>                      
                    </div>
                    ))}
                  </div>
                </div>
              </Card>
              
              

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

export default FamilyMembersModuleSummary;