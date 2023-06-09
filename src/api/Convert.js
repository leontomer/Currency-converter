import axios from "axios";

export default async function Convert(baseCurrency, targetCurrency, amount) {
  try {
    const currencyRateRes = await axios.get(
      `https://api.currencyapi.com/v3/latest?base_currency=${baseCurrency}&apikey=KxS28aRmLm3KZoMcbTAAaVjDlHWmsoeatM85bY1F`
    );
    return (
      parseInt(amount) * currencyRateRes?.data?.data?.[targetCurrency]?.value
    );
  } catch (error) {
    console.error(error);
  }
}
