import React, { Component } from 'react';
import Column from './components/Column.js'
import questions from './questions.js';
import styles from './App.css';

class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <div className={styles.grid}>
                    {questions.map((section, sectionIndex) => {
                        //map over every available category/section
                        return (
                            //header
                            //column of available cards
                            <div className={styles.column} key={sectionIndex}>
                                    <h2>{section.category}</h2> {/*HEADER*/}
                                    <Column cards={section.questions} sectionIndex={sectionIndex}/>
                            </div>)
                    })}
                </div>
            </div>
        );
    }
}
export default App;
