import React from "react";
import DashboardTemplate from "../../components/DashboardTemplate";
import data from "./data";

export default function Foydalanuvchilar() {
  return (
    <DashboardTemplate>
      <h2>Foydalanuvchilar</h2>
      <p className="text-warning">Rollarni biriktirishingiz mumkin</p>

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
                  <button className="btn btn-primary me-2">
                    <i class="bi bi-pen-fill"></i>
                  </button>
                  <button className="btn btn-danger">
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
