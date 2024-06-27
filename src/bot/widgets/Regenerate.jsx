import React from 'react';

const Regenerate = (props) => {
    return (
        <div>
            <button onClick={() => props.actions.handleClickRegenerate()} >Regenerate response</button>
        </div>
    );
};

export default Regenerate;