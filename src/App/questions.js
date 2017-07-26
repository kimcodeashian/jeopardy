const questions = [
  {
    "category": "React 101",
    "questions": [
      {
        "points": 100,
        "question": "What part of your application does React focus on? A.The Model B.The View C.The Controller D.All of the above",
        "answer": "B. The View"
      },
      {
        "points": 200,
        "question": "_____ lets you create JavaScript objects using HTML syntax",
        "answer": "JSX"
      },
      {
        "points": 300,
        "question": "What tool can you use to transpile JSX?",
        "answer": "Babel"
      },
      {
        "points": 400,
        "question": "React uses a _____________ to limit direct manipulation of the DOM and improve performance",
        "answer": "Virtual DOM"
      }
    ]
  },
  {
    "category": "React 201",
    "questions": [
      {
        "points": 100,
        "question": "Where can you define a component's initial state when you use the ES6 Class syntax? A. getInitialState() B.getInitialProps() C.The component's constructor",
        "answer": "C. The component's constructor"
      },
      {
        "points": 200,
        "question": "Using npm, which package should you require/import in addition to 'react' to render a React component in an existing DOM element of your HTML file?",
        "answer": "react-dom"
      },
      {
        "points": 300,
        "question": "Which lifecycle function should you use to set default property values? A.getInitialState B.getInitialProps C.getDefaultProps",
        "answer": "C. getDefaultProps"
      },
      {
        "points": 400,
        "question": "Which lifecycle method is invoked once, immediately after the initial rendering occurs?",
        "answer": "componentDidMount"
      }
    ]
  },
  {
    "category": "ES 2015",
    "questions": [
      {
        "points": 100,
        "question": "Constants (const) are: A.Block scoped B.Function scoped C.Global",
        "answer": "A. Block scoped"
      },
      {
        "points": 200,
        "question": "Name 3 new collection classes in ES2015",
        "answer": "1.Map 2.WeakMap 3.Set 4.WeakSet"
      },
      {
        "points": 300,
        "question": "<p>What's being logged and how is this new ES6 feature called?</p><code>var colors = ['red', 'blue', 'green'];<br/>var [primary, secondary, tertiary] = colors;<br/>console.log(secondary);</code>",
        "answer": "<ul><li>blue</li><li>Array destructuring</li></ul>"
      },
      {
        "points": 400,
        "question": "<p>What's being logged and name 4 new features of ES6 used in this code snippet?</p><code>let greeting = (name, msg='Hello') => `${msg}, ${name}`;<br/>console.log(greeting('Christophe');</code>",
        "answer": "<p>Hello, Christophe</p><ul><li>let variables</li><li>Arrow functions</li><li>Default parameters</li><li>Template strings</li></ul>"
      }
    ]
  },
  {
    "category": "Feeling Lucky",
    "questions": [
      {
        "points": 100,
        "question": "Using the proposed ECMAScript module syntax, how do you load the Mortgage.js module from the current directory and make all its members available in an object named mortgage?",
        "answer": "<code>import * as mortgage from './Mortgage';</code>"
      },
      {
        "points": 200,
        "question": "What are the colors of the olympic rings?",
        "answer": "<img src='assets/img/olympic_rings.png'/>"
      },
      {
        "points": 300,
        "question": "What's the date of the first React commit on GitHub?",
        "answer": "May 26th, 2013"
      },
      {
        "points": 400,
        "question": "What's the hex color of the React logo?",
        "answer": "#61DAFB"
      }
    ]
  }
];
export default questions;