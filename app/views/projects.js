import React from 'react';

import ProjectCard from '../components/projectCard.js';

class ProjectsView extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <p className="big-text page-padding-half text-blue">Projects</p>
                <div className="container">
                    <p>
                        A well built website is like a well oiled machine. It has multiple key systems
                        working together to successfully accomplish a business vision.
                    </p>
                    <div className="projects">
                        <div className="half left">
                            <ProjectCard projectName="Tinytorch" projectImage="assets/flatnotes.png" />
                            <ProjectCard projectName="Kitchen Friend" projectImage="assets/onlineRecipes.png" />
                            <ProjectCard projectName="Flat Notes" projectImage="assets/flatnotes.png" />
                        </div>
                        <div className="half right">
                            <ProjectCard projectName="DevMountain" projectImage="assets/flatnotes.png" />
                            <ProjectCard projectName="Jquery Racing" projectImage="assets/jquery-racing.png" />
                            <ProjectCard projectName="Meteors" projectImage="assets/meteors.png" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsView;