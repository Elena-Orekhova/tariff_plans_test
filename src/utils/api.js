export const fetchPlans = async () => {
  try {
    const response = await fetch("https://t-pay.iqfit.app/subscribe/list-test", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Ошибка сети: ${response.status}`);
    }

    const data = await response.json();

    // Разделяем цены на полные и скидочные для удобного использования
    const discountPrices = {};
    const fullPrices = {};
    const extraDiscountPrices = {};

    data.forEach(plan => {
      if (plan.isExtraDiscount) {
        extraDiscountPrices[plan.name] = plan.price; // Цена с большей скидкой
      } else if (plan.isDiscount) {
        discountPrices[plan.name] = plan.price; // Обычная скидка
      } else {
        fullPrices[plan.name] = plan.price; // Полная цена
      }
    });

    return data.map(plan => ({
      ...plan,
      extraDiscountPrice: extraDiscountPrices[plan.name] || plan.price,
      discountPrice: discountPrices[plan.name] || plan.price,
      fullPrice: fullPrices[plan.name] || plan.price,
    }));
  } catch (error) {
    console.error("Произошла ошибка при запросе:", error);
    throw error;
  }
};
