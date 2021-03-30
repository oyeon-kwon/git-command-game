import React from 'react';
import './Modal.css';
import { useHistory } from 'react-router-dom';

function Modal (props) {
  const continueHandler = props.continueHandler;
  const labelOK = props.labelOK;
  const history = useHistory();
  const currentChapter = Number(props.currentChapter);
  const currentStep = Number(props.currentStep);

  const retryHandler = () => {
    history.push(`/chapter${currentChapter}/${currentStep}`);
<<<<<<< HEAD:git-workflow/src/views/modals/Modal.js
    props.isCorrect('none');
=======
    props.isCorrect('none')
>>>>>>> a4e1f2a719d46c6bec9abd81acdb22d2195d0c35:git-workflow/src/views/Modal.js
  };

  return (
    <>
      {
        labelOK === 'Continue'
          ? <div className='modal_backdrop'>
            <div className='modal_content'>
              <span className='close' onClick={retryHandler}>&times;</span>
              <div className='modal_description'>
                {props.children}
              </div>
              <button className='modal_btn' onClick={continueHandler}>{labelOK}</button>
            </div>
          </div>
          : labelOK === 'Try Again'
            ? <div className='modal_backdrop'>
              <div className='modal_content'>
                <span className='close' onClick={retryHandler}>&times;</span>
                <div className='modal_description'>
                  {props.children}
                </div>
                <button className='modal_btn' onClick={retryHandler}>{labelOK}</button>
              </div>
            </div>
            : null
      }
    </>
  );
}

export default Modal;
