import React from "react";
//import LoginForm from "../Login/Login";
import LoginPage from "../Login/LoginPage";
//import { browserHistory } from "react-router";
function Login2(props) {
  const geLoginDetails = (details) => {
    props.setCredentials(details);
    const doctorData = props.user.find((d) =>
      d.emailAddress.includes(details.email)
    );
    //console.log("doctorData", doctorData);
    props.setLoginDoctor(doctorData);
    if (
      props.user.find((d) => d.emailAddress === details.email) &&
      props.user.find((d) => d.password === details.password)
    ) {
      props.disableLoginPage();
      props.history.push("/virtualround");
    } else {
      console.log("Details do not");
      props.setError("Details do not match !");
    }
  };

  return (
    <div>
      <LoginPage
        geLoginDetails={geLoginDetails}
        disableLoginPage={props.disableLoginPage}
        error={props.error}
      />
    </div>
  );
}

export default Login2;
