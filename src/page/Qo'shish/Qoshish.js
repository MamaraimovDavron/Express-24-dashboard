import React, { useState } from "react";
import DashboardTemplate from "../../components/DashboardTemplate";
import styled from "styled-components";
import Taom from "./Taom";
import { useSelector, useDispatch } from "react-redux";

const BtnGroup = styled.div`
  /* border: 1px solid; */
  display: flex;
  width: 30%;
  padding: 10px;
  flex-direction: row;
  gap: 10px;
  /* padding-bottom: 50px; */

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

  ul {
    width: 100%;
    /* border: 1px solid #c9c9c9; */
    /* padding: 0; */
    /* padding: 12px 20px; */
    font-size: 20px;
    margin: 0;
    padding: 0;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    display: flex;
    flex-direction: column;
    gap: 5px;
    li {
      border-radius: 10px;
      list-style-type: none;
      border: 1px solid #c9c9c9;
      padding: 12px 20px;
      a {
        text-decoration: none;
        color: black;
      }
    }
  }
`;

export default function Qoshish() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  // const category = useSelector((state) => state.category);
  const addDisplay = useSelector((state) => state.addDisplay);
  // const taom = useSelector((state) => state.taom);
  // console.log(category.title);
  console.log("addDisplay", addDisplay);

  const setAddDisplay = () => {
    dispatch({ type: "ADD_CATEGORY" });
  };

  // const addMeal = () => {
  //   dispatch({ type: "ADD_MEAL" });
  // };

  const setCategory = () => {
    if (value.trim() === "") return;
    dispatch({ type: "SET_CATEGORY", payload: value });
    setValue("");
  };

  return (
    <DashboardTemplate>
      <h1>Qo'shish</h1>
      <p>Yangi kategoriya/taom qo'shish</p>

      <BtnGroup>
        <button
          className={`btn one ${!addDisplay ? "disabled" : ""}`}
          onClick={setAddDisplay}
        >
          Kategoriya
        </button>

        <button
          className={`btn second ${addDisplay ? "disabled" : ""}`}
          onClick={() => {
            setAddDisplay();
          }}
        >
          Taom
        </button>
      </BtnGroup>

      {addDisplay === false ? (
        <Category>
          <input
            type="text"
            placeholder="Kategoriya nomi"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />

          <button onClick={setCategory}>Qo`shish</button>
        </Category>
      ) : (
        <Taom />
      )}
    </DashboardTemplate>
  );
}
