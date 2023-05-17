import PropTypes from 'prop-types';
import React from 'react';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  state = {
    loading: false,
    favoriteMusic: false,
  };

  addFavoriteMusic = async ({ target }) => {
    const { music } = this.props;
    this.setState({
      favoriteMusic: target.checked,
      loading: true,
    });
    await addSong(music);
    this.setState({
      loading: false,
    });
  };

  render() {
    const { music } = this.props;
    const { trackName, previewUrl, trackId } = music;
    const { favoriteMusic, loading } = this.state;
    return (
      <div>
        { loading ? <Loading /> : (
          <div>
            <p>{trackName}</p>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              {' '}
              <code>audio</code>
              .
            </audio>

            <label
              htmlFor="favoriteSong"
            >
              Favorita
            </label>
            <input
              type="checkbox"
              name="favoriteSong"
              id="favoriteSong"
              data-testid={ `checkbox-music-${trackId}` }
              checked={ favoriteMusic }
              onChange={ this.addFavoriteMusic }
            />
          </div>
        )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
};

export default MusicCard;
