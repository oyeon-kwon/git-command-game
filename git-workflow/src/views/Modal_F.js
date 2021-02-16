import React from 'react';
import './Modal_F.css';

function Modal_F() {

  const retryHandler = () => {
    let modal = document.querySelector('.modal_f');
    modal.style.display = 'none';
  }

  return (
    <>
      <div className='modal_f'>
        <div className='modal_content'>
          <span className='close' onClick={retryHandler}>&times;</span>
          <div className='modal_description'>
            잘못된 명령어입니다. <br />
            다시 시도해보시겠어요?
          </div>
          <button onClick={retryHandler} className='modal_btn'>try again</button>
        </div>
      </div>
    </>
  )
}

export default Modal_F;