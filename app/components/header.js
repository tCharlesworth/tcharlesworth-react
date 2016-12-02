import React from 'react';
import { Link } from 'react-router';


class HeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawer: ""
        };
    }
    toggleDrawer() {
        this.setState({drawer: this.state.drawer == "" ? "drawer-open" : ""})
    }
    render() {
        return (
            <header>
                <nav>
                    <ul className="header-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Projects</Link></li>
                    </ul>
                    <div className="header-hamburger" onClick={this.toggleDrawer.bind(this)}>
                        <i className="fa fa-bars fa-2x"></i>
                    </div>
                    <div className="header-title">
                        <h1>Tim Charlesworth</h1>
                    </div>
                    <div className="clearfix" />
                    <ul className={"header-drawer drawer "+this.state.drawer}>
                        <li><Link to="/" onClick={ this.toggleDrawer.bind(this) }>Home</Link></li>
                        <li><Link to="/" onClick={ this.toggleDrawer.bind(this) }>Projects</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent;