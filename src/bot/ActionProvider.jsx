import React from 'react';
import { validateCgpa, validatePrevResults, validateSemester } from '../utils/validatorMethods';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

    const updateState = (botMessage, currentQuery = null) => {
        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
            currentQuery
        }));
    }

    const updateUserState = (updatedData) => {
        setState((prev) => ({
            ...prev,
            userData: { ...prev.userData, ...updatedData }
        }))
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
        updateState(botMessage, "target-cgpa");
    }

    // receives cgpa 
    const handleSubmitTargetCgpa = (message) => {
        const validCgpa = validateCgpa(message);
        if (validCgpa) {
            updateUserState({ targetedCgpa: validCgpa })
            handleRegulation();
        } else {
            const botMessage = createChatBotMessage("Enter your target cgpa between 2.00 - 4.00");
            updateState(botMessage, "target-cgpa");
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
        children.props.children.props.state.userData.regulation = regulation;
        updateUserState({ regulation: regulation })
        handleCurrentSemester()
    }


    // asks semeseter
    const handleCurrentSemester = () => {
        const botMessage = createChatBotMessage("what's your current semester?");
        updateState(botMessage, "current-semester");
    }

    // receives semeseter
    const handleSubmitCurrentSemester = (message) => {
        const semester = validateSemester(message);
        console.log("in sub-cur-sem", semester)
        if (semester) {
            updateUserState({ currentSemester: semester })
            if (semester === 1) {
                displayCgpaList()
            } else {
                handlePreviousResults();
            }

        } else {
            const botMessage = createChatBotMessage("Enter your semester from 1st - 8th");
            updateState(botMessage, "current-semester");
        }
    }

    // asks previous results
    const handlePreviousResults = () => {
        const botMessage = createChatBotMessage("What are your prevous resutls? Enter the results separating by commas like this: 3.00, 3.50, 3.30");
        updateState(botMessage, "previous-results");
    }

    const handleSubmitPreviousResults = (message) => {
        const currentSemester = children.props.children.props.state.userData.currentSemester;
        const prevResultLength = currentSemester - 1;
        const { cgpas: prevResult, len } = validatePrevResults(message);
        console.log(prevResult, len);
        // check if the message contains all the result
        if (prevResultLength === len) {
            updateUserState({ previousResults: prevResult });
            displayCgpaList();
        }
        else {
            const botMessage = createChatBotMessage("Enter your previous results separeting by commas. eg: 3.00, 3.50, 3.30");
            updateState(botMessage, "previous-results");
        }
    }


    const displayCgpaList = () => {
        console.log("here's the result");
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
                        handleSubmitCurrentSemester,
                        handleSubmitPreviousResults
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;