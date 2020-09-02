import React, { Component } from 'react';

class App extends Component {

    constructor(){
        super()
        this.state = {
            name: ''
        }

    }

    onClick = (event) => {
        console.log(event)
        console.log(event.target)

        this.setState({
            name: event
        }, console.log(event));
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>Click!</button>
            </div>
        );
    }
}

export default App;