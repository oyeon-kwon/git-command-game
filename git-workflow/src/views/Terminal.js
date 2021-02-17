import React, { useState } from 'react';
import './Terminal.css';
import questions from '../questions.json';
import Modal from './Modal';
import { useHistory } from 'react-router-dom';

function Terminal(props) {

  const currentChapter =  Number(props.currentChapter)
  const currentStep = Number(props.currentStep)
  const history = useHistory()

  const [correct, isCorrect] = useState('none')
  
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

  const continueHandler = () => {
    let modal = document.querySelector('.modal_t');
    modal.style.display = 'none';
    if(currentStep === questions.length) {
      history.push(`/end`);
    } else {
      history.push(`/chapter${currentChapter}/${currentStep + 1}`);
      window.location.reload(false);
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
    isCorrect('true')
  }

  const wrongAnswerHandler = () => {
    isCorrect('false')
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
      <pre className='terminal_guide'></pre>
      <div className='input_line'>
        <input onChange={inputHandler} onKeyPress={onEnterPress} className='input' autoFocus></input>
        <button onClick={moveNextStep} className='enter_btn'>Enter</button>
      </div>
      {
      correct === 'true' ?
        <Modal isOpen={rightAnswerHandler} labelOK="Continue" continueHandler={continueHandler}>
          정답입니다!
        </Modal>
      :
      correct === 'false' ?
        <Modal isOpen={wrongAnswerHandler} labelOK="Try Again">
          잘못된 명령어입니다. <br /> 다시 시도해보시겠어요?
        </Modal>
      : null
      }
    </div>
  );
}

export default Terminal;
