import React, { useState } from "react";
//import { browserHistory } from "react-router";
//import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./loginpage.css";

function LoginPage({ geLoginDetails, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    // disableLoginPage();
    geLoginDetails(details);
   // console.log(details);
  };
  return (
    <>
      <div
        style={{ alignItems: "center", display: "flex" }}
        className="loginbg"
      >
        {/* <div className="emptyDiv"></div>  */}
        <div >
          <span>
            <img alt="Global Medics" src={logo} className="logoImg" />
          </span>
        </div>
        <div
          style={{
            left: "25%",
            position: "absolute",
            paddingTop: "15vh",
            paddingBottom: "20%",
            width: "70%",
            height: "90vh",
            borderRadius: "10px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div style={{ width: "60%", marginLeft: "20%" }}>
            <form onSubmit={submitHandler}>
              <div style={{ alignItems: "center" }}>
                <div className="signInText">Sign In</div>

                <div
                  className="form-group"
                  style={{
                    color: "#209F85",
                    paddingTop: "3vh",
                    paddingLeft: "3vh",
                    paddingRight: "3vh",
                  }}
                >
                  {/* <label htmlFor="email">Email:</label> */}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setDetails({ ...details, email: e.target.value })
                    }
                    value={details.email}
                    style={{
                      width: "100%",
                      borderColor: "green",
                      borderRadius: "30px",
                      height: "7vh",
                      padding: "20px",
                    }}
                  />
                </div>
                <div
                  className="form-group"
                  style={{
                    color: "#209F85",
                    paddingTop: "0.5vh",
                    paddingLeft: "3vh",
                    paddingRight: "3vh",
                  }}
                >
                  {/* <label htmlFor="password">PASSWORD:</label> */}
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setDetails({ ...details, password: e.target.value })
                    }
                    value={details.password}
                    style={{
                      width: "100%",
                      borderColor: "green",
                      borderRadius: "30px",
                      height: "7vh",
                      padding: "20px",
                    }}
                  />
                </div>
                {error !== "" ? (
                  <div style={{ color: "red", margingLeft: "40px" }}>
                    {error}
                  </div>
                ) : (
                  ""
                )}

                <div
                  style={{
                    paddingTop: "5vh",
                    paddingBottom: "5vh",
                    textAlign: "center",
                  }}
                >
                  <input
                    type="submit"
                    value="Login"
                    style={{
                      width: "150px",
                      height: "40px",
                      borderRadius: "25px",
                      backgroundColor: "#1E4890",
                      color: "#FFFFFF",
                      borderColor: "#209F85",
                    }}
                  />
                  {/* <NavLink to='/virtualround'><button type='button' onClick={submitHandler}>Login</button></NavLink> */}
                </div>

                <div
                  style={{
                    fontSize: "15px",
                    color: "#209F85",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Privacy Policy
                </div>
              </div>
            </form>
          </div>
        </div>
        <div style={{ width: "5%" }}></div>
      </div>
    </>
  );
}

export default LoginPage;
