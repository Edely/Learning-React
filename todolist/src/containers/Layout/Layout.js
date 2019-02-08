import React, { Component } from 'react';
import Tarefas from '../../components/Tarefas/Tarefas';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

class Layout extends Component{

    render(){
        let tarefas =  null;

        if(this.props.tarefas){
            const tarefasConcluidas= this.props.tarefas.filter(tarefa => tarefa.prazo <= new Date().getTime() ) ;
            const tarefasAbertas = this.props.tarefas.filter(tarefa => tarefa.prazo > new Date().getTime() );
            console.log(tarefasConcluidas);
            console.log(tarefasAbertas);

            tarefas = (<div>            
                <Tarefas tarefas={tarefasConcluidas} />
                <Tarefas tarefas={tarefasAbertas} />
                </div>
            )
        }

        return <div>{tarefas}</div>
    };
};


const mapStateToProps = state =>{
    console.log(state)
    return{
        tarefas : state.tarefas
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onLoadTarefas : dispatch(actions.loadTarefas())
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(Layout);