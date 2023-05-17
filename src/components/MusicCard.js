import PropTypes from 'prop-types';
import React from 'react';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  state = {
    loading: false,
    isFavorite: false,
    favoritesMusics: undefined,
  };

  componentDidMount() {
    this.addFavoriteMusic();
  }

  addFavoriteMusic = () => {
    this.setState({
      loading: false,
    }, async () => {
      const favoritesMusics = await getFavoriteSongs();
      this.setState({
        favoritesMusics,
      });
    });
  };

  verifyFavorite = async ({ target }) => {
    const { music } = this.props;
    this.setState({
      isFavorite: target.checked,
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
    const { isFavorite, loading, favoritesMusics } = this.state;
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

            <label htmlFor="favoriteSong">
              Favorita
              {favoritesMusics && favoritesMusics
                .find((favorite) => favorite.trackId === trackId) !== undefined
                ? (
                  <input
                    type="checkbox"
                    data-testid={ `checkbox-music-${trackId}` }
                    onChange={ this.handleFavorites }
                    checked
                  />)
                : (
                  <input
                    type="checkbox"
                    name="favoriteSong"
                    id="favoriteSong"
                    data-testid={ `checkbox-music-${trackId}` }
                    checked={ isFavorite }
                    onChange={ this.verifyFavorite }
                  />
                )}
            </label>
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
