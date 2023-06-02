// import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Auth/Register";

const App = () => {
  return (
    <>
    <h1>Update test by knkk</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      
      </Routes>
    </>
  );
};

export default App;
