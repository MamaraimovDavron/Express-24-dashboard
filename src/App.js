import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardTemplate from "./components/DashboardTemplate";
import Arizalar from "./page/Arizalar/Arizalar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Yetkazilgan from "./page/Yetkazilgan/Yetkazilgan";
import Statistika from "./page/Statistika/Statistika";
import Qoshish from "./page/Qo'shish/Qoshish";
import Foydalanuvchilar from "./page/Foydalanuvchilar/Foydalanuvchilar";
import Kirish from "./page/Kirish/Kirish";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Kirish />}></Route>
          <Route path="/dashboard" element={<DashboardTemplate />}></Route>
          <Route path="/arizalar" element={<Arizalar />}></Route>
          <Route path="/arizalar/yetkazilgan" element={<Yetkazilgan />}></Route>
          <Route path="/arizalar/statistika" element={<Statistika />}></Route>
          <Route path="/arizalar/qoshish" element={<Qoshish />}></Route>
          <Route
            path="/arizalar/foydalanuvchilar"
            element={<Foydalanuvchilar />}
          ></Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
