import React from "react";
import { Outlet } from "react-router-dom";
import DarkMode from "./DarkMode";

const RootLayout = () => {
  return (
    <>
      <DarkMode />
      <Outlet />
    </>
  );
};

export default RootLayout;
