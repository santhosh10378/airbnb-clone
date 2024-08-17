const EXCHANGE_RATE_API_URL = "https://api.exchangerate-api.com/v4/latest/";

export const convertCurrency = async ({
  amount,
  fromCurrency = "USD",
  toCurrency = "INR",
}) => {
  try {
    const response = await fetch(`${EXCHANGE_RATE_API_URL}${fromCurrency}`);
    const data = await response.json();

    if (!data.rates || !data.rates[toCurrency]) {
      throw new Error("Invalid currency code");
    }

    const rate = data.rates[toCurrency];
    const convertedAmount = amount * rate;

    return formatCurrency({
      amount: convertedAmount,
      currency: toCurrency,
    });
  } catch (error) {
    console.error("Error converting currency:", error);
    return null;
  }
};

export const formatCurrency = ({
  amount,
  currency = "INR",
  locale = "en-IN",
}) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};
