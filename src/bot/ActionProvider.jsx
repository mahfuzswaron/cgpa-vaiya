import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const updateState = (botMessage) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }

    const handleHello = () => {
        const botMessage = createChatBotMessage('Hello. Nice to meet you.');
        updateState(botMessage)
    };

    const handleRegulation = () => {
        const botMessage = createChatBotMessage(
            "What's your Regulation?",
            {
                widget: 'Regulation',
            }
        );
        updateState(botMessage)

    };

    const handleUpdateRegulation = (regulation) => {
        children.props.children.props.state.userData.regulation = regulation;
        // console.log(children.props.children.props.state.userData.regulation);
    }



    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleRegulation,
                        handleUpdateRegulation
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;