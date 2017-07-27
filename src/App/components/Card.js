import React, { Component } from 'react';
import styles from './Card.css';

//Card:
	//Displays points for question
	//Disppears when clicked via CSS	

export default class Card extends Component {
	constructor() {
		super();
		this.state ={ 
			active: true,
		}
		this.clicked = this.clicked.bind(this);
	}
	clicked(){
		this.setState ({
			active: false,
		})
	}
	render() {
		let question = this.props.question;
		let questionIndex = this.props.questionIndex;
		let sectionIndex = this.props.sectionIndex;
		let key = sectionIndex +'-'+ questionIndex;

		const className = this.state.active ? styles.card : styles.hidden;
		return(
        	<div className={className} onClick={()=>{this.props.grabActiveCard(question); this.clicked()}} id={key}  key={key}>
            	<p>{question.points}</p>
        	</div>) 
	}
}