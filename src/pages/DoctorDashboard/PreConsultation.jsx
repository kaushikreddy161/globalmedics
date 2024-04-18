import React, { useState, useEffect } from 'react';
import { handlePrint } from '../../components/DoctorDashboard/Editor/MyEditor';
import './PreConsultation.css';
import { useVoiceRecording } from '../../contexts/DoctorDashboard/voiceRecordingContext';
import data from "../../patient.json";
import IconInfo from '../../assets/DoctorDashboard/icon-info.png';

const PreConsultation = () => {
  const [voiceRecording, setVoiceRecording] = useVoiceRecording();
  const [patientHistory, setPatientHistory] = useState(data.summary_of_patient_history);
  const [currentComplaints, setCurrentComplaints] = useState(data.summary_of_current_complaints);
  const [aiRecommendations, setAiRecommendations] = useState({});
  const [medicalResearch, setMedicalResearch] = useState(data.medical_research);

  useEffect(() => {
    setAiRecommendations(data.ai_recommendations);
  }, []);

  const handlePrintButtonClick = () => {
    handlePrint();
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
                <ul className='summary-txt'>
                  {currentComplaints.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </div>
            <div class="card mt-4">
              <div class="card-body">
                <h6 class="sub-title">Summary of Patient and Family History</h6>
                <p className='summary-txt'>AI would scan all available history of the patient over the years and summarise it here. It can also provide a summary of Medical Research Literature relevant to the patient’s case</p>
                <div class="form-control" id="exampleFormControlTextarea1" rows="2">
                  <strong className='summary-txt'>Patient History:</strong>
                  <ul className='summary-txt'>
                    {patientHistory.patient_history.map(item => <li key={item}>{item}</li>)}
                  </ul>
                  <div></div>
                  <strong className='summary-txt'>Family History:</strong>
                  <ul className='summary-txt'>
                    {patientHistory.family_history.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div class="card mt-4">
              <div class="card-body">
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
            <div class="card">
              <div class="card-body cheight">
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
              <div class="row btn-div1">
                <div class="col">
                  <button className="btn custom-btn-width">View References</button>
                </div>
                <div class="col btn-div">
                  <button className="btn custom-btn-width">Copy Text</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h6 class="sub-title">Transcribe Speech During Consultation</h6>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                  value={voiceRecording}
                  onInput={e => setVoiceRecording(e.target.value)}
                />
                <div class="d-grid gap-4 d-md-flex justify-content-md-end mt-2">
                  <button type="button" class="btn custom-btn-width">Record / Stop</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right mt-4">
          <button type="button" class="btn-c">Continue</button>
        </div>
      </div >
    </>
  )
}

export default PreConsultation;
