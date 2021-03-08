import React from 'react';
import '../views/Visual.css';
import Remote from './layouts/Remote';
import Local from './layouts/Local';
import ch3_1 from '../imgs/ch3/ch3_1.svg';
import ch3_2 from '../imgs/ch3/ch3_2.svg';
import ch3_3 from '../imgs/ch3/ch3_3.svg';
import ch3_4_1 from '../imgs/ch3/ch3_4_1.svg';
import ch3_4_2 from '../imgs/ch3/ch3_4_2.svg';
import ch3_5_1 from '../imgs/ch3/ch3_5_1.svg';
import ch3_5_2 from '../imgs/ch3/ch3_5_2.svg';
import ch3_6 from '../imgs/ch3/ch3_6.svg';
import ch3_7 from '../imgs/ch3/ch3_7.svg';
import ch3_8_1 from '../imgs/ch3/ch3_8_1.svg';
import ch3_8_2 from '../imgs/ch3/ch3_8_2.svg';

function Ch3 (props) {
  const currentStep = props.currentStep;

  return (
    <div className='visual_container'>
      {
    currentStep === 1
      ? <>
        <img src={ch3_1} className='svg show_commit' />
        <Remote ch3='remote_ch3' remoteStatus='false' />
        <Local ch3='local_ch3' localStatus='true' />
      </>
      : currentStep === 2
        ? <>
          <img src={ch3_2} className='svg show_commit' />
          <Remote ch3='remote_ch3' remoteStatus='false' />
          <Local ch3='local_ch3' localStatus='true' />
        </>
        : currentStep === 3
        ? <>
          <img src={ch3_3} className='svg' />
          <Remote ch3='remote_ch3' remoteStatus='false' />
          <Local ch3='local_ch3' localStatus='true' />
        </>
        : currentStep === 4
          ? <>
            <img src={ch3_4_1} className='svg' />
            <img src={ch3_4_2} className='svg show_commit' />
            <Remote ch3='remote_ch3' remoteStatus='false' />
            <Local ch3='local_ch3' localStatus='true' />
          </>
          : currentStep === 5
            ? <>
              <img src={ch3_5_1} className='svg show_commit' />
              <img src={ch3_5_2} className='svg show_commit' />
              <Remote ch3='remote_ch3' remoteStatus='false' />
              <Local ch3='local_ch3' localStatus='true' />
            </>
            : currentStep === 6
              ? <>
                <img src={ch3_6} className='svg show_commit' />
                <Remote ch3='remote_ch3' remoteStatus='false' />
                <Local ch3='local_ch3' localStatus='true' />
              </>
              : currentStep === 7
                ? <>
                  <img src={ch3_7} className='svg show_commit' />
                  <Remote ch3='remote_ch3' remoteStatus='false' />
                  <Local ch3='local_ch3' localStatus='true' />
                </>
                : currentStep === 8
                  ? <>
                    <img src={ch3_8_1} className='svg show_commit' />
                    <img src={ch3_8_2} className='svg show_commit' />
                    <Remote ch3='remote_ch3' remoteStatus='false' />
                    <Local ch3='local_ch3' localStatus='true' />
                  </>
                  : null
    }
    </div>
  );
}

export default Ch3;
