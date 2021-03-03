import React from 'react';
import '../views/Visual.css';
import githubLogo from '../github.png';
import Remote from './layouts/Remote';
import Local from './layouts/Local';
import ch1_3 from '../imgs/ch1/ch1_3.svg';
import ch1_4 from '../imgs/ch1/ch1_4.svg';
import ch1_5 from '../imgs/ch1/ch1_5.svg';
import ch1_6 from '../imgs/ch1/ch1_6.svg';
import ch1_7 from '../imgs/ch1/ch1_7.svg';
import ch1_8 from '../imgs/ch1/ch1_8.svg';

function Ch1 (props) {
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
          <Remote effect='show_commit' remoteStatus='true' />
          <Local effect='show_commit' localStatus='false' />
        </>
        : currentStep === 3
          ? <>
            <img src={ch1_3} className='show_commit' />
            <Remote remoteStatus='true' />
            <Local localStatus='true' effect='show_commit' />
          </>
          : currentStep === 4
            ? <>
              <img src={ch1_4} />
              <Remote remoteStatus='true' className='show_commit' />
              <Local localStatus='true' />
            </>
            : currentStep === 5
              ? <>
                <img src={ch1_5} />
                <Remote remoteStatus='true' className='show_commit' />
                <Local localStatus='true' />
              </>
              : currentStep === 6
                ? <>
                  <img src={ch1_6} className='show_commit' />
                  <Remote remoteStatus='true' />
                  <Local localStatus='true' />
                </>
                : currentStep === 7
                  ? <>
                    <img src={ch1_7} className='show_commit' />
                    <Remote remoteStatus='true' />
                    <Local localStatus='true' />
                  </>
                  : currentStep === 8
                    ? <>
                      <img src={ch1_8} className='show_commit' />
                      <Remote remoteStatus='true' />
                      <Local localStatus='true' />
                    </>
                    : null
    }
    </div>
  );
}

export default Ch1;
