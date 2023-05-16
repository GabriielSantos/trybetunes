import React from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import Search from './pages/Search';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" render={ (props) => <Login { ...props } /> } exact />
        <Route path="/search" component={ Search } exact />
        <Route path="/album/:id" component={ Album } exact />
        <Route path="/favorites" component={ Favorites } exac />
        <Route path="/profile" component={ Profile } exac />
        <Route path="/profile/edit" component={ ProfileEdit } exac />
        <Route path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
