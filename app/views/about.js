import React from 'react';

class AboutView extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <p className="big-text page-padding-half text-blue">About</p>
                <div className="container">
                    <p>
                        Hi i'm Tim Charlesworth I was born and raised in Utah and I love programming. After writing 
                        simple code on my TI-84 calculator in high school I pursued an interest in Computer Science learning C# and 
                        C++. I was drawn to web development because it is an industry constantly striving to find the best programming
                        practices. When I am not programming you might find me golfing or climbing one of Utah's many hiking trails.
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutView;