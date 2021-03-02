import React from 'react';

function Repository (props) {
  return (
    <>
      <div className={props.title}>
        <div className='visual_third_title'>{props.title}</div>
      </div>
    </>
  );
}

export default Repository;
