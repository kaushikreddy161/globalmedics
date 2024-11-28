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
  patientInstructions
  // soapNoteConcise,
  // soapNoteDetailed
} from '../../components/DoctorDashboard/apiCalls';
import IconInfo from '../../assets/DoctorDashboard/icon-info.png';
import contries from '../../speechToTextLanguage.json';
import Select from 'react-select';
import { useSelectedLanguage } from '../../contexts/DoctorDashboard/selectedLanguageContext';
import { useVoiceRecording } from '../../contexts/DoctorDashboard/voiceRecordingContext';

import AILogo from '../../assets/DoctorDashboard/ai-logo.gif';
import AILogos from '../../assets/DoctorDashboard/ai-logo.png';

import ReactMarkdown from 'react-markdown';
import { BarLoader } from 'react-spinners';
import RecordButton from '../../components/DoctorDashboard/AudioRecorder/RecordButton';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const Documentation = (prop) => {
  Documentation.propTypes = {
    content: PropTypes.string,
    // setTransription: PropTypes.func,
  };

  const [voiceRecording, setVoiceRecording, , , recorderConfig, setRecorderConfig] = useVoiceRecording();
  const [selectedRadio, setSelectedRadio] = useState('');
  const [content, setContent] = useState('');
  const [boldContent, setBoldContent] = useState('');

  const [patientInstruction, setPatientInstruction] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [medicalLiteracy, setMedicalLiteracy] = useState('');

  const [selectedOption, setSelectedOption] = useState(null);
  const [childOption, setChildOption] = useState('Concise');
  // const [soapNoteOption, setSoapNoteOption] = useState();
  const [referralOption, setReferralOption] = useState();
  const [medicalCertificateOption, setMedicalCertificateOption] = useState();

  const [lengthListOption, setLengthListOption] = useState('Concise');
  const [languagesOption, setLanguagesOption] = useState('English (United States)');
  const [ageGroupOption, setAgeGroupOption] = useState('8-10 Years');
  const [medicalLiteracyOption, setMedicalLiteracyOption] = useState('Low');
  const [healthRecordsOption, setHealthRecordsOption] = useState();
  const [Markdown, setMarkdown] = useState('');
  const [loading, setLoading] = useState(false);
  // const [, setSelectedLanguageGlobal] = useSelectedLanguage();
  // const [, , , setIsStopGlobal] = useVoiceRecording();

  // Convert the data from the JSON file to the format required by react-select
  // const options = languages.map(item => ({ value: item.language, label: item.language }));

  // const handleChange = (value) => {
  //   setSelectedOption(value);
  // };

  // const handleSoapNoteChange = (selectedOption) => {
  //   setChildOption(selectedOption.label);
  //   setSelectedRadio('soapNotes');
  // };

  const handleReferralChange = (selectedOption) => {
    setChildOption(selectedOption.label);
    setSelectedRadio('referrals');
  };
  const handleMedicalCertificateChange = (selectedOption) => {
    setChildOption(selectedOption.label);
    setSelectedRadio('medicalCertificate');
  };
  const handleLengthChange = (selectedOption) => {
    setLengthListOption(selectedOption.label);
    setSelectedRadio('patientIntrusctions');
  };
  const handleLanguagesChange = (selectedOption) => {
    setLanguagesOption(selectedOption.label);
    setSelectedRadio('patientIntrusctions');
  };
  const handleAgeGroupChange = (selectedOption) => {
    setAgeGroupOption(selectedOption.label);
    setSelectedRadio('patientIntrusctions');
  };
  const handleMedicalLiteracyChange = (selectedOption) => {
    setMedicalLiteracyOption(selectedOption.label);
    setSelectedRadio('patientIntrusctions');
  };
  const handleHealthRecordsChange = (selectedOption) => {
    setChildOption(selectedOption.label);
    setSelectedRadio('EHR');
  };

  const languagesList = Object.entries(contries).map(([key, value]) => {
    return {
      label: key,
      value: value
    }
  })


  // const soapNotesList = [
  //   { value: 1, label: 'Concise' },
  //   { value: 2, label: 'Detailed' },
  // ];
  const referralsList = [
    { value: 1, label: 'Specialists' },
    { value: 2, label: 'Path Labs' },
    { value: 3, label: 'Allied Health' },
    // { value: 4, label: 'Hospital Department' },
  ];
  const medicalCertificateList = [
    { value: 1, label: 'Medical Certificate' },
  ];
  const lengthList = [
    { value: 1, label: 'Concise' },
    // { value: 2, label: 'Detailed' },
  ];
  const ageGroupList = [
    { value: 1, label: '8-10 Years' },
    { value: 2, label: '10-15 Years' },
    { value: 3, label: '15-21  Years' },
    { value: 4, label: 'Older than 21  Years' },
  ];
  const medicalLiteracyList = [
    { value: 1, label: 'Low' },
    { value: 2, label: 'Medium' },
    { value: 3, label: 'High' },
  ];
  const healthRecordsList = [
    { value: 1, label: 'Electronic Health Records' },
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
    setLoading(true);
    const conversation = prop.content;
    let response = '';

    // if (selectedRadio === 'soapNotes') {
    //   if (childOption === 'Concise') {
    //     response = await soapNoteConcise(conversation);
    //   } else if (childOption === 'Detailed') {
    //     response = await soapNoteDetailed(conversation);
    //   }

    // }
    if (selectedRadio === 'referrals') {
      if (childOption === 'Specialists') response = await specialistDocument(conversation);
      if (childOption === 'Path Labs') response = await pathlogyLetter(conversation);
      if (childOption === 'Allied Health') response = await alliedHealth(conversation);
      if (childOption === 'Hospital Department') response = await claimsDocument(conversation);

    } else if (selectedRadio === 'medicalCertificate') {
      if (childOption === 'Medical Certificate') response = await medicalDocument(conversation);

    } else if (selectedRadio === 'patientIntrusctions') {
      if (lengthListOption === 'Concise') {
        const form = new FormData();
        form.append('conversation', conversation);
        form.append('language', languagesOption);
        form.append('ageGroup', ageGroupOption);
        form.append('medicalLiteracy', medicalLiteracyOption);
        form.append('length', lengthListOption);
        response = await patientInstructions(form);
      };

    } else if (selectedRadio === 'EHR') {
      response = ''
    }
    setLoading(false);
    setContent(response);
    if (response === undefined) return;
    const boldHeaders = response.replace(/^(.*:)$/gm, '**$1**');
    setBoldContent(boldHeaders);


  };
  const [isDisabled, setIsDisabled] = useState(true);

  const mdParser = new MarkdownIt();
  const handleEditorChange = ({ content }) => {
    setContent(content);
  };

  return (
    <>
      <div class="container-fluid ms-3 pe-5">
        <div className='pt-2 info'><img src={IconInfo} className='imgs' /></div>
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Document Templates</h5>
                <div class='ms-3'>
                  {/* <div class="form-check">
                    <input class="form-check-input" type="radio" name="radio" value="soapNotes" checked={selectedRadio === 'soapNotes'}
                      onChange={handleRadioChange}
                    />
                    <label class="form-check-label card-subtitle1" for="exampleRadios1">Soap Notes</label>
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                      </div>
                      <div class="col-8">
                        <Select
                          className='doc-md-width'
                          options={soapNotesList}
                          value={soapNotesList.find(option => option.value === soapNoteOption)}
                          onChange={handleSoapNoteChange}
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
                  </div> */}

                  <div class="form-check mt-4">
                    <input class="form-check-input" type="radio" name="radio" value="referrals" checked={selectedRadio === 'referrals'}
                      onChange={handleRadioChange}
                    />
                    <label class="form-check-label card-subtitle1" for="exampleRadios2">Referrals</label>
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        {/* <label class='form-check-label' for=""></label> */}
                      </div>
                      <div class="col-8">
                        <Select
                          className='doc-md-width'
                          options={referralsList}
                          value={referralsList.find(option => option.value === referralOption)}

                          onChange={handleReferralChange}
                          defaultInputValue='Path Labs'

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
                    <input class="form-check-input" type="radio" name="radio" value="medicalCertificate" checked={selectedRadio == 'medicalCertificate'}
                      onChange={handleRadioChange}
                    />
                    <label class="form-check-label card-subtitle1" for="exampleRadios3">Medical Certificate</label>
                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        {/* <label class='form-check-label' for=""></label> */}
                      </div>
                      <div class="col-8">
                        <Select
                          className='doc-md-width'
                          options={medicalCertificateList}
                          value={medicalCertificateList.find(option => option.value === medicalCertificateOption)}

                          onChange={handleMedicalCertificateChange}
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
                    <input class="form-check-input" type="radio" name="radio" value="patientIntrusctions" checked={selectedRadio === 'patientIntrusctions'}
                      onChange={handleRadioChange}
                    />
                    <label class="form-check-label card-subtitle1" for="exampleRadios4">Patient Instructions</label>

                    <div class="row">
                      <div class="col-4 d-flex align-items-center">
                        <label class='form-check-label' for="">Length</label>
                      </div>
                      <div class="col-8">
                        <Select
                          className='doc-md-width'
                          options={lengthList}
                          value={lengthList.find(option => option.value === lengthListOption)}
                          onChange={handleLengthChange}
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
                            className='doc-md-width'
                            options={languagesList}
                            value={languagesList.find(option => option.value === languagesOption)}
                            onChange={handleLanguagesChange}
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
                            className='doc-md-width'
                            options={ageGroupList}
                            value={ageGroupList.find(option => option.value === ageGroupOption)}
                            onChange={handleAgeGroupChange}
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
                            className='doc-md-width'
                            options={medicalLiteracyList}
                            value={medicalLiteracyList.find(option => option.value === medicalLiteracyOption)}
                            onChange={handleMedicalLiteracyChange}
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
                    <input class="form-check-input" type="radio" name="radio" value="EHR"
                      disabled={isDisabled}
                    />
                    <label class="form-check-label card-subtitle1" for="exampleRadios5">Update EHR</label>
                    <div class="row">
                      <div className={`form-check mt-4 ${isDisabled ? 'disabled-section' : ''}`}>
                        <div class="col-4 d-flex align-items-center">
                          {/* <label class='form-check-label' for=""></label> */}
                        </div>
                        <div class="col-8 non-interactive">
                          <Select
                            className='doc-md-width'
                            options={healthRecordsList}
                            value={healthRecordsList.find(option => option.value === healthRecordsOption)}
                            onChange={handleHealthRecordsChange}
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
                  </div>

                  <div class="d-grid gap-4 d-md-flex justify-content-md-end mt-4">
                    <button type="button" class="btn-hs" onClick={handleGenerateDocument}>
                      Generate Document
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-12">
            <div class="card con-md-top">
              <div class="card-body">
                {/* <h5 class="card-title">Edit Document</h5> */}
                <div style={{ height: "478px" }}>
                  {loading ? (
                    <>
                      <h5 className="card-title-nl">Document Output</h5>
                      <div className="spinner-container" style={{ marginBottom: "1rem" }}>
                        <BarLoader loading={loading} color="#209F85" width={838} height={1} />
                        <img src={AILogo} alt="" className='ai-logo-da' />
                      </div>
                      <MdEditor
                        value={content}
                        style={{ height: '421px' }}
                        renderHTML={(content) => mdParser.render(content)}
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
                  ) : (
                    <>
                      <img src={AILogos} alt="" className='ai-logo-ds' />
                      <h5 className="card-title">Document Output</h5>
                      {/* <ReactMarkdown>{boldContent}</ReactMarkdown> */}
                      {/* <MyEditor content={content} /> */}
                      {/* <ReactMarkdown>{content}</ReactMarkdown> */}
                      {/* <MyEditor content={content} /> */}
                      <MdEditor
                        value={content}
                        style={{ height: '421px' }}
                        renderHTML={(content) => mdParser.render(content)}
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
                  )}
                  {/* <ReactMarkdown>{boldContent}</ReactMarkdown> */}

                </div>
                <div class="gap-4 d-md-flex justify-content-md-end">
                  <button type="button" class="custom-btn-width btn-hs mt-2" style={{marginRight:"0rem"}}>Confirm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="col-lg-4 col-md-12 mt-4">
            <div className="card">
              <div className={`form-check ${isDisabled ? 'disabled-section' : ''}`} style={{ marginLeft: "-1.3rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Send Document to</h5>
                  <div class='ms-2'>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" disabled={isDisabled} />
                      <label class="form-check-label" for="exampleRadios1">Printer</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" disabled={isDisabled} />
                      <label class="form-check-label" for="exampleRadios2">Email</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" disabled={isDisabled} />
                      <label class="form-check-label" for="exampleRadios3">Fax</label>
                    </div>
                  </div>
                  <div class="d-grid gap-4 d-md-flex justify-content-md-end" style={{ marginTop: "5.6rem" }}>
                    <button type="button" class="custom-btn-width btn-hs" disabled={isDisabled} onClick={handlePrintButtonClick}>Print</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-12">
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
                <div className="col btn-div justify-content-md-end">
                  <button className="btn-hs custom-btn-width">Confirm</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>


      {/* <div className="right mt-4">
          <button type="button" class="btn-c">Continue</button>
        </div> */}
    </>
  )
}

export default Documentation;
