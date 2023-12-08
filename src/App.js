import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from "./page/Arizalar";
// import DashboardTemplateWrapper from "./components/DashboardTemplate/DashboardTemplateWrapper";
import DashboardTemplate from "./components/DashboardTemplate";
import Arizalar from "./page/Arizalar/Arizalar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Yetkazilgan from "./page/Yetkazilgan/Yetkazilgan";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardTemplate />}></Route>
        <Route path="/arizalar" element={<Arizalar />}></Route>
        <Route path="/arizalar/yetkazilgan" element={<Yetkazilgan />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
