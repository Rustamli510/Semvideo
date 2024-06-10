import React from "react";
import "../Style/Pages/Main.css";
import { Outlet } from "react-router-dom";

function Main() {

  return (
    <>
      <main>
      <Outlet/>
      </main>
    </>
  );
}

export default Main;
