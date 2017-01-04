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
                        working together to successfully accomplish a business vision. Below are a few I have worked on recently.
                    </p>
                    <div className="projects">
                        <div className="half left">
                            <ProjectCard projectName="TinyTorch" projectImage="assets/tinytorch-snapshot.png" projectLink="https://www.tinytorch.com" />
                            <ProjectCard projectName="Flat Notes" projectImage="assets/flatnotes.png" projectLink="https://flatnotes.firebaseapp.com" />
                            <ProjectCard projectName="Jquery Racing" projectImage="assets/jquery-racing.png" projectLink="https://tcharlesworth.github.io/jquery-racing" githubLink="https://github.com/tCharlesworth/jquery-racing" />
                        </div>
                        <div className="half right">
                            <ProjectCard projectName="Kitchen Friend" projectImage="assets/onlineRecipes.png" projectLink="http://kitchenfriend.tcharlesworth.com/"/>
                            <ProjectCard projectName="Meteors" projectImage="assets/meteors.png" projectLink="https://tcharlesworth.github.io/meteors" githubLink="https://github.com/tCharlesworth/meteors"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsView;