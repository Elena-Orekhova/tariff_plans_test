import React, { useState, useEffect } from "react";
import { useTimer } from "../TimerContext";
import "./plan-card.css";

const PlanCard = ({
  period,
  discountPrice,
  fullPrice,
  description,
  className,
  onClick,
}) => {
  const { timerEnded } = useTimer();
  const [price, setPrice] = useState(discountPrice);
  const [isPriceChanging, setIsPriceChanging] = useState(false);

  useEffect(() => {
    if (timerEnded) {
      setIsPriceChanging(true);
      const timeout = setTimeout(() => {
        setPrice(fullPrice);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [timerEnded, fullPrice]);

  const periodClass = period === "навсегда" ? "forever-plan" : "";
  const textPeriodClass = period === "навсегда" ? "forever-plan-text" : "";

  return (
    <li
      className={`section-menu__menu-price ${className} ${timerEnded ? "hidden-after" : ""}`}
      onClick={onClick}
    >
      <h2 className={`header__header-period ${periodClass}`}>{period}</h2>
      <div className="menu-price__container-price">
        <h3
          className={`header__header-price_price-discount ${isPriceChanging ? "price-changing" : ""} ${
            price === fullPrice ? "visible" : ""
          }`}
        >
          {price}₽
        </h3>
        <h4
          className={`header__header-price_price-full ${timerEnded ? "hidden" : ""}`}
        >
          {fullPrice}₽
        </h4>
      </div>
      <p className={`text__text-price ${textPeriodClass}`}>{description}</p>
    </li>
  );
};

export default PlanCard;
