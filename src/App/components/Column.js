import React, { Component } from 'react';


//Header
//Column data
// each card content: 
    // Points
    // Question (Show when clicked)
    // Answer (Show when clicked again)


export default class Column extends React.Component {
    render() {
        let cards = this.props.cards;
        let rows = [];        
        if (cards) {
            cards.map(question => {
                rows.push(<p>{question.points}</p>)
            })
        }  return <div className="content">{rows}</div>
    }
}