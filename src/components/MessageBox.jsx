import React from 'react';

const MessageBox = ({ message, index }) => {
    const right = index % 2 !== 0;
    return (
        <div className={`flex ${right && "justify-end"}`}>
            <p className={`bg-white text-black min-w-min max-w-md max-h-min p-2 rounded-lg  ${right ? "rounded-br-none" : "rounded-bl-none"}`}>
                {message}
            </p>
        </div>
    );
};

export default MessageBox;

// index % 2 === 0 ? "" : ""