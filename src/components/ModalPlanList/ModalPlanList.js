import React, { useState, useEffect } from "react";
import ModalPlanCard from "../ModalPlanCard/ModalPlanCard";
import Loader from "../Loader/Loader";
import { fetchPlans } from "../../utils/api";
import "./modal-plan-list.css";

const ModalPlanList = () => {
  const [plans, setPlans] = useState(null);
  const [error, setError] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const loadPlans = async () => {
      try {
        const plans = await fetchPlans();
        setPlans(
          plans.filter((plan) => plan.isDiscount || plan.isExtraDiscount)
        );
      } catch (error) {
        setError(error.message);
      }
    };

    loadPlans();
  }, []);

  const handleSelectPlan = (index) => {
    setSelectedPlan(index);
  };

  if (error) {
    return <p>Произошла ошибка: {error}</p>;
  }

  if (!plans) {
    return <Loader />;
  }

  return (
    <ul className="modal__modal-section_list">
      {plans.map((plan, index) => (
        <li
          key={plan.id}
          className={`modal__modal-section_item ${
            selectedPlan === index ? "active" : ""
          } ${plan.isDiscount ? "discount" : ""} ${plan.isExtraDiscount ? "extra-discount" : ""}`}
          onClick={() => handleSelectPlan(index)}
        >
          <ModalPlanCard
            plan={{
              ...plan,
              fullPrice: plan.fullPrice,
              extraDiscountPrice: plan.extraDiscountPrice,
            }}
          />
        </li>
      ))}
    </ul>
  );
};

export default ModalPlanList;
