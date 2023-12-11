import React, { useState } from "react";
import DashboardTemplate from "../../components/DashboardTemplate";
import data from "./data";
import EditCard from "./EditCard";

export default function Foydalanuvchilar() {
  const [edit, setEdit] = useState(false);

  return (
    <DashboardTemplate>
      <h2>Foydalanuvchilar</h2>
      <p className="text-warning">Rollarni biriktirishingiz mumkin</p>

      {edit ? <EditCard /> : ""}
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>To’liq ismi</th>
            <th>Telefon raqami</th>
            <th>Roli</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.ism}</td>
                <td>{item.raqam}</td>
                <td>{item.rol}</td>
                <td>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => {
                      setEdit(!edit);
                    }}
                  >
                    <i class="bi bi-pen-fill"></i>
                  </button>
                  <button className="btn btn-danger" onClick={(index) => {}}>
                    <i class="bi bi-trash3-fill"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="overall d-flex justify-content-between">
        <h3>Jami:</h3>
        <h3>4 ta akkaunt</h3>
      </div>
    </DashboardTemplate>
  );
}
