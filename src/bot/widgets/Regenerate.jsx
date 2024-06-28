import React from 'react';

const Regenerate = (props) => {
    return (
        <div className='flex flex-start gap-2 react-chatbot-kit-chat-bot-message-container'>
            <button onClick={() => props.actions.handleClickRegenerate()}> অল্টারনেটিভ প্রেডিকশন দেখতে চাই </button>
        </div>
    );
};

export default Regenerate;