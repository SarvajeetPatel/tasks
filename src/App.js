import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

export default function App() {
  const token = JSON.parse(localStorage.getItem("accessToken"));
  console.log(token);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to={"/home"} />}
        />
        <Route
          path="/home"
          element={token ? <Home /> : <Navigate to={"/login"} />}
        />
      </Routes>
    </>
  );
}
