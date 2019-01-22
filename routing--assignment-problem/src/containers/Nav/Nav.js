import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <li><NavLink to={{ pathname: '/users/' }}>Users</NavLink></li>
                    <li><NavLink to={{ pathname: '/courses/' }}>Courses</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;