import { createContext, useState, useContext } from 'react';

const VoiceRecordingContext = createContext("");

export const useVoiceRecording = () => {
    const context = useContext(VoiceRecordingContext);
    if (context === undefined) {
        throw new Error('useVoiceRecording must be used within a VoiceRecordingProvider');
    }
    return context;
};

export const VoiceRecordingProvider = ({ children }) => {
    const [voiceRecording, setVoiceRecording] = useState("");
    const [isStopGlobal, setIsStopGlobal] = useState(false);
    return (
        <VoiceRecordingContext.Provider value={[voiceRecording, setVoiceRecording, isStopGlobal, setIsStopGlobal]}>
            {children}
        </VoiceRecordingContext.Provider>
    );
};

export default VoiceRecordingContext;