import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tarefa from './Tarefa/Tarefa';
import * as actions from '../../store/actions';

class Tarefas extends Component{

    render(){

        let tarefas = null;
        if(this.props.tarefas){
            tarefas = this.props.tarefas.map(tarefa =>{
                return (
                    tarefas = <Tarefa 
                                nome={tarefa.nome}
                                descricao={tarefa.descricao}
                                prazo={tarefa.prazo}
                                props={tarefa.responsavel}/>
                    )
                });
        }
       
        return (
                <div className={'lista-tarefas'}>
                    {tarefas}
                </div>
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