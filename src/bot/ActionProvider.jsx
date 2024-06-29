import React from 'react';
import { validateCgpa, validatePrevResults, validateSemester } from '../utils/validatorMethods';
import { getPredictedResult } from '../utils/get-cgpa-list';
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
        const botMessage = createChatBotMessage('হ্যালো।');
        updateState(botMessage)
    };

    // start conversation
    const handleClickStart = () => {
        handleTargetCgpa();
    }


    // asks cgpa 
    const handleTargetCgpa = () => {
        const botMessage = createChatBotMessage("ফাইনালে কত CGPA পেতে চাও?");
        updateState(botMessage, "target-cgpa");
    }

    // receives cgpa 
    const handleSubmitTargetCgpa = (message) => {
        const validCgpa = validateCgpa(message);
        if (validCgpa) {
            updateUserState({ targetedCgpa: validCgpa })
            handleRegulation();
        } else {
            const botMessage = createChatBotMessage("CGPA অবশ্যই 2.00 - 4.00 এর মধ্যে হতে হবে। এবং দশমিক সংখ্যায় লিখবে।");
            updateState(botMessage, "target-cgpa");
        }
    }

    // asks regulation 2016 / 2021
    const handleRegulation = () => {
        const botMessage = createChatBotMessage(
            "তোমার প্রবিধান কত?",
            {
                widget: 'Regulation',
            }
        );
        updateState(botMessage)

    };

    // receives regulation 
    const handleSubmitRegulation = (regulation) => {
        updateUserState({ regulation: regulation })
        handleCurrentSemester()
    }


    // asks semeseter
    const handleCurrentSemester = () => {
        const botMessage = createChatBotMessage("বর্তমানে কোন সেমিস্টারে পড়ছো?");
        updateState(botMessage, "current-semester");
    }

    // receives semeseter
    const handleSubmitCurrentSemester = (message) => {
        const semester = validateSemester(message);
        if (semester) {
            updateUserState({ currentSemester: semester })
            if (semester === 1) {
                displayCgpaList()
            } else {
                handlePreviousResults(semester);
            }

        } else {
            const botMessage = createChatBotMessage("সেমিস্টার এইভাবে লিখবেঃ 1st/2nd/3rd/8th");
            updateState(botMessage, "current-semester");
        }
    }

    // asks previous results
    const handlePreviousResults = (currentSemester) => {
        const botMessage = createChatBotMessage("আগের সেমিস্টারগুলোতে কত করে পেয়েছ?", {
            widget: 'PrevResultsForm',
            payload: { currentSemester: currentSemester }
        });
        updateState(botMessage, "previous-results");
    }

    const handleSubmitPreviousResults = (message, via = "form") => {
        // const currentSemester = children.props.children.props.state.userData.currentSemester;
        // const prevResultLength = currentSemester - 1;
        // const { cgpas: prevResult, len } = validatePrevResults(message);
        // console.log(prevResult, len)
        // check if the message contains all the result

        if (via === "parser") {
            const botMessage = createChatBotMessage("পূর্ববর্তী রেজাল্টগুলো ফর্মে লিখে সেন্ড কর।", 
                {
                    widget: 'PrevResultsForm',
                    payload: { currentSemester: children.props.children.props.state.userData.currentSemester }
                }
            );
            updateState(botMessage, "previous-results");
        } else {
            updateUserState({ previousResults: message });
            displayCgpaList(message)
        }
    }



    const displayCgpaList = async (previousResults = null) => {
        // get the state 
        const userState = children.props.children.props.state.userData;

        // const loadingMessage = createChatBotMessage("loading", {

        // })

        // get the cgpa list from the server
        const predictedResult = await getPredictedResult({ ...userState, previousResults });
        const { message, cgpa_array } = predictedResult;

        const botMessage = createChatBotMessage(message, {
            widget: 'CgpaList',
            payload: {
                cgpa_array: cgpa_array
            }
        });

        updateState(botMessage);
        handleRegenerate()
    }


    const handleRegenerate = () => {
        const botMessage = createChatBotMessage("এটি একটি পসিবল প্রেডিকশন। সেইম রেজাল্টের জন্য এরকম আরও অনেক অল্টারনেটিভ প্রেডিকশন আছে। দেখতে চাও?", {
            widget: "Regenerate"
        })

        updateState(botMessage);
    }

    const handleClickRegenerate = () => {
        displayCgpaList(children.props.children.props.state.userData.previousResults)
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
                        handleSubmitPreviousResults,
                        handleClickRegenerate
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;