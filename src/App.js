import React from 'react';
import { useState } from 'react';
//I can probably just have all of the tests come from questions
import { MRS } from './questions';
import './quiz.css';

function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  //questions will need to be selected based on menu selection
  const { questions } = MRS
  const { question, choices, scoring } = questions[activeQuestion]
  const [result, setResult] = useState(0)

  const nine_scale_asc = {
    'Very Strongly Disagree': 1,
    'Strongly Disagree': 2,
    'Moderately Disagree': 3,
    'Slightly Disagree': 4,
    'Exactly Neutral': 5,
    'Slightly Agree': 6,
    'Moderately Agree': 7,
    'Strongly Agree': 8,
    'Very Strongly Agree': 9,
  }

  const nine_scale_des = {
    'Very Strongly Disagree': 9,
    'Strongly Disagree': 8,
    'Moderately Disagree': 7,
    'Slightly Disagree': 6,
    'Exactly Neutral': 5,
    'Slightly Agree': 4,
    'Moderately Agree': 3,
    'Strongly Agree': 2,
    'Very Strongly Agree': 1,
  }

  const onClickNext = () => {
    setResult((prev) => prev + selectedAnswer)
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1)
    } else {
      setActiveQuestion(0)
      setShowResult(true)
    }
    setSelectedAnswer(null)
    setSelectedAnswerIndex(null)
  }

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index)
    if (questions[activeQuestion].scoring === 'Ascend') {
      setSelectedAnswer(nine_scale_asc[answer])
    } else if (questions[activeQuestion].scoring === 'Descend') {
      setSelectedAnswer(nine_scale_des[answer])
    } else {
      setSelectedAnswer(0)
    }
  }

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div>
          <span className="active-question-no">
            {addLeadingZero(activeQuestion + 1)}
          </span>
          <span className="total-question">
            /{addLeadingZero(questions.length)}
          </span>
        </div>
        <h2>
          {question}
        </h2>

        <ul>
          {choices.map((answer, index) =>(
            <li
            onClick={() => onAnswerSelected(answer, index, scoring)}
            key={answer}
            className={selectedAnswerIndex === index ? 'selected-answer' : null}>
            {answer}</li>
          ))}
        </ul>
        <div className="flex-right">
          <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>{activeQuestion === questions.length - 1 ? 'Finish': 'Next'} </button>
        </div>
        </div>
      ) : (
        <div className="result">
          <h3>Right Wing Authoritarianism Score</h3>
          <p>
            Total Score:<span> {100 * ((result - 7) /56)}%</span>
          </p>
          <p>
            Total Questions: <span>{questions.length}</span>
          </p>
        </div>
      )}
      
    </div>
  );
}

export default Quiz;
