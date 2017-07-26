import React, { Component } from 'react';
import styles from './Column.css';

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
		// this.closeActivePost = this.closeActivePost.bind(this);
	}

	grabActiveCard(content) {
		this.setState ({
			cardShow: true,
			activeCard: content,
		})


	}
    render() {
    	const className = this.state.cardShow ? styles.modal : styles.modal.hidden;
    	const expandCard = () => {
    		// if (this.state.cardShow) {
    			console.log(this.state.activeCard.question)
    			return (
    				<div className={className}>
    					<div className="overlay"></div>

    					<div className="bigCard question"> 
    						<p>{this.state.activeCard.question}</p>
    					</div>

    					<div className="bigCard answer"> 
    						<p>{this.state.activeCard.answer}</p>
    					</div>
    				</div>
    			)
    		// } 
    	}

        let cards = this.props.cards;
        console.log(cards);
        let rows = [];        
        if (cards) {
            cards.map(question => {
                rows.push(
                	<div className={styles.card} onClick={()=>this.grabActiveCard(question)}>
	                	<p className={styles.points}>{question.points}</p>
	                	<p className={styles.question}>{question.question}</p>
						<p className={styles.answer}>{question.answer}</p>
                	</div>)
            })
        }  
        return <div className="content">
        	{expandCard()}
        	{rows}
        	</div>

    }
}