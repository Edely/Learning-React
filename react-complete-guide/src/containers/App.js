import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';

class App extends PureComponent {

  constructor(props){
    super(props);
    console.log('[App.js] Inside Contructor', props)
    this.state = {
      persons: [
        { id: 'edasdas', name: 'Max', age: 28 },
        { id: 'gtrjt', name: 'Manu', age: 29 },
        { id: 'llglgl', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount', this.props)
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount', this.props)
  }

  // shouldComponentUpdate( nextProps, nextState ){
  //   console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
  //   return  nextState.persons !== this.state.persons ||
  //           nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState){
      console.log('[UPDATE App.js] Inside ComponentWillUpdate', nextProps, nextState );
  }

  componentDidUpdate(){
      console.log('[UPDATE App.js] Inside ComponentDidUpdate');
  }

  // state = {
  //   persons: [
  //     { id: 'edasdas', name: 'Max', age: 28 },
  //     { id: 'gtrjt', name: 'Manu', age: 29 },
  //     { id: 'llglgl', name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

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
    this.setState( (prevState, props)=> {
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked+1
      }
    });
  }

  render() {

    console.log('[App.js] Inside render', this.props)
          
    let persons = null;

    if(this.state.showPersons){
      persons = 
          <Persons 
            persons={ this.state.persons } 
            clicked={ this.deletePersonHandler }
            changed={ this.nameChangedHandler }
          />
    }

    return(      
      <Aux classes={classes.App}>
          <button onClick={ () => { this.setState({showPersons: true}) } } >Show Persons</button>
          <Cockpit 
            appTitle={ this.props.title }
            showPersons={ this.state.showPersons } 
            persons={ this.state.persons }
            clicked={ this.togglePersonsHandler }
          />
          {persons}
      </Aux>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does It Work now?'));
  }
}

export default withClass(App, classes.App);
