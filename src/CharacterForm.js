// render to the form 

//presentational? or container?
//concerned with HOW things look 
import React from 'react';

import TextField from './TextField'

const CharacterForm = (props) => {

    return (

        <form onSubmit={props.onSubmit}>
            
            <TextField 
                type="text" 
                value={props.state.query} 
                handleOnChange={props.handleOnChange}
            />
        
            <TextField 
                type="submit"
                value="Search"
            />

    </form>
    );
};

export default CharacterForm;