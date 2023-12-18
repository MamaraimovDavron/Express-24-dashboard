import React, { useState } from "react";
import DashboardTemplate from "../../components/DashboardTemplate";
import data1 from "./data";
import EditCard from "./EditCard";
import { useSelector, useDispatch } from "react-redux";

export default function Foydalanuvchilar() {
  const Data = data1;

  const dispatch = useDispatch();

  const [data, setRows] = useState(Data);

  const edit = useSelector((state) => state.edit);
  const setEdit = () => {
    dispatch({ type: "EDIT" });
  };

  // const [edit, setEdit] = useState(false);

  // const data = useSelector((state) => state.data);
  // const setRows = () => {};

  const remove = (index) => {
    const tempRows = [...data];
    tempRows.splice(index, 1);
    setRows(tempRows);
  };

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
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.ism}</td>
                <td>{item.raqam}</td>
                <td>{item.rol}</td>
                <td>
                  {/* <button
                    className="btn btn-primary me-2"
                    onClick={() => {
                      setEdit(!edit);
                    }}
                  >
                    <i class="bi bi-pen-fill"></i>
                  </button> */}

                  <button
                    className="btn btn-primary me-2"
                    onClick={() => {
                      setEdit();
                    }}
                  >
                    <i class="bi bi-pen-fill"></i>
                  </button>
                  <button className="btn btn-danger" onClick={remove}>
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
