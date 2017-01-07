import React from 'react';

import VrPictureCard from '../components/vrPictureCard.js';
import VrDataUtil from '../utils/vrData.js';

class VrView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    }
    componentDidMount() {
        this.setState({
            images: VrDataUtil.GetImages()
        });
    }
    render() {
        return (
            <div className="wrapper-wide">
                <p className="big-text page-padding-half text-blue">VR</p>
                <div className="projects">
                    { this.state.images.map((image) => {
                        return (
                            <VrPictureCard key={image.id} pictureId={image.id} pictureUrl={ image.thumbnailUrl } pictureTitle={image.title} hasVr={ image.vrUrl ? true : false } />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default VrView;