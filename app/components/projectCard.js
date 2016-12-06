import React from 'react';

class ProjectCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: props.projectName,
            projectUrl: props.projectImage
        };
    }
    render() {
        return (
            <div className="container middle bg-white">
                <img className="img-responsive" src={ this.state.projectUrl } />
                <h3>{ this.state.projectName }</h3>
            </div>
        )
    }
}

export default ProjectCardComponent;