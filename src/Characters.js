//container components 

// HOW things work 

import React, { Component } from 'react';

import CharacterForm from './CharacterForm'
import CharacterCard from './CharacterCard'
import Button from './Button'


class Characters extends Component {

    constructor() {
        super()

        this.state = {
            chars: [],
            query: ''
        }
    }

    fetchAllCharacters = () => {
        fetch('https://www.breakingbadapi.com/api/characters')
        .then(resp => resp.json())
        .then(chars => this.setState({
           chars
        }))
    }

    componentDidMount(){
        this.fetchAllCharacters()
    }

    onClick = (e) => {
        const char = e.target.parentElement.textContent
        fetch(`https://www.breakingbadapi.com/api/characters?name=${char}`)
        .then(resp => resp.json())
        .then(c => this.setState({
            chars: c
        }))
    }

    showAllChars = () => {
        this.fetchAllCharacters()
    }

    handleOnChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    submitSearchForm = (e) => {
        e.preventDefault()
        fetch(`https://www.breakingbadapi.com/api/characters?name=${this.state.query}`)
        .then(resp => resp.json())
        .then(chars => this.setState({
            chars: chars,
            query: ''
        }))
    }

    fixPic = () => {
        this.state.chars.map(char => (
            char.name === "Jesse Pinkman" || char.name === "Henry Schrader" ? char.img = 'https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png' : char
        ))
    }


    render() {
        return (
            <div>
                {this.fixPic()}

                <CharacterForm  
                    onSubmit={this.submitSearchForm} 
                    state={this.state} 
                    handleOnChange={this.handleOnChange}
                />


                {this.state.chars.map(char => (
                    <CharacterCard key={char.char_id} char={char} onClick={this.onClick}/>
                ))}

                <br/>
                <br/>

                <Button onClick={this.onClick} text='Go Back' />
                
            </div>

        );
    }
}

export default Characters;


