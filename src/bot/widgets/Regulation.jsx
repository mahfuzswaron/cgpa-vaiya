import React from 'react';

const Regulation = (props) => {
    const handleSelectRegulation = (e) => {
        const regulation = e.target.value;
        props.actions.handleSubmitRegulation(regulation);
    }
    return (
        <div className='flex flex-start gap-2 px-14'>
            <button onClick={handleSelectRegulation} value={"diploma_2016"}>2016</button>
            <button onClick={handleSelectRegulation} value={"diploma_2021"}>2021</button>
        </div>
    );
};

export default Regulation;