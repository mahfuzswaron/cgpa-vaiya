import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
        updateState(botMessage)
    };

    const handleSession = () => {
        const botMessage = createChatBotMessage(
            "What's your Session?",
            {
                widget: 'Session',
            }
        );
        updateState(botMessage)

    };

    const updateState = (botMessage) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }


    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleSession
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;