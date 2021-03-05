import React from 'react';
import '../views/Visual.css';
import Remote from './layouts/Remote';
import Local from './layouts/Local';
import ch4_1 from '../imgs/ch4/ch4_1.svg';
import ch4_2_1 from '../imgs/ch4/ch4_2_1.svg';
import ch4_2_2 from '../imgs/ch4/ch4_2_2.svg';
import ch4_3_1 from '../imgs/ch4/ch4_3_1.svg';
import ch4_3_2 from '../imgs/ch4/ch4_3_2.svg';
import ch4_4 from '../imgs/ch4/ch4_4.svg';
import ch4_5_1 from '../imgs/ch4/ch4_5_1.svg';
import ch4_5_2 from '../imgs/ch4/ch4_5_2.svg';
import ch4_6_1 from '../imgs/ch4/ch4_6_1.svg';
import ch4_6_2 from '../imgs/ch4/ch4_6_2.svg';

function Ch4 (props) {
  const currentStep = props.currentStep;

  return (
    <div className='visual_container'>
      {
    currentStep === 1
      ? <>
        <img src={ch4_1} className='svg show_commit' />
        <Remote />
        <Local localStatus='true' />
      </>
      : currentStep === 2
        ? <>
          <img src={ch4_2_1} className='svg show_commit' />
          <img src={ch4_2_2} className='svg show_commit' />
          <Remote />
          <Local localStatus='true' />
        </>
        : currentStep === 3
          ? <>
            <img src={ch4_3_1} className='svg' />
            <img src={ch4_3_2} className='svg' />
            <Remote />
            <Local localStatus='true' />
            </>
          : currentStep === 4
            ? <>
              <img src={ch4_4} className='svg' />
              <Remote />
              <Local localStatus='true' />
              </>
            : currentStep === 5
              ? <>
                <img src={ch4_5_1} className='svg' />
                <img src={ch4_5_2} className='svg show_commit' />
                <Remote />
                <Local localStatus='true' />
                </>
              : currentStep === 6
                ? <>
                  <img src={ch4_6_1} className='svg' />
                  <img src={ch4_6_2} className='svg show_commit' />
                  <Remote />
                  <Local localStatus='true' />
                  </>
                : null
    }
    </div>
  );
}

export default Ch4;
