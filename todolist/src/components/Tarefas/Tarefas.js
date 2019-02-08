import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';


class Tarefas extends Component{

    componentWillMount(){
        
    }

    render(){

        let tarefas = null;
        if(this.props.tarefas){
            tarefas = this.props.tarefas.map(tarefa =>{
                return (
                <li className={'lista-tarefa__itens'}>
                    <span>{tarefa.tarefa} </span>
                    <span>{tarefa.responsavel}</span>
                    <span>{tarefa.prazo}</span>
                </li>)
                });
        }
       
        return (
                <ul className={'lista-tarefas'}>
                    {tarefas}
                </ul>
            );
    }
    
}

const mapStateToProps = state =>{
    
    return{
        tarefas : state.tarefas
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onLoadTarefas : dispatch(actions.loadTarefas())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Tarefas);