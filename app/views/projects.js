import React from 'react';

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
                            <h3>TinyTorch</h3>
                        </div>
                        <div className="half right">
                            <h3>Dev Mountain</h3>
                        </div>
                        <div className="clearfix"></div>
                        <div className="half left">
                            <h3>Kitchen Friend</h3>
                        </div>
                        <div className="half right">
                            <h3>Meteors</h3>
                        </div>
                        <div className="clearfix"></div>
                        <div className="half left">
                            <h3>Jquery Racing</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsView;