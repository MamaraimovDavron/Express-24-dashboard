import React from "react";
import DashboardTemplate from "../../components/DashboardTemplate";
import EditCard from "./EditCard";
import { useSelector, useDispatch } from "react-redux";

export default function Foydalanuvchilar() {
  const data2 = useSelector((state) => state.data2);
  const dispatch = useDispatch();
  // const [data, setRows] = useState(Data);
  const edit = useSelector((state) => state.edit);

  const myEdit = () => {
    dispatch({ type: "EDIT" });
  };

  const editBtn = () => {
    myEdit();
  };

  const remove2 = (index) => {
    dispatch({ type: "REMOVE_TABLE2", payload: index });
  };

  const handleRemove2 = (index) => {
    remove2();
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
          {data2.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.ism}</td>
                <td>{item.raqam}</td>
                <td>{item.rol}</td>
                <td>
                  <button className="btn btn-primary me-2" onClick={editBtn}>
                    <i class="bi bi-pen-fill"></i>
                  </button>
                  <button className="btn btn-danger" onClick={handleRemove2}>
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
