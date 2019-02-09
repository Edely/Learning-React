import React from 'react';
import Button from '../../UI/Button/Button';
import { twoDigits } from '../../../shared/utilities';

const tarefa = (props) =>{
    let date = null;
    if(props.prazo){
        date = new Date(parseInt(props.prazo));
        date = twoDigits(date.getDate()) + '/' + twoDigits(date.getMonth()) + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + twoDigits(date.getMinutes()) ;
    }
    
    return(
        <div className={'lista-tarefa__itens'}>
            <div className={'lista-tarefa__itens__info'}>{ date }</div>
            <div className={'lista-tarefa__itens__info'}>{props.tarefa} </div>
            <div className={'lista-tarefa__itens__info'}>{props.descricao}</div>            
            <div className={'lista-tarefa__itens__info'}>{props.responsavel}</div>
                      
            <div className={'lista-tarefa__itens__info'}><Button>Eas</Button></div>
        </div>
    );
};

export default tarefa;