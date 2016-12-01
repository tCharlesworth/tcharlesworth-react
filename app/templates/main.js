import React from 'react';

class MainTemplate extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default MainTemplate