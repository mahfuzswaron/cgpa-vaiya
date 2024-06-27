import React from 'react';

const Regulation = (props) => {
    const handleSelectRegulation = (e) => {
        const regulation = e.target.value;
        props.actions.handleUpdateRegulation(regulation);
    }
    return (
        <div>
            <button onClick={handleSelectRegulation} value={"diploma_2016"}>2016</button>
            <button onClick={handleSelectRegulation} value={"diploma_2021"}>2021</button>
        </div>
    );
};

export default Regulation;