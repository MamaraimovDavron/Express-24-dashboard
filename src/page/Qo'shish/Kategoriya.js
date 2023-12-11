import React from "react";
import styled from "styled-components";

const Category = styled.div`
  /* border: 1px solid red; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  input {
    border-radius: 10px;
    width: 100%;
    border: none;
    outline: none;
    border: 1px solid #c9c9c9;
    padding: 12px 20px;
    font-size: 20px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  button {
    /* border: 1px solid red; */
    border: none;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 20px;
    font-weight: 600;
    padding: 4px 40px;
    box-shadow: 0px 2px 3px 3px #c9c9c9;
    transition: 0.5s;
    border-radius: 10px;
    &:hover {
      background-color: #ffec00;
    }
  }
`;

export default function Kategoriya() {
  // const inputValue = document.querySelector("input");
  return (
    <Category>
      <input type="text" placeholder="Kategoriya nomi" />
      <button>Qo`shish</button>
    </Category>
  );
}
