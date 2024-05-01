"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { ThemeContext, Themes } from "@/context/theme";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Toggler({ onToggle }) {
  const theme = useContext(ThemeContext);

  const handleToggle = () => {
    onToggle();
  };

  useEffect(() => {}, [theme]);

  return (
    <div className={styles.theme_toggler} onClick={handleToggle}>
      {theme === Themes.Dark ? (
        <MdDarkMode size={20} color="white" />
      ) : (
        <MdLightMode size={20} color="black" />
      )}
    </div>
  );
}
