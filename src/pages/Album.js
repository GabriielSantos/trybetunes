import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  state = {
    musicAlbum: {},
    musics: [],
    loading: true,
  };

  componentDidMount() {
    this.SearchMusics();
  }

  SearchMusics = async () => {
    const { match } = this.props;
    const { id } = match.params;
    const [musicAlbum, ...musics] = await getMusics(id);
    this.setState({
      musicAlbum,
      musics,
      loading: false,
    });
  };

  render() {
    const { musicAlbum, musics, loading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        { loading ? <Loading /> : (
          <div>
            <h2 data-testid="artist-name">{musicAlbum.artistName}</h2>
            <h3 data-testid="album-name">{musicAlbum.collectionName}</h3>
            {musics.map((music) => (
              <MusicCard key={ music.trackId } music={ music } />
            ))}
          </div>
        )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
