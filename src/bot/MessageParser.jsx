import React from 'react';

const MessageParser = ({ children, actions }) => {
    const currentQuery = children.props.state.currentQuery;
    // console.log("out of parser", currentQuery);
    const parse = (message) => {
        if (message.includes('hello')) {
            actions.handleHello();
        }
        // console.log("inside parser", children.props.state.currentQuery);
        switch (currentQuery) {
            case "target-cgpa":
                actions.handleSubmitTargetCgpa(message);
                break;
            case "current-semester":
                actions.handleSubmitCurrentSemester(message);
                break;
            case "previous-results":
                actions.handleSubmitPreviousResults(message);
                break;
            default:
                break;
        }


    };


    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: actions,
                });
            })}
        </div>
    );
};

export default MessageParser;