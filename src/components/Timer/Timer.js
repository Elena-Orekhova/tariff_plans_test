import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import { useTimer } from "../TimerContext";
import "./timer.css";

const Timer = () => {
  const [time, setTime] = useState(2 * 60);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { setTimerEnded } = useTimer();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(interval);
          setTimeout(() => setTimerEnded(true), 0);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 0) {
      setTimeout(() => {
        setIsModalVisible(true);
      }, 5000);
    }
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

  const isRed = time < 30;

  return (
    <div>
      <div className="header__timer">
        <div
          className={`header__timer_timer ${isRed ? "header__timer_timer-red" : ""}`}
        >
          <p className="header__timer_timer-num minutes">{displayMinutes}</p>
          <p className="header__timer_timer-num num-separator">
            <span
              className={`separator ${isRed ? "separator-red" : ""}`}
            ></span>
            <span
              className={`separator ${isRed ? "separator-red" : ""}`}
            ></span>
          </p>
          <p className="header__timer_timer-num seconds">{displaySeconds}</p>
        </div>
        <div className="header__timer_time">
          <p className="header__timer_timer-letter">минут</p>
          <p className="header__timer_timer-letter">секунд</p>
        </div>
      </div>

      {isModalVisible && (
        <Modal
          onClose={() => setIsModalVisible(false)}
          isVisible={isModalVisible}
        />
      )}
    </div>
  );
};

export default Timer;
