import React from 'react';

function Local(props) {
  return (
    <div className={`${props.effect} ${props.ch3} local`}>
      <div className='visual_sub_title'>Local</div>
      {props.localStatus === 'true'
        ? <>
          {props.ch3
            ? <div className='commit_ch3' /> : <div className='commit' />}
          <div className='layout'>
            <div className='left'>
              <div className='area_box staging'>
                <span className='visual_third_title'>staging</span>
              </div>
              <div className='area_box untracked'>
                <span className='visual_third_title'>untracked</span>
              </div>
            </div>
            <div className='right'>
              <div className='area_box stash'>
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
