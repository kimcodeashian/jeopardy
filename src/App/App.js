import React, { Component } from 'react';
import logo from '../logo.svg';
import styles from './App.css';
import questions from './questions.js';
import Column from './components/Column.js'



class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <div className={styles.grid}>
                    {questions.map(section => {
                        // console.log(row)
                        return (
                            <div className={styles.column}>
                                    <h2>{section.category}</h2> {/*HEADER*/}
                                    <Column cards = {section.questions} />
                            </div>)
                    })}
                </div>
            </div>
        );
    }
}

export default App;


// {row.questions.map(question => {
//     console.log(question.points)
//     // return (<p>{question.points}</p>)
// })}