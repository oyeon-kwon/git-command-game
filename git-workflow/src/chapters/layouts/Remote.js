import React from 'react';
import Repository from './Repository';

function Remote (props) {
  return (
    <>
      <div className={`${props.effect} ${props.ch3} remote`}>
        <div className='visual_sub_title'>Remote</div>
        {
          props.remoteStatus === 'true'
            ? <div style={{ height: '100%' }}>
              <Repository title='pair' />
              <Repository title='origin' />
            </div>
            : null
        }

      </div>
      <hr />
    </>
  );
}

export default Remote;
