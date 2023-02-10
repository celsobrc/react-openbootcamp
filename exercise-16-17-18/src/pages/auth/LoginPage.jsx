import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ loggin }) => {
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register");
  };
  return (
    <div>
      <h1>Login</h1>
      <div>
        <button onClick={navigateToRegister}>Register</button>
        <button onClick={() => loggin()}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
