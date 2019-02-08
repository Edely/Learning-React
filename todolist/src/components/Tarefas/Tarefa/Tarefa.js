import React from 'react'

const tarefa = (props) =>{
    return(
        <div className={'lista-tarefa__itens'}>
            <div className={'lista-tarefa__itens__info'}>{props.tarefa} </div>
            <div className={'lista-tarefa__itens__info'}>{props.responsavel}</div>
            <div className={'lista-tarefa__itens__info'}>{props.prazo}</div>
            <div className={'lista-tarefa__itens__info'}>{props.descricao}</div>
        </div>
    )
}

export default tarefa;