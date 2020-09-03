import React from 'react';

const Button = (props) => {

    const { text, onClick } = props
    
    return (

        <button style={{textAlign: 'center' }} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;

