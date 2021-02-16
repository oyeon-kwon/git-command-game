import React from 'react';
import './Modal_T.css';
import questions from '../questions.json';

function Modal_T (props) {
  
  const currentChapter =  Number(props.currentChapter)
  const currentStep = props.currentStep

  const continueHandler = () => {
    let modal = document.querySelector('.modal_t');
    modal.style.display = 'none';
    if(currentStep === questions.length) {
      window.location.href = 'http://localhost:3000/end'
    } else {
      window.location.href = `http://localhost:3000/chapter${currentChapter}/${currentStep + 1}`
    }
  }

  return (
    <>
    <div className='modal_t'>
      <div className='modal_content'>
      <span className='close' onClick={continueHandler}>&times;</span>
      <div className='modal_description'>
            정답입니다!
      </div>
      <button className='modal_btn' onClick={continueHandler}>continue</button>
      </div>
    </div>
    </>
  )
}

export default Modal_T;