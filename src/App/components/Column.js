import React, { Component } from 'react';
import styles from './Column.css';
import Card from './Card.js'
import ExpandCard from './ExpandCard.js';
//Header
//Column data
// each card content: 
    // Points
    // Question (Show when clicked)
    // Answer (Show when clicked again)

export default class Column extends Component {
	constructor() {
		super();
		this.state ={ 
			cardShow: false,
			flipped: false,
			activeCard: {}
		}
		this.grabActiveCard = this.grabActiveCard.bind(this);
		this.flipCard = this.flipCard.bind(this);
	}
	grabActiveCard(content) {
		this.setState ({
			cardShow: true,
			activeCard: content,
		})
	}
	flipCard() {
		if (this.state.flipped) {
			this.setState ({
				cardShow: false,
			})
		}
		this.setState({
			flipped: !this.state.flipped
		})
	}
    render() {
    	// easy reference for props
        let cards = this.props.cards;
        let sectionIndex = this.props.sectionIndex
        let columns = [];        

        if (cards) {
            cards.map((question, questionIndex) => {
            	// pushing individual cards into columns
                columns.push (
                	<Card grabActiveCard={this.grabActiveCard}
                	question={question}
                	questionIndex={questionIndex}
                	sectionIndex={sectionIndex} />
                )
            })
        }

        return (
	    	<div className="content">
	        	<ExpandCard cardShow ={this.state.cardShow} 
	        		activeCard = {this.state.activeCard}
	        		flipCard = {this.flipCard}
	        		flipped = {this.state.flipped}/>
	        	{columns}
			</div>
		)
    }
}


