import React from 'react';
import { Link } from 'react-router';

class HomeView extends React.Component {
  render() {
    return  (
      <div className="text-center">
        <p className="big-text page-padding text-blue">Web Developer</p>
        <div className="container text-center">
            <p>
              | <Link to="/portfolio">- Web Portfolio -</Link> | &nbsp;
              <Link to="/about">- About -</Link> | 
              - VR <small>(Coming Soon)</small> - |
            </p>
        </div>
      </div>
    )
  }
}

export default HomeView;