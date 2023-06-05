// import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard";
import Guard from "./components/Guard";
import Frequent from "./pages/Frequent";
import Content from "./components/Dashboard/Content";
import Detail from "./components/Detail";

const App = () => {
  return (
    <>
      <Routes>
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
        <Route path="/contact" element={<Content />} />
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </>
  );
};

export default App;
