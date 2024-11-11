import React, { useState, useEffect } from "react";
import PlanCard from "../PlanCard/PlanCard";
import Loader from "../Loader/Loader";
import { fetchPlans } from "../../utils/api";
import "./plan-list.css";

const PlanList = () => {
  const [plans, setPlans] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [error, setError] = useState(null);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1150);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1150);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const loadPlans = async () => {
      try {
        const plans = await fetchPlans();
        setPlans(plans.filter((plan) => plan.isPopular));
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

  const planClassNames = {
    "1 неделя": "weekly-price",
    "1 месяц": "monthly-price",
    "3 месяца": "three-months-price",
    "навсегда": `forever-price ${isWideScreen ? "grid-forever" : ""}`,
  };

  const descriptions = {
    "1 неделя": "Чтобы просто начать 👍🏻",
    "1 месяц": "Привести тело впорядок 💪🏻",
    "3 месяца": "Изменить образ жизни 🔥",
    "навсегда": "Всегда быть в форме и поддерживать своё здоровье ⭐️",
  };

  return (
    <ul className="main-block-section__section-prace">
      {plans.map((plan, index) => (
        <PlanCard
          key={plan.id}
          period={plan.name}
          discountPrice={plan.discountPrice}
          fullPrice={plan.fullPrice}
          description={descriptions[plan.name] || ""}
          className={`${planClassNames[plan.name] || ""} ${plan.isDiscount ? "discount" : ""} ${selectedPlan === index ? "active" : ""}`}
          onClick={() => handleSelectPlan(index)}
        />
      ))}
    </ul>
  );
};

export default PlanList;
