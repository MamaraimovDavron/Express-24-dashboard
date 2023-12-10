import React, { useState } from "react";
import DashboardTemplate from "../../components/DashboardTemplate";
import styled from "styled-components";
import Kategoriya from "./Kategoriya";

const BtnGroup = styled.div`
  /* border: 1px solid; */
  display: flex;
  width: 30%;
  padding: 10px;
  flex-direction: row;
  gap: 10px;
  padding-bottom: 50px;

  .btn {
    /* border: 1px solid red; */
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 20px;
    font-weight: 600;
    padding: 4px 16px;
    box-shadow: 0px 2px 3px 3px #c9c9c9;
    transition: 0.5s;
    border-radius: 10px;
    &:hover {
      background-color: #ffec00;
    }
  }
`;

export default function Qoshish() {
  const [state, setState] = useState(false);

  return (
    <DashboardTemplate>
      <h1>Qo'shish</h1>
      <p>Yangi kategoriya/taom qo'shish</p>

      <BtnGroup>
        <button
          className="btn one"
          onClick={() => {
            setState(!state);
          }}
        >
          Kategoriya
        </button>
        <button className="btn second">Taom</button>
      </BtnGroup>
      {state ? <Kategoriya /> : ""}
    </DashboardTemplate>
  );
}
