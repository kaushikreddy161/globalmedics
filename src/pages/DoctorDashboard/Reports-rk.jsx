import React, { useState } from 'react';
import axios from 'axios';
import './Reports.css';
import IconInfo from '../assets/icon-info.png';

const Reports = () => {



  const [image, setImage] = useState(null);
  const [base64Image, setBase64Image] = useState('');
  const [fullscreen, setFullscreen] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');

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
    try {
      const pureBase64Image = base64Image.split(',')[1]; // Remove the data:image/png;base64, part
      const response = await axios.post('https://medicalimageanalyser.azurewebsites.net/analyse', {
        base_64_encoding: pureBase64Image,
      });
      console.log(response.data); // Log the response to the console
      setAnalysisResult(response.data.medical_analysis);
    } catch (error) {
      console.error('Failed to analyse image:', error);
    }
  };

  return (
    <>
      <div className="container-fluid ms-3 pe-5">
        <div className='pt-2 info'><img src={IconInfo} className='imgs' /></div>
        
        

        <div className="row">
          <div className="col-8">
            <div className="card card-height">
              <div className="card-body">
                <h5 className="card-title">Clinical Image</h5>
                <div className='mt-4'>
                  {base64Image && (
                    <div className="text-center">
                      <img src={base64Image} alt="Uploaded" className='img-size' onClick={handleImageClick} />
                    </div>
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
              <div className="row btn-div1">
                <div className="col">
                  <button onClick={handleUploadClick} className="btn-hs">Upload Image</button>
                </div>
                <div className="col btn-div">
                  <button onClick={handleAnalyseClick} className="btn-hs">Analyse</button>
                </div>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">Clinician Notes</h5>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
              </div>
              <div className="row btn-div1">
                <div className="col">
                  <button className="btn-hs">Dictate Notes</button>
                </div>
                <div className="col btn-div">
                  <button className="btn-hs">Confirm</button>
                </div>
              </div>
            </div>
          </div>

          <div className='col-4'>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">AI Analysis</h5>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="28" value={analysisResult} onChange={handleAnalysisResultChange}></textarea>
              </div>
              <div className="row btn-div1">
                <div className="col btn-div">
                  <button className="btn-hs">Accept Text</button>
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
  );
};

export default Reports;