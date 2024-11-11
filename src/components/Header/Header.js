import React from "react";
import Timer from "../Timer/Timer";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header__title">Скидка действует:</h2>
      <Timer />
    </header>
  );
};

export default Header;
