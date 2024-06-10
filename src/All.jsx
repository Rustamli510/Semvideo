import React from "react";
import Signİn from "./Pages/Signİn";
import DashBoard from "./Pages/DashBoard";
import { Route, Router, Routes } from "react-router-dom";
import InnerDashboad from "./Components/InnerDashboad";
import Add from "./Components/MainComponent/Add";
import Box from "./Components/MainComponent/Box";

function All() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signİn />} />
        <Route path="/dashboard" element={<DashBoard />}>
        <Route index element={<Box/>}/>
          <Route path="add" element={<Add />} />
          <Route path="innerdashboard" element={<InnerDashboad />} />
        </Route>
      </Routes>
    </>
  );
}

export default All;
