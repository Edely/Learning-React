import React from 'react';

const validationComponent = (props) =>{
    return(
        <div> {props.tamanho < 10 ? 'Too short': 'Long Enough'} </div>
    );
}

export default validationComponent;