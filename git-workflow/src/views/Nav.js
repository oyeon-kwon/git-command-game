import React from 'react';
import './Nav.css';
import questions from '../questions.json';
import { useHistory } from 'react-router-dom';

function Nav (props) {
  const currentChapter = Number(props.currentChapter);
  const currentStep = Number(props.currentStep);
  const history = useHistory();

  const backHandler = () => {
    if (currentChapter !== 1 && currentStep === 1) {
      history.push(`/chapter${currentChapter - 1}/${questions[String(currentChapter - 1)].length}`);
    } else if (currentChapter === 1 && currentStep === 1) {
      history.push('/');
    } else {
      history.push(`/chapter${currentChapter}/${currentStep - 1}`);
    }
  };

  return (
    <div className='nav'>
      <div className='nav_title'>
        Chapter {questions[String(currentChapter)][currentStep - 1].chapter} ( {questions[currentChapter][currentStep - 1].number} / {questions[currentChapter].length} )
        <button className='back_btn' onClick={backHandler}>Back</button>
      </div>
    </div>
  );
}

export default Nav;
