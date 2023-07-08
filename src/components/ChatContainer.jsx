import React from 'react';
import MessageBox from "./MessageBox.jsx";

const ChatContainer = ({ conversations, bottomMargin }) => {
    // console.log(bottomMargin)
    return (
        <div id='chat-container' className='flex flex-col-reverse overflow-auto'>
            <div className={`px-3 space-y-5 max-h-min`}>
                {
                    conversations.map((message, index) => (
                        <MessageBox
                            key={index}
                            message={message.message}
                            sender={message.sender}
                            style={{
                                marginBottom: index === conversations.length - 1 ? `${bottomMargin + 15}px` : '0',
                            }}
                        />
                    ))
                }
            </div>
        </div>
    );
};


export default ChatContainer;