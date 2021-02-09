import React from 'react';
import './Terminal.css';
import questions from '../questions.json';
import Modal from './Modal';

function Terminal(props) {

  const currentStep = Number(props.currentStep)
  
  let inputValue = ''

  const moveNextStep = () => {
    if(questions[currentStep - 1].answer.indexOf(inputValue) === -1){
      wrongAnswerHandler()
    } else if(currentStep === questions.length) {
      window.location.href = 'http://localhost:3000/end'
    } else {
      window.location.href = `http://localhost:3000/chapter1/${currentStep + 1}`
    }
  }
  
  const inputHandler = (e) => {
    inputValue = e.target.value
  }

  const onEnterPress = (e) => {
    if(e.key === 'Enter') {
      moveNextStep()
    }
  }

  const wrongAnswerHandler = () => {
    let modal = document.querySelector('.modal')
    modal.style.display = 'block';
  }

  return (
    <div className='terminal'>
      <div className='bar'>
        <div className='fakeButton'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>
        <div className='bar_description'>질문 {currentStep}</div>
      </div>
      <div className='question_description'>{questions[currentStep - 1].description}</div>
      <div className='input_line'>
        <input onChange={inputHandler} onKeyPress={onEnterPress} className='input' autoFocus></input>
        <button onClick={moveNextStep} className='enter_btn'>Enter</button>
      </div>
      <Modal className='modal'/>
    </div>
  );
}

export default Terminal;