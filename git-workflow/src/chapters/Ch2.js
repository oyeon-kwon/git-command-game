import React from 'react';
import githubLogo from '../github.png';

function Ch2 (props) {

  const currentStep = props.currentStep
  
  return (
    <>
    {
      currentStep === 7 ? <img src={githubLogo} className='github_logo' alt='git'></img>
      :
      currentStep === 8 ?
        <>
            <div className='remote show_commit'></div>
            <div className='local show_commit'>
                <span className='visual_sub_title'>Local</span>
            </div>
        </>
      : currentStep === 9 ?
        <>
          <div className='remote'>
            <span className='visual_sub_title'>Remote</span>
            <div className='pair'>
              <div className='visual_third_title'>pair</div>
            </div>
            <div className='origin'>
              <span className='visual_third_title'>origin</span>
            </div>
          </div>
          <div className='local'>
            <span className='visual_sub_title'>Local</span>
            <div className='commit show_commit'></div>
            <div className='layout show_commit'>
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
          </div>
        </>
      : currentStep === 10 ?
        <>
          <div className='remote'>
            <span className='visual_sub_title'>Remote</span>
            
            <div className='pair'>
              <div className='visual_third_title'>pair</div>
              
            </div>
            <div className='origin'>
              <span className='visual_third_title'>origin</span>
            </div>
          </div>
          <div className='local'>
            <span className='visual_sub_title'>Local</span>
            <div className='commit show_commit'></div>
            <div className='layout show_commit'>
              <div className='left'>
                <div className='staging'>
                  <span className='visual_third_title'>staging</span>
                </div>
                <div className='untracked'>
                  <span className='visual_third_title'>untracked</span>
                  <span className='file'>index.html</span>
                </div>
              </div>
              <div className='right'>
                <div className='stash'>
                  <span className='visual_third_title'>stash</span>
                </div>
              </div>
            </div>
          </div>
        </>
      : null
    }
    </>
  )
}

export default Ch2;