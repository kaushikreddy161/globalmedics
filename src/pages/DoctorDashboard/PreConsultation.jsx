import React, { useState, useEffect, useRef } from 'react';
import { handlePrint } from '../../components/DoctorDashboard/Editor/MyEditor';
import './PreConsultation.css';
import { useVoiceRecording } from '../../contexts/DoctorDashboard/voiceRecordingContext';
import data from "../../patient.json";
import IconInfo from '../../assets/DoctorDashboard/icon-info.png';
import AILogos from '../../assets/DoctorDashboard/ai-logo.png';
import { patientHistory } from '../../components/DoctorDashboard/apiCalls';

import RecordButton from '../../components/DoctorDashboard/AudioRecorder/RecordButton';

const PreConsultation = () => {
  const [voiceRecording, setVoiceRecording, , , recorderConfig, setRecorderConfig] = useVoiceRecording();
  const [patientHistoryData, setPatientHistoryData] = useState('');
  const [currentComplaints, setCurrentComplaints] = useState(data.summary_of_current_complaints);
  const [aiRecommendations, setAiRecommendations] = useState({});
  const [medicalResearch, setMedicalResearch] = useState(data.medical_research);

  useEffect(() => {
    setAiRecommendations(data.ai_recommendations);
    getPatientHistory();
  }, []);

  const handlePrintButtonClick = () => {
    handlePrint();
  };

  const getPatientHistory = async () => {
    const data = await patientHistory();
    const info = await data.text();
    setPatientHistoryData(info);
  };

  return (
    <>
      <div class="container-fluid ms-3 pe-5">
        <div className='pt-2 info'><img src={IconInfo} className='imgs' /></div>
        <div class="row">
          <div class="col-6">
            <h3 className='card-title'>AI Summary of Patient History</h3>
            <div class="card">
              <div class="card-body">
                <h6 class="sub-title">Summary of Current Complaints</h6>
                <p className='summary-txt'>AI Health bot would record current symptoms and chief complaints reported by the patient. It would ask relevant follow-up questions and display a summary of its findings here</p>
                <ul className='summary-txt-api'>
                  {currentComplaints.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
            <div class="card mt-4">
              <div class="card-body">
                <img src={AILogos} alt="" className='ai-logo-pc' />
                <h6 class="sub-title">Summary of Patient and Family History</h6>

                <p className='summary-txt'>AI would scan all available history of the patient over the years and summarise it here. It can also provide a summary of Medical Research Literature relevant to the patient’s case</p>
                {/* <div class="form-control" id="exampleFormControlTextarea1" rows="2"> */}

                  {/* <strong className='summary-txt'>Patient History:</strong>
                  <ul className='summary-txt'>
                    {patientHistory.patient_history.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <div></div>
                  <strong className='summary-txt'>Family History:</strong>
                  <ul className='summary-txt'>
                    {patientHistory.family_history.map(item => <li key={item}>{item}</li>)}
                  </ul> */}

                  {/* <strong className='summary-txt'>Patient History:</strong>
                  {patientHistoryData && patientHistoryData.length > 0 ? (
                    <ul className='summary-txt'>
                      {patientHistoryData.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No patient history available</p>
                  )}
                  <strong className='summary-txt'>Family History:</strong>
                  {patientHistoryData && patientHistoryData.length > 0 ? (
                    <ul className='summary-txt'>
                      {patientHistoryData.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>No family history available</p>
                  )}*/}
                {/* </div> */}

                {patientHistoryData && (
                  <p className='summary-txt-api'>{patientHistoryData}</p>
                )}

              </div>
            </div>
            <div class="card mt-4">
              <div class="card-body">
                <img src={AILogos} alt="" className='ai-logo-pc' />
                <h6 class="sub-title">Summary of Evidence Based Research</h6>
                <p className='summary-txt'>AI would scan all available history of the patient over the years and summarise it here. It can also provide a summary of Medical Research Literature relevant to the patient’s case</p>
                <ul className='summary-txt'>
                  {medicalResearch.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div class="col-6">
            <h3 className='card-title'>AI Recommendations</h3>
            <div class="card cheight">
              <div class="card-body">
                <img src={AILogos} alt="" className='ai-logo-pc' />
                <h6 class="sub-title">Suggested Next Steps</h6>
                <div class='mt-4'>
                  <p className='summary-txt'>AI suggests a checklist of what additional information might be collected during a consultation</p>
                </div>
                {Object.entries(aiRecommendations).map(([category, recommendations], index) => (
                  <div key={index}>
                    <strong className='summary-txt'>{category}:</strong>
                    <ul className='summary-txt'>
                      {recommendations.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              {/* <div class="row btn-div1">
                <div class="col">
                  <button className="btn-drd custom-btn-width">View References</button>
                </div>
                <div class="col btn-div">
                  <button className="btn-drd custom-btn-width">Copy Text</button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="card">
            <div class="card-body">
              <h6 class="sub-title">Transcribe Speech During Consultation</h6>
              <textarea class="form-control summary-txt" id="exampleFormControlTextarea1" rows="3"
              style={{fontSize: '10pt',textAlign:"justify"}}
                // value={voiceRecording}
                onInput={e => setVoiceRecording(e.target.value)}
              />
              {/* <div class="d-grid gap-4 d-md-flex justify-content-md-end mt-2"> */}
              {/* <button type="button" class="btn-drd custom-btn-width">Record / Stop</button> */}
              <div className='row'>
                <div class='col-9'>
                </div>
                {/* <div class="d-grid gap-4 d-md-flex justify-content-md-end mt-2"> */}
                <div class='col-3'>
                  <div class="btn-str-div-ed">
                    <RecordButton status={recorderConfig.status} setRecorderStatus={setRecorderConfig} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="right mt-4">
          <button type="button" class="btn-c">Continue</button>
        </div> */}
      </div >
    </>
  )
}

export default PreConsultation;