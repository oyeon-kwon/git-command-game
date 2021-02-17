import React from 'react';
import './Modal.css';

function Modal(props) {

  const continueHandler = props.continueHandler
  const labelOK = props.labelOK

  const retryHandler = () => {
    let modal = document.querySelector('.modal_f');
    modal.style.display = 'none';
  }
  
  return (
    <>
      {
        labelOK === 'Continue' ? 
        <div className='modal_t'>
        <div className='modal_content'>
        <span className='close' onClick={retryHandler}>&times;</span>
        <div className='modal_description'>
          {props.children}
        </div>
        <button className='modal_btn' onClick={continueHandler}>{labelOK}</button>
        </div>
        </div>
        :
        labelOK === 'Try Again' ?
        <div className='modal_f'>
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
  )
}

export default Modal;
