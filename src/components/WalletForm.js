import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencies } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  render() {
    const { currencies } = this.props;
    return (
      <div>
        WalletForm
        <label htmlFor="valor">
          Valor:
          <input
            type="text"
            id="valor"
            name="valor"
            data-testid="value-input"
          />
        </label>
        <label htmlFor="desc-input">
          Descrição:
          <input
            type="text"
            id="desc-input"
            name="desc-input"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select name="currency" id="currency" data-testid="currency-input">
            {currencies.map((cur) => <option key={ cur } value={ cur }>{ cur }</option>)}
          </select>
        </label>
        <label htmlFor="forma">
          Forma:
          <select name="forma" id="forma" data-testid="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="credito">Cartão de crédito</option>
            <option value="debito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria:
          <select name="categoria" id="categoria" data-testid="tag-input">
            <option value="alimentacao">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="trabalho">Trabalho</option>
            <option value="transporte">Transporte</option>
            <option value="saude">Saúde</option>
          </select>
        </label>
        <button type="button">
          Adicionar Despesa
        </button>
      </div>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps, null)(WalletForm);
