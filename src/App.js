import React from "react";
// import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./page/Dashboard";
// import DashboardWrapper from "./page/DashboardWrapper";
import DashboardTemplateWrapper from "./components/DashboardTemplate/DashboardTemplateWrapper";
import Products from "./page/Products";
// import Layout from "./components/Pages/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardTemplateWrapper />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/dashboard/products" element={<Products />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
