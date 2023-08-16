import React from "react";
import Sidebar from "../SideBar";
import Header from "../Header";

import "./style.scss";

// Pass the child props
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      {/* Content is rendered here */}
      <div className="layout__children">{children}</div>
    </>
  );
}
