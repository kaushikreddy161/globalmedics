import React from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
// import IconAdLove from "../assets/icon-nav-adlove.png";
// import IconRight from "../assets/icon-nav-right.png";
// import IconFeedback from "../assets/icon-nav-fback.png";


import * as RiIcons from "react-icons/ri";
import IconWel from "../assets/icon-nav-wel.png";
import IconAcn from "../assets/icon-nav-acn.svg";
import IconAccount from "../assets/icon-nav-account.svg";
import IconComingSoon from "../assets/icon-coming-soon.svg";
import IconCheckIn from "../assets/icon-nav-checkin.svg";
import IconDashboard from "../assets/icon-nav-dashboard.svg";
import IconCRing from "../assets/icon-nav-cring.svg";
import IconBPrs from "../assets/icon-nav-bprs.svg";
import IconHVut from "../assets/icon-nav-hvault.svg";
import IconPPDel from "../assets/icon-nav-ppdel.svg";
import IconPRate from "../assets/icon-nav-prate.svg";
import IconRole from "../assets/icon-nav-role.png";
import IconTemp from "../assets/icon-nav-tem.svg";
import IconRRate from "../assets/icon-nav-rrate.svg";
import IconBSug from "../assets/icon-nav-bsug.svg";
import IconOSat from "../assets/icon-nav-osat.svg";
import IconRNose from "../assets/icon-nav-rnose.svg";
import IconCough from "../assets/icon-nav-cough.svg";
import IconUrine from "../assets/icon-nav-urine.svg";
import IconVitals from "../assets/icon-nav-vitals.svg";
import IconSymptoms from "../assets/icon-nav-symptoms.svg";
import IconRMonitoring from "../assets/icon-nav-rmonitoring.svg";
import IconHPReports from "../assets/icon-nav-hvprpts.svg";
import IconHRReports from "../assets/icon-nav-hvrdr.png";
import IconHOthers from "../assets/icon-nav-hvothrs.png";
import IconCRLocalCare from "../assets/icon-nav-cr-lcr.svg";
import IconCRAddFmlyMem from "../assets/icon-nav-cr-afm.svg";
import IconCRAddDoc from "../assets/icon-nav-cr-adoc.svg";
import IconCRALovedOne from "../assets/icon-nav-cr-alo.png";
import IconSelectService from "../assets/icon-nav-service.svg";
import IconSetVitals from "../assets/icon-nav-set-vitals.png";
import IconSelSymptoms from "../assets/icon-nav-sel-symptoms.png";
import IconBowel from "../assets/icon-nav-bowel.svg";
import IconHeadache from "../assets/icon-nav-headache.svg";
import IconEye from "../assets/icon-nav-eye.svg";
import IconThroat from "../assets/icon-nav-throat.svg";
import IconFever from "../assets/icon-nav-fever.svg";
import IconMarktingPlace from "../assets/icon-nav-markting-place.png";
import IconGoogleFit from "../assets/icon-google-fit.png";
import IconInviteCommunity from "../assets/icon-nav-invite-community.svg";
import IconMedications from "../assets/icon-nav-medi.svg";
import IconInsurance from "../assets/icon-nav-insurance.svg";
import IconCCondition from "../assets/icon-nav-cc.svg";
import IconRCM from "../assets/icon-nav-care-manager.svg";
import IconRCG from "../assets/icon-nav-care-giver.svg";
import IconDoc from "../assets/icon-nav-doc.svg";
import IconInst from "../assets/icon-nav-inst.svg";
import IconSocial from "../assets/icon-nav-soci.svg";
import IconFamily from "../assets/icon-nav-family.svg";
import IconSelf from "../assets/icon-nav-self.svg";
import IconACRS from "../assets/icon-nav-care-ring.svg";
import IconALO from "../assets/icon-nav-add-love.svg";
import IconDeviceInte from "../assets/icon-nav-device-inte.svg";
import IconBreathing from "../assets/icon-nav-breathing.svg";
import IconProfessionals from "../assets/icon-nav-professionals.svg";
import IconSubscripition from "../assets/icon-nav-subscripition.svg";
import IconPain from "../assets/icon-nav-pain.svg";
import IconSelectRole from "../assets/icon-nav-select-role.svg";
import IconEmergency from "../assets/icon-nav-emergency.svg";
import IconAccident from "../assets/icon-nav-accident.png";
import IconLocationPain from "../assets/icon-nav-l-pain.png";
import IconFriends from "../assets/icon-nav-friends.svg";
import IconRecordStatus from "../assets/icon-record-status.svg";
import IconVirtualRound from "../assets/icon-virtual-round.svg";
import IconPatientsOverview from "../assets/icon-patients-overview.svg";
import IconTrends from "../assets/icon-trends.svg";
import IconKarmaKlub from "../assets/icon-karma-klub.svg";
import IconHydration from "../assets/icon-nav-hydration.svg";
import IconMedication from "../assets/icon-nav-medication.svg";
import IconNutrition from "../assets/icon-nav-nutrition.svg";

export const SidebarData = [
  // {
  //   title: "Welcome",
  //   path: "/moduleSummary",
  //   icon: IconWel,
  // },

  {
    title: "Select Role",
    icon: IconSelectRole,
    path: "/role",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Self",
        path: "/moduleSummary",
        icon: IconSelf,
      },
      {
        title: "Next of Kin",
        path: "/careManagerWelcome",
        icon: IconRCM,
      },
      {
        title: "Family Members",
        path: "/familyMemberWelcome",
        icon: IconFamily,
      },
      {
        title: "Local Care Giver",
        path: "/localCareGiverWelcome",
        icon: IconRCG,
      },
      {
        title: "Health Providers",
        path: "/confirmDoctorDetails",
        icon: IconDoc,
      },
      {
        title: "Friends",
        path: "/familyMemberWelcome",
        icon: IconFriends,
      },
      {
        title: "Institutional Patient",
        path: "/institutionConnect",
        icon: IconInst,
      },
      // {
      //   title: "Social Worker",
      //   path: "/comingsoon",
      //   icon: IconSocial,
      // },
    ],
  },
  {
    title: "Monitor Health",
    path: "/remote",
    icon: IconRMonitoring,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      // {
      //   title: "Dashboard",
      //   path: "/dashboardsWelcome",
      //   icon: IconVirtualRound,
      // },
      {
        title: 'Virtual Round',
        path: '/virtualround',
        icon: IconPatientsOverview,
        cName: 'nav-text'
      },
      // {
      //   title: 'Patients Overview',
      //   path: '/patients',
      //   icon: IconVirtualRound,
      //   cName: 'nav-text'
      // },
      // {
      //   title: 'Trends',
      //   path: '/trends',
      //   icon: IconPatientsOverview,
      //   cName: 'nav-text'
      // },
      {
        title: 'Patient Reports',
        path: '/patientReports',
        icon: IconPatientsOverview,
        cName: 'nav-text'
      },
      // {
      //   title: "Vitals Summary",
      //   path: "/vitalsSummary",
      //   icon: IconAcn,
      // }
      // {
      //   title: "Care Plan Generation",
      //   path: "/carePlanGeneration",
      //   icon: IconPPDel,
      // },
      {
        title: 'Care Central',
        path: '/consultation',
        icon: IconPPDel,
      }
    ]
  },
  {
    title: "MDT Management",
    icon: IconCRing,
    path: "/careRingManagement",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "MDT Summary",
        path: "/mDTSummary",
        icon: IconACRS,
      },
      {
        title: "Patient",
        path: "/lovedOneWelcome",
        icon: IconALO,
      },
      {
        title: "Nurse",
        path: "/localCareGiversConsent",
        icon: IconCRLocalCare,
      },
      {
        title: "General Practitioner",
        path: "/familyMembersConsent",
        icon: IconCRAddFmlyMem,
      },
      {
        title: "Allied Health",
        path: "/friendsAccess",
        icon: IconFriends,
      },
      {
        title: "Specialist",
        path: "/inviteCommunity",
        icon: IconInviteCommunity,
      },
      // {
      //   title: "Add Provider",
      //   path: "/addProviders",
      //   icon: IconCRAddDoc,
      // },
    ],
  },
  {
    title: "Care Ring Management",
    icon: IconCRing,
    path: "/careRingManagement",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Care Ring Summary",
        path: "/careRings",
        icon: IconACRS,
      },
      {
        title: "Loved Ones",
        path: "/lovedOneWelcome",
        icon: IconALO,
      },
      {
        title: "Local Care Givers",
        path: "/localCareGiversConsent",
        icon: IconCRLocalCare,
      },
      // {
      //   title: "Add Loved Ones",
      //   path: "/addLovedOnes",
      //   icon: IconCRALovedOne,
      //  },     
      // {
      //   title: "Add Local Care Givers",
      //   path: "/localCareGiversConsent",
      //   icon: IconCRLocalCare,
      // },

      // {
      //   title: "Add Local Care giver Customise Access",
      //   path: "/localCareGiverCustomiseAccess",
      //   icon: IconCRLocalCare,
      // },
      // {
      //   title: "Add Family Members",
      //   path: "/familyMembersConsent",
      //   icon: IconCRAddFmlyMem,
      // },
      {
        title: "Family Members",
        path: "/familyMembersConsent",
        icon: IconCRAddFmlyMem,
      },
      {
        title: "Friends",
        path: "/friendsAccess",
        icon: IconFriends,
      },
      {
        title: "Community",
        path: "/inviteCommunity",
        icon: IconInviteCommunity,
      },
      {
        title: "Add Provider",
        path: "/addProviders",
        icon: IconCRAddDoc,
      },
      // {
      //   title: "Institution Connect",
      //   path: "/institutionConnect",
      //   icon: IconAcn,
      // },
      // {
      //   title: "Auto Vitals Summary",
      //   path: "/autoVitalsSummary",
      //   icon: IconAcn,
      // },
      // {
      //   title: "Personalise Invite",
      //   path: "/PersonaliseECardCustomise",
      //   icon: IconAcn,
      // },
      // {
      //   title: "Manage Consent",
      //   path: "/manageConsent",
      //   icon: IconPPDel,
      // },
    ],
  },
  {
    title: "Care Plan",
    icon: IconCheckIn,
    path: "/manageServices",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Select Services",
        path: "/selectServices",
        icon: IconSelectService,
      },
      {
        title: "Set Vitals",
        path: "/setVitals",
        icon: IconBPrs,
      },
      {
        title: "Select Symptoms",
        path: "/selectSymptoms",
        icon: IconFever,
      },
      {
        title: "Prescribe Medicines",
        path: "/setMedications",
        icon: IconMedications,
      },
    ],
  },

  {
    title: "Update Health Vault",
    path: "/healthVaultWelcome",
    icon: IconHVut,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Patient Particulars",
        path: "/patientpersonalDetailsForm_1",
        icon: IconPPDel,
      },
      {
        title: "Chronic Conditions",
        path: "/chronicConditions",
        icon: IconCCondition,
      },
      // {
      //   title: "Hobbies Arts",
      //   icon: IconEmergency,
      //   path: "/hobbiesArts",
      // },
      {
        title: "Reports",
        path: "/healthVaultReportUpload",
        icon: IconHPReports,
      },
      {
        title: "Insurance",
        path: "/healthInsurance",
        icon: IconInsurance,
      },

    ],
  },
  {
    title: "Record Status",
    path: "/recordStatus",
    icon: IconRecordStatus,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Nutrition",
        path: "/nutrition",
        icon: IconNutrition,
      },
      {
        title: "Hydration",
        path: "/hydration",
        icon: IconHydration,
      },
      {
        title: "Medication",
        path: "/setMedications",
        icon: IconMedication,
      },
      {
        title: "Vitals",
        path: "/recordVitalsWelcome",
        icon: IconVitals,
      },
      {
        title: "Symptoms",
        path: "/recordSymptomsWelcome",
        icon: IconSymptoms,
      },
      {
        title: "Emergency",
        icon: IconEmergency,
        path: "/emergencyResponseAndPain",
      },
    ],
  },
  // {
  //   title: "Record Vitals",
  //   path: "/recordVitalsWelcome",
  //   icon: IconVitals,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //           {
  //       title: "Temperature",
  //       path: "/temperature",
  //       icon: IconTemp,
  //     },
  //     {
  //       title: "Blood Pressure",
  //       path: "/bloodPressure",
  //       icon: IconBPrs,
  //     },
  //     {
  //       title: "Pulse Rate",
  //       path: "/pulseRate",
  //       icon: IconPRate,
  //     },
  //           {
  //       title: "Breathing Rate",
  //       path: "/breathingRate",
  //       icon: IconRRate,
  //     },
  //     {
  //       title: "Oxygen Saturation",
  //       path: "/oxygenSaturation",
  //       icon: IconOSat,
  //     },
  //     {
  //       title: "Blood Sugar",
  //       path: "/bloodSugar",
  //       icon: IconBSug,
  //     },
  //     {
  //       title: "Device Integration",
  //       path: "/connectDeviceWelcome",
  //       icon: IconDeviceInte,
  //     },
  //   ],
  // },
  // {
  //   title: "Record Symptoms",
  //   path: "/recordSymptomsWelcome",
  //   icon: IconSymptoms,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //           {
  //       title: "Fever",
  //       path: "/fever",
  //       icon: IconFever,
  //     },
  //           {
  //       title: "Headache",
  //       path: "/headache",
  //       icon: IconHeadache,
  //     },
  //           {
  //       title: "Eye",
  //       path: "/eyeIssues",
  //       icon: IconEye,
  //     },
  //     {
  //       title: "Nose",
  //       path: "/runnyNose",
  //       icon: IconRNose,
  //     },
  //     {
  //       title: "Cough",
  //       path: "/cough",
  //       icon: IconCough,
  //     },
  //           {
  //       title: "Throat",
  //       path: "/throat",
  //       icon: IconThroat,
  //     },
  //     {
  //       title: "Urine",
  //       path: "/urine",
  //       icon: IconUrine,
  //     },
  //     {
  //       title: "Bowel",
  //       path: "/bowel",
  //       icon: IconBowel,
  //     },
  //     {
  //       title: "Breathing",
  //       path: "/comingSoon",
  //       icon: IconBreathing,
  //     },
  //     {
  //       title: "Pain",
  //       path: "/locationPain",
  //       icon: IconPain,
  //     },
  //   ],
  // },
  {
    title: "Your Account",
    icon: IconAcn,
    path: "/yourAccountWelcome",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Your Account",
        path: "/careManagerDetails",
        icon: IconAccount,
      },
      {
        title: "Karma Klub",
        path: "/karmaKlub",
        icon: IconKarmaKlub,
      },
      {
        title: "Subscriptions",
        path: "/subscriptions",
        icon: IconSubscripition,
      },
    ],
  },
  // {
  //   title: "Check-In",
  //   icon: IconCheckIn,
  //   path: "/dailyCheckIn",
  // },
  // {
  //   title: "Privacy Policy",
  //   path: "/privacyPolicy",
  //   icon: IconAcn,
  // },
  // {
  //   title: "Terms of Service",
  //   path: "/termsofService",
  //   icon: IconAcn,
  // },

  // {
  //   title: "Coming Soon",
  //   path: "/comingsoon",
  //   icon: IconRMonitoring,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  // {
  //   title: "Device Registration",
  //   path: "/deviceRegistration",
  //   icon: IconCheckIn,
  // },
  // {
  //   title: "Device Consent",
  //   path: "/deviceConsent",
  //   icon: IconCheckIn,
  // },
  // {
  //   title: "Device Welcome",
  //   path: "/deviceWelcomeScreen",
  //   icon: IconCheckIn,
  // }     
  // ]
  // },
  // {
  //   title: "IncDecCounter",
  //   path: "/incDecCounter",
  //   icon: IconAcn,
  // },
  // {
  //   title: "Feedback",
  //   path: "/userFeedbackForm",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "Help",
  //   path: "/Help",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "Allocations",
  //   path: "/allocations",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "WebCamera",
  //   path: "/webCamera",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "WebcamImage",
  //   path: "/webcamImage",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "WebcamVideo",
  //   path: "/WebcamVideo",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "Chat",
  //   path: "/chat",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "Chat Contact List",
  //   path: "/chatContactList",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "Conversation Component",
  //   path: "/conversationComponent",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "Test Web camera",
  //   path: "/testWebCamera",
  //   icon: IconPPDel,
  // },

  // {
  //   title: "Invite Sent",
  //   path: "/inviteSent",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "Admin Request",
  //   path: "/adminRequest",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "Invite Received",
  //   path: "/inviteReceived",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "Patient Personal Page 1",
  //   path: "/patientPersonalDetailsForm_1",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "Patient Personal Page 2",
  //   path: "/patientPersonalDetailsForm_2",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "Patient Personal Page 3",
  //   path: "/patientPersonalDetailsForm_3",
  //   icon: IconPPDel,
  // },
  // {
  //   title: "Add Loved Ones",
  //   path: "/addLovedOnes_2",
  //   icon: IconCRALovedOne,
  //  }, 
  // {
  //   title: "Care Manager Welcome",
  //   path: "/careManagerWelcome",
  //   icon: IconCRALovedOne,
  //  }, 
  // {
  //   title: "LovedOneWelcome",
  //   path: "/lovedOneWelcome",
  //   icon: IconCRALovedOne,
  //  }, 
  // {
  //   title: "FamilyMemberWelcome",
  //   path: "/familyMemberWelcome",
  //   icon: IconCRALovedOne,
  //  }, 
  // {
  //   title: "LocalCareGiverWelcome",
  //   path: "/localCareGiverWelcome",
  //   icon: IconCRALovedOne,
  //  }, 
  // {
  //   title: "ConnectDevice",
  //   path: "/connectDeviceWelcome",
  //   icon: IconCRALovedOne,
  //  }, 
  // {
  //   title: "Health Insurance",
  //   path: "/healthInsurance",
  //   icon: IconCRALovedOne,
  //  },

  //   subNav: [

  //  {
  //   title: "Emergency",
  //   path: "/kindEmergency",
  //   icon: IconEmergency,
  //  }, 
  //  {
  //   title: "Type of Accident",
  //   path: "/typeAccident",
  //   icon: IconAccident,
  //  },
  //  {
  //   title: "Pain",
  //   path: "/locationPain",
  //   icon: IconLocationPain,
  //  },  
  // {
  //   title: "Severity of Pain",
  //   path: "/severityPain",
  //   icon: IconCRALovedOne,
  //  }, 

  // ]

  // {
  //   title: "Check-In",
  //   icon: IconCheckIn,
  //   path: "/dailyCheckIn",
  // },
  // {
  //   title: "Emergency Consent",
  //   icon: IconCheckIn,
  //   path: "/emergencyConsent",
  // },
  //   {
  //     title: "Set Medications",
  //     icon: IconAcn,
  //     path: "/heartMedications_1",
  //     iconClosed: <RiIcons.RiArrowDownSFill />,
  //     iconOpened: <RiIcons.RiArrowUpSFill />,
  //     subNav: [
  //   {
  //     title: " Heart Medications",
  //     path: "/heartMedications_1",
  //     icon: IconCRALovedOne,
  //    }, 
  //   {
  //     title: " Diabetes Medications",
  //     path: "/diabetesMedications_1",
  //     icon: IconCRALovedOne,
  //    }, 

  //   {
  //     title: "Blood Pressure Medications",
  //     path: "/bloodPressureMedications_1",
  //     icon: IconCRALovedOne,
  //    }, 
  //   {
  //     title: "Arthritis Medications",
  //     path: "/arthritisMedications_1",
  //     icon: IconCRALovedOne,
  //    }, 
  //   {
  //     title: "Lung Medications",
  //     path: "/lungMedications_1",
  //     icon: IconCRALovedOne,
  //    }, 

  //   ]
  // }

  // {
  //   title: "Any Other Details",
  //   icon: IconCheckIn,
  //   path: "/anyOtherDetails",
  // },
  // {
  //   title: "Alertness Check",
  //   icon: IconCheckIn,
  //   path: "/alertnessCheck",
  // },
  // {
  //   title: "Verbal Responsiveness",
  //   icon: IconCheckIn,
  //   path: "/verbalResponsiveness",
  // },
  // {
  //   title: "Pain Check",
  //   icon: IconCheckIn,
  //   path: "/painCheck",
  // },

  // {
  //   title: "Emergency Guidance Test",
  //   icon: IconCheckIn,
  //   path: "/emergencyGuidanceTest",
  // },
  // {
  //   title: "Emergency Guidance 2",
  //   icon: IconCheckIn,
  //   path: "/emergencyGuidanceHealthStatus1",
  // },
  // {
  //   title: "Emergency Guidance 3",
  //   icon: IconCheckIn,
  //   path: "/emergencyGuidanceHealthStatus2",
  // },
  //   {
  //   title: "Emergency Guidance 4",
  //   icon: IconCheckIn,
  //   path: "/emergencyGuidanceHealthStatus3",
  // },

  // {
  //   title: "Add Providers",
  //   icon: IconCheckIn,
  //   path: "/addProviders",
  // },
  // {
  //   title: "Video Audio Recorder",
  //   icon: IconCheckIn,
  //   path: "/videoAudioRecorder",
  // },
  // {
  //   title: "Blob Storage",
  //   icon: IconCheckIn,
  //   path: "/blobStorage",
  // },
  // {
  //   title: "Family Member Access",
  //   icon: IconCheckIn,
  //   path: "/familyMemberAccess",
  // },
  // {
  //   title: "Friends Access",
  //   icon: IconCheckIn,
  //   path: "/friendsAccess",
  // },
  // {
  //   title: "Care Module Summary",
  //   icon: IconCheckIn,
  //   path: "/careManagerModuleSummary",
  // },
  // {
  //   title: "Family Module Summary",
  //   icon: IconCheckIn,
  //   path: "/familyMembersModuleSummary",
  // },
  // {
  //   title: "Friend Module Summary",
  //   icon: IconCheckIn,
  //   path: "/friendsModuleSummary",
  // },

  // {
  //   title: "New Module Summary",
  //   icon: IconEmergency,
  //   path: "/moduleSummaryNew",
  // },
  // {
  //   title: "Care Ring Seek Help",
  //   icon: IconEmergency,
  //   path: "/CareRingSeekHelp",
  // },
  //  {
  //   title: "Emergency",
  //   // path: "/kindEmergency",
  //   path: "/emergencyResponseAndPain",
  //   icon: IconEmergency,
  //  },
  //  {
  //   title: "Tiredness",
  //   // path: "/kindEmergency",
  //   path: "/tiredness",
  //   icon: IconEmergency,
  //  },
  // {
  //   title: "Training Screen",
  //   path: "/trainingScreen_1",
  //   icon: IconEmergency,
  // },

  {
    title: "System Admin ",
    path: "/carePlanGeneration",
    icon: IconComingSoon,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "UX Designer",
        path: "/carePlanGeneration",
        icon: IconProfessionals,
      },
      {
        title: "User Journey Self",
        path: "/userJourneySelf",
        icon: IconEmergency,
      }
    ]
  },
  {
    title: "Partners (Coming Soon)",
    path: "/eCommerce",
    icon: IconComingSoon,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Hire Professionals",
        path: "/comingsoon",
        icon: IconProfessionals,
      },
      {
        title: "Buy Products",
        path: "/productList",
        icon: IconDeviceInte,
      },
      // {
      //   title: "Buy Supplies",
      //   path: "/comingsoon",
      //   icon: IconDeviceInte,
      // },
      // {
      //   title: "Subscribe",
      //   path: "/comingsoon",
      //   icon: IconCheckIn,
      // }
    ],
  },
  // {
  //   title: "Hydration",
  //   path: "/hydration",
  //   icon: IconEmergency,
  // },
  // {
  //   title: "Medications",
  //   path: "/medications",
  //   icon: IconEmergency,
  // },
  // {
  //   title: "Nutrition",
  //   path: "/nutrition",
  //   icon: IconEmergency,
  // },
  // {
  //   title: "Drag and Drop",
  //   path: "/dnD",
  //   icon: IconEmergency,
  // },
  //  {
  //   title: "Training Screen 2",
  //   path: "/trainingScreen_2",
  //   icon: IconEmergency,
  //  },
  //  {
  //   title: "Training Screen 3",
  //   path: "/trainingScreen_3",
  //   icon: IconEmergency,
  //  },

  // {
  //   title: "Institution Connect",
  //   path: "/institutionConnect",
  //   icon: IconAcn,
  // },
  // {
  //   title: "Login With OTP",
  //   path: "/NewUserLoginWithOTP",
  //   icon: IconAcn,
  // },
  //   {
  //   title: "Invite Received",
  //   path: "/inviteReceived",
  //   icon: IconPPDel,
  // },
  {
    title: "Care Concierge",
    path: "/careConcierge",
    icon: IconPPDel,
  },
  //   {
  //   title: "Care Giver Form",
  //   path: "/careGiverForm",
  //   icon: IconPPDel,
  // },
  // {
  //   title: 'Test Data',
  //   path: '/testData',
  //   icon: IconPPDel,
  // },
  // {
  //   title: 'Doctor Dashboard',
  //   path: '/consultation',
  //   icon: IconPPDel,
  // }
  {
    title: 'Transalate Consult',
    path: '/transalateConsult',
    icon: IconPPDel,
  },
  {
    title: 'Voice Chat Doctor',
    path: '/voiceChat',
    icon: IconPPDel,
  },
  {
    title: 'Voice Chat Patient',
    path: '/voiceChatPatient',
    icon: IconPPDel,
  }



];
