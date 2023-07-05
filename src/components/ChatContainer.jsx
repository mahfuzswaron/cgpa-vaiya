import React from 'react';
import MessageBox from "./MessageBox.jsx";

const ChatContainer = ({ conversations }) => {
    return (
        <div className='flex flex-col-reverse overflow-auto'>
            <div className='p-3 space-y-5 max-h-min ' >
                {
                    conversations.map((message, index) => <MessageBox key={index} index={index} message={message} />)
                }
            </div>
        </div>
    );
};

export default ChatContainer;