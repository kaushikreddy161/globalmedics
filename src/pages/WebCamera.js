import React, {useRef, useState } from "react";
import Webcam from "react-webcam";
import "./Main.css";
import { useNavigate} from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import FixedHeader from "../components/FixedHeader";
import { Card } from "react-bootstrap";


import CameraPhotos from "../assets/icon-camera-photos.png"
import PhotoClick from "../assets/icon-photo-click.png"
import RearCamera from "../assets/icon-photo-selfie.png"
import CameraClose from "../assets/icon-camera-close.png"
import MobileFlash from "../assets/icon-mobile-flash.png"
import MobileFlashOn from "../assets/icon-mobile-flash-on.png"



const WebCamera = () => {

  const navigate = useNavigate();

  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);


  const cameraClose = () => {
    navigate(-1);
  };

  const onUserMedia = (e) => {
    console.log(e);
  };

  // const videoConstraints = {
  //   width: 470 ,
  //   height:  700 ,
  //   // aspectRatio: 0.6666666667,
  //   facingMode: "user"
  // };
  
  const [statusAccept, setStatusAccept] = useState(false);

  const changeAccept = () => {
    if(statusAccept == false) {
      setStatusAccept(true);
    } if(statusAccept == true) {
      setStatusAccept(false);
    }
  }

  const videoConstraints = {
    width: { max: 520 },
    height: { max: 720 },
    aspectRatio: 0.6666666667,
    facingMode: "user"
  };

  const onRearCamera = {
  width: 540,
  // facingMode: "environment"
  facingMode: { exact: "environment" }
};


  return (
    <>
      
      <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
      
        <FixedHeader
          title="Web Camera"
          title2="Please share details of any nose-related problems"
          title3=""
          limg="rl"
          rimg="rhc"
        />

        <div className="form-wc">
          <Card
            itemType=""
            style={{
              marginTop: "1rem",
              marginBottom: "100pt",
              // borderTop: "8px solid #1D5A90",
              borderRadius: "15pt",
              maxWidth: "500px",
              backgroundColor:"#FFFFFF;"
            }}
            className="left"
          >
            <Card.Body className="no-space">
                  <div className="WebCamBtn1">

                    <div class="container">
                      <div class="row ">
                        <div class="col ">
                          <button onClick={cameraClose} className="WebCamBtnBG"><img src={CameraClose} /></button>
                        </div>
                        <div class="col text-right">
                        <button className="WebCamBtnBG">
                          {statusAccept ?
                            <img src={MobileFlashOn} onClick={changeAccept} /> : <img src={MobileFlash} onClick={changeAccept} />
                          }
                        </button>
                        </div>
                      </div>
                    </div>
                    {/* <button onClick={cameraClose} className="WebCamBtnBG"><img src={CameraClose} /></button> */}
                  </div>
                  <div>
                    <Webcam
                      ref={webcamRef}
                      audio={true}
                      screenshotFormat="image/jpeg"
                      videoConstraints={videoConstraints}
                      onUserMedia={onUserMedia}
                      className="WebCam"
                      muted={true}
                      facingMode= {"environment"}
                    // height={200}
                    // width={200}
                    />
                  </div>
                  <div className="WebCamBtn">
                    <div class="container">
                      <div class="row ">
                        <div class="col d-flex justify-content-center align-items-center">
                          <button className="WebCamBtnBG"><img src={CameraPhotos} /></button>
                        </div>
                        <div class="col d-flex justify-content-center align-items-center">
                          <button onClick={capturePhoto} className="WebCamBtnBG"><img src={PhotoClick} /></button>
                        </div>
                        {/* <div class="col d-flex justify-content-center align-items-center">
                          <button onClick={() => setUrl(null)} className="WebCamBtnBG"><img src={RearCamera} /></button>
                        </div> */}
                        <div class="col d-flex justify-content-center align-items-center">
                          <button onClick={onRearCamera} className="WebCamBtnBG"><img src={RearCamera} /></button>
                        </div>
                      </div>
                    </div>
                  </div>
        {url && (
          <div className="WebCamSnap">
            <img src={url} alt="Screenshot" />
          </div>
        )}
      </Card.Body>
           
          </Card>
        </div>
      </Grid>
    </Container>
    </>
  );
};

export default WebCamera;