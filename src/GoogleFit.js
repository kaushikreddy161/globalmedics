import React, { useState, useEffect } from "react";
// import { experimentalStyled as styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
//import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { useNavigate } from "react-router-dom";
import FixedHeader from "./components/FixedHeader";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import "./pages/Main.css";
import Dashboard from './Dashboard';
// const { getRequestHeaders, getWeeklyData } = require("./DataRequestManager.js");
const { SetCookie, DeleteCookie, hasCookie } = require("./CookieManager.js");


function GoogleFit() {
 // const navigate = useNavigate();
  // const onSubmit = () => {
  //   const path = `/moduleSummaryOne`;
  //   navigate(path);
  // };
  // const onBack = () => {
  //   const path = `/careManagerDetails`;
  //   navigate(path);
  // };
  // const datex = new Date();

  const clientId =
    "293699097344-rtvg1ibnulf159aqqt30e677utv6fdss.apps.googleusercontent.com";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
 // const [url, setUrl] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);
  const [user, setUser] = useState({ haslogin: false, accessToken: "" });

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);

    const cookieObject = hasCookie();
    if (cookieObject.haslogin) {
      setUser({
        ...cookieObject,
      });
    }
  }, []);

  const onSuccess = (res) => {
    console.log("success:", res);
    if (res.xc.access_token) {
      setUser({
        ...res.profileObj,
        haslogin: true,
        accessToken: res.xc.access_token,
      });
      SetCookie({
        ...res.profileObj,
        accessToken: res.xc.access_token,
      });
      setName(res.profileObj.name);
      setEmail(res.profileObj.email);
      setLoginStatus(true);
    }
  };
  const onFailure = (err) => {
   // console.log("failed:", err);
    setLoginStatus(false);
    DeleteCookie([
      "accessToken",
      "email",
      "givenName",
      "familyName",
      "imageUrl",
      "name",
      "googleId",
    ]);
  };
  return (
    <Container
      style={{
        background: "#EBEBEB",
        maxWidth: "100%",
        // minHeight: "100vh",
        margin: "0",
      }}
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <FixedHeader
          title="Device Data Summary"
          title2="Summary of Data from your Smart Device"
          title3="No login history found."
          limg="rl"
          rimg="rr"
        />
        {/* <div style={{height:"5rem"}}></div> */}
        {/* <CarouselSlider /> */}
        <div className="form-gf">
          <Card
            //   sx={{ maxWidth: 500 }}
            style={{
              borderTop: "6px solid #1D5A90",
              marginTop: "0px",
              marginBottom: "0px",
              borderRadius: "10px",
              padding: "2pt",
              maxWidth: "500px",
              position: "absolute",
              zIndex: "1",
            }}
          >
            <div style={{padding: "45pt"}}>
              <h1 style={{ color: "#3A9930", textAlign: "center" }}>
                <h2 >Google Fit Authentication</h2>
             </h1>
             </div>           
             <div style={{marginTop: "50px", textAlign: "center"}}>
            {!loginStatus && (
              <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
                responseType="code,token"
                scope={
                  "https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.location.read https://www.googleapis.com/auth/fitness.blood_glucose.read https://www.googleapis.com/auth/fitness.blood_pressure.read https://www.googleapis.com/auth/fitness.body.read https://www.googleapis.com/auth/fitness.body_temperature.read https://www.googleapis.com/auth/fitness.heart_rate.read https://www.googleapis.com/auth/fitness.oxygen_saturation.read https://www.googleapis.com/auth/fitness.sleep.read https://www.googleapis.com/auth/fitness.reproductive_health.read https://www.googleapis.com/auth/fitness.body.read"
                }
              />              
            )}
             <div style={{ height: "100px" }}></div>
            </div>
            {loginStatus && (
              <div style={{marginLeft: "-18px"}}>
                {/* <h4>Welcome {name}</h4>
                <h5>Email: {email}</h5> */}
                <Dashboard  user={user}/>
                <div style={{marginTop:"50px",textAlign:"center"}}>
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Logout"
                  onLogoutSuccess={onFailure}
                />
                </div>
              </div>
            )}
             {/* <div style={{ height: "100px" }}></div> */}
          </Card>
        </div>
      </Grid>
      {/* <div style={{ height: "100px" }}></div> */}
    </Container>
  );
}
export default GoogleFit;
