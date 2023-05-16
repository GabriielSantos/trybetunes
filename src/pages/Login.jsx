import PropTypes from 'prop-types';
import React from 'react';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  state = {
    nameInput: '',
    isSaveButtonDisabled: true,
    loading: false,
  };

  validateForm = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(() => ({
      [name]: value,
    }), () => this.validateInput());
  };

  validateInput = () => {
    const { nameInput } = this.state;
    const minLength = 3;
    if (nameInput.length >= minLength) {
      this.setState(() => ({
        isSaveButtonDisabled: false,
      }));
    }
  };

  salveInfos = async () => {
    const { nameInput } = this.state;
    const { history } = this.props;
    this.setState({
      loading: true,
    });
    await createUser({ name: nameInput });

    history.push('/search');
  };

  render() {
    const { isSaveButtonDisabled, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="page-login">
        <form action="">
          <input
            type="text"
            name="nameInput"
            id="nameInput"
            data-testid="login-name-input"
            onChange={ this.validateForm }
          />
          <button
            data-testid="login-submit-button"
            disabled={ isSaveButtonDisabled }
            onClick={ this.salveInfos }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
export default Login;
