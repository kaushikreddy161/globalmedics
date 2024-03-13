import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import FixedHeader from "./components/FixedHeader";
import "./pages/Main.css";
import axios from 'axios';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

 // const { getCode } = require("./WithingsAuth.js");

const CLIENT_ID = "f4ac4a3b68451f83ec6d0899f1e625322c0521c92308742780010b175eeef0a1";
const CLIENT_SECRET = "5f175dc1569d36984ada8b270e8f2a7539af31ab67c496579357dfe92841db18";
const ACTION = "requesttoken";
const SCOPE = "user.activity,user.metrics";
const MODE = "production";
// const REDIRECT_URI = "http://localhost:3000/withingsCall";
//const REDIRECT_URI = "http://localhost:3000/";
const REDIRECT_URI = "https://globalmedicsdev.azurewebsites.net/";
const AUTH_URI = "https://wbsapi.withings.net/v2/oauth2";  // get Users list  ( clientid, action, nonce, signature)
const MEASURE_URI = "https://wbsapi.withings.net/v2/measure";  // getmeas
 

function WithingsCall() {
   // const requestCode = getCode(CLIENT_ID,REDIRECT_URI);
   const [getRespCode, setGetRespCode] = useState("");
   const navigate = useNavigate();

   const paramsidp = new URLSearchParams(window.location.search);
   const gcode = paramsidp.get('code');

   console.log("REsponse:", paramsidp);
   useEffect(() => {
       if(gcode){
            //  getCode(CLIENT_ID,REDIRECT_URI)
            console.log("Got Response:", gcode);
       }
  }, []);

  const onSubmit = () => {
    window.location.replace('http://account.withings.com/oauth2_user/authorize2?response_type=code&client_id='+CLIENT_ID+'&state=Global&scope=user.info,user.metrics,user.activity&redirect_uri='+REDIRECT_URI+'&mode=production');
  };

    // const getCode = async (client_id, redirect_uri) => {
    //     const req = await axios.post('http://account.withings.com/oauth2_user/authorize2?response_type=code&client_id='+client_id+'&state=Global&scope=user.info,user.metrics,user.activity&redirect_uri='+redirect_uri+'&mode=production');
    //     setGetRespCode(req);
    //     return req;
    //    }

    const getToken =  async (CLIENT_ID,CLIENT_SECRET,GET_CODE,REDIRECT_URI) => {
    const  uri = "https://wbsapi.withings.net/v2/oauth2";
    const bodyparams = {
        params: {
        'action' : 'requesttoken',
	    'grant_type' : 'authorization_code',
        'client_id' : CLIENT_ID,
        'client_secret' : CLIENT_SECRET,
        'code' : GET_CODE,
        'redirect_uri' : REDIRECT_URI
        }
      }
    }

    const getRefreshToken = async (CLIENT_ID,CLIENT_SECRET,REFRESH_TOKEN) => {
        const  uri = "https://wbsapi.withings.net/v2/oauth2";
        const bodyparams = {
            params: {
            'action' : 'requesttoken',
            'grant_type' : 'refresh_token',
            'client_id' : CLIENT_ID,
            'client_secret' : CLIENT_SECRET,
            'refresh_token' : REFRESH_TOKEN
            }
        }     
    }

    const getNonce = async (CLIENT_ID,TIMESTAMP,SIGNATURE) => {
        const uri = "https://wbsapi.withings.net/v2/signature";
        const bodyparams = {
            params: {
                'action' : 'getnonce',
                'client_id' : CLIENT_ID,
                'timestamp' : TIMESTAMP,
                'signature' : SIGNATURE
            }
        }
    }

    
    const getUsers = async (CLIENT_ID,SIGNATURE,NONCE,accessToken) => {     
        const  uri = "https://wbsapi.withings.net/v2/oauth2";
        const bodyparams = {
            params: {
              'action' : 'listusers',
              'client_id' : CLIENT_ID,
              'signature' : SIGNATURE,
              'nonce' : NONCE
            },
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json'
               }
         }     
    }   

    // const getNewAuthCode = async () => {
    // 'action' => 'requesttoken',
	// 'grant_type' => 'refresh_token',
	// 'client_id' => '7573fd4a4c421ddd102dac406dc6e0e0e22f683c4a5e81ff0a5caf8b65abed67',
	// 'client_secret' => 'd9286311451fc6ed71b372a075c58c5058be158f56a77865e43ab3783255424f',
	// 'refresh_token' => '9697c3d06ccfd1ca302f5a527d345a9f99ea88a2'
    // }

    const getDevice = async (accessToken) => {

    }

    const getMeasures = async (accessToken) => { // Getmeas
    const uriu = "https://wbsapi.withings.net/measure";
        const bodyparams = {
            params: {
            'action' : 'getmeas',
            'meastypes' : '1,4,9,10,11,54,130,135,136,137',
            'category' : 1,
            'startdate' : '2023-01-01',   // unix time stamp
            'enddate' :   '2023-06-19',   // unix time stamp
            'offset' : 200,
            'lastupdate' : '2023-06-19'
            },
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json'
            }
        }     
    }

    const getMeasActivity = async (accessToken) => { // v2 measure
     const uri ="https://wbsapi.withings.net/v2/measure";
     const bodyparams = {
        params: {
            'action' : 'getactivity',
            'startdateymd' : '2020-07-01',
            'enddateymd' : '2023-06-27'
            },
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Accept': 'application/json'
            }
        }
    }

    // const getheartECG = async (access_token) => {   // get data
    //  uri ="https://wbsapi.withings.net/v2/heart";
    // 'action' => 'get',
	// 'signalid' => 'signalid',
	// 'client_id' => 'client_id',
	// 'signature' => 'signature',
	// 'nonce' => 'string',
	// 'signal_token' => 'string'
    // }

    // const listheartECG = async (access_token) => {
    //     uri="https://wbsapi.withings.net/v2/heart";
    //     'action' => 'list',
	// 'startdate' => 'startdate',
	// 'enddate' => 'enddate',
	// 'offset' => 'offset'
    // }

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
                    <h2 >Withings Authentication</h2>
                 </h1>
                 </div>           
               
                  {/* <div style={{marginLeft: "-18px"}}>
                      { getRespCode }
                  </div> */}
                   <div
              style={{
                textAlign: "center",
                marginTop: "10pt",
                marginBottom: "10pt",
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
                Withings Authentication
              </Button>
                
            </div>
            </Card>
            </div>
          </Grid>
        </Container>
      );
}

export default WithingsCall;