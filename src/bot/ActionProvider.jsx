import React from 'react';
import { validateCgpa, validateSemester } from '../utils/validatorMethods';

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

    const handleClickStart = () => {
        handleTargetCgpa();
    }

    const handleTargetCgpa = () => {
        const botMessage = createChatBotMessage("What's your target CGPA?");
        children.props.children.props.state.currentQuery = "target-cgpa";
        updateState(botMessage);
    }

    const handleSubmitTargetCgpa = (message) => {
        const cgpa = message.trim();
        const validCgpa = validateCgpa(cgpa);
        if (validCgpa) {
            children.props.children.props.state.userData.targetedCgpa = cgpa;
            handleRegulation();
        }
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
        handleCurrentSemester()
    }

    const handleCurrentSemester = () => {
        const botMessage = createChatBotMessage("what's your current semester?");
        children.props.children.props.state.currentQuery = "current-semester";
        updateState(botMessage);
    }

    const handleSubmitCurrentSemester = (message) => {
        const semester = validateSemester(message);
        if(semester){
            children.props.children.props.state.userData.currentSemester = semester;
        } else {
            const botMessage = createChatBotMessage("Enter your semester from 1st - 8th");
            updateState(botMessage);
        }
    }




    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleClickStart,
                        handleSubmitTargetCgpa,
                        handleRegulation,
                        handleSubmitRegulation,
                        handleSubmitCurrentSemester
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;