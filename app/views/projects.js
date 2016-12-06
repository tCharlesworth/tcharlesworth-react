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
                            <div className="container middle bg-white">
                                <img className="img-responsive" src={"assets/flatnotes.png"} />
                                <h3>TinyTorch</h3>
                            </div>
                            <div className="container middle bg-white">
                                <img className="img-responsive" src={"assets/onlineRecipes.png"} />
                                <h3>Kitchen Friend</h3>
                            </div>
                            <div className="container middle bg-white">
                                <img className="img-responsive" src={"assets/flatnotes.png"} />
                                <h3>Flat Notes</h3>
                            </div>
                        </div>
                        <div className="half right">
                            <div className="container middle bg-white">
                                <img className="img-responsive" src={"assets/flatnotes.png"} />
                                <h3 className="">DevMountain</h3>
                            </div>
                            <div className="container middle bg-white">
                                <img className="img-responsive" src={"assets/jquery-racing.png"} />
                                <h3>Jquery Racing</h3>
                            </div>
                            <div className="container middle bg-white">
                                <img className="img-responsive" src={"assets/meteors.png"} />
                                <h3>Meteors</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectsView;