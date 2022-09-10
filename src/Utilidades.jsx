export const getAskFromRates = ({ exchangeRates, currency }) => (
  Object.entries(exchangeRates)
    .filter((item) => item[0] === currency)
    .map((item) => item[1].ask)
);

export const getCurrencyDescFromRates = ({ exchangeRates, currency }) => (
  Object.entries(exchangeRates)
    .filter((item) => item[0] === currency)
    .map((item) => item[1].name)
);
