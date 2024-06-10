import React, { useEffect, useState } from "react";
import Signİn from "./Pages/Signİn";
import DashBoard from "./Pages/DashBoard";
import { Route, Router, Routes } from "react-router-dom";
import InnerDashboad from "./Components/InnerDashboad";
import Add from "./Components/MainComponent/Add";
import Box from "./Components/MainComponent/Box";

function All() {
  const [savedVideos, setSavedVideos] = useState(() => {
    const storedVideos = localStorage.getItem("savedVideos");
    return storedVideos ? JSON.parse(storedVideos) : [];
  });

  useEffect(() => {
    localStorage.setItem("savedVideos", JSON.stringify(savedVideos));
  }, [savedVideos]);

  const handleAddVideo = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result;
      setSavedVideos((prevVideos) => [...prevVideos, base64data]);
    };
    reader.readAsDataURL(file);
  };
  const handleDeleteVideo = (index) => {
    setSavedVideos((prevVideos) => {
      const updatedVideos = [...prevVideos];
      updatedVideos.splice(index, 1);
      return updatedVideos;
    });
  };
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Signİn />} />
        <Route path="/dashboard" element={<DashBoard />}>
          <Route index element={<Box />} />
          <Route
            path="add"
            element={<Add handleAddVideo={handleAddVideo} savedVideos={savedVideos} />}
          />
          <Route
            path="innerdashboard"
            element={<InnerDashboad savedVideos={savedVideos} handleDeleteVideo={handleDeleteVideo} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default All;
