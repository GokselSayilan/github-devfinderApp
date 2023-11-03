import React from "react";
import "./githubSearchApp.css";

//components
import Header from "../Header/Header";
import SearchBar from "../InteractiveElements/SearchBar/SearchBar";
import UserInfo from "../UserInfo/UserInfo";

//context
import { useTheme } from "../../Context/ThemeContext";

//framer-motion
import { motion } from "framer-motion";

const mainAnimation = {
  initial: { opacity: 0, y: -250 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

function GithubSearchApp() {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={mainAnimation.initial}
      animate={mainAnimation.animate}
      transition={mainAnimation.transition}
      className={`githubSearchApp ${
        theme === "light" ? "ghostWhiteBg" : "darkGunmetalBg"
      }`}
    >
      <div className="componentsWrapper">
        <Header />
        <SearchBar />
        <UserInfo />
        {/* githuba yuklerken ss falan olsun live url */}
      </div>
    </motion.div>
  );
}

export default GithubSearchApp;
