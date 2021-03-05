import React from 'react';
import './Nav.css';
import questions from '../questions.json';
import { useHistory } from 'react-router-dom';

function Nav (props) {
  const currentChapter = Number(props.currentChapter);
  const currentStep = Number(props.currentStep);
  const history = useHistory();

  const selectQuestionHandler = (q) => {
    for(let i=0; i<questions[currentChapter].length; i++){
      if(q.target.innerText === questions[currentChapter][i].title){
        history.push(`/chapter${currentChapter}/${questions[currentChapter][i].number}`)
      }
    }
  };

  return (
    <div className='nav'>
      <div className='nav_title'>
        Chapter {questions[String(currentChapter)][currentStep - 1].chapter}
      </div>
      <ol>
        {
          questions[currentChapter].map((q, i) => <li className={ i + 1 === currentStep ? 'current_tab' : null } key={i} onClick={selectQuestionHandler}>{q.title}</li>)
        }
      </ol>
    </div>
  );
}

export default Nav;
