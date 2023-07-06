import React from 'react';
import MessageBox from "./MessageBox.jsx";

const ChatContainer = ({ conversations, bottomMargin }) => {

    return (
        <div id='chat-container' className='flex flex-col-reverse overflow-auto'>
            <div className={`p-3 space-y-5 max-h-min`}>
                {
                    conversations.map((message, index) => (
                        <MessageBox
                            key={index}
                            index={index}
                            message={message}
                            style={{
                                marginBottom: index === conversations.length - 1 ? `${bottomMargin + 2}px` : '0',
                            }}
                        />
                    ))
                }
            </div>
        </div>
    );
};


export default ChatContainer;