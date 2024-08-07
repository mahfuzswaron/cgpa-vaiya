import React from 'react';

const MessageParser = ({ children, actions }) => {
    
    const parse = (message) => {
        
        if (message.includes('hello')) {
            actions.handleHello();
        }

        switch (children.props.state.currentQuery) {
            case "target-cgpa":
                actions.handleSubmitTargetCgpa(message);
                break;
            case "current-semester":
                actions.handleSubmitCurrentSemester(message);
                break;
            case "previous-results":
                actions.handleSubmitPreviousResults(message, "parser");
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