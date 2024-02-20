import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes></Routes>
    </div>
  );
}

export default App;
