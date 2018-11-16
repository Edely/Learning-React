import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>          
          <Person name="Max" age ="28"/>
          <Person name= "Manu" age="29">My hobbies: Racing </Person>
          <Person name="Stephani" age="26"/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does It Work now?'));
  }
}

export default App;
