import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  }

  switchNameHandler = (newName) =>{
    //DONT DO THIS this.state.persons[0].name = 'Maximilian';

    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = (event) =>{
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p>This is really working!</p>    
          <button 
            style={style}
            onClick={() => this.switchNameHandler('Alexandro!')}>Switch Name</button>      
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Martinália')}
            changed={this.nameChangedHandler}>My hobbies: Racing </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[0].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does It Work now?'));
  }
}

export default App;
