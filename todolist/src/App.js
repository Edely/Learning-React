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
        <main className={'main'}>
          <Tarefas concluida />
          <Tarefas concluida={false} />
        </main>
      </div>
    );
  }
}


export default App;
