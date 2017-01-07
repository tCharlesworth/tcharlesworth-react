import React from 'react';

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
                    <h3 className="left inline">{ this.state.pictureTitle }</h3>
                </div>
            </div>
        )
    }
}

export default VrPictureCard;