import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    tarefas: [
      {
        tarefa: 'Lavar os Pratos',
        descricao: 'A melhor das tarefas. Quem não gosta?!!!',
        responsavel: 'Edely',
        prazo: '11/02/90'
      },
      {
        tarefa: 'Alimentar os Gatos',
        descricao: 'São uns monstros. Não demore!',
        responsavel: 'Selina',
        prazo: '25/12/2020'
      }
    ]
  }

  render() {

    return (
      <div className={'main'}>
        <header className={'header'}>
          Tarefas Domésticas
        </header>
        <ul className={'lista-tarefas'}>
          <li className={'lista-tarefa__itens'}>
            <span>Lavar os Pratos </span>
            <span>Selina </span>
            <span>11/02/90</span>
          </li>
        </ul>
      </div>
    );
  }
}


export default App;
