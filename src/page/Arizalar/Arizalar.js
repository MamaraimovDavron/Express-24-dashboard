import React, { useState } from "react";
import DashboardTemplate from "../../components/DashboardTemplate";
// import { Link } from "react-router-dom";
import data from "./data";

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

export default function Arizalar() {
  const [rows, setRows] = useState(data);
  const remove = (index) => {
    const tempRows = [...rows];
    tempRows.splice(index, 1);
    setRows(tempRows);
  };

  return (
    <DashboardTemplate>
      {/* <Link to={"/"}></Link> */}
      <h1>Arizalar</h1>
      <p>Yetib kelgan arizalarni kuzatshingiz mumkin</p>
      <table className="table table-hover">
        <thead>
          <tr>
            {dataThead.map((item) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => {
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
                  <button className="btn btn-danger" onClick={remove}>
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
