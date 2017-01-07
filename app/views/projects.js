import React from 'react';

import ProjectCard from '../components/projectCard.js';
import ProjectDataUtil from '../utils/projectData.js';

class ProjectsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }
    componentDidMount() {
        // Load projects
        this.setState({
            projects: ProjectDataUtil.GetProjects()
        });
    }
    render() {
        return (
            <div>
                <p className="medium-text text-blue">Projects</p>
                <div className="container">
                    <p>
                        A well built website is like a well oiled machine. It has multiple key systems
                        working together to successfully accomplish a business vision. Below are a few I have worked on recently.
                    </p>
                    <div className="projects">
                        {this.state.projects.map((project) => {
                            return (
                                <ProjectCard project={project}/>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsView;