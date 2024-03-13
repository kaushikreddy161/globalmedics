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

import IconNext from "../assets/icon-next.png";
import FixedHeader from "../components/FixedHeader";
import IconReject from "../assets/icon-reject.png";
import IconAccept from "../assets/icon-accept.png";
import IconCheckbox from "../assets/icon-checkbox.png";

import IconHirePro from "../assets/ecommerce/icon_hire_pro.png";
import IconBuyDev from "../assets/ecommerce/icon_buy-dev.png";
import CarouselSlider from "./CarouselSlider";

const actionList = [
  {
    HireProfessionals: "/comingsoon",
    BuyProducts: "/productList",
  },
];


function Ecommerce(props) {
  console.log("props:", props.prop);

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

  // const onSubmit = () => {
  //   loadUser();
  // };

  const onDetails = () => {
    const path = `/seekHelp`;
    navigate(path);
  };


  const [statusAccept1, setStatusAccept1] = useState(false);
  const [statusAccept2, setStatusAccept2] = useState(false);

  const [statusReject1, setStatusReject1] = useState(false);
  const [statusReject2, setStatusReject2] = useState(false);



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
          title="Catalog"
          title2="Please select from products and services that you wish to buy for your loved ones"
          title3="Last Updated"
          limg="rl"
          rimg="rjc"
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
                  <div class="col-2"><img src={IconHirePro} className="image-header-size1"/></div>
                  <div class="col-4 text-gray-todo">Hire Professionals</div>
                  <div class="col-2" style={{ textAlign: "center" }}>
                    {statusAccept1 ?
                      <img src={IconAccept} /> : <img src={IconCheckbox}  />
                    }
                  </div>
                  <div class="col-2" style={{ textAlign: "center" }}>
                    {statusReject1 === false ?
                      <img src={IconReject} /> : <img src={IconCheckbox} />
                    }
                  </div>
                          {actionList.map((item) => (
                            <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }} onClick={() => navigate(item.HireProfessionals)}>
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
                  <div class="col-2"><img src={IconBuyDev} className="image-header-size1" /></div>
                  <div class="col-4 text-gray-todo">Buy Products</div>
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
                            <div class="col-2" style={{ textAlign: "right", cursor: "pointer" }} onClick={() => navigate(item.BuyProducts)}>
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

export default Ecommerce;
