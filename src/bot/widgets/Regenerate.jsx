import React from 'react';

const Regenerate = (props) => {
    return (
        <div className='flex flex-start gap-2 react-chatbot-kit-chat-bot-message-container'>
            <button onClick={() => props.actions.handleClickRegenerate()} >Regenerate response</button>
        </div>
    );
};

export default Regenerate;