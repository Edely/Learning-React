import React from 'react';
import Tarefa from './Tarefa/Tarefa';

const tarefas = (props) =>{
        let tarefas = null;
        if(props.tarefas){                 

            tarefas = props.tarefas.map(tarefa =>{
                
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
                    <div className={'lista-tarefas__header'}> {props.concluida ? 'Tarefas Concluídas': 'Tarefas Por Fazer'}</div>
                    {tarefas}
                </div>
            );
    }


export default tarefas;