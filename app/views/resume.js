import React from 'react';

class ResumeView extends React.Component {
    render() {
        return (
            <div>
                <p className="big-text page-padding-half text-blue">Resume</p>
                <div className="container">
                    <p className="paragraph">
                        To download a pdf copy of my resume, click the link below!
                    </p>
                    <p className="text-center">
                        <a className="link" href="https://s3-us-west-2.amazonaws.com/tcharlesworth-portfolio/Files/Resume_Tim_Charlesworth.pdf" download>TimCharlesworthResume.pdf</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default ResumeView;