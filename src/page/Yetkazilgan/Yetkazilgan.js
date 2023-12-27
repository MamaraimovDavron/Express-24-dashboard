import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardTemplate from "../../components/DashboardTemplate";
// import { Link } from "react-router-dom";
// import data from "./data";

const dataThead = [
  "#",
  "To`liq nomi",
  "Taom nomi",
  "Narxi",
  "Soni",
  "Umumiy narx",
  "Telefon raqam",
  "Izoh",
];

export default function Yetkazilgan() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const remove = (index) => {
    dispatch({ type: "REMOVE_TABLE", payload: index });
  };

  const handleRemove = (index) => {
    remove();
  };
  return (
    <DashboardTemplate>
      {/* <Link to={"/"}></Link> */}
      <h1>Yetkazilgan</h1>
      <p>Yetib kelgan arizalarni kuzatshingiz mumkin</p>
      <table className="table table-hover">
        <thead>
          <tr>
            {dataThead.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.ism}</td>
                <td>{item.taom}</td>
                <td>{item.narxi}</td>
                <td>{item.soni}</td>
                <td>{item.umumiy_narx}</td>
                <td>{item.telefon_raqam}</td>
                <td>{item.izoh}</td>
                <td>
                  <button className="btn btn-danger" onClick={handleRemove}>
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="overall d-flex justify-content-between p-3">
        <h5>Jami:</h5>
        <h5>185000 so`m</h5>
      </div>
    </DashboardTemplate>
  );
}
