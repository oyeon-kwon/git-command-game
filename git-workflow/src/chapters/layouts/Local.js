import React from 'react';

function Local (props) {
  return (
    <div className={`${props.effect} ${props.ch3} local`}>
      <span className='visual_sub_title'>Local</span>
      {props.localStatus === 'true'
        ? <>
          {props.ch3
            ? <div className='commit_ch3' /> : <div className='commit' />}
          <div className='layout'>
            <div className='left'>
              <div className='staging'>
                <span className='visual_third_title'>staging</span>
              </div>
              <div className='untracked'>
                <span className='visual_third_title'>untracked</span>
              </div>
            </div>
            <div className='right'>
              <div className='stash'>
                <span className='visual_third_title'>stash</span>
              </div>
            </div>
          </div>
        </>
        : null}

    </div>
  );
}

export default Local;
