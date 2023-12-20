import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const MealBox = styled.div`
  overflow-x: hidden;
  /* border: 1px solid red; */
  /* height: 40vh; */
  /* height: 100%; */
  padding-top: 30px;
  /* padding-bottom: 20px;  */
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

  table {
    tbody {
      tr {
        display: flex;
        flex-direction: row;
        /* align-items: center; */
        justify-content: center;
        td {
          line-height: 70px;
          width: 20%;
          img {
            width: 40%;
          }
        }
      }
    }
  }
`;

export default function Taom() {
  // const thead = ["#", "Rasm", "Taom nomi", "Ta`rif", "Narxi", "Kategoriya"];

  const [data, setData] = useState([
    {
      imgUrl: "",
      mealTitle: "",
      comment: "",
      price: "",
    },
  ]);
  // console.log(setData());

  // const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  // const menu = useSelector((state) => state.menu);
  // console.log("menu", menu);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // const setMenu = (e) => {
  //   if (data === "") return;
  //   dispatch({ type: "SET_MENU", payload: data });
  //   setData("");
  //   // console.log(data);
  // };
  const handleSubmit = () => {
    console.log(typeof data);
  };
  return (
    <MealBox>
      <div className="topBox">
        <input
          name="imgUrl"
          type="text"
          placeholder="Rasmga yo'l"
          id="imgUrl"
          onChange={handleChange}
        />
        <input
          name="mealTitle"
          type="text"
          placeholder="Taom nomi"
          id="mealTitle"
          onChange={handleChange}
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
        ></textarea>
      </div>
      <div className="footer">
        <input
          name="price"
          type="text"
          placeholder="Narxi"
          id="price"
          onChange={handleChange}
        />
        <select name="select" id="select">
          {category.map((item, index) => {
            return (
              <option
                key={index}
                name="option"
                id="option"
                // value={data.option ?? ""}
                // onChange={handleChange}
              >
                {item.title}
              </option>
            );
          })}
        </select>
      </div>

      <table className="table table-hover">
        <tbody></tbody>
      </table>
      <button onClick={handleSubmit}>Qo`shish</button>
    </MealBox>
  );
}
