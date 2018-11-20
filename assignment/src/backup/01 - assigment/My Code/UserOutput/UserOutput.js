import React from 'react';
import './UserOutput.css';

const useroutput = (props) =>{

    return(
        <div className="output">
            <p>Texto do primeiro parágrafo. {props.userName} </p>            
            <p text={props.text}> </p>            
        </div>
        
    )
};

export default useroutput;