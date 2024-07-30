// const fs = require("fs");
import * as sdk from "microsoft-cognitiveservices-speech-sdk";
let transcription = ""; // Variable to store the transcription

const SPEECH_KEY = '5d626518fc8a44d59f923889fe4b81b5'
const SPEECH_REGION = 'australiaeast'


const StartTranscribe = (dataStream, language) => {
    const speechConfig = sdk.SpeechConfig.fromSubscription(SPEECH_KEY, SPEECH_REGION);
    if (!language) {
        language = 'en-US';
    }
    speechConfig.speechRecognitionLanguage = language;
    let dictionary = {};
    // let audioConfig = sdk.AudioConfig.fromWavFileInput(fs.readFileSync(filename));
    const audioConfig = sdk.AudioConfig.fromStreamInput(dataStream);
    const conversationTranscriber = new sdk.ConversationTranscriber(speechConfig, audioConfig);



    console.log("Transcribing: ");

    conversationTranscriber.sessionStarted = function (s, e) {
        console.log("SessionStarted event");
        console.log("SessionId:" + e.sessionId);
    };
    conversationTranscriber.sessionStopped = function (s, e) {
        console.log("SessionStopped event");
        console.log("SessionId:" + e.sessionId);
        conversationTranscriber.stopTranscribingAsync();
    };
    conversationTranscriber.canceled = function (s, e) {
        console.log("Canceled event");
        console.log(e.errorDetails);
        conversationTranscriber.stopTranscribingAsync();
        dictionary['transcription'] = transcription;
        console.log(dictionary.transcription);
    };
    // conversationTranscriber.transcribed = (s, e) => {
    //     if (e.result.text !== undefined) {
    //         transcription += e.result.text + "\n";
    //     }
    //     // console.log("TRANSCRIBED: Text=" + e.result.text + " Speaker ID=" + e.result.speakerId);
    //     // console.log("TRANSCRIBED: Text=" + transcription);
    // };

    // Start conversation transcription
    conversationTranscriber.startTranscribingAsync((s, e) => {
        if (e.errorDetails) {
            console.log(e.errorDetails);
        }
    });
    return conversationTranscriber;

}

const StopTranscribe = (conversationTranscriber) => {
    // console.log(conversationTranscriber);
    //stop conversation transcription
    conversationTranscriber.stopTranscribingAsync((s, e) => {
        console.log("Transcription stopped.");
        if (e.errorDetails) {
            console.trace("err - stopping transcription: " + e.errorDetails);
        }
    });

}

export { StartTranscribe, StopTranscribe };

