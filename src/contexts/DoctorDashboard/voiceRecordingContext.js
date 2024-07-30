import { createContext, useState, useContext } from 'react';

const VoiceRecordingContext = createContext();

export const useVoiceRecording = () => useContext(VoiceRecordingContext)

export const VoiceRecordingProvider = ({ children }) => {
    const [voiceRecording, setVoiceRecording] = useState("");
    const [isStopGlobal, setIsStopGlobal] = useState(false);   
    const [recorderConfig, setRecorderConfig] = useState({
        status:""
    })     
    return (
        <VoiceRecordingContext.Provider value={[voiceRecording, setVoiceRecording, isStopGlobal, setIsStopGlobal,recorderConfig, setRecorderConfig]}>
            {children}
        </VoiceRecordingContext.Provider>
    );
};

export default VoiceRecordingContext;
