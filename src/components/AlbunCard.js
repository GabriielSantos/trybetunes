import PropTypes from 'prop-types';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class AlbunCard extends Component {
  render() {
    const { albun } = this.props;
    const { collectionName, collectionId } = albun;
    return (
      <div>
        <img src={ albun.artworkUrl100 } alt="Albun" />
        <p>
          {collectionName}
        </p>
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
        >
          Ver Album

        </Link>
      </div>
    );
  }
}

AlbunCard.propTypes = {
  albun: PropTypes.shape({
    artistId: PropTypes.number,
    artistName: PropTypes.string,
    collectionId: PropTypes.number,
    collectionName: PropTypes.string,
    collectionPrice: PropTypes.number,
    artworkUrl100: PropTypes.string,
    releaseDate: PropTypes.string,
    trackCount: PropTypes.number,
  }).isRequired,
};

export default AlbunCard;
