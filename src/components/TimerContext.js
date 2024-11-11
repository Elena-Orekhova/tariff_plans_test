import React, { createContext, useState, useContext } from 'react';

const TimerContext = createContext();

export const useTimer = () => useContext(TimerContext);

export const TimerProvider = ({ children }) => {
  const [timerEnded, setTimerEnded] = useState(false);

  return (
    <TimerContext.Provider value={{ timerEnded, setTimerEnded }}>
      {children}
    </TimerContext.Provider>
  );
};
