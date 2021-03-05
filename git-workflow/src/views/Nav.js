import React from 'react';
import './Nav.css';
import questions from '../questions.json';

function Nav (props) {
  const currentChapter = Number(props.currentChapter);
  const currentStep = Number(props.currentStep);

  return (
    <div className='nav'>
      <div className='nav_title'>
        Chapter {questions[String(currentChapter)][currentStep - 1].chapter}
      </div>
      <ol>
        {
          questions[currentChapter].map(q => <li>{q.title}</li>)
        }
      </ol>
    </div>
  );
}

export default Nav;
