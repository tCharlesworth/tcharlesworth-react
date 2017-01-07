import React from 'react';

class PanoramaView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.location.query.title,
            imageUrl: this.props.location.query.imageUrl
        };
    }
    render() {
        return (
            <div className="wrapper-wide">
                <p className="big-text page-padding-half text-blue">{this.state.title || 'Picture'}</p>
                <div>
                    <iframe width="800" height="400" style={{border: 'none', margin: 'auto', display: 'block'}} allowFullScreen src={"https://cdn.pannellum.org/2.3/pannellum.htm?panorama="+this.state.imageUrl}></iframe>
                </div>
            </div>
        )
    }
}

export default PanoramaView;