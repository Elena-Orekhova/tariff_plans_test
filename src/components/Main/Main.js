import React from "react";
import PlanList from "../PlanList/PlanList";
import image from "./images/to_be_2_card.png";
import "./main.css";

const Main = () => {
  return (
    <main className="main">
      <h1 className="main-header">Выберите подходящий тарифный план</h1>
      <div className="main-block">
        <img
          className="main-block-image__image-menu-price"
          src={image}
          alt="Спортивный мужчина"
        />
        <div className="main-block-menu__menu-price">
          <PlanList />
          <section className="main-block-section__section-information">
            <p className="main-block-text__text-information">
              Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
              чем за 1 месяц
            </p>
            <label
              htmlFor="offer"
              className="main-block-checkbox__checkbox-offer"
            >
              <input
                type="checkbox"
                id="offer"
                name="offer"
                className="checkbox-offer__checkbox visually-hidden"
              />
              <span className="checkbox-offer__pseudo-checkbox"></span>
              <span className="checkbox-offer__text">
                Я соглашаюсь с&nbsp;
                <a href="#" target="_blank">
                  Правилами сервиса&nbsp;
                </a>
                и условиями&nbsp;
                <a href="#" target="_blank">
                  Публичной оферты.
                </a>
              </span>
            </label>
            <button
              type="submit"
              className="main-block-button__button-agreement"
            >
              Купить
            </button>
            <p className="main-block-text__text-agreement">
              Нажимая «Купить», Пользователь соглашается на автоматическое
              списание денежных средств по истечению купленного периода.
              Дальнейшие списания по тарифам, участвующим в акции,
              осуществляются по полной стоимости согласно оферте.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
