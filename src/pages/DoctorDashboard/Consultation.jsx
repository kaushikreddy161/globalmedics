import React, { useEffect, useState, useMemo, useRef } from 'react';
import User from "../../assets/DoctorDashboard/adam-hilbert.png";
import Flag from "../../assets/DoctorDashboard/flag.png";
import Call from "../../assets/DoctorDashboard/call.png";
import Video from "../../assets/DoctorDashboard/video.png";
// import VoiceRecorder from '../../components/DoctorDashboard/VoiceRecorder';
import AudioRecorder from '../../components/DoctorDashboard/AudioRecorder/AudioRecorder';
import Documentation from './Documentation';
import PreConsultation from './PreConsultation';
import Reports from './Reports';
import Claims from './Claims';
import './Consultation.css';
import './MediaStyles.css';
import { useVoiceRecording } from '../../contexts/DoctorDashboard/voiceRecordingContext';
import IconInfo from '../../assets/DoctorDashboard/icon-info.png';

import ReactMarkdown from 'react-markdown';
import { BarLoader } from 'react-spinners';
import AILogo from '../../assets/DoctorDashboard/ai-logo.gif';
import AILogos from '../../assets/DoctorDashboard/ai-logo.png';

import { soapNoteConcise, soapNoteDetailed } from '../../components/DoctorDashboard/apiCalls';
import Select from 'react-select';
import RecordButton from '../../components/DoctorDashboard/AudioRecorder/RecordButton';
import { Quill } from 'react-quill';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import MarkdownEditor from '../../components/DoctorDashboard/Editor/MarkdownEditor';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';


// function HomePage() {
const HomePage = () => {
  const [voiceRecording, setVoiceRecording, , , recorderConfig, setRecorderConfig] = useVoiceRecording();

  const patient = require('../../patient.json');
  const [subjective, setSubjective] = useState('');
  const [objective, setObjective] = useState('');
  const [assessment, setAssessment] = useState('');
  const [plan, setPlan] = useState('');
  const [conversation, setConversation] = useState('');
  // const [transcriptionTemp, setTranscriptionTemp] = useState('');

  const [loading, setLoading] = useState(false);

  const [selectedRadio, setSelectedRadio] = useState('');
  const [soapNoteOption, setSoapNoteOption] = useState();
  const [childOption, setChildOption] = useState('Concise');
  const [selectedSoap, setSelectedSoap] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const documentationTabRef = useRef(null); // Ref to Documentation tab button
  const [value, setValue] = useState('');

  const mdParser = new MarkdownIt();

  const handleEditorChange = ({ conversation }) => {
    setConversation(conversation);
  };

  const handleChangeSoapNotes = async (selectedType) => {
    setSelectedOption(selectedType);
    setLoading(true);

    try {
      console.log(`Selected value: ${selectedType}`);
      let response = '';

      if (selectedType === 'Concise') {
        response = await soapNoteConcise(voiceRecording);
        console.log('Consultation Concise response:', response)
      } else if (selectedType === 'Detailed') {
        response = await soapNoteDetailed(voiceRecording);
      }

      // Format the response
      // const formattedResponse = response
      // .split('-') // Handle new lines
      // .map(line => line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')) // Format bold text
      // .join('<br/><br/>'); // Join lines with <br/> for HTML new lines
      // console.log(formattedResponse);
      // setConversation(formattedResponse);

      console.log(response);
      setConversation(response);
    } catch (error) {
      console.error('Error fetching SOAP notes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };



  const handleAcceptText = async (event) => {
    event.preventDefault(); // Prevent form submission
    if (documentationTabRef.current) {
      documentationTabRef.current.click();
    }
  };
  const reContructConversation = async () => {
    try {
      const response = await fetch('https://conversationconstructor.azurewebsites.net/construct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ conversation: voiceRecording }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Log the response data to the console
      setConversation(data.conversation);

    } catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
    //reContructConversation();
    // setConversation(voiceRecording);
  }, [voiceRecording]);


  const handleSoapNoteChange = (selectedOption) => {
    setChildOption(selectedOption.label);
    setSelectedRadio('soapNotes');
  };

  const soapNotesList = [
    { value: 1, label: 'Concise' },
    { value: 2, label: 'Detailed' },
  ];

  // const handleGenerateDocument = async () => {
  //   setLoading(true);
  //   const conversation = prop.content;
  //   let response = '';

  //   if (selectedRadio === 'soapNotes') {
  //     if (childOption === 'Concise') {
  //       response = await soapNoteConcise(conversation);
  //     } else if (childOption === 'Detailed') {
  //       response = await soapNoteDetailed(conversation);
  //     }
  //   }
  // };

  return (
    <>
      <div className="Main-Page">

        {/* New Code for Patient particulars */}
        <div class='ml-4c pr-4c'>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div class="card card-height-info">
                <div class='row info-div'>
                  <div class='col-7'><span className="green">Patient Particulars</span></div>
                  <div class='col-5 right'><img src={Flag} className="img-right" /></div>
                </div>

                <div className="container-fluid card-mt">
                  <div className="row mb-3">
                    <div className="col-lg-3 col-md-5 col-sm-6 col-xs-12">
                      <img src={User} className="user-profile" />
                    </div>
                    <div className="col-lg-5 col-md-7 col-sm-6 col-xs-12 user-details">
                      {patient.first_name} {patient.last_name} <br /><span className="gray">{patient.gender} / {patient.age} years / {patient.location}</span>
                      <br />
                      Patient ID: <span className='gray'>{patient.id}</span>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-6 col-xs-12 user-details">
                      <div className="div-right">
                        Chief Complaints <span className="gray">{patient.chief_complaint}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 mt-sx">
              <div class="card pb-1c card-consult-height">
                <div class="container mt-2">
                  <div class="row">
                    <div class="col-7"><span className="green">Record Consulation</span></div>
                    <div class="col-5 grid-item-call"><img src={Call} className="call-img" /> <img src={Video} className="call-img" /></div>
                  </div>
                </div>
                <AudioRecorder />
              </div>
            </div>
          </div>
        </div>

        {/* end */}

        {/* Tab Section */}
        <div className="mt-2 mb-4 ms-4 me-4">
          <div className="tab-div">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li key="reports" class="nav-item" role="presentation">
                <button class="nav-link" id="reports-tab" data-bs-toggle="tab" data-bs-target="#reports" type="button" role="tab" aria-controls="reports" aria-selected="true">Reports</button>
              </li>
              {/* <li class="nav-item" role="presentation">
                <button class="nav-link" id="trends-tab" data-bs-toggle="tab" data-bs-target="#trends" type="button" role="tab" aria-controls="trends" aria-selected="true" disabled>Trends</button>
              </li> */}
              <li key="pre-consultation" class="nav-item" role="presentation">
                <button class="nav-link" id="pre-consultation-tab" data-bs-toggle="tab" data-bs-target="#pre-consultation" type="button" role="tab" aria-controls="pre-consultation" aria-selected="true">Pre-Consultation</button>
              </li>
              <li key="consultation" class="nav-item" role="presentation">
                <button class="nav-link active" id="consultation-tab" data-bs-toggle="tab" data-bs-target="#consultation" type="button" role="tab" aria-controls="consultation" aria-selected="true">Consultation</button>
              </li>
              <li key="documentation" class="nav-item" role="presentation">
                <button ref={documentationTabRef} class="nav-link " id="documentation-tab" data-bs-toggle="tab" data-bs-target="#documentation" type="button" role="tab" aria-controls="documentation" aria-selected="true">Documentation</button>
              </li>
              {/* <li class="nav-item" role="presentation">
                <button class="nav-link" id="to-dos-tab" data-bs-toggle="tab" data-bs-target="#to-dos" type="button" role="tab" aria-controls="to-dos" aria-selected="true" disabled>To Dos</button>
              </li> */}
              <li key="claims" class="nav-item" role="presentation">
                <button class="nav-link" id="claims-tab" data-bs-toggle="tab" data-bs-target="#claims" type="button" role="tab" aria-controls="claims" aria-selected="true">Claims</button>
              </li>
              {/* <li class="nav-item" role="notes">
                <button class="nav-link" id="notes-tab" data-bs-toggle="tab" data-bs-target="#notes" type="button" role="tab" aria-controls="notes" aria-selected="true">Note</button>
              </li> */}
            </ul>
          </div>

          {/* Tab Individual Content */}
          <div className="tab-sub">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="consultation" role="tabpanel" aria-labelledby="consultation-tab">
                {/* New Code Start */}
                <div class='container-fluid ms-3 pe-5'>
                  <div className='pt-2 info'><img src={IconInfo} className='imgs' /></div>

                  <div class='row'>
                    <div className="col-lg-6 col-md-12">
                      <div className="card card-height">
                        <div className="card-body">
                          <h5 class="card-title">Transcription of Consultaion</h5>
                          <textarea class="form-control" id="exampleFormControlTextarea1" rows="18"
                            style={{ fontSize: '10pt', textAlign: "justify" }}
                            value={voiceRecording}
                            onInput={e => setVoiceRecording(e.target.value)}
                          />
                        </div>
                        <div className="row btn-div1">
                          <div className="col"></div>
                          <div className="col btn-div">
                            <button className="btn-hs" onClick={() => handleChangeSoapNotes('Concise')}>Summarise</button>
                          </div>
                        </div>
                      </div>
                      <div className="card mt-4">
                        <div className="card-body">
                          <h5 className="card-title">Add Notes</h5>
                          <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"
                            // value={voiceRecording}
                            onInput={e => setVoiceRecording(e.target.value)}>{voiceRecording}</textarea>
                        </div>
                        <div className="row btn-div1">
                          <div className="col">
                            <RecordButton status={recorderConfig.status} setRecorderStatus={setRecorderConfig} />
                          </div>
                          <div className="col btn-div">
                            <button className="btn-hs">Confirm</button>
                          </div>
                        </div>
                      </div>
                    </div>



                    <div class='col-lg-6 col-md-12'>
                      <div class="card con-md-top">
                        <div class="card-body soap-card-text" style={{ fontSize: "10pt" }}>
                          {/* {loading ? (
                            <>
                              <h5 className="card-title-nl">SOAP by AI
                                <div class="form-check form-check-inline">
                                  <input className='form-check-input radio-btn-soap' type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Concise"
                                    //  onChange={() => handleChangeSoapNotes('Concise')}
                                    onChange={handleChangeSoapNotes}
                                    checked={selectedOption === 'Concise'}
                                  />
                                  <label className='soap-note-label' for="inlineRadio1">Concise</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input className='form-check-input radio-btn-soap' type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Detailed"
                                    // onChange={() => handleChangeSoapNotes('Detailed')}
                                    onChange={handleChangeSoapNotes}
                                    checked={selectedOption === 'Detailed'}
                                  />
                                  <label className='soap-note-label' for="inlineRadio2">Detailed</label>
                                </div>
                              </h5>
                              <div className="spinner-container">
                                <BarLoader loading={loading} color="#209F85" width={598} height={1} className='report-spinner' />
                                <img src={AILogo} alt="" className='ai-logo-move' />
                              </div>
                            </>
                          ) : (
                            <>
                              <img src={AILogos} alt="" className='ai-logo' />
                              <h5 className="card-title-soap">SOAP by AI
                                <div class="form-check form-check-inline">
                                  <input className='form-check-input radio-btn-soap' type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Concise"
                                    // onChange={() => handleChangeSoapNotes('Concise')}
                                    onChange={handleChangeSoapNotes}
                                    checked={selectedOption === 'Concise'}
                                  />
                                  <label className='soap-note-label' for="inlineRadio1">Concise</label>
                                </div>
                                <div class="form-check form-check-inline">
                                  <input className='form-check-input radio-btn-soap' type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Detailed"
                                    // onChange={() => handleChangeSoapNotes('Concise')}
                                    onChange={handleChangeSoapNotes}
                                    checked={selectedOption === 'Detailed'}
                                  />
                                  <label className='soap-note-label' for="inlineRadio2">Detailed</label>
                                </div>
                              </h5>
                              <ReactMarkdown>{conversation}</ReactMarkdown>
                            </>
                          )} */}

                          {
                            loading ? (
                              <>
                                <h5 className="card-title-nl">Clinical Note</h5>
                                <div className="spinner-container">
                                  <BarLoader loading={loading} color="#209F85" width={598} height={1} className='report-spinner' />
                                  <img src={AILogo} alt="" className='ai-logo-move' />
                                </div>
                              </>
                            ) : (
                              <>
                                <img src={AILogos} alt="" className='ai-logo-consultation' />
                                <h5 className="card-title-soap">Clinical Note</h5>


                                {/* <ReactMarkdown>{conversation}</ReactMarkdown> */}
                                {/* <Quill value={conversation}/> */}
                                {/* <ReactQuill theme="snow" value={conversation}/>; */}
                                {/* <MarkdownEditor>{conversation}</MarkdownEditor> */}

                                <MdEditor
                                  value={conversation}
                                  style={{ height: '691px' }}
                                  renderHTML={(conversation) => mdParser.render(conversation)}
                                  onChange={handleEditorChange}
                                  view={{ menu: true, md: false, html: true }}
                                  config={{
                                    canView: {
                                      menu: true,
                                      md: true,
                                      html: true,
                                      fullScreen: true, // Optional: if you want to keep full screen option
                                      both: false // This hides the "both" option
                                    },
                                  }}
                                />

                              </>
                            )
                          }


                        </div>
                        <div class="row btn-div1">
                          <div class="col">
                            {/* <button className="btn-hs">Redraft</button> */}
                          </div>
                          <div class="col btn-div">
                            <button className="btn-at" onClick={handleAcceptText}>Accept Text</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="right1 mt-4">
                  <button type="button" class="btn-c">Continue</button>
                </div> */}
                {/* end here */}
              </div>

              <div class="tab-pane fade" id="reports" role="tabpanel" aria-labelledby="reports-tab">
                <Reports />
              </div>
              <div class="tab-pane fade" id="pre-consultation" role="tabpanel" aria-labelledby="pre-consultation-tab">
                <PreConsultation />
              </div>
              <div class="tab-pane fade" id="documentation" role="tabpanel" aria-labelledby="documentation-tab">
                <Documentation
                  content={conversation}
                />
              </div>
              <div class="tab-pane fade" id="claims" role="tabpanel" aria-labelledby="claims-tab">
                <Claims content={conversation} />
              </div>
              {/* <div class="tab-pane fade" id="notes" role="tabpanel" aria-labelledby="notes-tab">
                <Notes />
              </div> */}
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default HomePage;