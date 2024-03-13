import CryptoJS from "react-native-crypto-js"
const key = '927a48b850c9ef32c9578bdb364f3256082da693a76b01cd49ed0f1a364dfb3f94862f59a5a3a4181886e7549e2e35cc85fbfae50d8f0d5d765b2dc598158e47'

const decryptData = (cypheredData) => {
    //return JSON.parse(CryptoJS.AES.decrypt(cypheredData, key).toString(CryptoJS.enc.Utf8))
    return CryptoJS.AES.decrypt(JSON.stringify(cypheredData), key).toString()
}

export default decryptData;

