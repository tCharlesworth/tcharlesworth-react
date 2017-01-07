import React from 'react';

import { Link } from 'react-router';

class VrPictureCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureTitle: props.pictureTitle,
            pictureUrl: props.pictureUrl,
            pictureId: props.pictureId,
            hasVr: props.hasVr
        };
    }
    render() {
        return (
            <div className="container-fluid">
                <img className="img-responsive" src={ this.state.pictureUrl } />
                <div className="project-header">
                    <h3 className="left inline">{ this.state.pictureTitle }</h3>
                    <div className="inline right">
                    { this.state.hasVr ? (
                            <Link to="/picture" query={ {id: this.state.pictureId} }><i className="fa fa-picture-o"></i></Link>
                        ) : null }
                    </div>
                </div>
            </div>
        )
    }
}

export default VrPictureCard;