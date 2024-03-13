import React, { useState } from "react";
// import {browserHistory} from 'react-router'
import { NavLink } from 'react-router-dom';
function LoginForm({ geLoginDetails, error}) {
  const [details, setDetails] = useState({ email: "", password: "" });

  return (
      <div className="form-inner">
        {(error !== "") ? (<div className="error">{error} : ""</div>): ""}
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
        <NavLink to='/virtualround'><button type='button' className="login-button" onClick={(e)=>geLoginDetails(details)}>Login</button></NavLink>
      </div>
  );
}

export default LoginForm;

