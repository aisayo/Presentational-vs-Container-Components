import React from 'react';

const TextField = (props) => {
    return (
        <input 
            type={props.type}
            value={props.value}
            onChange={props.handleOnChange}
        />
    );
};

export default TextField;