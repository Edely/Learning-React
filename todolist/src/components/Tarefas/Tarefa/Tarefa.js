import React from 'react';
import Button from '../../UI/Button/Button';

const tarefa = (props) =>{
    return(
        <div className={'lista-tarefa__itens'}>
            <div className={'lista-tarefa__itens__info'}>{props.prazo}</div>
            <div className={'lista-tarefa__itens__info'}>{props.tarefa} </div>
            <div className={'lista-tarefa__itens__info'}>{props.descricao}</div>            
            <div className={'lista-tarefa__itens__info'}>{props.responsavel}</div>
                      
            <div className={'lista-tarefa__itens__info'}><Button>Eas</Button></div>
        </div>
    );
};

export default tarefa;