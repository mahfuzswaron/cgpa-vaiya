import React from 'react';

const MessageLoader = () => {
    return (
        <div className='chatbot-loader-container'>
            <div className='react-chatbot-kit-chat-bot-loading-icon-container'>
                <div id="chatbot-loader">
                    <span id="chatbot-loader-dot1">.</span>
                    <span id="chatbot-loader-dot2">.</span>
                    <span id="chatbot-loader-dot3">.</span>
                </div>
            </div>
        </div>
    );
};

export default MessageLoader;