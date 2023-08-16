import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { BsFillCalculatorFill } from "react-icons/bs";
import { TbGoGame } from "react-icons/tb";
import { PiNotepadFill } from "react-icons/pi";
import { TiWeatherPartlySunny } from "react-icons/ti";

import "./style.scss";

const SideBar = () => {
  // test
  // test 2
  return (
    <div className="sidebar">
      <p
        className="sidebar__element"
        onClick={(e) => console.log(e.target.value)}
        value="calc"
      >
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
