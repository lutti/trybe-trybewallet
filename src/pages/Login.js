import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { DoLogin } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      enterDisabled: true,
      loginDone: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.isButtonDisabled());
  }

  isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  isButtonDisabled = () => {
    const { email, password } = this.state;
    const minPassLenght = 5;

    this.setState({
      enterDisabled: !(this.isValidEmail(email) && password.length > minPassLenght),
    });
  };

  loginEvent = () => {
    const { email } = this.state;
    const { dispatch } = this.props;
    dispatch(DoLogin(email));
    this.setState({
      loginDone: true,
    });
  };

  render() {
    const { email, password, loginDone, enterDisabled } = this.state;
    if (loginDone) {
      return <Redirect push to="/carteira" />;
    }
    return (
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            data-testid="email-input"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            data-testid="password-input"
            onChange={ this.handleChange }
            value={ password }
          />
        </label>
        <button
          type="button"
          // value="Entrar"
          onClick={ this.loginEvent }
          disabled={ enterDisabled }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
