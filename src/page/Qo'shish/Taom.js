import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MealBox = styled.div`
  /* border: 1px solid red; */
  /* height: 40vh; */
  height: 100%;
  /* padding-top: 20px;
  padding-bottom: 20px; */
  font-size: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  align-items: center;
  justify-content: center;

  button {
    border: 1px solid red;
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
      display: flex;
      flex-direction: column;
      option {
        border: 1px solid red;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export default function Taom() {
  // const thead = ["#", "Rasm", "Taom nomi", "Ta`rif", "Narxi", "Kategoriya"];
  const [val, setValue] = useState({});

  // const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => {
      console.log(value);
      return { ...prev, [name]: String(value) };
    });
  };

  const myFunction = () => {
    return val;
  };

  return (
    <MealBox>
      <div className="topBox">
        <input
          name="imgUrl"
          type="text"
          placeholder="Rasmga yo'l"
          id="imgUrl"
          value={val.imgUrl || ""}
          onChange={handleChange}
        />
        <input
          name="mealTitle"
          type="text"
          placeholder="Taom nomi"
          id="mealTitle"
          onChange={handleChange}
          value={val.mealTitle || ""}
        />
      </div>
      <div className="middle">
        <textarea
          name="comment"
          cols="5"
          rows="10"
          placeholder="Ta`rif"
          id="comment"
          onChange={handleChange}
          value={val.comment || ""}
        ></textarea>
      </div>
      <div className="footer">
        <input
          name="price"
          type="text"
          placeholder="Narxi"
          id="price"
          onChange={handleChange}
          value={val.price || ""}
        />
        <select name="select" id="select" value={val.select || ""}>
          {category.map((item) => {
            return (
              <option id="option" onChange={handleChange}>
                {item.title}
              </option>
            );
          })}
        </select>
      </div>

      <button onClick={myFunction}>Qo`shish</button>
    </MealBox>
  );
}
