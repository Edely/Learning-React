import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tarefas: null
}

const placeholderTarefas = [
    {
      tarefa: 'Lavar os Pratos',
      descricao: 'A melhor das tarefas. Quem não gosta?!!!',
      responsavel: 'Edely',
      prazo: '634769238'
    },
    {
      tarefa: 'Alimentar os Gatos',
      descricao: 'São uns monstros. Não demore!',
      responsavel: 'Selina',
      prazo: '1550177177'
    }
  ];

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.LOAD_TAREFAS:
        
            return {
                ...state,
                tarefas: placeholderTarefas
            }
            
        default:
            return state;
    }
}

export default reducer;