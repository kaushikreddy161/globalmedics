import React, { useState, useRef, useEffect } from 'react';
import RecordRTC, { invokeSaveAsDialog } from 'recordrtc';
import recorderConfig from '../../../utils/DoctorDashboard/recorderConfig.js';
import { StartTranscribe, StopTranscribe } from '../../../utils/DoctorDashboard/ConversationTranscription.js';
import { useVoiceRecording } from '../../../contexts/DoctorDashboard/voiceRecordingContext.js';
import { useSelectedLanguage } from '../../../contexts/DoctorDashboard/selectedLanguageContext.js';
import './AudioRecorder.css';


import contries from '../../../speechToTextLanguage.json';
import Select from 'react-select';


const AudioRecorder = () => {
    const [stream, setStream] = useState(null);
    const [blob, setBlob] = useState(null);
    const refAudio = useRef(null);
    const recorderRef = useRef(null);
    const conversationTranscriberRef = useRef(null); // Use useRef to persist the variable
    const [, setVoiceRecordings] = useVoiceRecording();
    const [, , isStopGlobal, setIsStopGlobal] = useVoiceRecording();
    const [transcription, setTransciption] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const mediaStreamRef = useRef(null);
    const [selectedLanguageGlobal, setSelectedLanguageGlobal] = useSelectedLanguage();

    useEffect(() => {
        if (recorderRef.current && transcription !== '') {
            setVoiceRecordings(transcription);
        }
    }, [transcription]);

    useEffect(() => {
        if (isStopGlobal && recorderRef.current) {
            handleStop();
        }
    }, [isStopGlobal]);

    const handleTranscribe = () => {
        conversationTranscriberRef.current.transcribed = (s, e) => {
            if (e.result.text !== undefined) {
                setTransciption(prevTranscription => {
                    const timestamp = new Date().toLocaleString();
                    const newTranscription = prevTranscription + e.result.text + "\n";
                    const newTranscriptionWithTime = `${timestamp} - ${e.result.text}\n`;
                    // console.log("TRANSCRIBED: Text=" + newTranscription);
                    console.log(newTranscriptionWithTime);
                    return newTranscription;
                });
            }
            // console.log("TRANSCRIBED: Text=" + e.result.text + " Speaker ID=" + e.result.speakerId);
            // console.log("TRANSCRIBED: Text=" + transcription);
        };
    }

    const handleRecording = async () => {
        // const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (!isRecording) {
            mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true, });

            setStream(mediaStreamRef.current);
            recorderRef.current = new RecordRTC(mediaStreamRef.current, recorderConfig);
            recorderRef.current.startRecording();

            // Start the transcription and store the ConversationTranscriber object
            conversationTranscriberRef.current = StartTranscribe(mediaStreamRef.current, selectedLanguageGlobal);
            handleTranscribe();
            setIsRecording(true);
            setIsStopGlobal(false);
        } else {
            handleStop();
        }


    };

    const handleStop = () => {
        if (!recorderRef.current) {
            return;
        }
        recorderRef.current.stopRecording(async () => {
            const blob = recorderRef.current.getBlob();
            setBlob(blob);
            StopTranscribe(conversationTranscriberRef.current);
            mediaStreamRef.current.getTracks().forEach(track => track.stop());
            setIsRecording(false);
            const formData = new FormData();
            if (blob) {
                formData.append('file', blob);
                await fetch('https://myserver2-two.vercel.app/api/uploadAudioBlob', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.text();
                    })
                    .then(data => {
                        console.log('File uploaded to Azure Blob Storage:', data);
                    })
                    .catch(error => {
                        console.error('Error uploading file to Azure Blob Storage:', error);
                    });
            } else {
                console.log('No file to upload');
            }
        });
    };

    // const handleSave = () => {
    //     // invokeSaveAsDialog(blob);
    //     const formData = new FormData();
    //     if (blob) {
    //         formData.append('file', blob);
    //         fetch('http://localhost:3000/upload', {
    //             method: 'POST',
    //             body: formData
    //         })
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error('Network response was not ok');
    //                 }
    //                 return response.text();
    //             })
    //             .then(data => {
    //                 console.log('File uploaded to Azure Blob Storage:', data);
    //             })
    //             .catch(error => {
    //                 console.error('Error uploading file to Azure Blob Storage:', error);
    //             });
    //     } else {
    //         console.log('No file to upload');
    //     }
    // };

    // useEffect(() => {
    //     if (!refAudio.current) {
    //         return;
    //     }
    // }, [stream, refAudio]);

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
            <div class='row align-items-center mt-4'>
                <div class="col-5 text-right">Language</div>
                <div class="col-4 p-0">
                    <Select
                        value={selectedOption}
                        onChange={handleChange}
                        options={languagesList}
                        defaultInputValue='English (United States)' />
                </div>
                <div class="col-3">
                    <div class="btn-str-div">
                        <button className={`btn-toggle ${isRecording ? 'stop' : 'start'}`}
                            onClick={handleRecording}>
                            {isRecording ? 'Stop' : 'Record Consult'}
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
}

export default AudioRecorder;