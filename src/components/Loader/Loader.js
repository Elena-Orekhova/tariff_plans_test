import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__spinner"></div>
      <p>Загрузка цен...</p>
    </div>
  );
};

export default Loader;
