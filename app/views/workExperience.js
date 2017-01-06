import React from 'react';

class WorkExperienceView extends React.Component {
    render() {
        return (
            <div>
                <p className="medium-text text-blue">Work Experience</p>
                <div className="container">
                    <p>
                        <em>TinyTorch - Web Developer</em>
                        <p>
                            Working at TinyTorch introduced me to many new technologies. I learned Ruby on Rails
                            while updating sections of the website to use Angular JS to help lighten server load.
                            I also implemented their internationalization system adding 3 languages of support to
                            the entire website accross 3 front end frameworks.
                        </p>
                        <em>Dev Mountain - Mentor</em>
                        <p>
                            After completing the full time web development course at Dev Mountain I worked as a 
                            student mentor. My responsibilities included working on company web projects while 
                            helping students learn MEAN stack web technologies. 
                        </p>
                    </p>
                </div>
            </div>
        )
    }
}

export default WorkExperienceView;