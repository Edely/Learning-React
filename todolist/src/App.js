import React, { Component } from 'react';
import './App.css';
import Tarefas from './components/Tarefas/Tarefas';

class App extends Component {


  render() {

    return (
      <div className={'main'}>
        <header className={'header'}>
          Tarefas Domésticas
        </header>
        <Tarefas />
      </div>
    );
  }
}


export default App;
