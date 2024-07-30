const headers = { 'Content-Type': 'application/json' };
//clainsDocument function is used to call the API to get the claims document
const claimsDocument = async (conversation) => {
    try {
        const response = await fetch('https://medicaldocumentcreation.azurewebsites.net/claimsDocument', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "conversation": conversation,
            })
        });
        const data = await response.json();
        return data.conversation;
    } catch (err) {
        console.log(err);
    }
};

//medicalDocument function is used to call the API to get the medical document
const medicalDocument = async (conversation) => {
    try {
        const response = await fetch('https://medicaldocumentcreation.azurewebsites.net/medicalDocument', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "conversation": conversation,
            })
        });
        const data = await response.json();
        return data.conversation;
    } catch (err) {
        console.log(err);
    }
};

//specialistDocument function is used to call the API to get the specialist document
const specialistDocument = async (conversation) => {
    try {
        const response = await fetch('https://medicaldocumentcreation.azurewebsites.net/specialistDocument', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "conversation": conversation,
            })
        });
        const data = await response.json();
        return data.conversation;
    } catch (err) {
        console.log(err);
    }
};
//pathlogyLetter function is used to call the API to get the pathology letter
const pathlogyLetter = async (conversation) => {
    try {
        const response = await fetch('https://medicaldocumentcreation.azurewebsites.net/pathlogyLetter', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "conversation": conversation,
            })
        });
        const data = await response.json();
        return data.conversation;
    } catch (err) {
        console.log(err);
    }
};
//alliedHealth function is used to call the API to get the allied health document
const alliedHealth = async (conversation) => {
    try {
        const response = await fetch('https://medicaldocumentcreation.azurewebsites.net/alliedHealth', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "conversation": conversation,
            })
        });
        const data = await response.json();
        return data.conversation;
    } catch (err) {
        console.log(err);
    }
};

//patientInstructions function is used to call the API to get the patient instructions
const patientInstructions = async (formData) => {
    try {
        const response = await fetch('https://patientinstructionsconcise.azurewebsites.net/patientinstructionsconcise', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "language": formData.get('language'),
                "agegroup": formData.get('ageGroup'),
                "medicalliteracylevel": formData.get('medicalLiteracy'),
                "length": formData.get('length'),
                "conversation": formData.get('conversation'),
            })
        });
        const data = await response.json();
        return data.conversation;
    } catch (err) {
        console.log(err);
    }
};

//soap note concise function is used to call the API to get the soap note concise
const soapNoteConcise = async (conversation) => {
    try {
        const response = await fetch('https://soapnotesconcise.azurewebsites.net/summariseconcise', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "conversation": conversation,
            })
        });
        const data = await response.json();
        return data.conversation;
    } catch (err) {
        console.log(err);
    }
};

//soap note concise function is used to call the API to get the soap note concise
const soapNoteDetailed = async (conversation) => {
    try {
        const response = await fetch('https://soapnotesdetailed.azurewebsites.net/summarisedetailed', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "conversation": conversation,
            })
        });
        const data = await response.json();
        return data.conversation;
    } catch (err) {
        console.log(err);
    }
};

//Summary of Patient and Family History
const patientHistory = async () => {
    try {
        const response = await fetch('https://patienthistoryrag.azurewebsites.net/rag', {
            method: 'GET',
            headers: headers,
        })
        // const data = await response.json();
        return response;
    } catch (err) {
        console.log(err);
    }
};

// Cliams function is used to call the API to get the Claims
const getClaimDetails = async (conversation) => {
    try {
        const response = await fetch('https://medicalcodesforaustralia.azurewebsites.net/australianmedicarecodes', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "conversation": conversation,
                // "claimsData": claimsData
            })
        });
        const data = await response.json();
        console.log("Claims data", data);
        return data;
    } catch (err) {
        console.log(err);
    }
};

// const getClaimDetails = async (conversation) => {
//     const sampleData = `### SOAP Note for Mr. Samir

// #### Subjective:
// - **Current Symptoms:**
//   - Frequent urination (every two hours during the day, more at night)
//   - Incomplete bladder emptying
//   - Urgency to urinate
//   - Dry mouth

// - **Medical History:**
//   - No recent illnesses
//   - No changes in medications
//   - Stress at work

// - **Family History:**
//   - Family history of kidney problems (father's side)

// - **Social History:**
//   - Not explicitly mentioned (assumed non-smoker and social drinker based on lack of contrary information)

// #### Objective:
// - **Vital Signs:**
//   - Blood pressure: 140/90 mmHg (elevated)
//   - Pulse: 82 bpm (regular)
//   - Temperature: Normal

// - **Physical Exam Findings:**
//   - Abdominal examination: No tenderness or unusual masses

// - **Diagnostic Tests:**
//   - Recommended: Urine test and Prostate-Specific Antigen (PSA) test (results pending)

// #### Assessment:
// - **Preliminary Diagnosis:**
//   - Benign Prostatic Hyperplasia (BPH)

// - **Reasoning:**
//   - Symptoms of frequent urination, urgency, and incomplete bladder emptying are consistent with BPH.
//   - Family history of kidney problems and elevated blood pressure may contribute to the condition.

// #### Plan:
// - **Further Tests:**
//   - Urine test to check for infection or other abnormalities
//   - Prostate-Specific Antigen (PSA) test to assess prostate health

// - **Medications/Treatments:**
//   - Initial recommendation: Lifestyle changes (reduce caffeine and alcohol intake, schedule bathroom visits, pelvic floor exercises)
//   - Potential future treatments: Medications to relax or shrink the prostate, surgical options if necessary

// - **Patient Instructions:**
//   - Follow lifestyle recommendations
//   - Schedule follow-up appointment in two weeks
//   - Contact the clinic if symptoms worsen or new symptoms arise

// #### References:
// - **Evidence-Based Medical Research:**
//   - McVary, K. T., Roehrborn, C. G., Avins, A. L., Barry, M. J., Bruskewitz, R. C., Donnell, R. F., ... & Wei, J. T. (2011). American Urological Association Guideline: Management of Benign Prostatic Hyperplasia (BPH). The Journal of Urology, 185(5), 1793-1803.
//   - Roehrborn, C. G. (2008). Benign prostatic hyperplasia: an overview. Reviews in Urology, 10(Suppl 1), S3.

// ### Validation:
// - **First Check:**
//   - The summary accurately reflects the facts presented in the consultation, including symptoms, medical history, family history, and the preliminary diagnosis of BPH.

// - **Second Check:**
//   - The plan includes appropriate recommendations for further tests and initial lifestyle changes, consistent with the consultation details.

// This SOAP note provides a comprehensive view of Mr. Samir's health based on the latest consultation and available information.`;

    
//     try {
//         const response = await fetch('https://medicalcodesforaustralia.azurewebsites.net/australianmedicarecodes', {
//             method: 'POST',
//             headers: headers,
//             body: JSON.stringify({
//                 "conversation": sampleData,
//             })
//         });
//         const data = await response.json();
//         console.log("Claims data", data);

     

//         return combinedData;
//     } catch (err) {
//         console.log(err);
//     }
// };

export {
    claimsDocument,
    medicalDocument,
    specialistDocument,
    pathlogyLetter,
    alliedHealth,
    patientInstructions,
    soapNoteConcise,
    patientHistory,
    soapNoteDetailed,
    getClaimDetails
};
