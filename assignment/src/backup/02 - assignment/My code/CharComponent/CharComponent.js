import React from 'react';

const charComponent = (props) =>{
    return (
        <div>
            <p style={props.style} key={props.id} onClick={props.click}>{props.letter}</p>
        </div>
    );
}

export default charComponent;