import React, { useState } from 'react';

function UploadReports() {

  const [ file, setFile ] = useState(null)
  const [ fileName, setFileName ] = useState(null)

  const fileToBase64 = (file, cb) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(null, reader.result)
    }
    reader.onerror = function (error) {
      cb(error, null)
    }
  }

  const onUploadFileChange = ({ target }) => {
    if (target.files < 1 || !target.validity.valid) {
      return
    }
    fileToBase64(target.files[0], (err, result) => {
      if (result) {
        setFile(result)
        setFileName(target.files[0])
      }
    })
  }

  return (
    <div className="App">
      <div className="upload-area">
        { fileName && <p className="filename">{fileName.name}</p> }
        <input type="file" name="filetobase64" onChange={onUploadFileChange} accept="application/pdf" />
      </div>
      <br/>
      {file ? <textarea id="base64File" rows="30" cols="150" value={file} readOnly></textarea> : null }
    </div>
  );
}

export default UploadReports;