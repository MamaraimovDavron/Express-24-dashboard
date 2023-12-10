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
`;

export default function Qoshish() {
  const [state, setState] = useState(false);

  return (
    <DashboardTemplate>
      <h1>Qo'shish</h1>
      <p>Yangi kategoriya/taom qo'shish</p>

      <BtnGroup>
        <button
          className="btn btn-warning fw-bold pe-4"
          onClick={() => {
            setState(!state);
          }}
        >
          Kategoriya
        </button>
        <button className="btn btn-warning fw-bold pe-4">Taom</button>
      </BtnGroup>
      {state ? <Kategoriya /> : ""}
    </DashboardTemplate>
  );
}
