import PropTypes from 'prop-types';
import React from 'react';
import AlbunCard from './AlbunCard';

class Albuns extends React.Component {
  render() {
    const { albuns, artistSearch } = this.props;
    return (
      (albuns.length > 1) ? (
        <div className="albuns-result">
          <p>
            Resultado de álbuns de:
            {' '}
            {artistSearch}
          </p>
          {albuns.map((albun) => (<AlbunCard
            albun={ albun }
            key={ albun.collectionId }
          />))}
        </div>) : <div>Nenhum álbum foi encontrado</div>
    );
  }
}

Albuns.propTypes = {
  albuns: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.number,
    artistName: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    collectionPrice: PropTypes.number,
    artworkUrl100: PropTypes.string,
    releaseDate: PropTypes.string,
    trackCount: PropTypes.number,
  })).isRequired,
  artistSearch: PropTypes.string.isRequired,
};

export default Albuns;
