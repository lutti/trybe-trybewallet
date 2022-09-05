// Coloque aqui suas actions
export const DoLogin = (email) => ({ type: 'LOGIN', email });

const receberListaCurrencies = (curr) => ({
  type: 'LISTAR_CURRENCIES',
  curr }
);

const actionAddDespesa = (payload) => ({
  type: 'ADICIONAR_DESPESA',
  payload }
);

export function fetchCurrencies() {
  return async (dispatch) => {
    const promiseCurr = await fetch('https://economia.awesomeapi.com.br/json/all');
    const objCurr = await promiseCurr.json();
    const listaDeCurrString = Object.keys(objCurr).filter((cur) => cur !== 'USDT');
    dispatch(receberListaCurrencies(listaDeCurrString));
  };
}

export function addDespesa(payload) {
  return async (dispatch) => {
    const promiseCurr = await fetch('https://economia.awesomeapi.com.br/json/all');
    const objCurr = await promiseCurr.json();
    payload.exchangeRates = objCurr;
    dispatch(actionAddDespesa(payload));
  };
}
