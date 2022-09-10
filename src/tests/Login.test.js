import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWith';
import Login from '../pages/Login';
import App from '../App';
import { getAskFromRates, getCurrencyDescFromRates } from '../Utilidades';

const expanseExample = {
  id: 0,
  value: '45',
  description: 'desc',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
  exchangeRates: {
    USD: {
      code: 'USD',
      codein: 'BRL',
      name: 'Dólar Americano/Real Brasileiro',
      high: '5.2171',
      low: '5.1385',
      varBid: '-0.067',
      pctChange: '-1.28',
      bid: '5.1465',
      ask: '5.1477',
      timestamp: '1662757197',
    },
    USDT: {
      code: 'USD',
      codein: 'BRLT',
      name: 'Dólar Americano/Real Brasileiro Turismo',
      high: '5.235',
      low: '5.165',
      varBid: '-0.06',
      pctChange: '-1.15',
      bid: '5.02',
      ask: '5.33',
      timestamp: '1662738060',
    },
    CAD: {
      code: 'CAD',
      codein: 'BRL',
      name: 'Dólar Canadense/Real Brasileiro',
      high: '4.0167',
      low: '3.9409',
      varBid: '-0.0312',
      pctChange: '-0.78',
      bid: '3.9507',
      ask: '3.9544',
      timestamp: '1662757196',
    },
    GBP: {
      code: 'GBP',
      codein: 'BRL',
      name: 'Libra Esterlina/Real Brasileiro',
      high: '6.0736',
      low: '5.9562',
      varBid: '-0.0322',
      pctChange: '-0.54',
      bid: '5.9638',
      ask: '5.9696',
      timestamp: '1662757196',
    },
    ARS: {
      code: 'ARS',
      codein: 'BRL',
      name: 'Peso Argentino/Real Brasileiro',
      high: '0.037',
      low: '0.0364',
      varBid: '-0.0006',
      pctChange: '-1.62',
      bid: '0.0364',
      ask: '0.0364',
      timestamp: '1662757197',
    },
    BTC: {
      code: 'BTC',
      codein: 'BRL',
      name: 'Bitcoin/Real Brasileiro',
      high: '111.75',
      low: '109',
      varBid: '408',
      pctChange: '0.37',
      bid: '110.12',
      ask: '110.12',
      timestamp: '1662832209',
    },
    LTC: {
      code: 'LTC',
      codein: 'BRL',
      name: 'Litecoin/Real Brasileiro',
      high: '333.96',
      low: '311.01',
      varBid: '15.05',
      pctChange: '4.78',
      bid: '328.94',
      ask: '330.6',
      timestamp: '1662832208',
    },
    EUR: {
      code: 'EUR',
      codein: 'BRL',
      name: 'Euro/Real Brasileiro',
      high: '5.2735',
      low: '5.1631',
      varBid: '-0.0432',
      pctChange: '-0.83',
      bid: '5.1681',
      ask: '5.1714',
      timestamp: '1662757197',
    },
    JPY: {
      code: 'JPY',
      codein: 'BRL',
      name: 'Iene Japonês/Real Brasileiro',
      high: '0.03684',
      low: '0.03605',
      varBid: '-0.0001',
      pctChange: '-0.28',
      bid: '0.03607',
      ask: '0.03612',
      timestamp: '1662757185',
    },
    CHF: {
      code: 'CHF',
      codein: 'BRL',
      name: 'Franco Suíço/Real Brasileiro',
      high: '5.4614',
      low: '5.3501',
      varBid: '-0.007',
      pctChange: '-0.13',
      bid: '5.3598',
      ask: '5.3654',
      timestamp: '1662757196',
    },
    AUD: {
      code: 'AUD',
      codein: 'BRL',
      name: 'Dólar Australiano/Real Brasileiro',
      high: '3.5861',
      low: '3.5158',
      varBid: '0.0001',
      pctChange: '0',
      bid: '3.519',
      ask: '3.5222',
      timestamp: '1662757196',
    },
    CNY: {
      code: 'CNY',
      codein: 'BRL',
      name: 'Yuan Chinês/Real Brasileiro',
      high: '0.7538',
      low: '0.7426',
      varBid: '-0.0058',
      pctChange: '-0.77',
      bid: '0.7436',
      ask: '0.7437',
      timestamp: '1662757082',
    },
    ILS: {
      code: 'ILS',
      codein: 'BRL',
      name: 'Novo Shekel Israelense/Real Brasileiro',
      high: '1.5295',
      low: '1.5075',
      varBid: '-0.0057',
      pctChange: '-0.38',
      bid: '1.5112',
      ask: '1.5114',
      timestamp: '1662757143',
    },
    ETH: {
      code: 'ETH',
      codein: 'BRL',
      name: 'Ethereum/Real Brasileiro',
      high: '8.985',
      low: '8.7603',
      varBid: '108.63',
      pctChange: '1.24',
      bid: '8.87863',
      ask: '8.89803',
      timestamp: '1662832208',
    },
    XRP: {
      code: 'XRP',
      codein: 'BRL',
      name: 'XRP/Real Brasileiro',
      high: '1.86',
      low: '1.78',
      varBid: '0.05',
      pctChange: '2.68',
      bid: '1.83',
      ask: '1.83',
      timestamp: '1662832212',
    },
    DOGE: {
      code: 'DOGE',
      codein: 'BRL',
      name: 'Dogecoin/Real Brasileiro',
      high: '0.334356',
      low: '0.322984',
      varBid: '0.00718999',
      pctChange: '2.22',
      bid: '0.331763',
      ask: '0.331763',
      timestamp: '1662832141',
    },
  },
};

describe('Verifica o componente <Login />', () => {
  test('Se existe input de email e password', () => {
    renderWithRouterAndRedux(<Login />);

    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();

    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
  });

  test('Entra no app e cadastra uma despesa', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();

    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
    const btnEntrar = screen.getByRole('button', { name: 'Entrar' });

    expect(btnEntrar).toBeInTheDocument();
    expect(btnEntrar).toBeDisabled();

    userEvent.type(inputEmail, 'lta@mgmail.com');
    userEvent.type(inputPassword, 'aaaaaaaaaa');

    expect(btnEntrar).toBeEnabled();

    userEvent.click(btnEntrar);

    const inputValue = screen.getByTestId('value-input');
    const inputDescricao = screen.getByTestId('description-input');
    const btnAddDespesa = screen.getByRole('button', { name: 'Adicionar Despesa' });

    expect(inputValue).toBeInTheDocument();
    expect(inputDescricao).toBeInTheDocument();

    userEvent.type(inputValue, '45');
    userEvent.type(inputDescricao, 'Quarenta e Cinco');
    userEvent.click(btnAddDespesa);

    // const deleteBtn = screen.findByRole('button', { name: 'DELETE' });
    // const deleteBtn = screen.findByTestId('delete-btn');
    // const tabelaDesc = screen.findByText('Quarenta e Cinco');
    // expect(deleteBtn).toBeInTheDocument();

    // expect(btnLogin).toBeEnabled();

    // userEvent.click(btnLogin);
    expect(history.location.pathname).toBe('/carteira');
  });
  test('Teste unitário funcoes utilidade', () => {
    const ask = getAskFromRates(expanseExample);
    expect(parseFloat(ask)).toBe(5.1477);

    const currency = getCurrencyDescFromRates(expanseExample);
    expect(currency.toString()).toBe('Dólar Americano/Real Brasileiro');
  });
});
