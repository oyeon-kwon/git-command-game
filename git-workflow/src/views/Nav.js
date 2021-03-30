import React, { useState } from 'react';
import './Nav.css';
import questions from '../questions.json';
import { useHistory } from 'react-router-dom';
<<<<<<< HEAD
import Chapter from './modals/Chapter';
=======
>>>>>>> a4e1f2a719d46c6bec9abd81acdb22d2195d0c35

function Nav (props) {
  const currentChapter = Number(props.currentChapter);
  const currentStep = Number(props.currentStep);
  const history = useHistory();
<<<<<<< HEAD
  const [chapter, showChapter] = useState(false);
=======
>>>>>>> a4e1f2a719d46c6bec9abd81acdb22d2195d0c35

  const selectQuestionHandler = (q) => {
    for (let i = 0; i < questions[currentChapter].length; i++) {
      if (q.target.innerText === questions[currentChapter][i].title) {
        history.push(`/chapter${currentChapter}/${questions[currentChapter][i].number}`);
      }
    }
  };
<<<<<<< HEAD

  const selectChapterHandler = () => {
    showChapter(!chapter);
  };
=======
>>>>>>> a4e1f2a719d46c6bec9abd81acdb22d2195d0c35

  return (
    <div className='nav'>
      <div className='nav_title' onClick={selectChapterHandler}>
        Chapter {questions[String(currentChapter)][currentStep - 1].chapter}
      </div>
      {chapter === true ? <Chapter /> : null}
      <ol>
        {
          questions[currentChapter].map((q, i) => <li className={i + 1 === currentStep ? 'current_tab' : null} key={i} onClick={selectQuestionHandler}>{q.title}</li>)
        }
      </ol>
    </div>
  );
}

export default Nav;
