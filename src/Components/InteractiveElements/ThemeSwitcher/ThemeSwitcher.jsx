import React, { useState } from "react";
import "./themeSwitcher.css";

// Context
import { useTheme } from "../../../Context/ThemeContext";

// Icons
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

//framer-motion
import { motion, AnimatePresence } from "framer-motion";

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isHover, setIsHover] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const wrapperClass =
    theme === "light"
      ? isHover
        ? "moonHover"
        : "greyishBlueText"
      : isHover
      ? "sunHover"
      : "whiteText";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.15 }}
        className={`themeSwitcher ${wrapperClass}`}
        onClick={toggleTheme}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <p className="switcherText">{theme}</p>
        {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
      </motion.div>
    </AnimatePresence>
  );
}

export default ThemeSwitcher;
