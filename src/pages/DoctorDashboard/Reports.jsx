import React, { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../contexts/user.context";
import { useMsal } from '@azure/msal-react';
import axios from 'axios';
import { BSON } from "realm-web";
import cypherData from "../../crypt/cypherData";
import moment from "moment";
import { alert } from "react-bootstrap-confirmation";
import './Reports.css';
import ReactMarkdown from 'react-markdown';
import IconInfo from '../../assets/DoctorDashboard/icon-info.png';
import AILogo from '../../assets/DoctorDashboard/ai-logo.gif';
import AILogos from '../../assets/DoctorDashboard/ai-logo.png';

import { BarLoader } from 'react-spinners';

const Reports = () => {
  const { user, pId, pName, adbuser } = useContext(UserContext);
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  const [image, setImage] = useState(null);
  const [base64Image, setBase64Image] = useState('');
  const [fullscreen, setFullscreen] = useState(false);
  const [Markdown, setMarkdown] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [clinicalNotes, setClinicalNotes] = useState('');
  const preconsultationTabRef = useRef(null); // Ref to preconsultationTabRef tab button
  useEffect(() => {
    //  loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pId]);
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
      const response = await axios.post('https://medicalimageanalysis.azurewebsites.net/analyse', {
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

  const handleContinueClick = async (event) => {
    event.preventDefault();
    if (analysisResult !== "" || clinicalNotes !== "" || image !=="") {
        
      console.log("Clinical Notes:", clinicalNotes);
      console.log("AI Analysis:", analysisResult);
      console.log("Base64 Image:", base64Image);
      console.log("Image:", image);
     // Console.log("Image Name:", image.name);
      try {
        if (user) {
           console.log('auth:',user.id);
          let dt = new Date();
          let id = new BSON.ObjectID();
          let cid = BSON.ObjectID(user.id).toString();
          //let pid = selLid;
          let pid = pId;
          const createx = user.functions.createPatientConsultationReport(
            id,
            'cid0003',
            'pid00001',
            pid,
            'testreport.jpg',
            analysisResult,
            clinicalNotes,
            dt,
            "GlobalMedics2021",
          );
          createx.then((resp) => {
            console.log("resp:", resp);
            alert("Reports saved Successfully");
          });
        }
      } catch (error) {
        //  alert(error);
        console.log("error:", error);
      }
    }
    if (preconsultationTabRef.current) {
      preconsultationTabRef.current.click();
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
                <h5 className="card-title">Clinician Notes</h5>
                <textarea onChange={(e) => setClinicalNotes(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
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
            <div className="card card-AI-height">
              <div className="card-body">
                {/* <p className='ai-logo'><img src={AILogo} alt="" style={{width:"15%"}}/></p> */}
                {/* <img src={AILogo} alt="" className='ai-logo' /> */}
                {/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="28"></textarea> */}
                {loading ? (
                  <>
                    <h5 className="card-title-nl">AI Analysis </h5>

                    <div className="spinner-container">
                      <BarLoader loading={loading} color="#209F85" width={360} height={1} />
                      <img src={AILogo} alt="" className='ai-logo-move' />
                    </div>
                  </>
                ) : (
                  <>
                    <img src={AILogos} alt="" className='ai-logo' />
                    <h5 className="card-title">AI Analysis</h5>
                    <ReactMarkdown>{Markdown}</ReactMarkdown>
                  </>
                )}
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
          <button onClick={handleContinueClick} type="button" class="btn-c">Continue</button>
        </div>
        <div>
      {/* <ImageUpload /> */}
    </div>
      </div>

    </>
  );
};

export default Reports;