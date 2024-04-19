import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../contexts/user.context";
import Card from "react-bootstrap/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import OtpInput from 'react-otp-input';

function CareRingOTPConfirmation() {
  const { user } = useContext(UserContext);

  const [otp, setOtp] = useState('');
  const [verificationResult, setVerificationResult] = useState('');

  const handleOTPChange = (otp) => {
    setOtp(otp);
  };

  const [lOTP, setLOTP] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const allOTPS = await user.functions.getInvitationOTP();
        console.log(allOTPS);
        setLOTP(allOTPS);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const verifyOTP = async (event) => {
    event.preventDefault();
    if (user) {
      validateUserOTP();
    }
  };
  // const validateUserOTP = () => {
  //   if (otp === '123456') {
  //     setVerificationResult('OTP is valid!');

  //   } else {
  //     setVerificationResult('Invalid OTP. Please try again.');
  //   }
  // };

  const validateUserOTP = () => {
    let isValidOTP = false;
    lOTP.forEach((loginOTP) => {
      if (otp === loginOTP.refOTP) {
        isValidOTP = true;
      }
    });
  
    if (isValidOTP) {
      setVerificationResult('OTP is valid!');
    } else {
      setVerificationResult('Invalid OTP. Please try again.');
    }
  };


  // function validateUserOTP() {
  //   if (otp === lOTP.refOTP) {
  //     setVerificationResult('OTP is valid!');
  //   } else {
  //     setVerificationResult('Invalid OTP. Please try again.');
  //   }
  // }



  // const validateUserOTP = () => {
  //   if (otp === "123456" ) {
  //     setVerificationResult('OTP is valid!');
  //   } else {
  //     setVerificationResult('Invalid OTP. Please try again.');
  //   }
  // };

  return (
    <Container style={{ background: "#EBEBEB", maxWidth: "100%" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh", paddingBottom: "0rem" }}
      >
        <div style={{ paddingTop: "1rem" }}>
          <Card className="otp-card">
            <div className="otp-img">
              <img
                src={require("../assets/logo.png")}
                className="img-fluid"
                style={{ width: "10%" }}
                alt="Logo"
              />
            </div>
            <Card.Body>
              <Card.Title className="otp-title">
                OTP Confirmation
              </Card.Title>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "2rem",
                  marginBottom: "2rem",
                }}
              >
                <img
                  src={require("../assets/icon-otp-validation.png")}
                  className="img-fluid"
                  style={{ width: "30%" }}
                  alt="OTP validation icon"
                />
              </div>
              <div className="div-otp">
                <OtpInput
                  value={otp}
                  onChange={handleOTPChange}
                  numInputs={6}
                  renderSeparator={<span className="otp-dash">-</span>}
                  renderInput={(props) => <input {...props} className="otp-cell" />}
                />
              </div>
              <p className="otp-text1">Enter the One Time Password (OTP) received with invitation message</p>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "3rem",
                  marginBottom: "0.5rem",
                }}
              >
                <Button className="btn-confirm" onClick={verifyOTP}>Verify OTP</Button>
                {verificationResult && <p>{verificationResult}</p>}
              </div>
              <div style={{ height: "30px" }}></div>
            </Card.Body>
          </Card>

          {lOTP.map((loginOTP, i) => (
            <div key={i}>{loginOTP.refOTP}</div>
          ))}

        </div>
      </Grid>
    </Container>
  );
}

export default CareRingOTPConfirmation;
