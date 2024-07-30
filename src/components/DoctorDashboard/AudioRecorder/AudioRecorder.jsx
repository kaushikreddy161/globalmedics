import React, { useState, useRef, useEffect } from 'react';
import RecordRTC, { invokeSaveAsDialog } from 'recordrtc';
import recorderConfig from '../../../utils/DoctorDashboard/recorderConfig.js';
import { StartTranscribe, StopTranscribe } from '../../../utils/DoctorDashboard/ConversationTranscription.js';
import uploadBlob from '../../../utils/DoctorDashboard/BlobStorage.js';
import { useVoiceRecording } from '../../../contexts/DoctorDashboard/voiceRecordingContext.js';
import './AudioRecorder.css';
import { useSelectedLanguage } from '../../../contexts/DoctorDashboard/selectedLanguageContext.js';

import contries from '../../../speechToTextLanguage.json';
import Select from 'react-select';
import '../../../pages/DoctorDashboard/MediaStyles.css';
import RecordButton from '../AudioRecorder/RecordButton.jsx';

const AudioRecorder = () => {
    const [stream, setStream] = useState(null);
    const [blob, setBlob] = useState(null);
    const refAudio = useRef(null);
    const recorderRef = useRef(null);
    const conversationTranscriberRef = useRef(null); // Use useRef to persist the variable
    const [, setVoiceRecordings] = useVoiceRecording();
    const [voiceRecording, setVoiceRecording, , , recorderConfig, setRecorderConfig] = useVoiceRecording();
    const [, , isStopGlobal, setIsStopGlobal] = useVoiceRecording();
    const [transcription, setTransciption] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [isRecordNotes, setIsRecordNotes] = useState(false);
    const mediaStreamRef = useRef(null);
    const [selectedLanguageGlobal, setSelectedLanguageGlobal] = useSelectedLanguage();

    useEffect(() => {
        if (recorderRef.current && transcription !== '') {
            setVoiceRecordings(transcription);
        }
    }, [transcription]);


    // const handleTranscribe = () => {
    //     conversationTranscriberRef.current.transcribed = (s, e) => {
    //         if (e.result.text !== undefined) {
    //             setTransciption(prevTranscription => {
    //                 const timestamp = new Date().toLocaleString();
    //                 const newTranscription = prevTranscription + e.result.text + "\n";
    //                 const newTranscriptionWithTime = `${timestamp} - ${e.result.text}\n`;
    //                 // console.log("TRANSCRIBED: Text=" + newTranscription);
    //                 console.log(newTranscriptionWithTime);
    //                 return newTranscription;
    //             });
    //         }
    //         // console.log("TRANSCRIBED: Text=" + e.result.text + " Speaker ID=" + e.result.speakerId);
    //         // console.log("TRANSCRIBED: Text=" + transcription);
    //     };
    // }

  
    // const handleStop = () => {
    //     if (!recorderRef.current) {
    //         return;
    //     }
    //     recorderRef.current.stopRecording(async () => {
    //         const blob = recorderRef.current.getBlob();
    //         setBlob(blob);
    //         StopTranscribe(conversationTranscriberRef.current);
    //         mediaStreamRef.current.getTracks().forEach(track => track.stop());
    //         setIsRecording(false);
    //         const formData = new FormData();
    //         if (blob) {
    //             formData.append('file', blob);
    //             await fetch('https://myserver2-two.vercel.app/api/uploadAudioBlob', {
    //                 method: 'POST',
    //                 body: formData
    //             })
    //                 .then(response => {
    //                     if (!response.ok) {
    //                         throw new Error('Network response was not ok');
    //                     }
    //                     return response.text();
    //                 })
    //                 .then(data => {
    //                     console.log('File uploaded to Azure Blob Storage:', data);
    //                 })
    //                 .catch(error => {
    //                     console.error('Error uploading file to Azure Blob Storage:', error);
    //                 });
    //         } else {
    //             console.log('No file to upload');
    //         }
    //     });
    // };
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        setSelectedLanguageGlobal(selectedOption.value);
        setIsStopGlobal(true);
    };

    const languagesList = Object.entries(contries).map(([key, value]) => {
        return {
            label: key,
            value: value
        }
    })

    return (
        <>
            <div class='row align-items-center mt-2 justify-content-end mp-2'>
                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-4 lgn-txt">Language</div>
                <div class="col-xl-4 col-lg-5 col-md-8 col-sm-6 col-8 lgn-md">
                    <Select
                        className='lan-sx'
                        value={selectedOption}
                        onChange={handleChange}
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
                </div>
                <div class="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
                    <div class="btn-str-div-ed">
                        <RecordButton setRecorderStatus={setRecorderConfig} status={recorderConfig.status}/>
                    </div>
                </div>  
                {/* <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div class="btn-str-div-st">
                        <button className={`btn-toggle ${isRecording ? 'stop' : 'start'}`}
                            onClick={handleRecording}>
                            {isRecording ? 'Stop' : 'Record Consult'}
                        </button>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6">
                    <div class="btn-str-div-ed">
                        <button className={`btn-toggle ${isRecordNotes ? 'stop-notes' : 'start-notes'}`}>
                            {isRecordNotes ? 'Stop' : 'Record Notes'}
                        </button>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default AudioRecorder;