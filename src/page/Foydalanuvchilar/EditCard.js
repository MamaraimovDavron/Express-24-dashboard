import React, { useState } from "react";
import styled from "styled-components";

const Edit = styled.div`
  width: 600px;
  height: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: space-around;
  margin: 400px auto;
  position: absolute;
  top: -200px;
  left: 600px;
  background-color: white;
  padding: 20px;
  h4 {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: 600;
  }

  select {
    width: 80%;
    border: none;
    border-radius: 10px;
    padding: 8px 16px;
    border: 1px solid #919699;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: 600;
    outline: none;
  }

  .btns {
    display: flex;
    gap: 10px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;

    button {
      font-weight: 600;
      padding: 8px 40px;
    }
  }
`;

export default function EditCard() {
  const [display, setDisplay] = useState(1);

  return (
    <Edit style={{ opacity: display }}>
      <h4>Foydalanuvchilar uchun rol tanlang</h4>
      <select name="rols" id="rol">
        <option value="admin">Admin</option>
        <option value="foydalanuvchi">Foydalanuvchi</option>
        <option value="yetkazuvchi">Yetkazuvchi</option>
      </select>
      <div className="btns">
        <button
          className="btn btn-danger"
          onClick={() => {
            setDisplay(0);
          }}
        >
          Bekor qilish
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            setDisplay(0);
          }}
        >
          Saqlash
        </button>
      </div>
    </Edit>
  );
}
