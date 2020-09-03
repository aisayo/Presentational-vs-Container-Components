// render to each individual character info 

// presentational 

import React from 'react';
import { Card } from 'react-bootstrap'


const CharacterCard = (props) => {

    const { char, onClick } = props

    return (
        <Card style={cardStyle} onClick={onClick} value={char.name}>
            <Card.Body>
                <Card.Img src={char.img} style={imageStyle} alt={char.name}/>
                <Card.Title>{char.name}</Card.Title>
            </Card.Body>
        </Card>

    );
};

export default CharacterCard;

const cardStyle = {
    border: 'solid',
    marginBottom: 25,
    marginTop: 25,
    marginLeft: 25,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 25,
    paddingTop: 25,
    height: 250,
    width: 250,
    display: 'inline-block',
    textAlign: 'center'
}

const imageStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 200,
    height: 200,
    marginBottom: 10
}