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

const DocIntelligence = () => {
  const [voiceRecording, setVoiceRecording, , , recorderConfig, setRecorderConfig] = useVoiceRecording();

  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [analysisType, setAnalysisType] = useState('invoice');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    // Generate a preview URL for image files or PDF
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(fileUrl);
    }
  };

  const handleAnalysisTypeChange = (e) => {
    setAnalysisType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please upload a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('analysis_type', analysisType);

    try {
      const response = await axios.post('https://docintelle-gdaebtazbtged8as.canadacentral-01.azurewebsites.net/api/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log("API Response:", response.data);

      setResult(response.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data : 'Something went wrong');
      setResult(null);
    }
  };

  const renderObjectEntries = (obj, renderedKeys = new Set()) => (
    <div>
      {Object.entries(obj).map(([key, value]) => {
        if (renderedKeys.has(key)) return null;
        renderedKeys.add(key);
        return (
          <div key={key} style={{ marginBottom: '10px' }}>
            <strong>{key}:</strong> {renderResultValue(value, renderedKeys)}
          </div>
        );
      })}
    </div>
  );

  const renderResultValue = (value, renderedKeys) => {
    if (typeof value === 'object' && !Array.isArray(value)) {
      return renderObjectEntries(value, renderedKeys);
    }
    if (Array.isArray(value)) {
      return value.map((item, index) => <div key={index}>{item}</div>);
    }
    return <span>{value}</span>;
  };

  const renderResult = () => {
    if (!result) return null;

    return (
      <div>
        <h2>Analysis Result</h2>
        {renderResultValue(result)}
      </div>
    );
  };

  return (
    <>
      <div className="container-fluid ms-3 pe-5">
        <div className='pt-2 info'><img src={IconInfo} className='imgs' /></div>

        <div className="row">
          <div className="col-lg-6 col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="card card-height">
                <div className="card-body">
                  <h5 className="card-title">Clinical Image
                    <select id="analysis_type" value={analysisType} onChange={handleAnalysisTypeChange}>
                      <option value="invoice">Invoice</option>
                      <option value="read">Read</option>
                      <option value="layout">Layout</option>
                      <option value="receipt">Receipt</option>
                      <option value="document">General Document</option>
                      <option value="prebuilt-document">Prebuilt Document</option>
                    </select>
                  </h5>
                  <div className='mt-4' style={{ textAlign: "center" }}>
                    {file && (
                      <div>
                        {file.type.startsWith("image/") ? (
                          <img src={previewUrl} alt="Preview" style={{ width: "300px" }} />
                        ) : file.type === "application/pdf" ? (
                          <iframe src={previewUrl} width="400" height="400" title="PDF Preview"></iframe>
                        ) : (
                          <p>File type not supported for preview.</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row btn-float-div">
                  <div className="col">
                    <input
                      type="file"
                      id="file"
                      onChange={handleFileChange}
                      accept=".pdf, .png, .jpg, .jpeg, .tiff"
                    />
                  </div>
                  <div className="col btn-float-div1">
                    <button type="submit" className="btn-float">Analyse</button>
                  </div>
                </div>
              </div>
            </form>
            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">Add Notes</h5>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"
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
                {error && <div style={{ color: 'red' }}>Error: {error}</div>}
                {renderResult()}
              </div>
              <div className="row btn-div1">
                <div className="col"></div>
                <div className="col btn-div">
                  <button className="btn-at">Accept Text</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocIntelligence;