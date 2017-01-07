import React from 'react';
import { Link } from 'react-router';

class ProjectCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: props.project.projectName,
            projectImage: props.project.projectImage,
            projectLink: props.project.projectLink,
            githubLink: props.project.githubLink
        };
    }
    render() {
        return (
            <div className="container middle bg-white">
                <img className="img-responsive" src={ this.state.projectImage } />
                <div className="project-header">
                    <h3 className="left inline">{ this.state.projectName }</h3>
                    <div className="inline right">
                        { this.state.githubLink ? (
                            <a href={ this.state.githubLink } target="_blank"><i className="fa fa-github"></i></a>
                        ) : null }
                        { this.state.projectLink ? (
                            <a href={ this.state.projectLink } target="_blank"><i className="fa fa-globe"></i></a>
                        ) : null }
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCardComponent;