import React from 'react';

import ProjectsView from './projects.js';
import WorkExperienceView from './workExperience.js';
import ResumeView from './resume.js';

class PortfolioView extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="text-center">
                    <p className="big-text page-padding text-blue">Web Portfolio</p>
                    <div className="container text-center">
                        <p>| - Angular - | - React - | - KnockoutJS - | - Ionic - |</p>
                        <p>| - Javascript - | - JQuery - | - Ruby - | - Coffescript - |</p>
                        <p>| - Rails - | - NodeJs - | - Express - |</p>
                        <p>| - SQL - | - Mongo - | - Firebase - |</p>
                    </div>
                </div>
                <div className="page-padding-half"></div>
                <WorkExperienceView />
                <ProjectsView />
                <ResumeView />
                <div className="page-padding-half"></div>
            </div>
        )
    }
}

export default PortfolioView;