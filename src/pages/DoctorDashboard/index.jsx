import React, { useContext } from "react";
import Consultation from "./Consultation";
import { VoiceRecordingProvider } from "../../contexts/DoctorDashboard/voiceRecordingContext";
import { SelectedLanguageProvider } from '../../contexts/DoctorDashboard/selectedLanguageContext';
import { UserContext } from "../../contexts/user.context";
import { MsalProvider, useMsal } from "@azure/msal-react";

function Index(props) {
    const { user, pId, pName, adbuser } = useContext(UserContext);
    const { instance } = useMsal();
    const activeAccount = instance.getActiveAccount();
console.log("props", props);

    return (
       
            <VoiceRecordingProvider>
                <SelectedLanguageProvider>
                    <Consultation patientDetails={props.patientDetails} imgBorderColor={props.imgBorderColor} time={props.time}/>
                </SelectedLanguageProvider>
            </VoiceRecordingProvider>
       
    );
}

export default Index;