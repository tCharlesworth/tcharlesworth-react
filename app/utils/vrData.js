


var vrData = {
    GetImages() {
        return data;
    },
    GetImage(id) {
        for(var i = 0; i < data.length; i++) {
            if (data[i].id == id) {
                return data[i] 
            }
        }
        return null;
    }
}

module.exports = vrData;

var data = [
    {
        id: '1',
        title: 'Corner Canyon 1',
        thumbnailUrl: 'https://s3-us-west-2.amazonaws.com/tcharlesworth-portfolio/VR/corner_canyon_1_preview.jpg',
        vrUrl: null
    },
    {
        id: 2,
        title: 'Corner Canyon 2',
        thumbnailUrl: 'https://s3-us-west-2.amazonaws.com/tcharlesworth-portfolio/VR/corner_canyon_2_preview.jpg',
        vrUrl: 'https://s3-us-west-2.amazonaws.com/tcharlesworth-portfolio/VR/corner_canyon_2_preview.jpg'
    },
    {
        id: 3,
        title: 'Rocky Mouth',
        thumbnailUrl: 'https://s3-us-west-2.amazonaws.com/tcharlesworth-portfolio/VR/rocky_mouth_1_preview.jpg',
        vrUrl: null
    }, {
        id: 4,
        title: 'Rocky Mouth Waterfall',
        thumbnailUrl: 'https://s3-us-west-2.amazonaws.com/tcharlesworth-portfolio/VR/rocky_mouth_waterfall_preview.jpg',
        vrUrl: null
    }
];