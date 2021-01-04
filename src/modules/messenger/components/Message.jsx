import React from 'react';

const Message = props => {
    return (
        <li className={props.user === props.Curentuser ? 
        'chat-window__message' :
        'chat-window__message current-user-message'
    } />
    )
}

export default React.memo(Message);