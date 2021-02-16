import React from 'react';
import './Nav.css';
import questions from '../questions.json';

function Nav(props) {
  // App.js에서 상태 받아 와서 점수 구현 필요

  const currentChapter =  Number(props.currentChapter)
  const currentStep = Number(props.currentStep)

  const backHandler = () => {
    window.location.href = `http://localhost:3000/chapter${currentChapter}/${currentStep - 1}`

    if(currentStep === 1){
      window.location.href = 'http://localhost:3000/'
    }
  }

  return (
    <div className='nav'>
      <div className='nav_title'>
        Chapter {questions[currentStep - 1].chapter} ( {questions[currentStep - 1].number} / {questions.length} ) 
        <button className='back_btn' onClick={backHandler}>Back</button>
      </div>
    </div>
  );
}

export default Nav;