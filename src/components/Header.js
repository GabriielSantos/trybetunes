import React from 'react';
import { NavLink } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  state = {
    loading: true,
    userName: '',
  };

  async componentDidMount() {
    try {
      const user = await getUser();
      this.setState({
        loading: false,
        userName: user.name,
      });
    } catch (error) {
      console.error('Erro ao encontrar o nome de usuário', erro);
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { loading, userName } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <header data-testid="header-component">
        <nav>
          <NavLink to="/search" activeClassName="active" data-testid="link-to-search">
            Search
          </NavLink>
          <NavLink
            to="/favorites"
            activeClassName="active"
            data-testid="link-to-favorites"
          >
            Favorites
          </NavLink>
          <NavLink to="/profile" activeClassName="active" data-testid="link-to-profile">
            Profile
          </NavLink>
        </nav>
        <p data-testid="header-user-name">{userName}</p>
      </header>
    );
  }
}

export default Header;
