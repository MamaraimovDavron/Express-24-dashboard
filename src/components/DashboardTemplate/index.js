import React from "react";
import { Link } from "react-router-dom";
import Express24 from "../../img/image 15 (1).png";
// import Arizalar from "../../page/Arizalar";
import DashboardTemplateWrapper from "./DashboardTemplateWrapper";
import data from "../../page/Data/data";

export default function DashboardTemplate({ children }) {
  return (
    <DashboardTemplateWrapper>
      <aside className="m-2">
        <img src={Express24} alt="" />
        <ul>
          {data.map((item, index) => {
            return (
              <li>
                <Link className="link">
                  <span className="first">
                    <img src={item.img} alt="" />
                  </span>
                  <span className="second">
                    <h4>{item.title}</h4>
                    <h5>{item.text}</h5>
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
            <Link className="listIcon">
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
