import React, { Component } from 'react';

import Characters from './Characters'

//layout of application => container component 

class App extends Component {

    render() {
        return (
            <div>
                <Characters />
            </div>
            
        );
    }
}


export default App;



// component? - building block of our application/ piece of the ui 

// stateless components => functional/presentational/class components 

// stateful components => deal with data 