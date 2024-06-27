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

    const handleClickStart = () =>{
        handleTargetCgpa();
    }

    const handleTargetCgpa = () => {
        const botMessage = createChatBotMessage("What's your target CGPA?");
        children.props.children.props.state.currentQuery = "target-cgpa";
        updateState(botMessage);
    }

    const handleSubmitTargetCgpa = (message) => {
        console.log(message)
    }

    const handleRegulation = () => {
        const botMessage = createChatBotMessage(
            "What's your Regulation?",
            {
                widget: 'Regulation',
            }
        );
        updateState(botMessage)

    };

    const handleSubmitRegulation = (regulation) => {
        children.props.children.props.state.userData.regulation = regulation;
    }



    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleClickStart,
                        handleTargetCgpa,
                        handleSubmitTargetCgpa,
                        handleRegulation,
                        handleSubmitRegulation: handleSubmitRegulation
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;