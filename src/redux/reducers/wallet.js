// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'LISTAR_CURRENCIES':
    return {
      ...state,
      currencies: action.curr,
    };
  case 'ADICIONAR_DESPESA':
    return {
      ...state,
      expenses: [...state.expenses, { id: state.expenses.length, ...action.payload }],
    };
  case 'DELETAR_DESPESA':
    return {
      ...state,
      // expenses: [...state.expenses.filter((desp) => desp.id !== action.payload)],
      expenses: state.expenses.filter((d) => Number(d.id) !== Number(action.payload)),
    };
  default:
    return state;
  }
}

export default wallet;
