import React from 'react';

import { Link } from 'react-router';

class VrPictureCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureTitle: props.pictureTitle,
            pictureUrl: props.pictureUrl
        };
    }
    render() {
        return (
            <div className="container-fluid">
                <img className="img-responsive" src={ this.state.pictureUrl } />
                <div className="project-header">
                    <Link to="/picture" query={{title: this.state.pictureTitle, imageUrl: this.state.pictureUrl}}><h3 className="left inline">{ this.state.pictureTitle }</h3></Link>
                </div>
            </div>
        )
    }
}

export default VrPictureCard;