import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { Button, Divider, TextField } from "@mui/material";

import Webcam from "react-webcam";
import ReactDOM from 'react-dom';

import { useNavigate } from "react-router-dom";
import FixedHeader from "../components/FixedHeader";
import IconAddLocalCare from "../assets/icon-add-localcare.png";
import IconAddLocalCare1 from "../assets/icon-add-local-care.png";
import IconAddLovedOne from "../assets/icon-add-lovedone.png";
import IconPersonalaInvite from "../assets/icon-personal-invite.png";
import IconAddDoctor from "../assets/icon-add-doctors.png";
import IconSelectSymptoms from "../assets/icon-select-symptoms.png";
import IconAddFamilyMembers from "../assets/icon-add-family-members.png";
import IconCareRing from "../assets/icon-add-care-ring.png";
import IconAddCommunity from "../assets/icon-add-community.png";

import "./Main.css";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function VideoAudioRecorder() {
  const navigate = useNavigate();
  const onSubmit = () => {
    const path = `/moduleSummaryOne`;
    navigate(path);
  };
  const onBack = () => {
    const path = `/careManagerDetails`;
    navigate(path);
  };

  const onNext = () => {
    const path = `/moduleSummaryThree`;
    navigate(path);
  };
const datex = new Date();

// const objectURL = URL.createObjectURL("C:\Users\rpagoti\Downloads\gmvideo.webm");
// console.log("obejctURL", objectURL);


const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm"
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/mp4"
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.mp4";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);




  return (
    <Container
      style={{
        background: "#EBEBEB",
        maxWidth: "100%",
        minHeight: "100vh",
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
          title="Record Video"
          title2="Please record a video here"
          title3="No login history found."
          limg="rl"
          // rimg="vs"
        />

        <div className="form-va">
          <Card
            //   sx={{ maxWidth: 500 }}
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              zIndex: "1",
              marginTop:"0rem",
              marginBottom:"0rem",
            }}
            className="left"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
                // container
                // spacing={{ xs: 2, md: 3 }}
                // columns={{ xs: 4, sm: 8, md: 12 }}
                style={{
                  maxWidth: "500px",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop:"-1.9rem",
                  marginBottom:"0rem",
                    }}
              >
                <div className="videoAudioCap">
                  <Webcam audio={false} ref={webcamRef} />
                  <div className="videoAudioCap1">
                    {capturing ? (
                      <button className="d-btn" onClick={handleStopCaptureClick}>Stop Capture</button>
                    ) : (
                      <button className="d-btn" onClick={handleStartCaptureClick}>Start Capture</button>
                    )}
                    {recordedChunks.length > 0 && (
                      <button className="download-btn" onClick={handleDownload}>Download</button>
                    )}
                  </div>
                </div>



              </Grid>
            </Box>

            
          </Card>
        </div>
      </Grid>
      <div style={{ height: "100px" }}></div>
    </Container>
  );
}
export default VideoAudioRecorder;
