import React from "react";
import { BsFillCalculatorFill } from "react-icons/bs";
import { TbGoGame } from "react-icons/tb";
import { PiNotepadFill } from "react-icons/pi";
import { TiWeatherPartlySunny } from "react-icons/ti";

import "./style.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <p className="sidebar__element">
        <span>
          <BsFillCalculatorFill />
        </span>
        Calculator
      </p>
      <p className="sidebar__element">
        <span>
          <PiNotepadFill />
        </span>
        To-Do
      </p>
      <p className="sidebar__element">
        <span>
          <TiWeatherPartlySunny />
        </span>
        Weather
      </p>
      <p className="sidebar__element">
        <span>
          <TbGoGame />
        </span>
        Tic Tac Toe
      </p>
    </div>
  );
};

export default SideBar;
