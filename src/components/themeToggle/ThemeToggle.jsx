"use client";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={styles.container} onClick={toggleTheme} style={
      theme === "dark"
        ? {  background: "white" }
        : {  background: "#0f172a" }
    } >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a"}
            : { right: 1, background: "white" }
        }
      />
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
