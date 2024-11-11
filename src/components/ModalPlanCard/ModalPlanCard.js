import React from "react";
import "./modal-plan-card.css";

const planClassNamesModal = {
  "1 неделя": "weekly-price-modal",
  "1 месяц": "monthly-price-modal",
  "3 месяца": "three-months-price-modal",
};

const ModalPlanCard = ({ plan }) => {
  const discountClass = planClassNamesModal[plan.name] || "";

  return (
    <label htmlFor={plan.id} className="modal__modal-label">
      <input
        type="radio"
        id={plan.id}
        name="radio"
        className="modal__modal-radio"
      />
      <span className="modal__modal-radio_pseudo-radio"></span>
      <div className="modal__modal-card">
        <h2 className="modal__modal-card_card-title">{plan.name}</h2>
        <div className="modal__modal-price">
          <h3 className="modal__modal-price_price-full">{plan.fullPrice}₽</h3>
          <hr className="modal__modal-separator" />
          <h4 className={`modal__modal-price_price-discount ${discountClass}`}>
            {plan.extraDiscountPrice}₽
          </h4>
        </div>
      </div>
    </label>
  );
};

export default ModalPlanCard;
