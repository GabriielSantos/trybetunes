import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  state = {
    nameSearch: '',
    ButtonDisabled: true,
  };

  validateSearch = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(() => ({
      [name]: value,
    }));

    const { nameSearch } = this.state;
    const minLength = 2;
    if (nameSearch.length >= minLength) {
      this.setState(() => ({
        ButtonDisabled: false,
      }));
    }
  };

  render() {
    const { ButtonDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form action="">
          <input
            type="text"
            name="artist"
            id="artist"
            data-testid="search-artist-input"
            onChange={ this.validateSearch }
          />

          <button
            data-testid="search-artist-button"
            disabled={ ButtonDisabled }
          >
            Pesquisar

          </button>
        </form>
      </div>
    );
  }
}

export default Search;
