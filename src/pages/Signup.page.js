import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
// import { App, Credentials } from "realm-web";
// import { APP_ID } from "../realm/constants";
import Form from "react-bootstrap/Form";

// Creating a Realm App Instance
// const app = new App(APP_ID);

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState("");

 // const [hidePassword, setHidePassword] = useState(true);

  // As explained in the Login page.
  const { emailPasswordSignup } = useContext(UserContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // As explained in the Login page.
  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // As explained in the Login page.
  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/");
  };

  const onPrivacy = () => {
    const path = `/privacyPolicy`;
    navigate(path);
  };
  const onService = () => {
    const path = `/termsofService`;
    navigate(path);
  };

  // As explained in the Login page.

  const handlePassword = (passwordValue) => {
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    strengthChecks.length = passwordValue.length >= 8 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    let verifiedList = Object.values(strengthChecks).filter((value) => value);

    let strength =
      verifiedList.length === 5
        ? "Strong"
        : verifiedList.length >= 2
        ? "Medium"
        : "Weak";

    setPassword(passwordValue);
    setProgress(`${(verifiedList.length / 5) * 100}%`);
    setMessage(strength);

    console.log("verifiedList: ", `${(verifiedList.length / 5) * 100}%`);
  };

  const getActiveColor = (type) => {
    if (type === "Strong") return "#8BC926";
    if (type === "Medium") return "#FEBD01";
    return "#FF0054";
  };

  const onSubmit = async () => {
    if(form.email === "")
    {
      alert("Email Id should not be empty!");
    } else if (form.password === form.cpassword) {
      try {
        const user = await emailPasswordSignup(form.email, form.password);
        if (user) {
           redirectNow();
        }
      } catch (error) {
        alert("Email Id already exists. Please Log-In..");
        //console.log("Error:", error);
      }
    } else {
      alert("The passwords do not match. Please try again!");
    }
  };

  return (
    <div style={{ background: "#EBEBEB", height: "100vh" }}>
      <div style={{ paddingTop: "1.5rem" }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "350px",
            margin: "auto",
            backgroundColor: "#ffffff",
            paddingLeft: "10pt",
            paddingRight: "10pt",
            borderRadius: "10pt",
            // marginTop: "20pt",
            minHeight: "400px",
          }}
        >
          <h1
            style={{
              fontSize: "1rem",
              textAlign: "center",
              color: "#1D5A90",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            Please enter your email address to register
          </h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address</Form.Label> */}
            <Form.Control
              id="emailid"
              label="Email"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onInput={onFormInputChange}
              style={{
                borderRadius: "50px",
                height: "7vh",
                border: "1px solid #209F85",
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <div className="input-box">
            <Form.Control
              id="pwd"
              label="Password"
               type="password"
             // type={hidePassword ? "password" : "text"}
              name="password"
              placeholder="Password"
              value={form.password}
              onInput={onFormInputChange}
              onChange={({ target }) => {
                handlePassword(target.value);
              }}
              maxLength="15"
              style={{
                borderRadius: "50px",
                height: "7vh",
                border: "1px solid #209F85",
              }}
            />
              {/* <a
                href="#"
                className="toggle-btn"
                onClick={() => {
                  setHidePassword(!hidePassword);
                }}
              >
                <span
                  className="material-icons eye-icon"
                  style={{ color: !hidePassword ? "#FF0054" : "#c3c3c3" }}
                >
                  visibility
                </span>
              </a> */}
            </div>

          <div className="progress-bg">
              <div
                className="progress"
                style={{
                  width: progress,
                  backgroundColor: getActiveColor(message),
                }}
              ></div>
            </div>
            {password.length !== 0 ? (
            <p className="message" style={{ color: getActiveColor(message) }}>
              Your password is {message}
            </p>
          ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              id="cpwd"
              type="password"
              name="cpassword"
              placeholder="Verify Password"
              value={form.cpassword}
              onInput={onFormInputChange}
              style={{
                borderRadius: "50px",
                height: "7vh",
                border: "1px solid #209F85",
              }}
            />
          </Form.Group>
          <div class="container" style={{ marginTop: "-0.5rem" }}>
            <div class="row">
              <div
                class="col"
                style={{
                  textAlign: "left",
                  color: "#209F85",
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                }}
              >
                Already a user?{" "}
                <Link to="/" style={{ textDecoration: "none" }}>
                  Log In
                </Link>
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            style={{
              background: "#1D5A90",
              borderRadius: 50,
              marginTop: "1rem",
              textTransform: "none",
            }}
            onClick={onSubmit}
          >
            Create Account
          </Button>
          <div
            class="col"
            style={{
              color: "#1F448F",
              fontSize: "0.8rem",
              fontWeight: "bold",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={onPrivacy}
          >
            Privacy Policy
          </div>
          <div
            class="col"
            style={{
              color: "#1F448F",
              fontSize: "0.8rem",
              fontWeight: "bold",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={onService}
          >
            Terms of Service
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            <img
              src={require("../assets/logo.png")}
              className="img-fluid"
              style={{ width: "25%" }}
              alt=""
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
