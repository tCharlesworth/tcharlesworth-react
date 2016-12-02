import React from 'react';

class SocialLinksComponent extends React.Component {
    render() {
        return (
            <ul className="social-box bottom-left">
                <li><a href="http://www.twitter.com"><i className="fa fa-twitter"></i></a></li>
                <li><a href="http://www.github.com"><i className="fa fa-github"></i></a></li>
            </ul>
        )
    }
}

export default SocialLinksComponent;