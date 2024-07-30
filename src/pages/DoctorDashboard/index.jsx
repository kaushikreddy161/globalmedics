import React, { useContext } from "react";
import Consultation from "./Consultation";
import { VoiceRecordingProvider } from "../../contexts/DoctorDashboard/voiceRecordingContext";
import { SelectedLanguageProvider } from '../../contexts/DoctorDashboard/selectedLanguageContext';
import { UserContext } from "../../contexts/user.context";
import { MsalProvider, useMsal } from "@azure/msal-react";

function Index() {
    const { user, pId, pName, adbuser } = useContext(UserContext);
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();

    return (
       
            <VoiceRecordingProvider>
                <SelectedLanguageProvider>
                    <Consultation />
                </SelectedLanguageProvider>
            </VoiceRecordingProvider>
       
    );
}

export default Index;