import React, { Component } from 'react';

class Course extends Component {

    state = {
        selected: null,
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>You selected the Course with ID: {this.props.id}</p>
            </div>
        );
    }
}

export default Course;