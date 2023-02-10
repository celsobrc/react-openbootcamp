import { replace } from "formik";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import LoginPage from "./pages/auth/LoginPage";
import Register from "./pages/auth/Register";
import HomePage from "./pages/home/HomePage";
import TasksPage from "./pages/tasks/TasksPage";

function App() {
  const [logged, setLogged] = useState(false);

  function changeLogged() {
    console.log(logged)
    console.log('Boton presionado')
    setLogged(!logged);
    console.log(logged)
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage loggin={changeLogged} />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/tasks"
            element={
              logged ? <TasksPage /> : <Navigate replace to={"/login"} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
