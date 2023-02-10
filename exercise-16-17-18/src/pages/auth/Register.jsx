import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>Register</h1>
      <div>
        <button onClick={navigateToLogin}>Login</button>
      </div>
    </div>
  );
};

export default Register;
