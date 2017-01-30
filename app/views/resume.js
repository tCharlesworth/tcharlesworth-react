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
                        <a className="link" href="../resources/TimCharlesworthResume.pdf" download>TimCharlesworthResume.pdf</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default ResumeView;