import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAskFromRates } from '../Utilidades';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    // if (expenses.lenght > 0) {
    // this.getAskFromRates(expenses[0].exchangeRates, 'USD');
    const sItem = expenses.map((item) => (
      parseFloat(getAskFromRates(item)) * parseFloat(item.value)
    ));
    const total = sItem.reduce((acc, cur) => (acc + cur), 0).toFixed(2);

    return (
      <div>
        Header
        <p data-testid="email-field">
          Bem vindx,
          { email }
        </p>
        <p data-testid="total-field">
          { total }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);
