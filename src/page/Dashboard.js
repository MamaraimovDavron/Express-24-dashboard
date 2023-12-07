import React from "react";
import DashboardTemplate from "../components/DashboardTemplate";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <DashboardTemplate>
      <Link to={"/"}></Link>
      <h1>Dashboard</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        pariatur? Dolorum maxime rem obcaecati a vitae optio, accusamus
        excepturi tenetur labore beatae numquam fuga animi architecto voluptate,
        cum soluta adipisci?
      </p>
    </DashboardTemplate>
  );
}
