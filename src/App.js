import React from 'react';
import { useState } from 'react';
//I can probably just have all of the tests come from questions
import { RWA } from './questions';
import { MRS } from './questions';
import { SRS } from './questions';
import './quiz.css';

function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  //questions will need to be selected based on menu selection
  const { topic, max_score, questions } = SRS
  const { question, choices, scoring } = questions[activeQuestion]
  const [result, setResult] = useState(0)


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
    const nine_scale_val = {
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
  
    const four_scale_val = {
      'Strongly Agree': 0,
      'Somewhat Agree': 1,
      'Somewhat Disagree': 2,
      'Strongly Disagree': 3,
    }
  
    const hi_lo_mid_val = {
      'Trying to push very much too fast': 1,
      'Going too slowly': 0,
      'Moving at about the right speed': 0.5
    }

    const srs4_scale = {
      'All of it': 3,
      'Most': 2,
      'Some': 1,
      'Not much at all': 0,
    }

    const srs5_scale = {
      'A lot': 0,
      'Some': 1,
      'Just a little': 2,
      'None at all': 3,
    }
    
    setSelectedAnswerIndex(index)
    if (questions[activeQuestion].scoring === 'Ascend9') {
      setSelectedAnswer(nine_scale_val[answer])
    } else if (questions[activeQuestion].scoring === 'Descend9') {
      setSelectedAnswer(10 - nine_scale_val[answer])
    } else if (questions[activeQuestion].scoring === 'Ascend4'){
      setSelectedAnswer(four_scale_val[answer] / 3)
    } else if (questions[activeQuestion].scoring === 'Descend4'){
      setSelectedAnswer((3 - four_scale_val[answer]) / 3)
    } else if (questions[activeQuestion].scoring === 'HiLoMid3'){
      setSelectedAnswer(hi_lo_mid_val[answer])
    } else if (questions[activeQuestion].scoring === 'SRSQ4'){
      setSelectedAnswer(srs4_scale[answer] / 3)
    } else if (questions[activeQuestion].scoring === 'SRSQ5'){
      setSelectedAnswer((srs5_scale[answer] / 3) + 8)
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
          {result}
        </ul>
        <div className="flex-right">
          <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>{activeQuestion === questions.length - 1 ? 'Finish': 'Next'} </button>
        </div>
        </div>
      ) : (
        <div className="result">
          <h3>{topic} Score</h3>
          <p>
            Total Score:<span> {100 * ((result - questions.length) / max_score).toPrecision(4)}%</span>
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
