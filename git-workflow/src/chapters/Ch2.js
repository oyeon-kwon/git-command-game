import React from 'react';
import githubLogo from '../github.png';
import Remote from './layouts/Remote';
import Local from './layouts/Local';
import ch2_4 from '../imgs/ch2/ch2_4.svg';
import ch2_5 from '../imgs/ch2/ch2_5.svg';
import ch2_6 from '../imgs/ch2/ch2_6.svg';
import ch2_7 from '../imgs/ch2/ch2_7.svg';
import ch2_8 from '../imgs/ch2/ch2_8.svg';

function Ch2 (props) {
  const currentStep = props.currentStep;

  return (
    <div className='visual_container'>
      {
      currentStep === 1
        ? <>
          <img src={githubLogo} className='github_logo' alt='git' />
          </>
        : currentStep === 2
          ? <>
            <Remote effect='show_commit' />
            <Local effect='show_commit' localStatus='true' />
          </>
          : currentStep === 3
            ? <>
              <Remote remoteStatus='true' effect='show_commit' />
              <Local localStatus='true' />
            </>
            : currentStep === 4
              ? <>
                <img src={ch2_4} className='svg show_commit' />
                <Remote remoteStatus='true' />
                <Local localStatus='true' />
              </>
              : currentStep === 5
                ? <>
                  <img src={ch2_5} className='svg show_commit' />
                  <Remote remoteStatus='true' />
                  <Local localStatus='true' />
                </>
                : currentStep === 6
                  ? <>
                    <img src={ch2_6} className='svg show_commit' />
                    <Remote remoteStatus='true' />
                    <Local localStatus='true' />
                    </>
                  : currentStep === 7
                    ? <>
                      <img src={ch2_7} className='svg show_commit' />
                      <Remote remoteStatus='true' />
                      <Local localStatus='true' />
                      </>
                    : currentStep === 8
                      ? <>
                        <img src={ch2_8} className='svg show_commit' />
                        <Remote remoteStatus='true' />
                        <Local localStatus='true' />
                        </>
                      : null
    }
    </div>
  );
}

export default Ch2;
