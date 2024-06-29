import React from 'react';

const Start = (props) => {
    return (
        <div className='react-chatbot-kit-chat-bot-message-container'>
            <button className='' onClick={() => props.actions.handleClickStart()}> Let's Start...</button>
        </div>
    );
};

export default Start;