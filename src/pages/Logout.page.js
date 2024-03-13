import { Button, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";
import Box from "@mui/material/Box";

const Logout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // We are consuming our user-management context to
  // get & set the user details here
  const { user, logOutUser } = useContext(UserContext);

  // We are using React's "useState" hook to keep track
  //  of the form values.
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // This function will redirect the user to the
  const loadUser = async () => {
      const logOutUser = await logOutUser();
      navigate("/login");
     };
  
  // This useEffect will run only once when the component is mounted.
  // Hence this is helping us in verifying whether the user is already logged in
  // or not.
  useEffect(() => {
    loadUser();    
  }, []);

  return (
    <>
      <div>
          <h1 style={{ textAlign: "center", color: "#209F85" }}>Succesfully Logged Out</h1>
         
      </div>
    </>
  );
};

export default Login;
