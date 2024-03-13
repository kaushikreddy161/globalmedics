import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import { App, Credentials, BSON } from "realm-web";
import { APP_ID } from "../realm/constants";
import Form from "react-bootstrap/Form";

// Creating a Realm App Instance
const app = new App(APP_ID);

const ConfirmEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // As explained in the Login page.
  const { emailPasswordSignup } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // As explained in the Login page.
  // const onFormInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setForm({ ...form, [name]: value });
  // };

  // As explained in the Login page.
  // const redirectNow = () => {
  //   const redirectTo = location.search.replace("?redirectTo=", "");
  //   navigate(redirectTo ? redirectTo : "/");
  // };

  // As explained in the Login page.

  // const onSubmit = async () => {
  //   if (form.password === form.cpassword) {
  //     try {
  //       const user = await emailPasswordSignup(form.email, form.password);
  //       if (user) {
  //         const credentials = Credentials.emailPassword(
  //           form.email,
  //           form.password
  //         );
  //         const authedUser = await app.logIn(credentials);

  //         let dt = new Date();
  //         let id = BSON.ObjectID(user.id);
  //         const create = authedUser.functions.createPatient(
  //           id,
  //           form.email,
  //           form.password,
  //           dt,
  //           "active",
  //           "GlobalMedics2021"
  //         );
  //         //console.log('create:', create);
  //         create.then((resp) => {
  //           //  console.log("resp:", resp);
  //           alert("Registration Done Successfully");
  //         });
  //         redirectNow();
  //       }
  //     } catch (error) {
  //       //alert(error);
  //       console.log("Error:", error);
  //     }
  //   } else {
  //     alert("The passwords do not match. Please try again!");
  //   }
  // };

  return (
    <div style={{ background: "#EBEBEB", height: "100vh" }}>
    <div style={{ paddingTop: "1.5rem" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "350px",
          margin: "auto",
          // backgroundColor: "#F2F8F1",
          backgroundColor: "#ffffff",
          paddingLeft: "10pt",
          paddingRight: "10pt",
          borderRadius: "10pt",
          // marginTop: "20pt",
          minHeight: "400px",
        }}
      >
      <div style={{textAlign:"center",marginTop:"3rem",marginBottom:"2rem"}}> 
          <img
            src={require("../assets/logo.png")}
            className="img-fluid"
            style={{ width: "50%" }}
          />
        <h1
          style={{
            fontSize: "2rem",
            textAlign: "center",
            color: "#209F85",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >GlobalMedics.Ai</h1>
        <p style={{fontSize:"1rem",color: "#209F85"}}>Email Verified.</p>
        <p style={{fontSize:"1rem",color: "#209F85"}}><Link to="/">Please CLICK HERE</Link></p>
        <p style={{fontSize:"1rem",color: "#209F85"}}>to continue</p>
    </div>
      </form>
    </div>
    </div>
  );
};

export default ConfirmEmail;
