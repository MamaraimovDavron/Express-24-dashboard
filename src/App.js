import React from "react";
// import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
import DashboardWrapper from "./page/DashboardWrapper";
import Products from "./page/Products";
// import Layout from "./components/Pages/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardWrapper />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
