import React from 'react';
import avatar from '../assets/dev.png';

const BotAvatar = () => {
    return (
        <div className='react-chatbot-kit-chat-bot-avatar-container'>
            <div className="react-chatbot-kit-chat-bot-avatar">
                <img className="rounded-full react-chatbot-kit-chat-bot-avatar-letter" src={avatar} alt="Rounded avatar" />
            </div>
        </div>
    );
};

export default BotAvatar;