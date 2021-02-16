import React from 'react';
import './Terminal.css';
import questions from '../questions.json';
import Modal_T from './Modal_T';
import Modal_F from './Modal_F';

function Terminal(props) {

  const currentStep = Number(props.currentStep)
  
  let inputValue = ''

  const moveNextStep = () => {
    if(questions[currentStep - 1].answer.indexOf(inputValue) === -1){
      wrongAnswerHandler()
    } else {
      rightAnswerHandler()
      let terminal_guide = document.querySelector('.terminal_guide')
      terminal_guide.innerText = questions[currentStep - 1].terminal_guide
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

  const rightAnswerHandler = () => {
    let modal = document.querySelector('.modal_t')
    modal.style.display = 'block';
  }

  const wrongAnswerHandler = () => {
    let modal = document.querySelector('.modal_f')
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
      <div className='terminal_guide'></div>
      <div className='input_line'>
        <input onChange={inputHandler} onKeyPress={onEnterPress} className='input' autoFocus></input>
        <button onClick={moveNextStep} className='enter_btn'>Enter</button>
      </div>
      <Modal_T className='modal_t' currentStep={currentStep}/>
      <Modal_F className='modal_f'/>
    </div>
  );
}

export default Terminal;