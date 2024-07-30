import React, { useState } from 'react';
import { useVoiceRecording } from '../../contexts/DoctorDashboard/voiceRecordingContext';
import RecordButton from '../../components/DoctorDashboard/AudioRecorder/RecordButton';
import axios from 'axios';
import './Reports.css';
import ReactMarkdown from 'react-markdown';
import IconInfo from '../../assets/DoctorDashboard/icon-info.png';
import { BarLoader } from 'react-spinners';
import AILogo from '../../assets/DoctorDashboard/ai-logo.gif';
import AILogos from '../../assets/DoctorDashboard/ai-logo.png';


const Reports = () => {
  const [voiceRecording, setVoiceRecording, , , recorderConfig, setRecorderConfig] = useVoiceRecording();
  const [image, setImage] = useState(null);
  const [base64Image, setBase64Image] = useState('');
  const [fullscreen, setFullscreen] = useState(false);
  const [Markdown, setMarkdown] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(file);
      setBase64Image(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = handleImageChange;
    input.click();
  };

  const handleImageClick = () => {
    setFullscreen(true);
  };

  const handleAnalysisResultChange = (e) => {
    setAnalysisResult(e.target.value);
  };

  const handleCloseFullscreen = () => {
    setFullscreen(false);
  };

  const handleAnalyseClick = async () => {
    setLoading(true); // Start loading
    try {
      const pureBase64Image = base64Image.split(',')[1]; // Remove the data:image/png;base64, part
      const response = await axios.post('https://gpt4omedicalimageanalysis.azurewebsites.net/analyse', {
        base_64_encoding: pureBase64Image,
      });
      console.log(response.data); // Log the response to the console

      // Make headers bold
      const analysisWithBoldHeaders = response.data.medical_analysis.replace(/^(.*:)$/gm, '**$1**');
      setAnalysisResult(analysisWithBoldHeaders);
      setMarkdown(analysisWithBoldHeaders);
    } catch (error) {
      console.error('Failed to analyse image:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  // const [markdown, setMarkdown] = useState('# Hello, *world*!');

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <>
      <div className="container-fluid ms-3 pe-5">
        <div className='pt-2 info'><img src={IconInfo} className='imgs' /></div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="card card-height">
              <div className="card-body">
                <h5 className="card-title">Clinical Image</h5>
                <div className='mt-4'>
                  {base64Image && (
                    <>
                      <div className="text-center">
                        <img src={base64Image} alt="Uploaded" className='img-size' onClick={handleImageClick} />
                      </div>
                    </>
                  )}
                  {fullscreen && (
                    <div className="fullscreen-overlay">
                      <img src={base64Image} alt="Uploaded" className={`rounded ${fullscreen ? 'fullscreen' : ''}`}
                        onClick={handleImageClick} />
                      <button className="close-fullscreen" onClick={handleCloseFullscreen}>&times;</button>
                    </div>
                  )}
                </div>
              </div>

              <div className="row btn-float-div">
                <div className="col">
                  <button onClick={handleUploadClick} className="btn-float">Upload Image</button>
                </div>
                <div className="col btn-float-div1">
                  <button onClick={handleAnalyseClick} className="btn-float">Analyse</button>
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

          <div className='col-lg-6 col-md-12 con-md-top'>
            <div className="card card-AI-height">
              <div className="card-body" style={{ fontSize: "10pt" }}>
                {/* <p className='ai-logo'><img src={AILogo} alt="" style={{width:"15%"}}/></p> */}
                {/* <img src={AILogo} alt="" className='ai-logo' /> */}
                {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="28"></textarea> */}
                {loading ? (
                  <>
                    <h5 className="card-title-nl">AI Analysis </h5>
                    <div className="spinner-container">
                      <BarLoader loading={loading} color="#209F85" width={598} height={1} className='report-spinner' />
                      <img src={AILogo} alt="" className='ai-logo-move' />
                    </div>
                  </>
                ) : (
                  <>
                    <img src={AILogos} alt="" className='ai-logo' />
                    <h5 className="card-title">AI Analysis</h5>
                    {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="27" value={analysisResult} onChange={handleAnalysisResultChange}></textarea> */}
                    <ReactMarkdown>{Markdown}</ReactMarkdown>
                  </>
                )}

                {/* <div>
                  <MdEditor
                    value={Markdown}
                    renderHTML={text => mdParser.render(text)}
                    onChange={handleEditorChange}
                  />
                </div> */}

              </div>

              <div class="row btn-div1">
                <div class="col"></div>
                <div class="col btn-div">
                  <button className="btn-at">Accept Text</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="right mt-4">
          <button type="button" class="btn-c">Continue</button>
        </div> */}
      </div>

    </>
  );
};

export default Reports;
