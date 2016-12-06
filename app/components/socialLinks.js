import React from 'react';

class SocialLinksComponent extends React.Component {
    render() {
        return (
            <ul className="social-box bottom-left fa-2x">
                <li><a href="https://twitter.com/t1m0thyC" target="_blank"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://github.com/tCharlesworth" target="_blank"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/pub/tim-charlesworth/104/139/6b8" target="_blank"><i className="fa fa-linkedin"></i></a></li>
            </ul>
        )
    }
}

export default SocialLinksComponent;