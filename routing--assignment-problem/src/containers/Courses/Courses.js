import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Post from '../Course/Course';

import './Courses.css';
import Course from '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseSelectHandler = (id) => {
        console.log(id);
    }

    render() {
        let courses = this.state.courses.map(course => {
            return <article className="Course" key={course.id} clicked={this.courseSelectHandler(course.id)} >{course.title} </article>;
        })

        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {courses}
                </section>
                {this.state.courses.map(course => {
                    return <Route key={course.id} name={course.title} id={course.id} clicked={this.courseSelectHandler(course.id)} />;
                })}
            </div>
        );
    }
}

export default Courses;