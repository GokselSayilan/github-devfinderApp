import React, { useState } from "react";
import "./searchBar.css";

//context
import { useTheme } from "../../../Context/ThemeContext";
import { useGithub } from "../../../Context/GıthubContext";

//icon
import { BsSearch } from "react-icons/bs";

//framer-motion
import { motion } from "framer-motion";

const gestureAnimation = {
  whileTap: {
    scale: 0.94,
  },
  whileHover: {
    scale: 1.05,
  },
  transition: { type: "spring", stiffness: 400, damping: 20 },
};

function SearchBar() {
  const { theme } = useTheme();
  const { setSearchValue, isResult, setIsResult } = useGithub();
  const [tempValue, setTempValue] = useState("");

  const handleChange = (e) => {
    let temp = e.target.value;
    setTempValue(temp);
    setIsResult(false);
  };

  const handleSubmit = () => {
    setSearchValue(tempValue);
  };
  return (
    <section
      className={`searchBar ${
        theme === "light" ? " romanceBg " : "yankeesBlueBg"
      }`}
    >
      <div className="wrapper">
        <BsSearch size={"1.5em"} className="skyBlueText" />
        <input
          className={`searchBarInput bodyText 
                ${
                  theme === "light"
                    ? "lightPlaceholder gunmetalText"
                    : "darkPlaceholder whiteText"
                }`}
          type="text"
          placeholder="Search GitHub username…"
          value={tempValue}
          onChange={handleChange}
        />
        {isResult && (
          <p className="noResultsText bodyText boldWeight">No results</p>
        )}
      </div>
      <motion.button
        whileHover={gestureAnimation.whileHover}
        whileTap={gestureAnimation.whileTap}
        transition={gestureAnimation.transition}
        onClick={handleSubmit}
        className="searchBarButton skyBlueBg heading3 whiteText"
      >
        Search
      </motion.button>
    </section>
  );
}

export default SearchBar;
