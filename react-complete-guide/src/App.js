import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: 'edasdas', name: 'Max', age: 28 },
      { id: 'gtrjt', name: 'Manu', age: 29 },
      { id: 'llglgl', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
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

  nameChangedHandler = (event, id) =>{

    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });

    //const person = Object.assign({}, this.state.persons[personIndex]);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
          
    let persons = null;
    let btnClass = '';

    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      btnClass = classes.Red;

    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }


    return (
      <div className={classes.App}>
          <h1>Hehhehe</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>    
          <button 
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>     
          {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does It Work now?'));
  }
}

export default App;
