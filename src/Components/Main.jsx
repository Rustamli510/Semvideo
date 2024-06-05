import React, { useContext } from "react";
import "../Style/Pages/Main.css";
import Box from "./MainComponent/Box";
import Add from "./MainComponent/Add";
import { AppContext } from "../Context/Context";

<<<<<<< HEAD
function Main({toggleDrawer}) {
=======

function Main() {
>>>>>>> b99c55cbd26fc29615a0e1e986e1e90341b185f2
  const { clicked } = useContext(AppContext);
  return (
    <>
<<<<<<< HEAD
      <main>{clicked ? <Add toggleDrawer={toggleDrawer} /> : <Box />}</main>
=======
      <main>
        {clicked ? <Add /> : <Box />}
      </main>
>>>>>>> b99c55cbd26fc29615a0e1e986e1e90341b185f2
    </>
  );
}

export default Main;
