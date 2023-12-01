import { useState } from 'react';
import './index.scss';

const questions = [
  {
    title: 'React - is a ... ?',
    variants: ['library', 'framework', 'application'],
    correct: 0,
  },
  {
    title: 'The component - is a ... ',
    variants: ['application', 'a part of web-page', "I dont't know what is this"],
    correct: 1,
  },
  {
    title: 'What is JSX?',
    variants: [
      'A simple HTML',
      'A function',
      "It's like HTML but with the ability to execute JS code",
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>You gave {correct} correct answers from {questions.length}</h2>
      <a href="/"><button>Try again</button></a>
    </div>
  );
}

function Game({question, step, setStep, correct, setCorrect}) {
 
  const nextQuestion = (index) => {
setStep(step + 1);

if (index === question.correct) {
  setCorrect(correct + 1);
}
  }
  return (
    <>
      <div className="progress">
        <div style={{ width: `${step / questions.length * 100}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index)=><li onClick={()=>nextQuestion(index)} key={text}>{text}</li>)}
        
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [correct, setCorrect] = useState(0);
  return (
    <div className="App">
      {step != questions.length ? <Game step={step} setStep={setStep} question={question} correct={correct} setCorrect={setCorrect}/> : <Result correct={correct}/>}
    </div>
  );
}

export default App;