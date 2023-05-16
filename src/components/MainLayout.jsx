import React from 'react';
import '../css/MainLayout.css';
import Header from './Header';
import Sidebar from './Sidebar';

class MainLayout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Sidebar />
          <div className="wrapper" />
        </main>
      </>
    );
  }
}

export default MainLayout;
