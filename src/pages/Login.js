import React from 'react';
import { Redirect } from 'react-router-dom';

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
      enterDisabled: this.isButtonDisabled(),
    });
  }

  isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  isButtonDisabled = () => {
    const { email, password } = this.state;
    const minPassLenght = 4;

    return !(this.isValidEmail(email) && password.length > minPassLenght);
  };

  loginEvent = () => {
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
        <input
          type="button"
          value="Entrar"
          onClick={ this.loginEvent }
          disabled={ enterDisabled }
        />
      </div>
    );
  }
}

export default Login;
