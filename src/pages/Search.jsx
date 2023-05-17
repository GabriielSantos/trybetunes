import React from 'react';
import Albuns from '../components/Albuns';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  state = {
    nameSearch: '',
    ButtonDisabled: true,
    loading: false,
    nameInput: '',
    albumSearch: '',
  };

  validateSearch = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(() => ({
      [name]: value,
    }));

    this.setState(() => ({
      ButtonDisabled: true,
    }), () => this.validateInput());
  };

  validateInput = () => {
    const { nameInput } = this.state;
    const minLength = 2;
    if (nameInput.length >= minLength) {
      this.setState(() => ({
        ButtonDisabled: false,
      }));
    }
  };

  searchArtist = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    }, async () => {
      const { nameInput } = this.state;
      const albumresult = await searchAlbumsAPI(nameInput);
      this.setState(({
        albumSearch: albumresult,
        loading: false,
        nameSearch: nameInput,
        nameInput: '',
      }));
    });
  };

  render() {
    const { ButtonDisabled, nameSearch, loading, albumSearch, nameInput } = this.state;

    const albumList = albumSearch !== '' ? (<Albuns
      albuns={ albumSearch }
      artistSearch={ nameSearch }
    />) : null;

    return (
      <div data-testid="page-search">
        <Header />
        <form action="">
          <input
            type="text"
            name="nameInput"
            id="nameInput"
            data-testid="search-artist-input"
            onChange={ this.validateSearch }
            value={ nameInput }
          />

          <button
            data-testid="search-artist-button"
            disabled={ ButtonDisabled }
            onClick={ this.searchArtist }
          >
            Pesquisar

          </button>
        </form>
        {loading ? <Loading /> : albumList}
      </div>
    );
  }
}

export default Search;
