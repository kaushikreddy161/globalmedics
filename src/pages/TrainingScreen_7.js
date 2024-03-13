import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import FixedHeader from "../components/FixedHeader";
import IconCamera from "../assets/icon-camera.png";
import { Button, Divider } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate, useLocation } from "react-router-dom";
import VitalsBloodPressure from "../assets/vitals-blood-pressure.png";
import VitalsPulseRate from "../assets/vitals-pulse-rate.png";


const FaqInfo = [
  {
    des: "description",
  },
]


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TrainingScreen_7(props) {
  const navigate = useNavigate();

  const location = useLocation();

  const onSubmit = () => {
    const path = `/trainingScreen_1`;
    navigate(path);
  };

  const datex = new Date();
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
              title="Info Heading"
              title2="On-line description of the screen"
              title3="No login history found."
              limg="if-h"
              rimg="adr"
            />
        <div className="info-card">
          <Card
            style={{
              // borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              // zIndex: "1",
              backgroundColor: "#F2F8F1",
            }}
          // className="left"
          >
            <div class="col-12 text-green_left">Text Explanation</div>
            <div class="col-12 text-gray_left">One paragraph description of the screen functionality and key elements</div>
          </Card>
        </div>

        <div className="info-card1">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              // zIndex: "1",
              backgroundColor: "#F2F8F1",

            }}
          // className="left"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                // spacing={3}
                style={{
                  maxWidth: "500px",
                }}
              >
                <div class="container">
                  <div class="row">
                    <div class="col-12 text-green_left">Video Explanation</div>
                  </div>
                </div>
                <div className="video_card1">
                  <div className="video_card_b">
                    
                        <iframe src='https://www.youtube.com/embed/gUHALsLeeoM'
                          className="info-video"
                          frameborder='0'
                          allow='autoplay; encrypted-media'
                          allowfullscreen
                          title='video'

                        />
                  </div>
                </div>
              </Grid>
            </Box>
          </Card>
        </div>
        <div className="info-card2">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              zIndex: "1",
              backgroundColor: "#F2F8F1",

            }}
            className="left"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
                style={{
                  maxWidth: "500px",
                }}
              >
                <p class="info_subhead_top">Frequently Asked Questions</p>
                <div className="div_faq">
                      <p className="faq_para_q">Question:  How would we use this functionality?</p>
                      <p className="faq_para">Answer: The best way to perform this work is by ...</p>
                      <hr className="hr_top" />
                      <p className="faq_para_q">Question:  How would we use this functionality?</p>
                      <p className="faq_para">Answer: The best way to perform this work is by ... </p>
                </div>
              </Grid>
            </Box>
          </Card>
        </div>
        <div className="info-card3">
          <Card
            style={{
              borderTop: "6px solid #1D5A90",
              borderRadius: "10px",
              padding: "20pt",
              maxWidth: "500px",
              // position: "absolute",
              zIndex: "1",

            }}
            className="left"
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                item
                spacing={3}
                style={{
                  maxWidth: "500px",
                  padding: "1rem",
                }}
              >
                <p class="text-green">Need more clarification? Please type your question here.</p>
                <div class="form-group w-100 top-space">
                  <textarea class="form-control" rows="3" >Question:  How would we use this functionality?</textarea>
                </div>
              </Grid>
            </Box>
            <div className="text-center faq_submit">
              <Button
                style={{
                  background: "#1D5A90",
                  borderRadius: 50,
                  color: "#ffffff",
                  textTransform: "none",
                  paddingLeft: "4rem",
                  paddingRight: "4rem",
                }}
                onClick={onSubmit}
                type="submit"
              >
                Send
              </Button>
            </div>
          </Card>
        </div>



      </Grid>
      <div style={{ height: "150px" }}></div>
    </Container>
  );
}
export default TrainingScreen_7;
