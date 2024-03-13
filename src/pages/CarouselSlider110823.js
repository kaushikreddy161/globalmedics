import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import { useNavigate } from "react-router-dom";
import { AuthenticatedTemplate } from '@azure/msal-react';
import { useMsal } from '@azure/msal-react';
import { IdTokenData } from '../components/DataDisplay';
import { Container } from 'react-bootstrap';

import { BSON } from "realm-web";

import Slider from "react-slick";
import "../slick/slick.css";
import "../slick/slick-theme.css";
import Card from "@mui/material/Card";
import faceIcon from "../assets/icon-patient-photo.png";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import axios from "axios";

const CarouselSlider = () => {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const [fgpicture, setFGPicture]= useState("");  
  const [lovedones, setlovedOnes] = useState([]);
  const [lcount,setLCount] = useState("0");

 const navigate = useNavigate();
//  const { user, selectedPatient,pId } = useContext(UserContext);
 const { user, fetchUser, pId, selectedPatient, adbuser,selectedSelf } = useContext(UserContext);
  const adb2cId = activeAccount.idTokenClaims.sub;
 
  async function facebookPIC(fuserid,access_token){
    // let userInfo = await axios.get("https://graph.facebook.com/v3.2/"+fuserid+"/picture?access_token="+access_token+"&type=square",
   // let userInfo = await axios.get(`https://graph.facebook.com/me?fields=name,gender,location,picture&access_token=${access_token}`, 
    let userInfo = await axios.get(`https://graph.facebook.com/me?fields=name&access_token=${access_token}`, 
    {
       headers: {
         'Access-Control-Allow-Origin': '*',
      //   Authorization: `Bearer ${access_token}`,
         "Content-Type": "application/json",
       },
     });
     console.log("userInfo facebook:", userInfo);
   }
  
    const googlePIC = async (access_token) => {
      let userInfo = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", 
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      setFGPicture(userInfo.data.picture);
    //  console.log("userInfo google in fixed header:", userInfo.data.picture);
    }

  useEffect(() => {
    if (activeAccount.idTokenClaims.idp){
      if (activeAccount.idTokenClaims.idp === "google.com"){
        console.log("logged in through adb2c google");
        // const { access_token, refresh_token } = res.data; // now I have valid access_token
        googlePIC(activeAccount.idTokenClaims.idp_access_token);
      } else if (activeAccount.idTokenClaims.idp === "facebook.com"){
        console.log("logged in through adb2c facebook");
        facebookPIC(activeAccount.idTokenClaims.oid,activeAccount.idTokenClaims.idp_access_token);
        } else {
        console.log("logged in through adb2c");
      }
    };
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);   // gs user.id
  

  const loadUser = async () => {
 //   const user = await custFunctionLogin(adb2cId);
    if (user) {
    //  let ccid = BSON.ObjectID(adb2cId).toString();
 let ccid = adb2cId;
//let ccid = pId;
    console.log("ccid:", ccid);
      //  const lovd = user.functions.getLovedOneCP(ccid); // one loved one based on care manager id
      const lovd = user.functions.getLovedOnes(ccid); // to fetch all loved ones of that care taker
        lovd.then((resp) => {
          console.log("resp:", resp);
        if (resp) {
          //  setStatus("1");
          //  setpName(resp.displayName);
          //  setSelLId(resp._id.toString());
          console.log("count :", resp.length);
          setlovedOnes(resp);
           if(resp.length > 1) {
              setLCount("2");
           } else if(resp.length == 1) {
            setLCount("1");
           } 
            // console.log("res:", resp);
          } else {
            alert("Loved Ones Not Created..");
            // navigate(`/addLovedOnes`);
          }
      });
    }
  };

  const onSubmit = (rtype) => {
    console.log("clicked submit:", rtype);
   selectedPatient(rtype);  
  };

  const onSubmitSelf = (rtype) => {
    console.log("clicked self:", rtype);
    selectedSelf(rtype);  
   };

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ marginTop: "-2rem", marginRight: "0.5rem", color: "gray" }}
        onClick={onClick}
      >
        <ArrowForwardIosIcon />
      </div>
    );
  }

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{
          marginTop: "-2rem",
          marginLeft: "0.2rem",
          color: "gray",
        }}
        onClick={onClick}
      >
        <ArrowBackIosNewIcon />
      </div>
    );
  }

  var settings = {
    className: "center",
    focusOnSelect: false,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          focusOnSelect: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          focusOnSelect: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 430,
        settings: {
          focusOnSelect: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <Card
        //  sx={{ maxWidth: 500 }}
        style={{
          borderTop: "6px solid #1D5A90",
          // marginTop: "210px",
          marginTop: "0px",
          marginBottom: "0rem",
          borderRadius: "10px",
          padding: "20pt",
          width: "100%",
          maxWidth: "500px",
          height: "190px",
          position: "absolute",
          zIndex: "1",
        }}
        className="carousel"
      >
        <Typography
          style={{
            marginTop: "-1rem",
            marginBottom: "0.5rem",
            color: "#209F85",
            marginLeft: "-1rem",
            fontFamily: "Helvetica",
            fontSize: "16px",
          }}
        >
          Select your loved one
        </Typography>
        {lcount === "2" ?
         <Slider {...settings} style={{ fontFace: "Arial" }}> 
         <div
         style={{
           alignItems: "center",
           justifyContent: "center",
           paddingLeft: "30px",
           alignSelf: "center",
           height: "140px",
           marginTop: "0rem",
           marginBottom: "0rem",
         }}
       >
         <Card
           style={{
             borderTop: "6px solid #1D5A90",
             borderRadius: "10pt",
             // boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
             width: "110px",
             height: "110px",
             cursor: "pointer",
             marginLeft: "1.2rem",
             marginTop: "0rem",
             marginBottom: "0rem",
           }}
           onClick={() => onSubmitSelf(`${adbuser}`)}
         >
           <div style={{ height: "5px" }}></div>
           <div
             style={{
               alignItems: "center",
               justifyContent: "center",
               // paddingLeft: "15px",
               // paddingBottom: "15px",
               marginTop: "0rem",
               marginBottom: "0rem",
               display: "flex",
             }}
           >
             <img
               src={fgpicture !== "" ? fgpicture : faceIcon}
               role="presentation"
               style={{ height: "60px", borderRadius: "50px" }}
               alt = ""
             />
           </div>
           <div style={{ height: "10px" }}></div>
           <div style={{ textAlign: "center", color: "#707070" }}>
             Self
           </div>
           <div style={{ height: "5px" }}></div>
         </Card>
       </div>
           {lovedones.map((item) => (
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: "30px",
                alignSelf: "center",
                height: "140px",
                marginTop: "0rem",
                marginBottom: "0rem",
              }}
            >
              <Card
                style={{
                  borderTop: "6px solid #1D5A90",
                  borderRadius: "10pt",
                  // boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                  width: "110px",
                  height: "110px",
                  cursor: "pointer",
                  marginLeft: "1.2rem",
                  marginTop: "0rem",
                  marginBottom: "0rem",
                }}
                onClick={() => onSubmit(`${item._id.toString()}`)}
              >
                <div style={{ height: "5px" }}></div>
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    // paddingLeft: "15px",
                    // paddingBottom: "15px",
                    marginTop: "0rem",
                    marginBottom: "0rem",
                    display: "flex",
                  }}
                >
                  <img
                    src={faceIcon}
                    role="presentation"
                    style={{ height: "60px" }}
                    alt = ""
                  />
                </div>
                <div style={{ height: "10px" }}></div>
                <div style={{ textAlign: "center", color: "#707070" }}>
                  {item.displayName}
                </div>
                <div style={{ height: "5px" }}></div>
              </Card>
            </div>
          ))}
         </Slider>
         :
         <>
            {lcount === "1" ?
              <>
              <div style={{display:'flex',flexDirection:'row'}}>
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: "30px",
                    alignSelf: "center",
                    height: "140px",
                    marginTop: "0rem",
                    marginBottom: "0rem",
                    
                  }}
                >
                  <Card
                    style={{
                      borderTop: "6px solid #1D5A90",
                      borderRadius: "10pt",
                      // boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                      width: "110px",
                      height: "110px",
                      cursor: "pointer",
                      marginLeft: "1.2rem",
                      marginTop: "0rem",
                      marginBottom: "0rem",
                    }}
                    onClick={() => onSubmitSelf(`${adbuser}`)}
                  >
                    <div style={{ height: "5px" }}></div>
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        // paddingLeft: "15px",
                        // paddingBottom: "15px",
                        marginTop: "0rem",
                        marginBottom: "0rem",
                        display: "flex",
                      }}
                    >
                      <img
                        src={fgpicture !== "" ? fgpicture : faceIcon}
                        role="presentation"
                        style={{ height: "60px", borderRadius: "50px" }}
                        alt = ""
                      />
                    </div>
                    <div style={{ height: "10px" }}></div>
                    <div style={{ textAlign: "center", color: "#707070" }}>
                      Self
                    </div>
                    <div style={{ height: "5px" }}></div>
                  </Card>
                </div>
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: "30px",
                    alignSelf: "center",
                    height: "140px",
                    marginTop: "0rem",
                    marginBottom: "0rem",
                  }}
                >
                  <Card
                    style={{
                      borderTop: "6px solid #1D5A90",
                      borderRadius: "10pt",
                      // boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                      width: "110px",
                      height: "110px",
                      cursor: "pointer",
                      marginLeft: "1.2rem",
                      marginTop: "0rem",
                      marginBottom: "0rem",
                    }}
                    onClick={() => onSubmit(`${lovedones[0]._id.toString()}`)}
                  >
                    <div style={{ height: "5px" }}></div>
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        // paddingLeft: "15px",
                        // paddingBottom: "15px",
                        marginTop: "0rem",
                        marginBottom: "0rem",
                        display: "flex",
                      }}
                    >
                      <img
                        src={faceIcon}
                        role="presentation"
                        style={{ height: "60px", borderRadius: "50px" }}
                        alt = ""
                      />
                    </div>
                    <div style={{ height: "10px" }}></div>
                    <div style={{ textAlign: "center", color: "#707070" }}>
                      {lovedones[0].displayName}
                    </div>
                    <div style={{ height: "5px" }}></div>
                  </Card>
                </div>
              </div>  
              </>
              :
              <>
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: "30px",
                    alignSelf: "center",
                    height: "140px",
                    marginTop: "0rem",
                    marginBottom: "0rem",
                  }}
                >
                  <Card
                    style={{
                      borderTop: "6px solid #1D5A90",
                      borderRadius: "10pt",
                      // boxShadow: "0 18px 40px -12px rgba(0,0,0,0.3)",
                      width: "110px",
                      height: "110px",
                      cursor: "pointer",
                      marginLeft: "1.2rem",
                      marginTop: "0rem",
                      marginBottom: "0rem",
                    }}
                  //  onClick={() => onSubmit(`${item._id.toString()}`)}
                  >
                    <div style={{ height: "5px" }}></div>
                    <div
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        // paddingLeft: "15px",
                        // paddingBottom: "15px",
                        marginTop: "0rem",
                        marginBottom: "0rem",
                        display: "flex",
                      }}
                    >
                      <img
                        src={fgpicture !== "" ? fgpicture : faceIcon}
                        role="presentation"
                        style={{ height: "60px", borderRadius: "50px" }}
                        alt = ""
                      />
                    </div>
                    <div style={{ height: "10px" }}></div>
                    <div style={{ textAlign: "center", color: "#707070" }}>
                      Self
                    </div>
                    <div style={{ height: "5px" }}></div>
                  </Card>
                </div>              
              </>
            }
        </>
        }
         </Card>
    </>
  );
};

export default CarouselSlider;
