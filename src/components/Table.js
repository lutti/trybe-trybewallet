import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  getAskFromRates = ({ exchangeRates, currency }) => (
    Object.entries(exchangeRates)
      .filter((item) => item[0] === currency)
      .map((item) => item[1].ask)
  );

  getCurrencyDescFromRates = ({ exchangeRates, currency }) => (
    Object.entries(exchangeRates)
      .filter((item) => item[0] === currency)
      .map((item) => item[1].name)
  );

  render() {
    const { expenses } = this.props;
    return (
      <div>
        Table
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((despesa) => (
              <tr key={ `${despesa.id}+${despesa.description}` }>
                <td>{ despesa.description }</td>
                <td>{ despesa.tag }</td>
                <td>{ despesa.method }</td>
                <td>{ parseFloat(despesa.value).toFixed(2) }</td>
                <td>{ this.getCurrencyDescFromRates(despesa) }</td>
                <td>{ parseFloat(this.getAskFromRates(despesa)).toFixed(2) }</td>
                <td>
                  {
                    (parseFloat(this.getAskFromRates(despesa))
                    * parseFloat(despesa.value)).toFixed(2)
                  }
                </td>
                <td>Real</td>
                <td>Vazio</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Table);
