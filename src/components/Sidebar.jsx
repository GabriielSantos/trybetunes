import React from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <section className="Sidebar">
        <nav>
          <NavLink to="/" activeClassName="active" exact>
            Login
          </NavLink>
          <NavLink to="/search" activeClassName="active">
            Pesquisa
          </NavLink>
          <NavLink to="/favorites" activeClassName="active">
            Favoritas
          </NavLink>
          <NavLink to="/profile" activeClassName="active">
            Profile
          </NavLink>
        </nav>
      </section>
    );
  }
}
export default Sidebar;
