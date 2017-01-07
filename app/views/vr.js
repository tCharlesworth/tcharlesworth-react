import React from 'react';

import VrPictureCard from '../components/vrPictureCard.js';

class VrView extends React.Component {
    render() {
        return (
            <div className="wrapper-wide">
                <p className="big-text page-padding-half text-blue">VR</p>
                <div>
                    <VrPictureCard pictureUrl="https://s3-us-west-2.amazonaws.com/tcharlesworth-portfolio/VR/corner_canyon_1_preview.jpg" pictureTitle="Corner Canyon 1" />
                    <VrPictureCard pictureUrl="https://s3-us-west-2.amazonaws.com/tcharlesworth-portfolio/VR/corner_canyon_2_preview.jpg" pictureTitle="Corner Canyon 2" />
                    <VrPictureCard pictureUrl="https://s3-us-west-2.amazonaws.com/tcharlesworth-portfolio/VR/rocky_mouth_1_preview.jpg" pictureTitle="Rocky Mouth" />
                    <VrPictureCard pictureUrl="https://s3-us-west-2.amazonaws.com/tcharlesworth-portfolio/VR/rocky_mouth_waterfall_preview.jpg" pictureTitle="Rocky Mouth Waterfall" />
                </div>
            </div>
        )
    }
}

export default VrView;