import React, { useEffect, useState, useMemo } from 'react';
import User from "../../assets/DoctorDashboard/adam-hilbert.png";
import Flag from "../../assets/DoctorDashboard/flag.png";
import Call from "../../assets/DoctorDashboard/call.png";
import Video from "../../assets/DoctorDashboard/video.png";
import IconInfo from '../../assets/DoctorDashboard/icon-info.png';
// import VoiceRecorder from '../components/VoiceRecorder';
import AudioRecorder from '../../components/DoctorDashboard/AudioRecorder/AudioRecorder';
import Documentation from './Documentation';
import PreConsultation from './PreConsultation';
import Reports from './Reports';
import './Consultation.css';
import { useVoiceRecording } from '../../contexts/DoctorDashboard/voiceRecordingContext';




// function HomePage() {
const HomePage = () => {

  const [voiceRecording, setVoiceRecording] = useVoiceRecording();
  const patient = require('../../patient.json');
  const [subjective, setSubjective] = useState('');
  const [objective, setObjective] = useState('');
  const [assessment, setAssessment] = useState('');
  const [plan, setPlan] = useState('');
  const [conversation, setConversation] = useState('');
  // const [transcriptionTemp, setTranscriptionTemp] = useState('');



  const handleAcceptText = async (event) => {
    event.preventDefault(); // Prevent form submission
    try {
      const response = await fetch('https://azurespeechtotextsummary.azurewebsites.net/summarise', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ conversation: conversation }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data); // Log the response data to the console

      if (data.summary) {
        const summary = JSON.parse(data.summary);

        const formatText = (text) => {
          let textArray = Array.isArray(text) ? text : [text]; // Ensure textArray is an array

          if (!Array.isArray(textArray)) {
            console.error('Expected an array, but received:', textArray);
            return '';
          }
          // Join the array into a single string
          let joinedText = textArray.join('. ');

          if (!joinedText.endsWith('.')) {
            joinedText += '.';
          }


          // Remove commas after full stops
          let newText = joinedText.replace(/\.+,/g, '.');

          // Replace "Dr." with "Dr" to avoid splitting the text at this point.
          newText = newText.replace(/Dr\./g, 'Dr');
          // Split by full stops, filter out empty strings, add bullet points (and full stops back in), and join back together
          newText = newText.split(/(?<=\D)\.(?=\s[A-Z]|$)/)
            .filter(sentence => sentence.trim() !== '')
            .map(sentence => `• ${sentence.trim()}`)
            .join('\n');

          return newText;
        };

        setSubjective(formatText(summary.Subjective));
        setObjective(formatText(summary.Objective));
        setAssessment(formatText(summary.Assessment));
        setPlan(formatText(summary.Plan));
      } else {
        console.error('Summary not found in response');
      }
    } catch (error) {
      console.error('Failed to fetch summary:', error);
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
    reContructConversation();
    // setConversation(voiceRecording);
  }, [voiceRecording]);


  return (
    <>
      <div className="Main-Page">

        {/* Personal Detail Card */}
        <div className="Card-Main1">
          <div class="Card-Personal">

            <div class='row info-div'>
              <div class='col'>
                <h2 className="pinfo">Patient Particulars</h2>
              </div>
              <div class='col right'>
                <img src={Flag} className="img-right" />
              </div>
            </div>

            <table className="table">
              <tr><td rowSpan={3} className="td1">
                <img src={User} className="user-img" />
              </td>
                <td className="td2">{patient.first_name} {patient.last_name} <br /><span className="gray">{patient.gender} / {patient.age} years / {patient.location}</span></td>
                <td className="td">Chief Complaints <br /><span className="gray">{patient.chief_complaint}</span></td>
              </tr>
              {/* <tr><td><span className="gray">M / 43 years / Sydney</span></td><td className='td'><span className="gray">Cardiovascular Disease</span></td></tr> */}
              <tr><td className="td2">Patient ID: <span className='gray'>{patient.id}</span></td>
                <td>
                  {/* Patient id: <span className="gray">23165 412346</span> */}
                </td></tr>
            </table>
          </div>

          {/*recording section */}
          <div class="Card-Personal">
            <table className="table1">
              <colgroup>
                <col style={{ width: "50%" }} />
                <col style={{ width: "50%" }} />
              </colgroup>
              <tr><td><span className="green">Record Consulation</span></td>
                <td className="right"><img src={Call} className="call-img" /> <img src={Video} className="call-img" /></td></tr>
            </table>
            {/* <VoiceRecorder /> */}
            <AudioRecorder />
          </div>
        </div>

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
                <button class="nav-link " id="documentation-tab" data-bs-toggle="tab" data-bs-target="#documentation" type="button" role="tab" aria-controls="documentation" aria-selected="true">Documentation</button>
              </li>
              {/* <li class="nav-item" role="presentation">
                  <button class="nav-link" id="to-dos-tab" data-bs-toggle="tab" data-bs-target="#to-dos" type="button" role="tab" aria-controls="to-dos" aria-selected="true" disabled>To Dos</button>
                </li> */}
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="claims-tab" data-bs-toggle="tab" data-bs-target="#claims" type="button" role="tab" aria-controls="claims" aria-selected="true" disabled>Claims</button>
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
                    <div class='col'>

                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Transcription of Consulation</h5>
                          <textarea class="form-control text-area" id="exampleFormControlTextarea1" rows="24"
                            value={voiceRecording}
                            onInput={e => setVoiceRecording(e.target.value)}
                          />
                        </div>
                        <div class="row btn-div1">
                          <div class="col">
                            <button className="btn-hs">Human Scribe</button>
                          </div>
                          <div class="col btn-div">
                            <button className="btn-at" onClick={handleAcceptText}>Accept Text</button>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div class='col'>
                      <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Summary of Medical Notes by AI</h5>
                          <textarea class="form-control text-area" id="exampleFormControlTextarea1" rows="24"
                            value={conversation}
                            onInput={e => setConversation(e.target.value)}
                          >

                          </textarea>
                          {/* <div className="summary-div">
                              Subjective
                              <textarea class="form-control text-area" id="exampleFormControlTextarea1" rows="3" value={subjective} onChange={e => setSubjective(e.target.value)}></textarea>
                            </div>
                            <div className="summary-div">
                              Objective
                              <textarea class="form-control text-area" id="exampleFormControlTextarea1" rows="3" value={objective} onChange={e => setObjective(e.target.value)}></textarea>
                            </div>
                            <div className="summary-div">
                              Assessment
                              <textarea class="form-control text-area" id="exampleFormControlTextarea1" rows="3" value={assessment} onChange={e => setAssessment(e.target.value)}></textarea>
                            </div>
                            <div className="summary-div">
                              Plan
                              <textarea class="form-control text-area" id="exampleFormControlTextarea1" rows="3" value={plan} onChange={e => setPlan(e.target.value)}></textarea>
                            </div> */}
                        </div>
                        <div class="row btn-div1">
                          <div class="col">
                            <button className="btn-hs">Redraft</button>
                          </div>
                          <div class="col btn-div">
                            <button className="btn-at">Copy Text</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="right1 mt-4">
                  <button type="button" class="btn-c">Continue</button>
                </div>
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
              {/* <div class="tab-pane fade" id="notes" role="tabpanel" aria-labelledby="notes-tab">
                  <Notes />
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;