import React from "react";
import { Link } from "react-router-dom";
import Express24 from "../../img/image 15 (1).png";
import DashboardTemplateWrapper from "./DashboardTemplateWrapper";
import data from "../../page/Data/data";
import { useState } from "react";

export default function DashboardTemplate({ children }) {
  const menuData = [
    "/arizalar",
    "/arizalar/yetkazilgan",
    "/arizalar/statistika",
    "/arizalar/qoshish",
  ];

  const [display, setDisplay] = useState(true);

  return (
    <DashboardTemplateWrapper>
      <aside className={`${display ? "d-none" : "d-block"}`}>
        <img src={Express24} alt="" />

        <ul>
          {data.map((value, index) => {
            const item = menuData[index];
            return (
              <li>
                <Link className="link" to={`${item}`}>
                  <span className="first">
                    <img src={value.img} alt="" />
                  </span>
                  <span className="second">
                    <h4>{value.title}</h4>
                    <h5>{value.text}</h5>
                  </span>
                </Link>
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
            <Link className="user">
              <i class="bi bi-person-circle"></i>
            </Link>
            <h5>Davron</h5>
          </div>
        </header>
        <main className="shadow m-1 p-3">{children}</main>
      </div>
    </DashboardTemplateWrapper>
  );
}
