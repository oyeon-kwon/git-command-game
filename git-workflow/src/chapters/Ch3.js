import React from 'react';
import Remote from './layouts/Remote';
import Local from './layouts/Local';
import ch3_1 from '../imgs/ch3/ch3_1.svg';
import ch3_2_1 from '../imgs/ch3/ch3_2_1.svg';
import ch3_2_2 from '../imgs/ch3/ch3_2_2.svg';
import ch3_3 from '../imgs/ch3/ch3_3.svg';
import ch3_4 from '../imgs/ch3/ch3_4.svg';
import ch3_5_1 from '../imgs/ch3/ch3_5_1.svg';
import ch3_5_2 from '../imgs/ch3/ch3_5_2.svg';
import ch3_6 from '../imgs/ch3/ch3_6.svg';
import ch3_7_1 from '../imgs/ch3/ch3_7_1.svg';
import ch3_7_2 from '../imgs/ch3/ch3_7_2.svg';
import ch3_8_1 from '../imgs/ch3/ch3_8_1.svg';
import ch3_8_2 from '../imgs/ch3/ch3_8_2.svg';

function Ch3 (props) {
  const currentStep = props.currentStep;

  return (
    <div className='visual_container'>
      {
      currentStep === 1
        ? <>
          <img src={ch3_1} className='svg show_commit' alt='git' />
          <Remote remoteStatus='project' effect='show_commit' />
          <Local effect='show_commit' localStatus='true' />
          </>
        : currentStep === 2
          ? <>
            <img src={ch3_2_1} className='svg' alt='git' />
            <img src={ch3_2_2} className='svg show_commit' alt='git' />
            <Remote remoteStatus='project' />
            <Local localStatus='true' />
          </>
          : currentStep === 3
          ? <>
            <img src={ch3_3} className='svg' alt='git' />
            <Remote remoteStatus='project' />
            <Local localStatus='true' />
          </>
            : currentStep === 4
            ? <>
              <img src={ch3_4} className='svg' alt='git' />
              <Remote remoteStatus='project' />
              <Local localStatus='true' />
            </>
              : currentStep === 5
              ? <>
                <img src={ch3_5_1} className='svg' alt='git' />
                <img src={ch3_5_2} className='svg show_commit' alt='git' />
                <Remote remoteStatus='project' />
                <Local localStatus='true' />
              </>
                : currentStep === 6
                ? <>
                  <img src={ch3_6} className='svg' alt='git' />
                  <Remote remoteStatus='project' />
                  <Local localStatus='true' />
                </>
                  : currentStep === 7
                  ? <>
                    <img src={ch3_7_1} className='svg' alt='git' />
                    <img src={ch3_7_2} className='svg show_commit' alt='git' />
                    <Remote remoteStatus='project' />
                    <Local localStatus='true' />
                  </>
                    : currentStep === 8
                    ? <>
                      <img src={ch3_8_1} className='svg' alt='git' />
                      <img src={ch3_8_2} className='svg show_commit' alt='git' />
                      <Remote remoteStatus='project' />
                      <Local localStatus='true' />
                    </>
                      : null
    }
    </div>
  );
}

export default Ch3;
