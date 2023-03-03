import React from 'react';
import { useState } from 'react';
import { RWA, MRS, SRS } from "./questions";
//I can probably just have all of the tests come from questions
import './quiz.css';
import gswwii from './german_soldiers_wwii.jpg';

function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  //questions will need to be selected based on menu selection
  const [exam, setExam] = useState(RWA)
  const { topic, max_score, questions } = exam
  const tests = [RWA.topic, MRS.topic, SRS.topic]
  const [testSelected, setTestSelected] = useState(false)
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

  const onTestSelect = (test) => {
    if (test === tests[0]){
      //Figure out why it doesn't work with local files
      document.body.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/4/47/WW2_German_occupation_Oslo_Norway_1940-04-09_Wehrmacht_troop_Soldiers_marching_Karl_Johans_gate_Slottet_Universitetet_Mounted_police_etc_Henriksen_%26_Steen_Nasjonalbiblioteket_Public_domain_URN_NBN_no-nb_digifoto_20180102_00043_NB_HS_O_0.jpg')"
      setExam(RWA)
      setTestSelected(true)
    } else if (test === tests[1]){
      document.body.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/e/e4/Black_Panther_demonstration.jpg")'
      setExam(MRS)
      setTestSelected(true)
    } else if (test === tests[2]){
      document.body.style.backgroundImage = 'url("https://upload.wikimedia.org/wikipedia/commons/e/e4/Black_Panther_demonstration.jpg")'
      setExam(SRS)
      setTestSelected(true)
    }
}

const onClickReturn = () => {
  document.body.style.backgroundImage = 'url("https://www.publicdomainpictures.net/pictures/20000/velka/rain-on-window.jpg")'
  setSelectedAnswer(null)
  setSelectedAnswerIndex(null)
  setShowResult(false)
  setResult(0)
  setTestSelected(false)
}

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

  return (
    <div className="quiz-container">
      {testSelected ? (
        <div>
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
            <h3>{topic} Score</h3>
            <p>
              Total Score:<span> {100 * ((result - questions.length) / max_score).toPrecision(4)}%</span>
            </p>
            <p>
              Total Questions: <span>{questions.length}</span>
            </p>
            <div className="flex-right">
              <button onClick={onClickReturn}>Return to Menu</button>
            </div>
          </div>
        )}
        </div>
      ) : (
        <div>
            <h2>Choose your test</h2>

            <ul>
            {tests.map((test) =>(
              <li
              onClick={() => onTestSelect(test)}
              key={test}>
              {test}</li>
            ))}
            </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;