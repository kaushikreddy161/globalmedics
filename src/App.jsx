import { Routes, Route, Switch, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { MsalProvider, useMsal } from '@azure/msal-react';
import { EventType } from '@azure/msal-browser';
import { UserProvider } from "./contexts/user.context";

// import { Route, Routes } from 'react-router-dom';
import { PageLayout } from './components/PageLayout';
import { Home } from './pages/Home';
import { b2cPolicies } from './authConfig';
import "./styles/App.css";

import HealthReports from "./pages/HealthReports";
import CareManagerDetailsForm from "./pages/CareManagerDetails";
import PatientPersonalDetailsForm from "./pages/PatientPersonalDetailsForm";
import PatientPersonalDetailsForm_1 from "./pages/PatientPersonalDetailsForm_1";
import PatientPersonalDetailsForm_2 from "./pages/PatientPersonalDetailsForm_2";
import PatientPersonalDetailsForm_3 from "./pages/PatientPersonalDetailsForm_3";
import ConsentForm from "./pages/ConsentForm";
import UploadReports from "./pages/UploadReports.page";
import Symptoms from "./pages/Symptoms";
import ModuleSummary from "./pages/ModuleSummary";
import ComingSoon from "./pages/ComingSoon";
import FileUpload from "./pages/FileUpload";
import AddLovedOnes from "./pages/AddLovedOnes";
import BloodPressure from "./pages/BloodPressure";
import PulseRate from "./pages/PulseRate";
import PatientModuleSummary from "./pages/PatientModuleSummary";
import HealthVaultReportUpload from "./pages/HealthVaultReportUpload";
import OxygenSaturation from "./pages/OxygenSaturation";
import BloodSugar from "./pages/BloodSugar";
import Temperature from "./pages/Temperature";
import BreathingRate from "./pages/BreathingRate";
import AddCareRingMembers from "./pages/AddCareRingMembers";
import AddLocalCarerInfo from "./pages/AddLocalCarerInfo";
import SelectVitals from "./pages/SelectVitals";
import SelectSymptoms from "./pages/SelectSymptoms";
import SetVitals from "./pages/SetVitals";
import SetSymptoms from "./pages/SetSymptoms";
import PatientsList from "./pages/PatientsList";
import PersonaliseECardCustomise from "./pages/PersonaliseECardCustomise";
import PersonaliseECard from "./pages/PersonaliseECard";
import LovedOnesECard from "./pages/LovedOnesECard";

import ChronicConditions from "./pages/ChronicConditions";
import RecordSymptoms from "./pages/RecordSymptoms";
import RecordSymptomsMore from "./pages/RecordSymptomsMore";
import RecordVitals from "./pages/RecordVitals";
import RecordVitalsMore from "./pages/RecordVitalsMore";
import DailyCheckOut from "./pages/DailyCheckOut";
import JobCategories from "./pages/JobCategories";
import BowelDiarrhoea from "./pages/BowelDiarrhoea";
import Headache from "./pages/Headache";
import Throat from "./pages/Throat";
import EyeIssues from "./pages/EyeIssues";
import Fever from "./pages/Fever";
import Hydration from "./pages/Hydration";
import Medications from "./pages/Medication";
import Nutrition from "./pages/Nutrition";
import Ecommerce from "./pages/Ecommerce";
import ProductList from "./pages/ProductList";
import IncDecCounter from "./pages/IncDecCounter";
import BuyProduct from "./pages/BuyProduct";
import DeviceConsent from "./pages/DeviceConsent";
import DeviceWelcomeScreen from "./pages/DeviceWelcomeScreen";
import DeviceRegistration from "./pages/DeviceRegistration";
import SetupCareRing from "./pages/SetupCareRing";
import ModuleSummaryTwo from "./pages/ModuleSummary2";
import ModuleSummaryThree from "./pages/ModuleSummary3";
import ModuleSummaryOne from "./pages/ModuleSummary1";
import DailyCheckIn from "./pages/DailyCheckIn";
import VitalsSummary from "./pages/VitalsSummary";
import VitalsGraph from "./pages/VitalsGraph";
import VitalsGuage from "./pages/VitalsGuage";
import UserFeedbackForm from "./pages/UserFeedbackForm";
import DailyCheckInSummary from "./pages/DailyCheckInSummary";
import Vitals from "./pages/Vitals";
import CareRingsConsent from "./pages/CareRingsConsent";
import LocalCareGiversConsent from "./pages/LocalCareGiversConsent";
import FamilyMembersConsent from "./pages/FamilyMembersConsent";
import AddFamilyMemberInfo from "./pages/AddFamilyMemberInfo";
import TestMenu from "./pages/TestMenu";
import Cough from "./pages/Cough";
import RunnyNose from "./pages/RunnyNose";
import Urine from "./pages/Urine";
import Bowel from "./pages/Bowel";
import AddDoctor from "./pages/AddDoctor";
import ManageConsent from "./pages/ManageConsent";
import CareRingManagement from "./pages/CareRingManagement";
import ManageServices from "./pages/ManageServices";
import SelectServices from "./pages/SelectServices";
import BowelConstipation from "./pages/BowelConstipation";
import TermsofService from "./pages/TermsofService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ConfirmEmail from "./pages/ConfirmEmail";
import LocalCareGiverAccess from "./pages/LocalCareGiverAccess";
import FamilyMemberAccess from "./pages/FamilyMemberAccess";
import LocalCareGiverCustomiseAccess from "./pages/LocalCareGiverCustomiseAccess";
import CareRings from "./pages/CareRings";
import Information from "./pages/Information";
import InviteSent from "./pages/InviteSent";
import InviteReceived from "./pages/InviteReceived";
import AdminRequest from "./pages/AdminRequest";
import Congratulations from "./pages/Congratulations";
import ThankYou from "./pages/ThankYou";
import Welcome from "./pages/Welcome";
import InviteCommunity from "./pages/InviteCommunity";
import KarmaKlub from "./pages/KarmaKlub";
import AutoVitalsSummary from "./pages/AutoVitalsSummary";
import Subscriptions from "./pages/Subscriptions";
import InstitutionConnect from "./pages/InstitutionConnect";
import Help from "./pages/UserHelpForm";
import GoogleFit from "./GoogleFit";
import Role from "./pages/Role";
import "./i18n/i18n";
import WithingsCall from "./WithingsCall.js"

import TestData from "./pages/TestData.js"


import HeartMedications_1 from "./pages/HeartMedications_1";
import HeartMedications_2 from "./pages/HeartMedications_2";
import HeartMedications_3 from "./pages/HeartMedications_3";

import DiabetesMedications_1 from "./pages/DiabetesMedications_1";
import DiabetesMedications_2 from "./pages/DiabetesMedications_2";
import DiabetesMedications_3 from "./pages/DiabetesMedications_3";

import BloodPressureMedications_1 from "./pages/BloodPressureMedications_1";
import BloodPressureMedications_2 from "./pages/BloodPressureMedications_2";
import BloodPressureMedications_3 from "./pages/BloodPressureMedications_3";

import ArthritisMedications_1 from "./pages/ArthritisMedications_1";
import ArthritisMedications_2 from "./pages/ArthritisMedications_2";
import ArthritisMedications_3 from "./pages/ArthritisMedications_3";

import LungMedications_1 from "./pages/LungMedications_1";
import LungMedications_2 from "./pages/LungMedications_2";
import LungMedications_3 from "./pages/LungMedications_3";

import AlzheimerMedications_1 from "./pages/AlzheimerMedications_1";
import AlzheimerMedications_2 from "./pages/AlzheimerMedications_2";
import AlzheimerMedications_3 from "./pages/AlzheimerMedications_3";

import ParkinsonMedications_1 from "./pages/ParkinsonMedications_1";
import ParkinsonMedications_2 from "./pages/ParkinsonMedications_2";
import ParkinsonMedications_3 from "./pages/ParkinsonMedications_3";

import KidneyMedications_1 from "./pages/KidneyMedications_1";
import KidneyMedications_2 from "./pages/KidneyMedications_2";
import KidneyMedications_3 from "./pages/KidneyMedications_3";

import CancerMedications_1 from "./pages/CancerMedications_1";
import CancerMedications_2 from "./pages/CancerMedications_2";
import CancerMedications_3 from "./pages/CancerMedications_3";

import OtherMedications_1 from "./pages/OtherMedications_1";
import OtherMedications_2 from "./pages/OtherMedications_2";
import OtherMedications_3 from "./pages/OtherMedications_3";

import SetMedications from "./pages/SetMedications";
import HealthInsurance from "./pages/HealthInsurance";
// import { useNavigate } from "react-router-dom";

import DashboardsWelcome from "./pages/DashboardsWelcome";
import CareManagerWelcome from "./pages/CareManagerWelcome";
import LovedOneWelcome from "./pages/LovedOneWelcome";
import FamilyMemberWelcome from "./pages/FamilyMemberWelcome";
import LocalCareGiverWelcome from "./pages/LocalCareGiverWelcome";
import ConnectDeviceWelcome from "./pages/ConnectDeviceWelcome";
import HealthVaultWelcome from "./pages/HealthVaultWelcome";
import RecordSymptomsWelcome from "./pages/RecordSymptomsWelcome";
import RecordVitalsWelcome from "./pages/RecordVitalsWelcome";

import SeverityPain from "./pages/SeverityPain";
import LocationPain from "./pages/LocationPain";
import TypeAccident from "./pages/TypeAccident";
import KindEmergency from "./pages/KindEmergency";
import EmergencyResponseAndPain from "./pages/EmergencyResponseAndPain";
import EmergencyConsent from "./pages/EmergencyConsent";
import YourAccountWelcome from "./pages/YourAccountWelcome";
import YourAccount from "./pages/YourAccount";
import EmergencyPain from "./pages/EmergencyPain";
import AnyOtherDetails from "./pages/AnyOtherDetails";
import AlertnessCheck from "./pages/AlertnessCheck";
import VerbalResponsiveness from "./pages/VerbalResponsiveness";
import PainCheck from "./pages/PainCheck";
import PatientUnresponsive from "./pages/PatientUnresponsive";

import InviteLocalCareGiver from './pages/InviteLocalCareGiver';
import InviteALovedOne from "./pages/InviteALovedOne";
import InviteConnect from "./pages/InviteConnect";

import AddLovedOnes_2 from "./pages/AddLovedOnes_2";

// import CareGiverForm from "./pages/CareGiverForm";

//import EmergencyGuidance from "./pages/EmergencyGuidance";
//import EmergencyGuidanceCurrentStatus from "./pages/EmergencyGuidanceCurrentStatus";
//import EmergencyGuidanceHealthStatus1 from "./pages/EmergencyGuidanceHealthStatus1";
//import EmergencyGuidanceHealthStatus2 from "./pages/EmergencyGuidanceHealthStatus2";
//import SeekHelp from "./pages/SeekHelp";
import AddProviders from "./pages/AddProviders";
//import VideoAudioRecorder from "./pages/VideoAudioRecorder";
import ConfirmDoctorDetails from "./pages/ConfirmDoctorDetails";

//import BlobStorage from "./pages/BlobStorage";
import CareManagerModuleSummary from "./pages/CareManagerModuleSummary";
import FamilyMembersModuleSummary from "./pages/FamilyMembersModuleSummary";
import FriendsModuleSummary from "./pages/FriendsModuleSummary";

import FriendsAccess from "./pages/FriendsAccess";
import FriendsMemberWelcome from "./pages/FriendsMemberWelcome";
import InviteFriends from "./pages/InviteFriends";

import WebCamera from "./pages/WebCamera";
import EmergencyGuidance from "./pages/EmergencyGuidance";
import EmergencyGuidanceHealthStatus1 from "./pages/EmergencyGuidanceHealthStatus1";
import EmergencyGuidanceHealthStatus2 from "./pages/EmergencyGuidanceHealthStatus2";
import EmergencyGuidanceHealthStatus3 from "./pages/EmergencyGuidanceHealthStatus3";
import SeekHelp from "./pages/SeekHelp";
import VideoAudioRecorder from "./pages/VideoAudioRecorder";
import CareRingSeekHelp from "./pages/CareRingSeekHelp";
import RecordStatus from "./pages/RecordStatus";
import Tiredness from "./pages/Tiredness";
import TrainingScreen_1 from "./pages/TrainingScreen_1";
import TrainingScreen_2 from "./pages/TrainingScreen_2";
import TrainingScreen_3 from "./pages/TrainingScreen_3";
import TrainingScreen_4 from "./pages/TrainingScreen_4";
import TrainingScreen_5 from "./pages/TrainingScreen_5";
import TrainingScreen_6 from "./pages/TrainingScreen_6";
import TrainingScreen_7 from "./pages/TrainingScreen_7";
import NewUserLoginWithOTP from "./pages/NewUserLoginWithOTP";
import MDTSummary from "./pages/MDTSummary";

import Chat from "./pages/Chat";
import ConversationComponent from "./pages/ConversationComponent";


import VirtualRound from "./DoctorDashboard/pages/VirtualRound/VirtualRound";
import PatientOverview from "./DoctorDashboard/pages/PatientOverView/PatientOverView";
import VitalSigns from "./DoctorDashboard/pages/VitalSigns/VitalSigns";
import PatientReports from "./DoctorDashboard/pages/PatientReports/PatientReports";
import CarePlanGeneration from "./DoctorDashboard/pages/CarePlan/CarePlanGeneration";
import UserJourneySelf from "./DoctorDashboard/pages/CarePlan/UserJourneySelf";
import CareConcierge from "./DoctorDashboard/pages/CarePlan/CareConcierge";

import ChatDashboard from "./Chat/ChatDashboard.js";

import Index from "./pages/DoctorDashboard/index.jsx";

const Pages = () => {
    /**
     * useMsal is hook that returns the PublicClientApplication instance,
     * an array of all accounts currently signed in and an inProgress value
     * that tells you what msal is currently doing. For more, visit:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/hooks.md
     */
    const { instance } = useMsal();
    const [adbpayload, setADBPayload] = useState("");
    const [time, setTime] = useState(new Date());
    const [imgBorderColor, setImgBorderColor] = useState("4px solid yellow");
    const [patientDetails, setPatientDetails] = useState('');

    //  const navigate = useNavigate();

    // const paramsidp = new URLSearchParams(window.location.search);
    // const dpl = paramsidp.get('dpl');
    // const typ = paramsidp.get('typ');
    //    const gcode = paramsidp.get('code');

    // console.log("params line 175:", paramsidp);
    // if (paramsidp.get('code'))
    // {
    //    // const lid = React.createContext(gcode);
    //     navigate('\withingsCall', {    
    //       state: { gcode: gcode },
    //     });
    // }
    const getPatientOverviewDetails = (patientDet, clr) => {
        setPatientDetails(patientDet)
        setImgBorderColor(clr)
        // console.log('patientDetails', patientDetails)
    }

    useEffect(() => {
        const callbackId = instance.addEventCallback((event) => {
            if (
                (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) &&
                event.payload.account
            ) {
                // console.log("line 126:", event.payload);
                setADBPayload(event.payload.idTokenClaims.oid);
                /**
                 * For the purpose of setting an active account for UI update, we want to consider only the auth
                 * response resulting from SUSI flow. "tfp" claim in the id token tells us the policy (NOTE: legacy
                 * policies may use "acr" instead of "tfp"). To learn more about B2C tokens, visit:
                 * https://docs.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview
                 */
                if (event.payload.idTokenClaims['tfp'] === b2cPolicies.names.editProfile) {
                    // retrieve the account from initial sing-in to the app
                    const originalSignInAccount = instance
                        .getAllAccounts()
                        .find(
                            (account) =>
                                account.idTokenClaims.oid === event.payload.idTokenClaims.oid &&
                                account.idTokenClaims.sub === event.payload.idTokenClaims.sub &&
                                account.idTokenClaims['tfp'] === b2cPolicies.names.signUpSignIn
                        );

                    let signUpSignInFlowRequest = {
                        authority: b2cPolicies.authorities.signUpSignIn.authority,
                        account: originalSignInAccount,
                    };

                    // silently login again with the signUpSignIn policy
                    instance.ssoSilent(signUpSignInFlowRequest);
                }

                /**
                 * Below we are checking if the user is returning from the reset password flow.
                 * If so, we will ask the user to reauthenticate with their new password.
                 * If you do not want this behavior and prefer your users to stay signed in instead,
                 * you can replace the code below with the same pattern used for handling the return from
                 * profile edit flow
                 */
                if (event.payload.idTokenClaims['tfp'] === b2cPolicies.names.forgotPassword) {
                    let signUpSignInFlowRequest = {
                        authority: b2cPolicies.authorities.signUpSignIn.authority,
                    };
                    instance.loginRedirect(signUpSignInFlowRequest);
                }
            }

            if (event.eventType === EventType.LOGIN_FAILURE) {
                // Check for forgot password error
                // Learn more about AAD error codes at https://docs.microsoft.com/en-us/azure/active-directory/develop/reference-aadsts-error-codes
                if (event.error && event.error.errorMessage.includes('AADB2C90118')) {
                    const resetPasswordRequest = {
                        authority: b2cPolicies.authorities.forgotPassword.authority,
                        scopes: [],
                    };
                    instance.loginRedirect(resetPasswordRequest);
                }
            }
        });

        return () => {
            if (callbackId) {
                instance.removeEventCallback(callbackId);
            }
        };
        // eslint-disable-next-line
    }, [instance]);

    return (
        <Routes>
            <Route path="/" element={<ModuleSummary prop={adbpayload} />} />
            <Route path="/termsofService" element={<TermsofService />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/confirmEmail" element={<ConfirmEmail />} />
            <Route path="/careManagerDetails" element={<CareManagerDetailsForm />} />
            <Route exact path="/healthReports" element={<HealthReports />} />
            <Route exact path="/patientPersonalDetailsForm_1" element={<PatientPersonalDetailsForm_1 />} />
            <Route exact path="/patientPersonalDetailsForm_2" element={<PatientPersonalDetailsForm_2 />} />
            <Route exact path="/patientPersonalDetailsForm_3" element={<PatientPersonalDetailsForm_3 />} />
            <Route exact path="/patientPersonalDetailsForm" element={<PatientPersonalDetailsForm />} />
            <Route exact path="/consentForm" element={<ConsentForm />} />
            <Route exact path="/symptoms" element={<Symptoms />} />
            <Route exact path="/uploadReports" element={<UploadReports />} />
            <Route exact path="/moduleSummary" element={<ModuleSummary prop={adbpayload} />} />
            <Route exact path="/comingSoon" element={<ComingSoon />} />
            <Route exact path="/fileUpload" element={<FileUpload />} />
            <Route exact path="/addLovedOnes" element={<AddLovedOnes />} />
            <Route exact path="/role" element={<Role />} />
            <Route exact path="/bloodPressure" element={<BloodPressure />} />
            <Route exact path="/pulseRate" element={<PulseRate />} />
            <Route exact path="/setupCareRing" element={<SetupCareRing />} />
            <Route exact path="/dailyCheckIn" element={<DailyCheckIn />} />
            <Route exact path="/vitalsSummary" element={<VitalsSummary />} />
            <Route exact path="/vitalsGraph" element={<VitalsGraph />} />
            <Route exact path="/vitalsGuage" element={<VitalsGuage />} />
            <Route exact path="/bloodSugar" element={<BloodSugar />} />
            <Route exact path="/temperature" element={<Temperature />} />
            <Route exact path="/breathingRate" element={<BreathingRate />} />
            <Route exact path="/vitals" element={<Vitals />} />
            <Route exact path="/testMenu" element={<TestMenu />} />
            <Route exact path="/cough" element={<Cough />} />
            <Route exact path="/runnyNose" element={<RunnyNose />} />
            <Route exact path="/urine" element={<Urine />} />
            <Route exact path="/bowel" element={<Bowel />} />
            <Route exact path="/selectVitals" element={<SelectVitals />} />
            <Route exact path="/selectSymptoms" element={<SelectSymptoms />} />
            <Route exact path="/setSymptoms" element={<SetSymptoms />} />
            <Route exact path="/setVitals" element={<SetVitals />} />
            <Route exact path="/addDoctor" element={<AddDoctor />} />
            <Route exact path="/manageConsent" element={<ManageConsent />} />
            <Route exact path="/manageServices" element={<ManageServices />} />
            <Route exact path="/patientsList" element={<PatientsList />} />
            <Route exact path="/selectServices" element={<SelectServices />} />
            <Route exact path="/headache" element={<Headache />} />
            <Route exact path="/throat" element={<Throat />} />
            <Route exact path="/eyeIssues" element={<EyeIssues />} />
            <Route exact path="/fever" element={<Fever />} />
            <Route exact path="/hydration" element={<Hydration />} />
            <Route exact path="/medications" element={<Medications />} />
            <Route exact path="/nutrition" element={<Nutrition />} />
            <Route exact path="/ecommerce" element={<Ecommerce />} />
            <Route exact path="/productList" element={<ProductList />} />
            <Route exact path="/incDecCounter" element={<IncDecCounter />} />
            <Route exact path="/buyProduct" element={<BuyProduct />} />
            <Route exact path="/deviceConsent" element={<DeviceConsent />} />
            <Route exact path="/deviceWelcomeScreen" element={<DeviceWelcomeScreen />} />
            <Route exact path="/deviceRegistration" element={<DeviceRegistration />} />
            <Route exact path="/googleFit" element={<GoogleFit />} />
            <Route exact path="/withingsCall" element={<WithingsCall />} />
            <Route exact path="/localCareGiverAccess" element={<LocalCareGiverAccess />} />
            <Route exact path="/familyMemberAccess" element={<FamilyMemberAccess />} />
            <Route exact path="/localCareGiverCustomiseAccess" element={<LocalCareGiverCustomiseAccess />} />
            <Route exact path="/careRings" element={<CareRings />} />
            <Route exact path="/information" element={<Information />} />
            <Route exact path="/InviteSent" element={<InviteSent />} />
            <Route exact path="/InviteReceived" element={<InviteReceived />} />
            <Route exact path="/adminRequest" element={<AdminRequest />} />
            <Route exact path="/congratulations" element={<Congratulations />} />
            <Route exact path="/thankYou" element={<ThankYou />} />
            <Route exact path="/welcome" element={<Welcome />} />
            <Route exact path="/inviteCommunity" element={<InviteCommunity />} />
            <Route exact path="/karmaKlub" element={<KarmaKlub />} />
            <Route exact path="/autoVitalsSummary" element={<AutoVitalsSummary />} />
            <Route exact path="/subscriptions" element={<Subscriptions />} />
            <Route exact path="/institutionConnect" element={<InstitutionConnect />} />
            <Route exact path="/Help" element={<Help />} />
            <Route exact path="/dailyCheckOut" element={<DailyCheckOut />} />
            <Route exact path="/jobCategories" element={<JobCategories />} />
            <Route exact path="/bowelDiarrhoea" element={<BowelDiarrhoea />} />
            <Route exact path="/personaliseECard" element={<PersonaliseECard />} />
            <Route exact path="/LovedOnesECard" element={<LovedOnesECard />} />
            <Route exact path="/personaliseECardCustomise" element={<PersonaliseECardCustomise />} />
            <Route exact path="/chronicConditions" element={<ChronicConditions />} />
            <Route exact path="/recordSymptoms" element={<RecordSymptoms />} />
            <Route exact path="/recordSymptomsMore" element={<RecordSymptomsMore />} />
            <Route exact path="/recordVitals" element={<RecordVitals />} />
            <Route exact path="/recordVitalsMore" element={<RecordVitalsMore />} />
            <Route exact path="/bowelConstipation" element={<BowelConstipation />} />
            <Route exact path="/moduleSummaryOne" element={<ModuleSummaryOne />} />
            <Route exact path="/moduleSummaryTwo" element={<ModuleSummaryTwo />} />
            <Route exact path="/moduleSummaryThree" element={<ModuleSummaryThree />} />
            <Route exact path="/patientModuleSummary" element={<PatientModuleSummary />} />
            <Route exact path="/healthVaultReportUpload" element={<HealthVaultReportUpload />} />
            <Route exact path="/userFeedbackForm" element={<UserFeedbackForm />} />
            <Route exact path="/dailyCheckInSummary" element={<DailyCheckInSummary />} />
            <Route exact path="/oxygenSaturation" element={<OxygenSaturation />} />
            <Route exact path="/addCareRingMembers" element={<AddCareRingMembers />} />
            <Route exact path="/careRingsConsent" element={<CareRingsConsent />} />
            <Route exact path="/localCareGiversConsent" element={<LocalCareGiversConsent />} />
            <Route exact path="/addLocalCarerInfo" element={<AddLocalCarerInfo />} />
            <Route exact path="/familyMembersConsent" element={<FamilyMembersConsent />} />
            <Route exact path="/addFamilyMemberInfo" element={<AddFamilyMemberInfo />} />
            <Route exact path="/careRingManagement" element={<CareRingManagement />} />

            <Route exact path="/heartMedications_1" element={<HeartMedications_1 />} />
            <Route exact path="/heartMedications_2" element={<HeartMedications_2 />} />
            <Route exact path="/heartMedications_3" element={<HeartMedications_3 />} />

            <Route exact path="/diabetesMedications_1" element={<DiabetesMedications_1 />} />
            <Route exact path="/diabetesMedications_2" element={<DiabetesMedications_2 />} />
            <Route exact path="/diabetesMedications_3" element={<DiabetesMedications_3 />} />

            <Route exact path="/bloodPressureMedications_1" element={<BloodPressureMedications_1 />} />
            <Route exact path="/bloodPressureMedications_2" element={<BloodPressureMedications_2 />} />
            <Route exact path="/bloodPressureMedications_3" element={<BloodPressureMedications_3 />} />

            <Route exact path="/arthritisMedications_1" element={<ArthritisMedications_1 />} />
            <Route exact path="/arthritisMedications_2" element={<ArthritisMedications_2 />} />
            <Route exact path="/arthritisMedications_3" element={<ArthritisMedications_3 />} />

            <Route exact path="/lungMedications_1" element={<LungMedications_1 />} />
            <Route exact path="/lungMedications_2" element={<LungMedications_2 />} />
            <Route exact path="/lungMedications_3" element={<LungMedications_3 />} />

            <Route exact path="/alzheimerMedications_1" element={<AlzheimerMedications_1 />} />
            <Route exact path="/alzheimerMedications_2" element={<AlzheimerMedications_2 />} />
            <Route exact path="/alzheimerMedications_3" element={<AlzheimerMedications_3 />} />

            <Route exact path="/parkinsonMedications_1" element={<ParkinsonMedications_1 />} />
            <Route exact path="/parkinsonMedications_2" element={<ParkinsonMedications_2 />} />
            <Route exact path="/parkinsonMedications_3" element={<ParkinsonMedications_3 />} />

            <Route exact path="/kidneyMedications_1" element={<KidneyMedications_1 />} />
            <Route exact path="/kidneyMedications_2" element={<KidneyMedications_2 />} />
            <Route exact path="/kidneyMedications_3" element={<KidneyMedications_3 />} />

            <Route exact path="/cancerMedications_1" element={<CancerMedications_1 />} />
            <Route exact path="/cancerMedications_2" element={<CancerMedications_2 />} />
            <Route exact path="/cancerMedications_3" element={<CancerMedications_3 />} />

            <Route exact path="/otherMedications_1" element={<OtherMedications_1 />} />
            <Route exact path="/otherMedications_2" element={<OtherMedications_2 />} />
            <Route exact path="/otherMedications_3" element={<OtherMedications_3 />} />

            <Route exact path="/setMedications" element={<SetMedications />} />
            <Route exact path="/healthInsurance" element={<HealthInsurance />} />

            <Route exact path="/dashboardsWelcome" element={<DashboardsWelcome />} />
            <Route exact path="/careManagerWelcome" element={<CareManagerWelcome />} />
            <Route exact path="/lovedOneWelcome" element={<LovedOneWelcome />} />
            <Route exact path="/familyMemberWelcome" element={<FamilyMemberWelcome />} />
            <Route exact path="/localCareGiverWelcome" element={<LocalCareGiverWelcome />} />
            <Route exact path="/connectDeviceWelcome" element={<ConnectDeviceWelcome />} />
            <Route exact path="/healthVaultWelcome" element={<HealthVaultWelcome />} />
            <Route exact path="/recordSymptomsWelcome" element={<RecordSymptomsWelcome />} />
            <Route exact path="/recordVitalsWelcome" element={<RecordVitalsWelcome />} />
            <Route exact path="/severityPain" element={<SeverityPain />} />
            <Route exact path="/locationPain" element={<LocationPain />} />
            <Route exact path="/typeAccident" element={<TypeAccident />} />
            <Route exact path="/kindEmergency" element={<KindEmergency />} />
            <Route exact path="/emergencyResponseAndPain" element={<EmergencyResponseAndPain />} />
            <Route exact path="/emergencyConsent" element={<EmergencyConsent />} />
            <Route exact path="/yourAccountWelcome" element={<YourAccountWelcome />} />
            <Route exact path="/yourAccount" element={<YourAccount />} />
            <Route exact path="/emergencyPain" element={<EmergencyPain />} />
            <Route exact path="/anyOtherDetails" element={<AnyOtherDetails />} />
            <Route exact path="/alertnessCheck" element={<AlertnessCheck />} />
            <Route exact path="/verbalResponsiveness" element={<VerbalResponsiveness />} />
            <Route exact path="/painCheck" element={<PainCheck />} />
            <Route exact path="/patientUnresponsive" element={<PatientUnresponsive />} />
            <Route exact path="/inviteLocalCareGiver" element={<InviteLocalCareGiver />} />
            <Route exact path="/inviteALovedOne" element={<InviteALovedOne />} />
            <Route exact path="/inviteConnect" element={<InviteConnect />} />
            <Route exact path="/addLovedOnes_2" element={<AddLovedOnes_2 />} />
            {/* <Route exact path="/emergencyGuidance" element={<EmergencyGuidance />} />
          <Route exact path="/emergencyGuidanceCurrentStatus" element={<EmergencyGuidanceCurrentStatus />} />
          <Route exact path="/emergencyGuidanceHealthStatus1" element={<EmergencyGuidanceHealthStatus1 />} />
          <Route exact path="/emergencyGuidanceHealthStatus2" element={<EmergencyGuidanceHealthStatus2 />} />
          <Route exact path="/seekHelp" element={<SeekHelp />} />
          <Route exact path="/videoAudioRecorder" element={<VideoAudioRecorder />} />
          <Route exact path="/blobStorage" element={<BlobStorage />} /> */}
            <Route exact path="/addProviders" element={<AddProviders />} />
            <Route exact path="/confirmDoctorDetails" element={<ConfirmDoctorDetails />} />
            <Route exact path="/friendsAccess" element={<FriendsAccess />} />
            <Route exact path="/careManagerModuleSummary" element={<CareManagerModuleSummary />} />
            <Route exact path="/familyMembersModuleSummary" element={<FamilyMembersModuleSummary />} />
            <Route exact path="/friendsModuleSummary" element={<FriendsModuleSummary />} />
            <Route exact path="/friendsMemberWelcome" element={<FriendsMemberWelcome />} />
            <Route exact path="/inviteFriends" element={<InviteFriends />} />

            <Route exact path="/webCamera" element={<WebCamera />} />
            <Route exact path="/emergencyGuidance" element={<EmergencyGuidance />} />
            <Route exact path="/emergencyGuidanceHealthStatus1" element={<EmergencyGuidanceHealthStatus1 />} />
            <Route exact path="/emergencyGuidanceHealthStatus2" element={<EmergencyGuidanceHealthStatus2 />} />
            <Route exact path="/emergencyGuidanceHealthStatus3" element={<EmergencyGuidanceHealthStatus3 />} />
            <Route exact path="/seekHelp" element={<SeekHelp />} />
            <Route exact path="/videoAudioRecorder" element={<VideoAudioRecorder />} />
            <Route exact path="/careRingSeekHelp" element={<CareRingSeekHelp />} />
            <Route exact path="/recordStatus" element={<RecordStatus />} />
            <Route exact path="/tiredness" element={<Tiredness />} />
            <Route exact path="/trainingScreen_1" element={<TrainingScreen_1 />} />
            <Route exact path="/trainingScreen_2" element={<TrainingScreen_2 />} />
            <Route exact path="/trainingScreen_3" element={<TrainingScreen_3 />} />
            <Route exact path="/trainingScreen_4" element={<TrainingScreen_4 />} />
            <Route exact path="/trainingScreen_5" element={<TrainingScreen_5 />} />
            <Route exact path="/trainingScreen_6" element={<TrainingScreen_6 />} />
            <Route exact path="/trainingScreen_7" element={<TrainingScreen_7 />} />
            <Route exact path="/newUserLoginWithOTP" element={<NewUserLoginWithOTP />} />
            <Route exact path="/mDTSummary" element={<MDTSummary />} />

            <Route exact path="/testData" element={<TestData />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/conversationComponent" element={<ConversationComponent />} />
            {/* <Route exact path="/Data" element={<ConversationComponent />} /> */}

            {/* <Route exact path="/careGiverForm" element={<CareGiverForm />} /> */}

            <Route exact path="/virtualround" element={<VirtualRound getPatientOverviewDetails={getPatientOverviewDetails} />} />
            <Route exact path="/patients" element={<PatientOverview patientDetails={patientDetails} imgBorderColor={imgBorderColor} time={time} />} />
            <Route exact path="/trends" element={<VitalSigns patientDetails={patientDetails} imgBorderColor={imgBorderColor} time={time} />} />
            <Route exact path="/patientReports" element={<PatientReports patientDetails={patientDetails} imgBorderColor={imgBorderColor} time={time} />} />
            <Route exact path="/carePlanGeneration" element={<CarePlanGeneration patientDetails={patientDetails} imgBorderColor={imgBorderColor} time={time} />} />
            <Route exact path="/userJourneySelf" element={<UserJourneySelf patientDetails={patientDetails} imgBorderColor={imgBorderColor} time={time} />} />
            <Route exact path="/careConcierge" element={<CareConcierge patientDetails={patientDetails} imgBorderColor={imgBorderColor} time={time} />} />

            <Route exact path="/chatDashboard" element={<ChatDashboard />} />
            {/* <Route exact path="/virtualround" render={(props) => <VirtualRound getPatientOverviewDetails={getPatientOverviewDetails} {...props} />} />
          <Route exact path="/patients" render={(props) => <PatientOverview patientDetails={patientDetails} imgBorderColor={imgBorderColor} time={time} {...props} />} /> 
          <Route exact path="/trends" render={(props) => <VitalSigns patientDetails={patientDetails} imgBorderColor={imgBorderColor} time={time} {...props} />} />*/}

            <Route path="/consultation" element={<Index />} />

        </Routes>


    );
};

const App = ({ instance }) => {
    return (
        <MsalProvider instance={instance}>
            <UserProvider>
                <PageLayout>
                    <Pages />
                </PageLayout>
            </UserProvider>
        </MsalProvider>
    );
}

export default App;
