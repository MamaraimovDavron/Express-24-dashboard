import React from "react";
import styled from "styled-components";

const MealBox = styled.div`
  /* border: 1px solid; */
  height: 40vh;
  font-size: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  .topBox {
    display: flex;
    width: 100%;
    gap: 20px;
    /* border: 1px solid; */
    input {
      border: none;
      border: 1px solid #c9c9c9;
      width: 50%;
      padding: 8px 16px;
      border-radius: 10px;
    }
  }

  .middle {
    /* border: 1px solid; */
    width: 100%;
    textarea {
      width: 100%;
      border: none;
      border: 1px solid #c9c9c9;
      padding: 8px 16px;
      border-radius: 10px;
      height: 25vh;
    }
  }

  .footer {
    /* border: 1px solid; */
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;
    input {
      width: 50%;
      border: none;
      border: 1px solid #c9c9c9;
      padding: 8px 16px;
      border-radius: 10px;
    }

    #select {
      width: 50%;
      border: none;
      border: 1px solid #c9c9c9;
      padding: 8px 16px;
      border-radius: 10px;
    }
  }
`;

export default function Taom() {
  return (
    <MealBox>
      <div className="topBox">
        <input type="text" placeholder="Rasmga yo'l" />
        <input type="text" placeholder="Taom nomi" />
      </div>
      <div className="middle">
        <textarea cols="5" rows="10" placeholder="Ta`rif"></textarea>
      </div>
      <div className="footer">
        <input type="text" placeholder="Narxi" />
        <select name="" id="select">
          <option value="">Kategoriya</option>
          <option value="">Kategoriya2</option>
          <option value="">Kategoriya3</option>
          <option value="">Kategoriya4</option>
        </select>
      </div>
    </MealBox>
  );
}
