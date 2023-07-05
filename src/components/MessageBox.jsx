import React from 'react';

const MessageBox = ({ message, index, style }) => {
    const right = index % 2 !== 0;
    return (
        <div className={`flex ${right && "justify-end"}`}>
            <p className={`bg-white text-black min-w-min max-w-[60vw] max-h-min p-2 rounded-lg  ${right ? "rounded-br-none" : "rounded-bl-none"}`} style={style}>
                {message}
            </p>
        </div>
    );
};

export default MessageBox;

// index % 2 === 0 ? "" : ""