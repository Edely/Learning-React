import React from 'react';

const userinput = (props) =>{
    return(
        <div>
            <input onChange={props.changed} type="text" />
        </div>
    )
}

export default userinput;