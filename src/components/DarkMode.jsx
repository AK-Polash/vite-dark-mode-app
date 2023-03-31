import React, { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import Button from "./Button";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Button
      title={darkMode ? "light mode" : "dark mode"}
      className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-transparent text-3xl text-[#333] dark:text-white"
      icon={true}
      content={darkMode ? MdOutlineLightMode : MdOutlineDarkMode}
      onClick={() => setDarkMode(!darkMode)}
    />
  );
};

export default DarkMode;
