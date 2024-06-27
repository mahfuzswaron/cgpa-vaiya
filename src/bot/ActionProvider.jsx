import React from 'react';
import { validateCgpa, validateSemester } from '../utils/validatorMethods';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const state = children.props.children.props.state;

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

    // start conversation
    const handleClickStart = () => {
        handleTargetCgpa();
    }


    // asks cgpa 
    const handleTargetCgpa = () => {
        const botMessage = createChatBotMessage("What's your target CGPA?");
        state.currentQuery = "target-cgpa";
        updateState(botMessage);
    }

    // receives cgpa 
    const handleSubmitTargetCgpa = (message) => {
        const validCgpa = validateCgpa(message);
        if (validCgpa) {
            state.userData.targetedCgpa = validCgpa;
            handleRegulation();
        } else {
            const botMessage = createChatBotMessage("Enter your target cgpa between 2.00 - 4.00");
            updateState(botMessage);
        }
    }

    // asks regulation 2016 / 2021
    const handleRegulation = () => {
        const botMessage = createChatBotMessage(
            "What's your Regulation?",
            {
                widget: 'Regulation',
            }
        );
        updateState(botMessage)

    };

    // receives regulation 
    const handleSubmitRegulation = (regulation) => {
        state.userData.regulation = regulation;
        handleCurrentSemester()
    }


    // asks semeseter
    const handleCurrentSemester = () => {
        const botMessage = createChatBotMessage("what's your current semester?");
        state.currentQuery = "current-semester";
        updateState(botMessage);
    }

    // receives semeseter
    const handleSubmitCurrentSemester = (message) => {
        const semester = validateSemester(message);
        if (semester) {
            state.userData.currentSemester = semester;
            console.log(state)
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