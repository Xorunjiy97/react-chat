import React from 'react';

const Message = props => {
    return (
        <li 
            className={
                        props.user !== props.currentUser ? 
                        'chat-window__message' :
                        'chat-window__message current-user-message'
                      }
        > 
            <span className='message__user-name'>{props.user}</span>
            <span className='message__user-message'>{props.text}</span>
        </li>    
    )
}

export default React.memo(Message);