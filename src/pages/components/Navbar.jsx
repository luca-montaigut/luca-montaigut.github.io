import React from "react";
import { Link } from "react-router-dom";
import FrFlag from "../../images/fr-flag.png";
import EnFlag from "../../images/en-flag.png";

const Navbar = ({ language, changeLanguage }) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      {language === "fr" && (
        <img src={FrFlag} alt="zeubi" onClick={changeLanguage} />
      )}
      {language === "en" && (
        <img src={EnFlag} alt="zeubi" onClick={changeLanguage} />
      )}
    </div>
  );
};

export default Navbar;
