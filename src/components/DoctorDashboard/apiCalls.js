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
        return data.claimsdocument;
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
        return data.medicaldocument;
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
        return data.specialistdocument;
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
        return data.pathologyletter;
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
        return data.alliedhealth;
    } catch (err) {
        console.log(err);
    }
};

//patientInstructions function is used to call the API to get the patient instructions
const patientInstructions = async (conversation) => {
    try {
        const response = await fetch('https://patientinstructions.azurewebsites.net/patientinstructions', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "conversation": conversation,
            })
        });
        const data = await response.json();
        return data.summary;
    } catch (err) {
        console.log(err);
    }
};

//soap note concise function is used to call the API to get the soap note concise
const soapNoteConcise = async (conversation) => {
    try {
        const response = await fetch('https://doctorsoapconcise.azurewebsites.net/summarise', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                "conversation": conversation,
            })
        });
        const data = await response.json();
        return data.summary;
    } catch (err) {
        console.log(err);
    }
};


export {
    claimsDocument,
    medicalDocument,
    specialistDocument,
    pathlogyLetter,
    alliedHealth,
    patientInstructions,
    soapNoteConcise
};