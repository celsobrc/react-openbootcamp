import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToTasks = () => {
    navigate("/tasks");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <button onClick={navigateToTasks}>Tasks</button>
        <button onClick={navigateToLogin}>Login</button>
      </div>
    </div>
  );
};

export default HomePage;
