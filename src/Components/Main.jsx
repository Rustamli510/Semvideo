import React, { useContext } from "react";
import "../Style/Pages/Main.css";
import Box from "./MainComponent/Box";
import Add from "./MainComponent/Add";
import { AppContext } from "../Context/Context";


function Main() {
  const { clicked } = useContext(AppContext);

  return (
    <>
      <main>
        {clicked ? <Add /> : <Box />}
      </main>
    </>
  );
}

export default Main;
