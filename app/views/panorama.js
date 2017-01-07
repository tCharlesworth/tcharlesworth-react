import React from 'react';

import VrDataUtil from '../utils/vrData.js';

class PanoramaView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.location.query.id,
            vrUrl: ''
        };
    }
    componentDidMount() {
        let imageData = VrDataUtil.GetImage(this.state.id);
        this.setState({
            vrUrl: imageData.vrUrl,
            title: imageData.title
        });
    }
    render() {
        return (
            <div className="wrapper-wide">
                <p className="big-text page-padding-half text-blue">{this.state.title || 'Picture'}</p>
                <div>
                    <iframe width="800" height="400" style={{border: 'none', margin: 'auto', display: 'block'}} allowFullScreen src={"vendor/pannellum/pannellum.htm?panorama="+this.state.vrUrl}></iframe>
                </div>
            </div>
        )
    }
}

export default PanoramaView;