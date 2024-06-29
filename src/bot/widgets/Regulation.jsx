import React from 'react';

const Regulation = (props) => {
    const handleSelectRegulation = (e) => {
        const regulation = e.target.value;
        props.actions.handleSubmitRegulation(regulation);
    }
    return (
        <div className='flex flex-start gap-2 react-chatbot-kit-chat-bot-message-container font-[poppins]'>
            <button onClick={handleSelectRegulation} value={"diploma_2016"}>2016</button>
            <button onClick={handleSelectRegulation} value={"diploma_2022"}>2022</button>
        </div>
    );
};

export default Regulation;