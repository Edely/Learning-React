import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: 'Panda'
  }

  myEventHandler = (event) =>{
    console.log('aaaaaa');
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      
      <UserInput changed={this.myEventHandler} />
      {/* <UserOutput userName="Selina"/> */}
      <UserOutput userName={this.state.userName}> "Texto do segundo parágrafo."</UserOutput>
      </div>
    );
  }
}

export default App;
