import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';

class App extends Component {


  render() {

    return (
      <div className={'main'}>
        <header className={'header'}>
          Tarefas Domésticas
        </header>
        <main className={'main'}>
          <Layout />         
        </main>
      </div>
    );
  }
}


export default App;
