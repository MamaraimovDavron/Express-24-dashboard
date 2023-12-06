import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import Express24 from "../img/image 15 (1).png";
import Arizalar from "./Arizalar";
import Header from "./Header";

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
    /* align-items: flex-start; */
    gap: 30px;
    padding: 20px;
    .links {
      /* border: 1px solid red; */
      padding: 20px;
      border-radius: 10px;
      background-color: rgba(255, 220, 3, 0.65);
      color: black;
      font-size: 20px;
      text-decoration: none;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      transition: 0.5s;
      &:hover {
        background-color: rgba(155, 220, 3, 0.65);
      }
    }
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
      /* background-color: red; */
      color: black;
      /* border: 1px solid green; */
    }

    main {
      height: calc(100% - 8vh);
      /* border: 1px solid red; */
      /* background-color: green; */
      color: black;
    }
  }
`;

export default function DashboardWrapper() {
  return (
    <DashboardBox>
      <aside className="m-2">
        <img src={Express24} alt="" />
        <Link to={"/arizalar"} className="links">
          Arizalar
        </Link>
        <Link to={"/yetkazilgan"} className="links">
          Yetkazilgan
        </Link>
        <Link to={"/statistika"} className="links">
          Statistika
        </Link>
        <Link to={"/qo'shish"} className="links">
          Qo'shish
        </Link>
        <Link to={"/foydalanuvchilar"} className="links">
          Foydalanuvchilar
        </Link>
      </aside>

      <div className="rightside">
        <header className="m-2 shadow">
          <Header />
        </header>
        <main className="m-2">
          <Arizalar />
        </main>
      </div>
    </DashboardBox>
  );
}
