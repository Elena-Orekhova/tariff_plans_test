import React from "react";
import ModalPlanList from "../ModalPlanList/ModalPlanList";
import "./modal.css";

const Modal = ({ onClose, isVisible }) => {
  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div
      className={`modal ${isVisible ? "modal-visible" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-content">
        <p className="modal__modal-sticker">горящее предложение</p>
        <button className="modal__modal-closes" onClick={onClose}></button>
        <h2 className="modal__modal-title">
          Не упусти свой{" "}
          <span className="wrapper__wrapper-modal-title">последний шанс</span>
        </h2>
        <p className="modal__modal-motivation-text">
          Мы знаем как трудно начать..{" "}
          <span className="modal__modal-motivation-text_fat">Поэтому!</span>
        </p>
        <p className="modal__modal-sale-text">
          Дарим скидку для
          <span className="modal__modal-sale-text_blue"> лёгкого старта</span>{" "}
          🏃‍♂️
        </p>
        <p className="modal__modal-offer-text">
          Посмотри, что мы для тебя приготовили 🔥
        </p>
        <section className="modal__modal-section">
          <ModalPlanList />
        </section>
        <button className="modal__modal-button">Начать тренироваться</button>
      </div>
    </div>
  );
};

export default Modal;
