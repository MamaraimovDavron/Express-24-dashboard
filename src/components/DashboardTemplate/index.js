import React from "react";
import { Link } from "react-router-dom";
import Express24 from "../../img/image 15 (1).png";
import DashboardTemplateWrapper from "./DashboardTemplateWrapper";
import data from "../../page/Data/data";
import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

export default function DashboardTemplate({ children }) {
  const navigate = useNavigate();

  const menuData = [
    "/arizalar",
    "/arizalar/yetkazilgan",
    "/arizalar/statistika",
    "/arizalar/qoshish",
    "/arizalar/foydalanuvchilar",
  ];

  const [display, setDisplay] = useState(true);
  const [active, setActive] = useState(false);

  return (
    <DashboardTemplateWrapper>
      <aside className={`${display ? "d-none" : "d-block"} shadow`}>
        <img src={Express24} alt="" />

        <ul>
          {data.map((value, index) => {
            const item = menuData[index];
            return (
              <li
                key={index}
                className={`${active} ? "" : "active"`}
                onClick={() => {
                  setActive(!active);
                }}
              >
                <NavLink className="link " to={`${item}`}>
                  <span className="first">
                    <img src={value.img} alt="" />
                  </span>
                  <span className="second">
                    <h4>{value.title}</h4>
                    <h5>{value.text}</h5>
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>

      <div className="rightside">
        <header className="shadow m-1 p-3">
          <div className="menuIcon">
            <Link
              className="listIcon"
              onClick={() => {
                setDisplay(!display);
              }}
            >
              <i class="bi bi-list"></i>
            </Link>
          </div>
          <div className="userIcon">
            <button
              className="logout"
              onClick={() => {
                navigate("/");
              }}
            >
              Logout
            </button>
            <Link className="user">
              <i class="bi bi-person-circle"></i>
            </Link>
            <h5>Davron</h5>
          </div>
        </header>
        <main className="m-1 p-3">{children}</main>
      </div>
    </DashboardTemplateWrapper>
  );
}
