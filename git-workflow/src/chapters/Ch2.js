import React from 'react';
import githubLogo from '../github.png';
import Remote from './layouts/Remote';
import Local from './layouts/Local';
import ch2_2 from '../imgs/ch2/ch2_2.svg';
import ch2_3 from '../imgs/ch2/ch2_3.svg';
import ch2_4_1 from '../imgs/ch2/ch2_4_1.svg';
import ch2_4_2 from '../imgs/ch2/ch2_4_2.svg';
import ch2_5 from '../imgs/ch2/ch2_5.svg';
import ch2_6 from '../imgs/ch2/ch2_6.svg';
import ch2_7 from '../imgs/ch2/ch2_7.svg';
import ch2_8_1 from '../imgs/ch2/ch2_8_1.svg';
import ch2_8_2 from '../imgs/ch2/ch2_8_2.svg';
import ch2_9_1 from '../imgs/ch2/ch2_9_1.svg';
import ch2_9_2 from '../imgs/ch2/ch2_9_2.svg';
import ch2_10 from '../imgs/ch2/ch2_10.svg';
import ch2_11 from '../imgs/ch2/ch2_11.svg';
import ch2_12 from '../imgs/ch2/ch2_12.svg';
import ch2_13_1 from '../imgs/ch2/ch2_13_1.svg';
import ch2_13_2 from '../imgs/ch2/ch2_13_2.svg';


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
            <img src={ch2_2} className='svg show_commit' alt='git'/>
            <Remote effect='show_commit' />
            <Local effect='show_commit' localStatus='true' />
          </>
          : currentStep === 3
            ? <>
              <img src={ch2_3} className='svg' alt='git'/>
              <Remote remoteStatus='origin-only' effect='show_commit' />
              <Local localStatus='true' />
            </>
            : currentStep === 4
              ? <>
                <img src={ch2_4_1} className='svg' alt='git'/>
                <img src={ch2_4_2} className='svg show_commit' alt='git'/>
                <Remote remoteStatus='origin-only' />
                <Local localStatus='true' />
              </>
              : currentStep === 5
                ? <>
                  <img src={ch2_5} className='svg' alt='git'/>
                  <Remote remoteStatus='true' />
                  <Local localStatus='true' />
                </>
                : currentStep === 6
                  ? <>
                    <img src={ch2_6} className='svg' alt='git'/>
                    <Remote remoteStatus='true' />
                    <Local localStatus='true' />
                    </>
                  : currentStep === 7
                    ? <>
                      <img src={ch2_7} className='svg' alt='git'/>
                      <Remote remoteStatus='true' />
                      <Local localStatus='true' />
                      </>
                    : currentStep === 8
                      ? <>
                        <img src={ch2_8_1} className='svg' alt='git'/>
                        <img src={ch2_8_2} className='svg show_commit' alt='git'/>
                        <Remote remoteStatus='true' />
                        <Local localStatus='true' />
                        </>
                      : currentStep === 9
                        ? <>
                        <img src={ch2_9_1} className='svg' alt='git'/>
                        <img src={ch2_9_2} className='svg show_commit' alt='git'/>
                          <Remote remoteStatus='true' />
                          <Local localStatus='true' />
                          </>
                        : currentStep === 10
                          ? <>
                          <img src={ch2_10} className='svg' alt='git'/>
                            <Remote remoteStatus='true' />
                            <Local localStatus='true' />
                            </>
                          : currentStep === 11
                            ? <>
                            <img src={ch2_11} className='svg' alt='git'/>
                              <Remote remoteStatus='true' />
                              <Local localStatus='true' />
                              </>
                            : currentStep === 12
                              ? <>
                              <img src={ch2_12} className='svg' alt='git'/>
                                <Remote remoteStatus='true' />
                                <Local localStatus='true' />
                                </>
                              : currentStep === 13
                                ? <>
                                <img src={ch2_13_1} className='svg' alt='git'/>
                                <img src={ch2_13_2} className='svg show_commit' alt='git'/>
                                  <Remote remoteStatus='true' />
                                  <Local localStatus='true' />
                                  </>
                                : null
    }
    </div>
  );
}

export default Ch2;
