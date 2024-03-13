import React, { useState } from "react";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };
  return (
    <form onSubmit={submitHandler} style={{ alignItems: "center" }}>
      <div className="form-inner">
        <h2>Login</h2>
        {(error != "") ? (<div className="error">{error} : ""</div>): ""}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">PASSWORD:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setDetails({ ...details, password: e.target.value })}
            value={details.password}
          />
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
