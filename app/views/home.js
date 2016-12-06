import React from 'react';

class HomeView extends React.Component {
  render() {
    return  (
      <div className="text-center">
        <p className="big-text page-padding text-blue">Web Developer</p>
        <div className="container text-center">
            <p>| - Angular - | - React - | - KnockoutJS - |</p>
            <p>| - Javascript - | - JQuery - | - Coffescript - |</p>
            <p>| - Rails - | - NodeJs - | - Express - |</p>
            <p>| - SQL - | - Mongo - | - Firebase - |</p>
        </div>
      </div>
    )
  }
}

export default HomeView;