import React from 'react';

const Start = (props) => {
    return (
        <div>
            <button onClick={() => props.actions.handleClickStart()}>Let's Start</button>
        </div>
    );
};

export default Start;