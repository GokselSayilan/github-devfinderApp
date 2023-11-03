import React, { useEffect, useState } from "react";
import "./userInfo.css";

//context
import { useTheme } from "../../Context/ThemeContext";
import { useGithub } from "../../Context/GıthubContext";

//icons
import { FaLocationDot, FaTwitter, FaLink, FaBuilding } from "react-icons/fa6";
import Link from "../InteractiveElements/Link/Link";

//framer-motion
import { motion, AnimatePresence } from "framer-motion";

function UserInfo() {
  const { theme } = useTheme();
  const { searchValue, setIsResult } = useGithub();
  const [data, setData] = useState(null);
  const [date, setDate] = useState(null);

  const baseUrl = process.env.REACT_APP_API_URL;

  const fetchData = () => {
    fetch(`${baseUrl}/${searchValue} `)
      .then((res) => {
        if (!res.ok) {
          throw new Error("unsuccess fetching");
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => {
        setIsResult(true);
        console.error("An error occurred during the operation", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [searchValue]);

  useEffect(() => {
    if (data !== null) {
      const date = new Date(data.created_at);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        date
      );
      setDate(formattedDate);
    }
  }, [data]);

  return (
    <>
      {data !== null && data !== undefined && (
        <AnimatePresence mode="wait">
          <motion.div
            key={data.name}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className={`userInfo romanceBg ${
              theme === "light" ? "userInfoShadow" : "whiteText yankeesBlueBg"
            }`}
          >
            <div className="userInfoMain">
              <img
                src={data.avatar_url}
                alt="userPhoto"
                className="userInfoMainPhoto"
              />
              <div className="userInfoMainProfile">
                <h1
                  className={`userInfoMainProfileName heading1 ${
                    theme === "light" ? "gunmetalText" : "whiteText"
                  }`}
                >
                  {data.login}
                </h1>
                <h3 className="userInfoMainProfileUserName heading3 skyBlueText">
                  @{data.name}
                </h3>
                <p
                  className={`userInfoMainProfileUserBio bodyText ${
                    theme === "light" ? "queenBlueText" : "whiteText"
                  }`}
                >
                  {data.bio === null ? "This profile has no bio" : data.bio}{" "}
                </p>
                <p
                className={`userInfoMainJoinDateResponsive bodyText ${
                  theme === "light" ? "greyishBlueText" : "whiteText"
                }`}
              >
                Joined {date}
              </p>
              </div>
              <p
                className={`userInfoMainJoinDate bodyText ${
                  theme === "light" ? "greyishBlueText" : "whiteText"
                }`}
              >
                Joined {date}
              </p>
            </div>
            <p
                  className={`userInfoMainProfileUserBioResponsive bodyText ${
                    theme === "light" ? "queenBlueText" : "whiteText"
                  }`}
                >
                  {data.bio === null ? "This profile has no bio" : data.bio}{" "}
                </p>
            <div
              className={`userInfoSocial ${
                theme === "light" ? "ghostWhiteBg" : "darkGunmetalBg"
              }`}
            >
              <div className="userInfoSocialField">
                <h4 className="userInfoSocialFieldTitle heading4">Repos</h4>
                <p className="userInfoSocialFieldValue heading2">
                  {data.public_repos}
                </p>
              </div>
              <div className="userInfoSocialField">
                <h4 className="userInfoSocialFieldTitle heading4">Followers</h4>
                <p className="userInfoSocialFieldValue heading2">
                  {data.followers}
                </p>
              </div>
              <div className="userInfoSocialField">
                <h4 className="userInfoSocialFieldTitle heading4">Following</h4>
                <p className="userInfoSocialFieldValue heading2">
                  {data.following}
                </p>
              </div>
            </div>
            <div className="userInfoLinks">
              <Link icon={<FaLocationDot />} label={data.location} />
              <Link icon={<FaTwitter />} label={data.twitter_username} />
              <Link icon={<FaLink />} label={data.blog} />
              <Link icon={<FaBuilding />} label={data.company} />
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default UserInfo;
