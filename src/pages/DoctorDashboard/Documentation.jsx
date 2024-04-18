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
import ReactMarkdown from 'react-markdown';

// import { useSelectedLanguage } from '../../contexts/DoctorDashboard/selectedLanguageContext';
// import { useVoiceRecording } from '../../contexts/DoctorDashboard/voiceRecordingContext';


const Documentation = (prop) => {
  Documentation.propTypes = {
    content: PropTypes.string,
    // setTransription: PropTypes.func,
  };

  const [selectedRadio, setSelectedRadio] = useState('');
  const [content, setContent] = useState('');
  const [boldContent, setBoldContent] = useState('');

  const [patientInstruction, setPatientInstruction] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [medicalLiteracy, setMedicalLiteracy] = useState('');

  const [selectedOption, setSelectedOption] = useState(null);
  const [soapNoteOption, setSoapNoteOption] = useState({ label: 'Concise' });
  const [referralOption, setReferralOption] = useState({ label: 'Specialists' });
  const [medicalCertificateOption, setMedicalCertificateOption] = useState({ label: 'Medical Certificate' });

  const [lengthListOption, setLengthListOption] = useState({ label: 'Concise' });
  const [languagesOption, setLanguagesOption] = useState({ label: 'English (United States)' });
  const [ageGroupOption, setAgeGroupOption] = useState({ label: '8-10 Years' });
  const [medicalLiteracyOption, setMedicalLiteracyOption] = useState({ label: 'Low' });
  const [healthRecordsOption, setHealthRecordsOption] = useState({ label: 'Electronic Health Records' });
  const [Markdown, setMarkdown] = useState('');

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
  const handleLengthChange = (value) => {
    setLengthListOption(value);
  };
  const handleLanguagesChange = (value) => {
    setLanguagesOption(value);
  };
  const handleAgeGroupChange = (value) => {
    setAgeGroupOption(value);
  };
  const handleMedicalLiteracyChange = (value) => {
    setMedicalLiteracyOption(value);
  };
  const handleHealthRecordsChange = (value) => {
    setHealthRecordsOption(value);
  };

  const languagesList = Object.entries(contries).map(([key, value]) => {
    return {
      label: key,
      value: value
    }
  })
  const medicalCertificateList = [
    { label: 'Medical Certificate' },
  ];
  const healthRecordsList = [
    { label: 'Electronic Health Records' },
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

  const handleAgeGroupChange_p = (event) => {
    setAgeGroup(event.target.value);
  };

  const handleMedicalLiteracyChange_p = (event) => {
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
      if (lengthListOption.label === 'Concise') {
        const form = new FormData();
        form.append('conversation', conversation);
        form.append('language', languagesOption.label);
        form.append('ageGroup', ageGroupOption.label);
        form.append('medicalLiteracy', medicalLiteracyOption.label);
        form.append('length', lengthListOption.label);
        response = await patientInstructions(form);
      };

    } else if (selectedRadio === 'Update EHR') {
      response = ''
    }
    setContent(response);
    const boldHeaders = response.replace(/(#+\s*)(.+)/g, '$1**$2**');
    setBoldContent(boldHeaders);
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
                        {/* <label class='form-check-label' for=""></label> */}
                      </div>
                      <div class="col-8">
                        <Select
                          value={soapNoteOption}
                          onChange={handleSoapNoteChange}
                          options={soapNotesList.map(item => ({ label: item.label, value: item.label }))}
                          defaultInputValue='Concise'

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
                    </div>
                  </div>

                  <div class="form-check mt-4">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2"
                      value="Referrals"
                      onChange={handleRadioChange}
                    />
                    <label class="form-check-label card-subtitle1" for="exampleRadios2">Referrals</label>
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        {/* <label class='form-check-label' for=""></label> */}
                      </div>
                      <div class="col-8">
                        <Select
                          value={referralOption}
                          onChange={handleReferralChange}
                          options={referralsList.map(item => ({ label: item.label, value: item.label }))}
                          defaultInputValue='Specialists'

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
                    </div>
                  </div>

                  <div class="form-check mt-4">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3"
                      value="Medical Certificate"
                      onChange={handleRadioChange}
                    />
                    <label class="form-check-label card-subtitle1" for="exampleRadios3">Medical Certificate</label>
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        {/* <label class='form-check-label' for=""></label> */}
                      </div>
                      <div class="col-8">
                        <Select
                          value={medicalCertificateOption}
                          onChange={handleMedicalCertificateChange}
                          options={medicalCertificateList.map(item => ({ label: item.label, value: item.label }))}
                          defaultInputValue='Medical Certificate'

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
                    </div>
                  </div>

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
                          value={lengthListOption}
                          onChange={handleLengthChange}
                          options={lengthList.map(item => ({ label: item.label, value: item.label }))}
                          defaultInputValue='Concise'

                          theme={(theme) => ({
                            ...theme,
                            colors: {
                              ...theme.colors,
                              primary25: "#F2F8F1",
                              primary: '#209F85',
                            },
                          })}
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
                            value={languagesOption}
                            onChange={handleLanguagesChange}
                            options={languagesList}
                            defaultInputValue='English (United States)'

                            theme={(theme) => ({
                              ...theme,
                              colors: {
                                ...theme.colors,
                                primary25: "#F2F8F1",
                                primary: '#209F85',
                              },
                            })}
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
                            value={ageGroupOption}
                            onChange={handleAgeGroupChange}
                            options={ageGroupList.map(item => ({ label: item.label, value: item.label }))}
                            defaultInputValue='8-10 Years'

                            theme={(theme) => ({
                              ...theme,
                              colors: {
                                ...theme.colors,
                                primary25: "#F2F8F1",
                                primary: '#209F85',
                              },
                            })}
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
                            value={medicalLiteracyOption}
                            onChange={handleMedicalLiteracyChange}
                            options={medicalLiteracyList.map(item => ({ label: item.label, value: item.label }))}
                            defaultInputValue='Low'

                            theme={(theme) => ({
                              ...theme,
                              colors: {
                                ...theme.colors,
                                primary25: "#F2F8F1",
                                primary: '#209F85',
                              },
                            })}
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
                        {/* <label class='form-check-label' for=""></label> */}
                      </div>
                      <div class="col-8">
                        <Select
                          value={healthRecordsOption}
                          onChange={handleHealthRecordsChange}
                          options={healthRecordsList.map(item => ({ label: item.label, value: item.label }))}
                          defaultInputValue='Electronic Health Records'

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
                    </div>
                  </div>

                  <div class="d-grid gap-4 d-md-flex justify-content-md-end mt-4">
                    <button type="button" class="btn custom-btn-width" onClick={handleGenerateDocument}>
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
                <div class='mt-4' style={{ height: "593px", overflow: "auto" }}>
                  {/* <MyEditor
                    content={content}
                  /> */}
                  <ReactMarkdown>{boldContent}</ReactMarkdown>
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
