import React from 'react';

import HeaderComponent from '../components/header.js';

class MainTemplate extends React.Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="app-wrapper">
            {this.props.children}
        </div>
      </div>
    )
  }
}

export default MainTemplate