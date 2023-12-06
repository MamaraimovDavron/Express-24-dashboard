import React from "react";
// import { Link } from "react-router-dom";
import styled from "styled-components";
// import Express24 from "../img/image 15 (1).png";

const DashboardBox = styled.section`
  /* border: 1px solid; */
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fffced;
  aside {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
    padding: 20px 0px;
    /* justify-content: center; */
    ul {
      padding: 0;
      display: flex;
      border: 1px solid;
      width: 80%;
      flex-direction: column;
      gap: 20px;
      li {
        list-style: none;
        display: flex;
        flex-direction: column;
        .link {
          border: 1px solid;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }
      }
    }
  }

  .rightside {
    flex: 1;
    border: 1px solid;
    display: flex;
    flex-direction: column;
    header {
      height: 9vh;
      background-color: red;
      color: white;
      /* border: 1px solid green; */
    }

    main {
      height: calc(100% - 8vh);
      /* border: 1px solid red; */
      background-color: green;
      color: white;
    }
  }
`;

export default function DashboardWrapper() {
  return (
    <DashboardBox>
      <aside className="m-2">
        {/* <img src={Express24} alt="" />
        <ul>
          <li>
            <Link className="link">
              <span className="icon">o</span>
              <span className="text">
                <h4>Arizalar</h4>
                <h5>Yetib kelgan arizalarni kuzatishingiz mumkin</h5>
              </span>
            </Link>
          </li>
          <li>
            <Link>Yetkazilgan</Link>
          </li>
          <li>
            <Link>Statistika</Link>
          </li>
          <li>
            <Link>Qo`shish</Link>
          </li>
          <li>
            <Link>Foydalanuvchilar</Link>
          </li>
        </ul> */}
      </aside>
      <div className="rightside">
        <header className="m-2 shadow">header</header>
        <main className="m-2">main</main>
      </div>
    </DashboardBox>
  );
}
