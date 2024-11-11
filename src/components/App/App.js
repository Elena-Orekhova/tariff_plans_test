import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Modal from "../Modal/Modal";
import { TimerProvider } from "../TimerContext";

import "./app.css";
import "../assets/fonts/PT-Root-UI/PT-Root-UI_Regular.css";

const App = () => {
  return (
    <TimerProvider>
      <div className="app">
        <Header />
        <Main />
        <Modal />
        <footer className="footer"></footer>
      </div>
    </TimerProvider>
  );
};

export default App;
