import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tarefas: null
}

const placeholderTarefas = [
    {
      nome: 'Lavar os Pratos',
      descricao: 'A melhor das tarefas. Quem não gosta?!!!',
      responsavel: 'Edely',
      prazo: '657580199000',
      status: 'aberta'
    },
    {
      nome: 'Alimentar os Gatos',
      descricao: 'São uns monstros. Não demore!',
      responsavel: 'Selina',
      prazo: '1551301799000',
      status: 'fechada'
    },
    {
      nome: 'Cortar a grama',
      descricao: 'Embora não tenhamos!',
      responsavel: 'Edely',
      prazo: '657580179080',
      status: 'aberta'
    },
    {
      nome: 'Dar banho nos jacarés',
      descricao: 'Extremamente dóceis',
      responsavel: 'Camila',
      prazo: '1555361489333',
      status: 'aberta'
    },
    {
      nome: 'Cortar a grama',
      descricao: 'Embora não tenhamos!',
      responsavel: 'Edely',
      prazo: '657580179080',
      status: 'aberta'
    },
    {
      nome: 'Dar banho nos jacarés',
      descricao: 'Extremamente dóceis',
      responsavel: 'Camila',
      prazo: '1555361489333',
      status: 'fechada'
    },
    {
      nome: 'Cortar a grama',
      descricao: 'Embora não tenhamos!',
      responsavel: 'Edely',
      prazo: '657580179080',
      status: 'aberta'
    },
    {
      nome: 'Dar banho nos jacarés',
      descricao: 'Extremamente dóceis',
      responsavel: 'Camila',
      prazo: '1555361489333',
      status: 'aberta'
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