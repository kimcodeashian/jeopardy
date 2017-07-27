import React, { Component } from 'react';
import styles from './ExpandCard.css';

export default class ExpandCard extends Component {	
	render(){
    	//styling depending on state of card
    	//all transitions implemented through CSS
    	const modal = this.props.cardShow ? styles.modal : "hidden";
    	const flipped = this.props.flipped ? styles.flipped : styles.bigCard;
		return (
			<figure className={modal}>
				<div className={flipped} onClick={()=>this.props.flipCard()}>
					<div className={styles.question}>  
						<p>{this.props.activeCard.question}</p>
					</div>

					<div className={styles.answer}> 
						<p>{this.props.activeCard.answer}</p>
					</div>
				</div>
				<div className={styles.overlay}></div>
			</figure>
		)
	}
}