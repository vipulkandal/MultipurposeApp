import React from "react";

import "./style.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <p className="sidebar__element">Calculator</p>
      <p className="sidebar__element">To-Do</p>
      <p className="sidebar__element">Weather</p>
    </div>
  );
};

export default SideBar;
