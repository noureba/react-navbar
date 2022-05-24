import React from "react";
import { SampleNavbar } from "./sampleNavbar";
import {AiOutlineBars, AiFillCloseCircle} from 'react-icons/ai'
import "./styles/css/reactNavbar.css";

function App() {
  const brand = {
    link: "/",
    src: "",
    name:"logo"
  };

  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const openIcon = <AiOutlineBars/>
  const closeIcon = <AiFillCloseCircle/>

  return (
    <SampleNavbar brand={brand} menu={menu} openIcon={openIcon} closeIcon={closeIcon}>
    </SampleNavbar>
  );
}

export default App;
