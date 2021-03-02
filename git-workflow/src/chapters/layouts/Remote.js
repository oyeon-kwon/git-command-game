import React from 'react';
import Repository from './Repository';

function Remote (props) {
  return (
    <div className={`${props.effect} ${props.ch3} remote`}>
      <span className='visual_sub_title'>Remote</span>
      {
        props.remoteStatus === 'true'
          ? <>
            <Repository title='pair' />
            <Repository title='origin' />
          </>
          : null
      }

    </div>
  );
}

export default Remote;
