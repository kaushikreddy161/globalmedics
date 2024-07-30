import React, { useState, useEffect } from "react";
import './Claims.css';
import IconInfo from '../../assets/DoctorDashboard/icon-info.png';
import AILogos from '../../assets/DoctorDashboard/ai-logo.png';
import { soapNoteConcise, getClaimDetails } from "../../components/DoctorDashboard/apiCalls";
import axios from 'axios';
import PropTypes from 'prop-types';



const Claims = (prop) => {
  Claims.propTypes = {
    content: PropTypes.string,
    // setTransription: PropTypes.func,
  };

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const conversation = prop.content;
  console.log("Claims conversation", conversation);
  const result = getClaimDetails(conversation);
  console.log("Claims result", result);
  const [claimDetails, setClaimDetails] = useState(null);

  const [claimConversation, setClaimConversation] = useState("");
  const [claimsData, setClaimsData] = useState(null);

  useEffect(() => {
    getClaimDetails()
      .then(data => setClaimDetails(data.claimDetails)) // assuming the additionalData is returned under the key 'claimsData'
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
    console.log("Claims claimDetails", claimDetails);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const conciseData = await soapNoteConcise(conversation);
        const claimsDetails = await getClaimDetails(conversation, conciseData);
        setClaimsData(claimsDetails);
      } catch (err) {
        setError(err);
        console.error('Error processing claims:', err);
      }
    };

    fetchData();
  }, []); // Fetch data when the component mounts and when conversation changes




  return (
    <>
      <div className="container-fluid ms-3 pe-5">
        <div className='pt-2 info'><img src={IconInfo} className='imgs' /></div>
        <div className="card card-AI-height">
          <div className="card-body"><img src={AILogos} alt="" className='ai-logo-claims' />
            <h5 className="card-title">Claim Management</h5>

            <p className='claim-para'>Select relevant Code</p>
            <div class="form-check form-check-inline claim-para ml-c">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label class="form-check-label mt2" for="inlineRadio1">ICD-10</label>
            </div>
            <div class="form-check form-check-inline claim-para ml-c">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" checked />
              <label class="form-check-label mt2" for="inlineRadio2">Aus Medicare</label>
            </div>
            <div class="form-check form-check-inline claim-para ml-c">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
              <label class="form-check-label mt2" for="inlineRadio3">US CPT</label>
            </div>

            <p className='claim-para mt-2'>Select from the probable claim codes for the consultation</p>
            <div class='container mt-4'>
              <div class='row claim-para'>
                <div class='col text-center'>Diagnosis & Severity</div>
                <div class='col text-center'>Procedure Performed</div>
                <div class='col text-center'>Applicable Code</div>
                <div class='col text-center'>Code Description</div>
                <div class='col text-center'>Amount</div>
                <div class='col-1 text-center'>Select for Claim</div>
              </div>
            </div>

            {claimsData ? (
              claimsData.map((claim, index) => (
                <div key={index}>

                  <div className="claim-card mt-3">
                    <div className="row claim-text ">
                      <div class="col border-ds">
                        <div class="form-group input-container text-top"><textarea class="form-control claim-text" id="exampleFormControlTextarea1" placeholder="Will be published from Consultation Transcription" rows="4">{claim.diagnosis}</textarea></div>
                      </div>
                      <div class="col border-ds">
                        <div class="form-group input-container">
                          <textarea class="form-control claim-text" id="exampleFormControlTextarea2" placeholder="Will be published from Consultation Transcription" rows="4">{claim.procedure}</textarea>
                        </div>
                      </div>
                      <div class="col border-ds">{claim.australian_medicarecode}</div>
                      <div class="col border-ds claims-txt">{claim.Description}</div>
                      <div class="col border-ds text-center ">{claim.ScheduleFee}</div>
                      <div class="col-1 text-center align-middle">
                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />

                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No claims data available.</p>
            )}
            {error && (
              <div>
                <h3>Error:</h3>
                <pre>{JSON.stringify(error, null, 2)}</pre>
              </div>
            )}

            {/* <div className="claim-card mt-4">
              <div className="row claim-text">
                <div class="col border-ds">
                  <div class="form-group input-container">
                    <textarea class="form-control claim-text" id="exampleFormControlTextarea1" placeholder="Clinician can manually add new diagnosis, if AI does not pick up automatically" rows="4">Benign Prostatic Hyperplasia (BPH) with severity level not specified in the conversation transcript</textarea>
                  </div>
                </div>
                <div class="col border-ds">
                  <div class="form-group input-container">
                    <textarea class="form-control claim-text" id="exampleFormControlTextarea2" placeholder="Clinician can manually add Procedures performed, if AI does not pick up automatically" rows="4">Urine test and Prostate-Specific Antigen (PSA) test</textarea>
                  </div>
                </div>
                <div class="col border-ds ">66655</div>
                <div class="col border-ds ">Prostate specific antigen—quantitation For any particular patient, applicable not more than once in 23 months</div>
                <div class="col border-ds text-center ">20.15</div>
                <div class="col-1 text-center align-middle">
                  <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                </div>
              </div>
            </div> */}
          </div>
          <div className="row btn-claim-div">
            <div className="col">
              <button className="claim-btn">Add Row</button>
            </div>
            <div className="col btn-float-div1">
              <button className="claim-btn">Generate</button>
            </div>
          </div>

          {/* {claimsData ? (
            claimsData.map((claim, index) => (
              <div key={index}>
                <p>Claim ID: {claim.Description}</p>
                <p>Claim Status: {claim.ScheduleFee}</p>
              </div>
            ))
          ) : (
            <p>No claims data available.</p>
          )}
          {error && (
            <div>
              <h3>Error:</h3>
              <pre>{JSON.stringify(error, null, 2)}</pre>
            </div>
          )} */}

        </div>
      </div>
    </>

  );
};

export default Claims;