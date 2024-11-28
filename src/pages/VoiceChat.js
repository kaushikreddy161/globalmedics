import React, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../contexts/user.context";
import { Card } from "react-bootstrap";
import { Button, Divider, TextField } from "@mui/material";
import { Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { BSON } from "realm-web";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import countries from "../../src/speechToTextLanguage.json";
import Select from 'react-select';
import VoiceChatHeaderIcon from "../assets/icon-voice-chat-header.png";
import VoiceChatDocIcon from "../assets/icon-voice-chat-doc.png";
import VoiceChatLanIcon from "../assets/icon-voice-chat-lan.png";
import IconHelp from "../assets/icon-help.png";
import IconAI from "../assets/icon-small-ai.png";


import AudioRecorder from "../components/DoctorDashboard/AudioRecorder/RecordButton";
import { useVoiceRecording } from "../contexts/DoctorDashboard/voiceRecordingContext";

const VoiceChat = () => {

  const [selectedOption, setSelectedOption] = useState(null);
  const options = countries ? Object.entries(countries).map(([label, value]) => ({
    value,
    label,
  })) : [];

  const [voiceRecording, setVoiceRecording, , , recorderConfig, setRecorderConfig] = useVoiceRecording();


  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }} className="card-rts">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        // justifyContent="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >


        <div className="form-rpt">
          <Card
            itemType=""
            style={{
              marginTop: "0pt",
              marginBottom: "10pt",
              background: "#F2F8F1",
              borderRadius: "15pt",
              maxWidth: "500px",
              minHeight: "150px",
              color: "#707070",
            }}
          >
            <Card.Body>
              <h1 className="title-rpt-scn">Voice Chat</h1>
              <div className="row">
                <div className="col-3"><img src={VoiceChatDocIcon} className="img-responsive" /></div>
                <div className="col-6 text-center">
                  Use the microphone in your mobile device to converse with our AI
                </div>
                <div className="col-3 text-end"><img src={VoiceChatHeaderIcon} className="img-responsive" /></div>
              </div>
              <div className="row">
                <div className="col-3 text-center">Dr. Doctor</div>
                <div className="col-6 text-center"></div>
                <div className="col-3 text-end"></div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <Form
        // className="signup-form"
        // style={{ color: "#209F85" }}
        // onSubmit={onSubmit}
        >
          <div className="form-rpt">

            <Card
              itemType=""
              style={{
                marginTop: "0pt",
                marginBottom: "10pt",
                borderTop: "8px solid #1D5A90",
                borderRadius: "15pt",
                maxWidth: "500px",
              }}
            >
              <Card.Body>
                <div className="container">
                  <div className="form-container">
                    <p class="tnsl-heading">Select Patient</p>
                    <div className="row align-items-center">
                      <div className="col-4">
                        <label className="form-label">Name</label>
                      </div>
                      <div className="col-8">

                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fas fa-search"></i>
                          </span>
                          <input type="text" className="form-control" placeholder="Search..." />
                        </div>
                      </div>
                    </div>


                    <div className="row align-items-center mt-2">
                      <div className="col-4">
                        <label className="form-label">Patient ID</label>
                      </div>
                      <div className="col-8">
                        <div className="input-group">
                          <span className="input-group-text">
                            <i className="fas fa-search"></i>
                          </span>
                          <input type="text" className="form-control" placeholder="Search..." />
                        </div>
                      </div>
                    </div>

                    <div className="row align-items-center mt-2">
                      <div className="col-4"></div>
                      <div className="col-8" style={{ textAlign: "right", }}><span class="gray">Age / Sex / Location</span></div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="form-rpt">
            <Card
              itemType=""
              style={{
                marginTop: "0pt",
                marginBottom: "0pt",
                borderTop: "8px solid #1D5A90",
                borderRadius: "15pt",
                maxWidth: "500px",
              }}
            >
              <Card.Body>
                <div className="container">
                  <div className="form-container">
                    <div class="row">
                      <div class="col-2"><img src={VoiceChatLanIcon} alt="" style={{ width: "27pt" }} /></div>
                      <div class="col-8 text-green">Select Language for Conversation</div>
                      <div class="col-2 icon-right"><img src={IconHelp} alt="" /></div>
                    </div>
                    <div class="row mt-3">
                      <div class="col-3"><span class="gray">Speak in</span></div>
                      <div class="col-7">
                        <Select
                          className='lan-sx'
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}

                          theme={(theme) => ({
                            ...theme,
                            colors: {
                              ...theme.colors,
                              primary25: "#F2F8F1",
                              primary: '#209F85',
                            },
                          })}
                        />
                      </div>
                      <div class="col-2"></div>
                    </div>
                    <Card
                      itemType=""
                      style={{
                        marginTop: "20pt",
                        marginBottom: "0pt",
                        // borderTop: "8px solid #1D5A90",
                        borderRadius: "15pt",
                        border: "none",
                        height: "400px",
                      }}
                    >
                      <Card.Body>
                        <div class="row">
                          <div class="col-10">
                            <label for="exampleFormControlTextarea1" class="form-label">Translate Text</label>
                          </div>
                          <div class="col-2"><img src={IconAI} alt="" style={{ width: "27pt" }} /></div>
                        </div>
                        <p class="translate-text">Doctor: “How are you?”</p>
                        <p class="translate-text">Patient: “I have pain in my shoulder.”</p>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Card.Body>
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
                  type="submit"
                // onClick={onSubmit}
                >
                  Talk to Me
                </Button>


                <AudioRecorder status={recorderConfig.status} setRecorderStatus={setRecorderConfig} />
              
              
              </div>




            </Card>
          </div>
        </Form>
      </Grid>
    </Container>
  );
};

export default VoiceChat;
