import React from 'react';
const userOutput = (props) =>{
    return(
        <div>
            <p>Username: {props.userName}</p>
            <p>This will be overwritten</p>
        </div>
    )
}

export default userOutput;