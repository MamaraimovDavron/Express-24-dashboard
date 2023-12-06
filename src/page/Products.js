import React from "react";
import { Link } from "react-router-dom";
import DashboardWrapper from "./DashboardWrapper";

export default function Products() {
  return (
    <DashboardWrapper>
      <h1>Products</h1>
      <Link to={"/dashboard"}>Dashboard</Link>
    </DashboardWrapper>
  );
}
