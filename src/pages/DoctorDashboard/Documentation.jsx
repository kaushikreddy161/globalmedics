import React, { useEffect, useState } from 'react';
import MyEditor, { handlePrint } from '../../components/DoctorDashboard/Editor/MyEditor';
import './Documentation.css';
import PropTypes from 'prop-types';
import {
  claimsDocument,
  medicalDocument,
  specialistDocument,
  pathlogyLetter,
  alliedHealth,
  patientInstructions,
  soapNoteConcise
} from '../../components/DoctorDashboard/apiCalls';
import IconInfo from '../../assets/DoctorDashboard/icon-info.png';

import contries from '../../speechToTextLanguage.json';
import Select from 'react-select';
import { useSelectedLanguage } from '../../contexts/DoctorDashboard/selectedLanguageContext';
import { useVoiceRecording } from '../../contexts/DoctorDashboard/voiceRecordingContext';



const Documentation = (prop) => {
  Documentation.propTypes = {
    content: PropTypes.string,
    // setTransription: PropTypes.func,
  };

  const [selectedRadio, setSelectedRadio] = useState('');
  const [content, setContent] = useState('');

  const [patientInstruction, setPatientInstruction] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [medicalLiteracy, setMedicalLiteracy] = useState('');

  const [selectedOption, setSelectedOption] = useState(null);
  const [soapNoteOption, setSoapNoteOption] = useState({ label: 'Concise' });
  const [referralOption, setReferralOption] = useState({ label: 'Specialists' });
  const [medicalCertificateOption, setMedicalCertificateOption] = useState({ label: 'Electronic Health Records' });

  // const [, setSelectedLanguageGlobal] = useSelectedLanguage();
  // const [, , , setIsStopGlobal] = useVoiceRecording();

  // Convert the data from the JSON file to the format required by react-select
  // const options = languages.map(item => ({ value: item.language, label: item.language }));

  const handleChange = (value) => {
    setSelectedOption(value);
  };

  const handleSoapNoteChange = (value) => {
    setSoapNoteOption(value);

  };

  const handleReferralChange = (value) => {
    setReferralOption(value);

  };

  const handleMedicalCertificateChange = (value) => {
    setMedicalCertificateOption(value);

  };

  const languagesList = Object.entries(contries).map(([key, value]) => {
    return {
      label: key,
      value: value
    }
  })


  const medicalCertificateList = [
    { label: 'Electronic Health Records' },
  ];
  const healthRecordsList = [
    { label: 'Medical Certificate' },
  ];

  const soapNotesList = [
    { label: 'Concise' },
    { label: 'Detailed' },
  ];
  const referralsList = [
    { label: 'Specialists' },
    { label: 'Path Labs' },
    { label: 'Allied Health' },
    { label: 'Hospital Department' },
  ];
  const lengthList = [
    { label: 'Concise' },
    { label: 'Detailed' },
  ];
  const ageGroupList = [
    { label: '8-10 Years' },
    { label: '10-15 Years' },
    { label: '15-21  Years' },
    { label: 'Older than 21  Years' },
  ];
  const medicalLiteracyList = [
    { label: 'Low' },
    { label: 'Medium' },
    { label: 'High' },
  ];




  const handlePrintButtonClick = () => {
    handlePrint(); // Call the handlePrint function
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleAgeGroupChange = (event) => {
    setAgeGroup(event.target.value);
  };

  const handleMedicalLiteracyChange = (event) => {
    setMedicalLiteracy(event.target.value);
  };



  const handleGenerateDocument = async () => {
    const conversation = prop.content;
    let response = '';

    if (selectedRadio === 'SOAP Notes') {
      if (soapNoteOption.label === 'Concise') {
        response = await soapNoteConcise(conversation);
      }

    } else if (selectedRadio === 'Referrals') {
      if (referralOption.label === 'Specialists') response = await specialistDocument(conversation);
      if (referralOption.label === 'Path Labs') response = await pathlogyLetter(conversation);
      if (referralOption.label === 'Allied Health') response = await alliedHealth(conversation);

    } else if (selectedRadio === 'Medical Certificate') {
      if (medicalCertificateOption.label === 'Electronic Health Records') response = await medicalDocument(conversation);

    } else if (selectedRadio === 'Patient Instructions') {
      response = await patientInstructions(conversation);

    } else if (selectedRadio === 'Update EHR') {
      response = ''
    }
    setContent(response);
  };


  return (
    <>
      <div class="container-fluid ms-3 pe-5">
        <div className='pt-2 info'><img src={IconInfo} className='imgs' /></div>
        <div class="row">
          <div class="col-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Document Templates</h5>
                <div class='ms-3'>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                      value="SOAP Notes"
                      onChange={handleRadioChange}
                    />
                    <label class="form-check-label card-subtitle1" for="exampleRadios1">Soap Notes</label>
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        <label class='form-check-label' for="">Soap Notes</label>
                      </div>
                      <div class="col-8">
                        <Select
                          value={soapNoteOption}
                          onChange={handleSoapNoteChange}
                          options={soapNotesList}
                          defaultInputValue='Concise'
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div class='ms-2'> */}
                  {/* <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                        value="SOAP Notes Concise" onChange={handleRadioChange}
                      />
                      <label class="form-check-label" for="exampleRadios1">SOAP Notes (Concise)</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="" />
                      <label class="form-check-label" for="exampleRadios2">SOAP Notes (Detailed)</label>
                    </div> */}
                  {/* <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="" />
                      <label class="form-check-label" for="exampleRadios3">Diagnostic Therapeutic, Info</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="" />
                      <label class="form-check-label" for="exampleRadios4">H&P</label>
                    </div> */}
                  {/* </div> */}

                  {/* <h6 class="card-subtitle1 mb-2 text-muted">Update Practice Manager</h6>
                  <div class='ms-2'>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                        value="Electronic Health Records" onChange={handleRadioChange} />
                      <label class="form-check-label" for="exampleRadios1">Electronic Health Records</label>
                    </div>
                  </div> */}



                  <div class="form-check mt-4">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                      value="Referrals"
                      onChange={handleRadioChange}
                    />
                    <label class="form-check-label card-subtitle1" for="exampleRadios2">Referrals</label>
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        <label class='form-check-label' for="">Referrals</label>
                      </div>
                      <div class="col-8">
                        <Select
                          value={referralOption}
                          onChange={handleReferralChange}
                          options={referralsList}
                          defaultInputValue='Specialists'
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div class='ms-2'>

                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                        value="To Specialists" onChange={handleRadioChange}
                      />
                      <label class="form-check-label" for="exampleRadios1">Specialists</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                        value="To Path Labs" onChange={handleRadioChange}
                      />
                      <label class="form-check-label" for="exampleRadios2">Path Labs</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                        value="Allied Health" onChange={handleRadioChange}
                      />
                      <label class="form-check-label" for="exampleRadios3">Allied Health</label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4"
                        value="Claims Department" onChange={handleRadioChange}
                      />
                      <label class="form-check-label" for="exampleRadios4">Hospital Department</label>
                    </div>

                  </div> */}

                  <div class="form-check mt-4">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                      value="Medical Certificate"
                      onChange={handleRadioChange}
                    />
                    <label class="form-check-label card-subtitle1" for="exampleRadios3">Medical Certificate</label>
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        <label class='form-check-label' for="">Medical Certificate</label>
                      </div>
                      <div class="col-8">
                        <Select
                          value={medicalCertificateOption}
                          onChange={handleMedicalCertificateChange}
                          options={medicalCertificateList}
                          defaultInputValue='Electronic Health Records'
                        />
                      </div>
                    </div>
                  </div>



                  {/* <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                        value="Electronic Health Records" onChange={handleRadioChange}
                      />
                      <label class="form-check-label" for="exampleRadios2">Type 2</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                        value="Electronic Health Records" onChange={handleRadioChange}
                      />
                      <label class="form-check-label" for="exampleRadios3">Type 3</label>
                    </div> */}


                  {/* <h6 class="card-subtitle mb-2 text-muted">Prescription</h6>
                  <div class='ms-2'>

                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                        value="Electronic Health Records" onChange={handleRadioChange}
                      />
                      <label class="form-check-label" for="exampleRadios1">Type 1</label>
                    </div>
                  </div> */}


                  {/* <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                        value="Patient Instructions" onChange={handleRadioChange}
                      />
                      <label class="form-check-label" for="exampleRadios1">Patient Instructions</label>
                    </div> */}
                  {/* <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                        value="Patient Instructions" onChange={handleRadioChange}
                      />
                      <label class="form-check-label" for="exampleRadios1">Concise</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                        value="Detailed" onChange={handleRadioChange}
                      />
                      <label class="form-check-label" for="exampleRadios1">Detailed</label>
                    </div> */}

                  <div class="form-check mt-4">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4"
                      value="Patient Instructions"
                      onChange={handleRadioChange}
                    />
                    <label class="form-check-label card-subtitle1" for="exampleRadios4">Patient Instructions</label>


                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        <label class='form-check-label' for="">Length</label>
                      </div>
                      <div class="col-8">
                        <Select
                          value={selectedOption}
                          onChange={handleChange}
                          options={lengthList}
                          defaultInputValue='Concise'
                        />
                        {/* <select className="select-dropdown">
                            <option value="1" selected="selected">Concise</option>
                            <option value="2">Detailed</option>
                          </select> */}
                      </div>
                    </div>
                    <div class="mt-1">
                      <div class="row">
                        <div class="col-4 d-flex align-items-center">
                          <label class='form-check-label' for="">Language</label>
                        </div>
                        <div class="col-8">
                          <Select
                            value={selectedOption}
                            onChange={handleChange}
                            options={languagesList}
                            defaultInputValue='English (United States)'
                          />
                          {/* {selectedOption && (
                            <p>Selected Option: {selectedOption.label}</p>
                          )} */}
                        </div>
                      </div>
                    </div>
                    <div class="mt-1">
                      <div class="row">
                        <div class="col-4 d-flex align-items-center">
                          <label class='form-check-label' for="">Age Group</label>
                        </div>
                        <div class="col-8">

                          <Select
                            value={selectedOption}
                            onChange={handleChange}
                            options={ageGroupList}
                            defaultInputValue='8-10 Years'
                          />
                          {/* <select className="select-dropdown">
                            <option value="1" selected="selected">8-10 Years</option>
                            <option value="2">10-15 Years</option>
                            <option value="3">15-21  Years</option>
                            <option value="Other">Older than 21  Years</option>
                          </select> */}
                        </div>
                      </div>
                    </div>
                    <div class="mt-1">
                      <div class="row">
                        <div class="col-4 d-flex align-items-center">
                          <label class='form-check-label' for="">Medical Literacy</label>
                        </div>
                        <div class="col-8">

                          <Select
                            value={selectedOption}
                            onChange={handleChange}
                            options={medicalLiteracyList}
                            defaultInputValue='Low'
                          />

                          {/* <select className="select-dropdown" value={medicalLiteracy} onChange={handleMedicalLiteracyChange}>
                            <option value="1" selected="selected">Low</option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                          </select> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <h6 class="card-subtitle mb-2 text-muted">Update EHR </h6>
                  <div class='ms-2'>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Medical Certificate" />
                      <label class="form-check-label" for="exampleRadios1">Electronic Health Records</label>
                    </div>
                  </div> */}


                  <div class="form-check mt-4">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5"
                      value="Update EHR"
                      onChange={handleRadioChange}
                    />
                    <label class="form-check-label card-subtitle1" for="exampleRadios5">Update EHR</label>
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        <label class='form-check-label' for="">Electronic Health Records</label>
                      </div>
                      <div class="col-8">
                        <Select
                          value={selectedOption}
                          onChange={handleChange}
                          options={healthRecordsList}
                          defaultInputValue='Electronic Health Records'
                        />
                      </div>
                    </div>
                  </div>





                  <div class="d-grid gap-4 d-md-flex justify-content-md-end mt-4">
                    <button type="button" class="btn custom-btn-width"
                      onClick={handleGenerateDocument}
                    >
                      Generate Document
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mt-4">
              <div class="card-body">
                <h5 class="card-title">Send Document to</h5>
                <div class='ms-2'>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" />
                    <label class="form-check-label" for="exampleRadios1">Printer</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" />
                    <label class="form-check-label" for="exampleRadios2">Email</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" />
                    <label class="form-check-label" for="exampleRadios3">Fax</label>
                  </div>
                </div>
                <div class="d-grid gap-4 d-md-flex justify-content-md-end">
                  <button type="button" class="btn custom-btn-width" onClick={handlePrintButtonClick}>Print</button>
                </div>
              </div>
            </div>


          </div>
          <div class="col-8">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Edit Document</h5>
                <div class='mt-4'>
                  <MyEditor
                    content={content}
                  />
                </div>
                <div class="d-grid gap-4 d-md-flex justify-content-md-end mt-4">
                  <button type="button" class="btn custom-btn-width btn-blue mt-5">Confirm</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right mt-4">
          <button type="button" class="btn-c">Continue</button>
        </div>
      </div>
    </>
  )
}

export default Documentation;
