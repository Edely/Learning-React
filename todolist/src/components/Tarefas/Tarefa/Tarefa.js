import React from 'react';
import Button from '../../UI/Button/Button';
import { twoDigits } from '../../../shared/utilities';

const tarefa = (props) =>{
    let date = null;
    if(props.prazo){
        date = new Date(parseInt(props.prazo));
        date = twoDigits(date.getDate()) + '/' + twoDigits(date.getMonth()) + '/' + date.getFullYear() + '  ' + date.getHours() + ':' + twoDigits(date.getMinutes()) ;
    }
    const classesDate = ['lista-tarefa__itens__info', 'lista-tarefa__itens__info--date'];

    if(props.atrasada){
        classesDate.push('tarefa-fechada');
    }

    return(
        <div className={'lista-tarefa__itens'}>
            <div className={'lista-tarefa__itens__info lista-tarefa__itens__info--name'}>{props.nome} </div>
            <div className={'lista-tarefa__itens__info lista-tarefa__itens__info--description'}>{props.descricao}</div>
            <div className={'lista-tarefa__itens__info lista-tarefa__itens__info--owner'}>{props.responsavel}</div>
            <div className={classesDate.join(' ')}>{ date }</div>
            <div className={'lista-tarefa__itens__info'}><Button>Eas</Button></div>
        </div>
    );
};

export default tarefa;