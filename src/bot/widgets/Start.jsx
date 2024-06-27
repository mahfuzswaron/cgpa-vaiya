import React from 'react';

const Start = (props) => {
    return (
        <div className='max-w-fit px-14'>
            <button className='' onClick={() => props.actions.handleClickStart()}>Let's Start</button>
        </div>
    );
};

export default Start;