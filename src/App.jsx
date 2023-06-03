// import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Auth/Register";
import Guard from "./components/Guard";
import Frequent from "./pages/Frequent";

const App = () => {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
=======
        <Route
          path="/"
          element={
            <Guard>
              <Dashboard />
            </Guard>
          }
        />
          <Route
          path="/frequent"
          element={
            <Guard>
              <Frequent />
            </Guard>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
>>>>>>> origin/master
      </Routes>
    </>
  );
};

export default App;
