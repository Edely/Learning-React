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
      feita: false
    },
    {
      nome: 'Alimentar os Gatos',
      descricao: 'São uns monstros. Não demore!',
      responsavel: 'Selina',
      prazo: '1551301799000',
      feita: true
    },
    {
      nome: 'Cortar a grama',
      descricao: 'Embora não tenhamos!',
      responsavel: 'Edely',
      prazo: '657580179080',
      feita: false
    },
    {
      nome: 'Dar banho nos jacarés',
      descricao: 'Extremamente dóceis',
      responsavel: 'Camila',
      prazo: '1555361489333',
      feita: false
    },
    {
      nome: 'Cortar a grama',
      descricao: 'Embora não tenhamos!',
      responsavel: 'Edely',
      prazo: '657580179080',
      feita: false
    },
    {
      nome: 'Dar banho nos jacarés',
      descricao: 'Extremamente dóceis',
      responsavel: 'Camila',
      prazo: '1555361489333',
      feita: true
    },
    {
      nome: 'Cortar a grama',
      descricao: 'Embora não tenhamos!',
      responsavel: 'Edely',
      prazo: '657580179080',
      feita: false
    },
    {
      nome: 'Dar banho nos jacarés',
      descricao: 'Extremamente dóceis',
      responsavel: 'Camila',
      prazo: '1555361489333',
      feita: false
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