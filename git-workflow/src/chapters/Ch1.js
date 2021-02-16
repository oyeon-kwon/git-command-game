import React from 'react';
import '../views/Visual.css';
import githubLogo from '../github.png';

function Ch1 (props) {
  const currentStep = props.currentStep

  return (
  <>
    {
    currentStep === 1 ? 
    <>
        <img src={githubLogo} className='github_logo' alt='git'></img>
    </>
    :
    currentStep === 2 ?
    <>
        <div className='remote show_commit'>
        <span className='visual_sub_title'>Remote</span>
        <div className='pair'>
            <div className='visual_third_title'>pair</div>
        </div>
        <div className='origin'>
            <span className='visual_third_title'>origin</span>
        </div>
        </div>
        <div className='local show_commit'>
        <span className='visual_sub_title'>Local</span>
        </div>
    </>
    :
    currentStep === 3 ?
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
    : 
    currentStep === 4 ?
    <>
        <svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="show_commit ch1_4">
        <circle cx="83.5" cy="56.5" r="9" fill="white" stroke="#4000C7" strokeDasharray="2 2"/>
        <rect x="40" width="88" height="27" rx="13.5" fill="#7D7D7D"/>
        <path d="M55.355 10.24V11.245H57.62V13.06H55.355V14.065H57.62V16.915H58.865V6.67H57.62V10.24H55.355ZM55.355 8.305H52.265V6.64H51.035V8.305H47.825V9.295H55.355V8.305ZM49.76 12.595C49.76 11.65 50.525 11.005 51.635 11.005C52.745 11.005 53.51 11.65 53.51 12.595C53.51 13.555 52.745 14.215 51.635 14.215C50.525 14.215 49.76 13.555 49.76 12.595ZM54.68 12.595C54.68 11.065 53.42 10.045 51.635 10.045C49.85 10.045 48.59 11.065 48.59 12.595C48.59 14.14 49.85 15.175 51.635 15.175C53.42 15.175 54.68 14.14 54.68 12.595ZM51.455 18.805V16.045H50.225V19.81H59.18V18.805H51.455ZM65.5688 9.25H68.0138V8.245H61.7738V9.25H64.3838V10.3C64.3838 13.03 63.3788 15.325 61.4588 16.405L62.2088 17.335C63.6038 16.525 64.5488 15.07 64.9988 13.24C65.4788 14.83 66.4088 16.135 67.7288 16.87L68.4488 15.925C66.5438 14.935 65.5688 12.76 65.5688 10.3V9.25ZM71.8838 6.64V12.085H70.1138V6.955H68.9588V19.45H70.1138V13.105H71.8838V20.11H73.0688V6.64H71.8838ZM90.1534 6.67H88.9234V16.51H90.1534V6.67ZM87.3334 13.615C85.3534 12.955 83.9584 11.32 83.9584 9.505V8.77H87.0034V7.78H79.6234V8.77H82.6984V9.505C82.6984 11.425 81.3334 13.18 79.2934 13.885L79.9384 14.845C81.5284 14.275 82.7734 13.06 83.3434 11.53C83.9584 12.94 85.1884 14.05 86.7334 14.59L87.3334 13.615ZM82.7284 18.805V15.58H81.4984V19.81H90.5584V18.805H82.7284ZM101.372 11.32H103.082V15.175H104.267V6.655H103.082V10.315H101.372V6.91H100.202V14.68H101.372V11.32ZM99.6622 8.26H96.8722V6.76H95.6572V8.26H92.8372V9.235H99.6772L99.6622 8.26ZM94.5022 12.235C94.5022 11.41 95.2072 10.855 96.2722 10.855C97.3222 10.855 98.0422 11.41 98.0422 12.235C98.0422 13.075 97.3222 13.63 96.2722 13.63C95.2072 13.63 94.5022 13.075 94.5022 12.235ZM99.1372 12.235C99.1372 10.855 97.9672 9.94 96.2722 9.94C94.5772 9.94 93.3922 10.855 93.3922 12.235C93.3922 13.645 94.5772 14.545 96.2722 14.545C97.9672 14.545 99.1372 13.645 99.1372 12.235ZM99.8422 19.15C97.7872 19.15 96.5572 18.64 96.5572 17.755C96.5572 16.855 97.7872 16.345 99.8422 16.345C101.882 16.345 103.112 16.855 103.112 17.755C103.112 18.64 101.882 19.15 99.8422 19.15ZM99.8422 15.4C97.0372 15.4 95.3422 16.24 95.3422 17.755C95.3422 19.255 97.0372 20.095 99.8422 20.095C102.647 20.095 104.342 19.255 104.342 17.755C104.342 16.24 102.647 15.4 99.8422 15.4ZM107.836 12.145C110.041 11.875 112.066 10.885 112.801 9.4C113.551 10.885 115.561 11.875 117.766 12.145L118.201 11.17C115.846 10.9 113.701 9.745 113.596 8.26H117.781V7.27H107.836V8.26H112.006C111.901 9.745 109.756 10.9 107.401 11.17L107.836 12.145ZM116.146 17.725C116.146 18.625 114.886 19.15 112.786 19.15C110.671 19.15 109.426 18.625 109.426 17.725C109.426 16.825 110.671 16.315 112.786 16.315C114.886 16.315 116.146 16.825 116.146 17.725ZM118.876 13.945V12.955H106.711V13.945H112.171V15.385C109.666 15.505 108.181 16.33 108.181 17.725C108.181 19.255 109.921 20.095 112.801 20.095C115.666 20.095 117.391 19.255 117.391 17.725C117.391 16.33 115.921 15.505 113.416 15.385V13.945H118.876Z" fill="white"/>
        <path d="M84 68L80.3589 72.4806L86.0598 73.3936L84 68ZM47.6286 99.4019L47.6612 99.9008L47.6286 99.4019ZM6.93204 111.738L6.47507 111.535L6.93204 111.738ZM3 128L6.40086 123.334L0.659933 122.722L3 128ZM82.8025 72.3258C80.3229 82.4937 71.1282 97.3688 47.5961 98.9029L47.6612 99.9008C71.7133 98.3328 81.2124 83.0671 83.7741 72.5627L82.8025 72.3258ZM47.5961 98.9029C30.4143 100.023 21.1037 101.006 15.625 102.781C12.8653 103.676 11.0402 104.782 9.66545 106.234C8.29975 107.676 7.41125 109.427 6.47507 111.535L7.389 111.941C8.32054 109.844 9.15231 108.23 10.3916 106.921C11.6219 105.622 13.2864 104.591 15.9333 103.733C21.2677 102.004 30.4376 101.024 47.6612 99.9008L47.5961 98.9029ZM6.47507 111.535C4.57672 115.81 3.52241 120.153 2.98391 123.445L3.97079 123.606C4.49953 120.374 5.53412 116.118 7.389 111.941L6.47507 111.535Z" fill="#4000C7"/>
        </svg>
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
        <div className='commit'>
        </div>
        <div className='layout'>
            <div className='left'>
            <div className='staging'>
                <span className='visual_third_title'>staging</span>
                <span className='file show_commit'>index.html</span>
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
    :
    currentStep === 5 ?
    <>
        <svg width="120" height="128" viewBox="0 0 120 128" fill="none" xmlns="http://www.w3.org/2000/svg" className="ch1_5">
        <circle cx="84.5" cy="56.5" r="9" fill="#4000C7" stroke="#4000C7" className="show_commit"/>
        <rect x="50" width="70" height="27" rx="13.5" fill="#7D7D7D" className="show_commit"/>
        <path d="M70.2998 11.0752L70.3364 11.9541C70.9175 11.2705 71.7012 10.9287 72.6875 10.9287C73.7959 10.9287 74.5503 11.3535 74.9507 12.2031C75.2144 11.8223 75.5562 11.5146 75.9761 11.2803C76.4009 11.0459 76.9014 10.9287 77.4775 10.9287C79.2158 10.9287 80.0996 11.8491 80.1289 13.6899V19H78.7739V13.7705C78.7739 13.2041 78.6445 12.7817 78.3857 12.5034C78.127 12.2202 77.6924 12.0786 77.082 12.0786C76.5791 12.0786 76.1616 12.23 75.8296 12.5327C75.4976 12.8306 75.3047 13.2334 75.251 13.7412V19H73.8887V13.8071C73.8887 12.6548 73.3247 12.0786 72.1968 12.0786C71.3081 12.0786 70.7002 12.457 70.373 13.2139V19H69.0181V11.0752H70.2998ZM87.0723 19C86.9941 18.8438 86.9307 18.5654 86.8818 18.165C86.252 18.8193 85.5 19.1465 84.626 19.1465C83.8447 19.1465 83.2026 18.9268 82.6997 18.4873C82.2017 18.043 81.9526 17.4814 81.9526 16.8027C81.9526 15.9775 82.2651 15.3379 82.8901 14.8838C83.52 14.4248 84.4038 14.1953 85.5415 14.1953H86.8599V13.5728C86.8599 13.0991 86.7183 12.7231 86.4351 12.4448C86.1519 12.1616 85.7344 12.02 85.1826 12.02C84.6992 12.02 84.2939 12.1421 83.9668 12.3862C83.6396 12.6304 83.4761 12.9258 83.4761 13.2725H82.1138C82.1138 12.877 82.2529 12.4961 82.5312 12.1299C82.8145 11.7588 83.1953 11.4658 83.6738 11.251C84.1572 11.0361 84.687 10.9287 85.2632 10.9287C86.1763 10.9287 86.8916 11.1582 87.4092 11.6172C87.9268 12.0713 88.1953 12.6987 88.2148 13.4995V17.147C88.2148 17.8745 88.3076 18.4531 88.4932 18.8828V19H87.0723ZM84.8237 17.9673C85.2485 17.9673 85.6514 17.8574 86.0322 17.6377C86.4131 17.418 86.689 17.1323 86.8599 16.7808V15.1548H85.7979C84.1377 15.1548 83.3076 15.6406 83.3076 16.6123C83.3076 17.0371 83.4492 17.3691 83.7324 17.6084C84.0156 17.8477 84.3794 17.9673 84.8237 17.9673ZM91.811 19H90.4561V11.0752H91.811V19ZM90.3462 8.97314C90.3462 8.75342 90.4121 8.56787 90.5439 8.4165C90.6807 8.26514 90.8809 8.18945 91.1445 8.18945C91.4082 8.18945 91.6084 8.26514 91.7451 8.4165C91.8818 8.56787 91.9502 8.75342 91.9502 8.97314C91.9502 9.19287 91.8818 9.37598 91.7451 9.52246C91.6084 9.66895 91.4082 9.74219 91.1445 9.74219C90.8809 9.74219 90.6807 9.66895 90.5439 9.52246C90.4121 9.37598 90.3462 9.19287 90.3462 8.97314ZM95.2681 11.0752L95.312 12.0713C95.9175 11.3096 96.7085 10.9287 97.6851 10.9287C99.3599 10.9287 100.205 11.8735 100.219 13.7632V19H98.8643V13.7559C98.8594 13.1846 98.7275 12.7622 98.4688 12.4888C98.2148 12.2153 97.8169 12.0786 97.2749 12.0786C96.8354 12.0786 96.4497 12.1958 96.1177 12.4302C95.7856 12.6646 95.5269 12.9722 95.3413 13.353V19H93.9863V11.0752H95.2681Z" fill="white"/>
        <path d="M84 68L80.3589 72.4806L86.0598 73.3936L84 68ZM47.6286 99.4019L47.6612 99.9008L47.6286 99.4019ZM6.93204 111.738L6.47507 111.535L6.93204 111.738ZM3 128L6.40086 123.334L0.659933 122.722L3 128ZM82.8025 72.3258C80.3229 82.4937 71.1282 97.3688 47.5961 98.9029L47.6612 99.9008C71.7133 98.3328 81.2124 83.0671 83.7741 72.5627L82.8025 72.3258ZM47.5961 98.9029C30.4143 100.023 21.1037 101.006 15.625 102.781C12.8653 103.676 11.0402 104.782 9.66545 106.234C8.29975 107.676 7.41125 109.427 6.47507 111.535L7.389 111.941C8.32054 109.844 9.15231 108.23 10.3916 106.921C11.6219 105.622 13.2864 104.591 15.9333 103.733C21.2677 102.004 30.4376 101.024 47.6612 99.9008L47.5961 98.9029ZM6.47507 111.535C4.57672 115.81 3.52241 120.153 2.98391 123.445L3.97079 123.606C4.49953 120.374 5.53412 116.118 7.389 111.941L6.47507 111.535Z" fill="#4000C7"/>
        </svg>
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
        <div className='commit'>
        </div>
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
        </div>
    </>
    : currentStep === 6 ?
    <>
        <div className='remote'>
        <span className='visual_sub_title'>Remote</span>
        <div className='pair'>
            <div className='visual_third_title'>pair</div>
        </div>
        <div className='origin'>
            <span className='visual_third_title'>origin</span>
            <svg width="70" height="166" viewBox="0 0 70 166" fill="none" xmlns="http://www.w3.org/2000/svg" className="push_commit show_commit">
            <rect width="70" height="27" rx="13.5" fill="#7D7D7D"/>
            <path d="M20.2998 11.0752L20.3364 11.9541C20.9175 11.2705 21.7012 10.9287 22.6875 10.9287C23.7959 10.9287 24.5503 11.3535 24.9507 12.2031C25.2144 11.8223 25.5562 11.5146 25.9761 11.2803C26.4009 11.0459 26.9014 10.9287 27.4775 10.9287C29.2158 10.9287 30.0996 11.8491 30.1289 13.6899V19H28.7739V13.7705C28.7739 13.2041 28.6445 12.7817 28.3857 12.5034C28.127 12.2202 27.6924 12.0786 27.082 12.0786C26.5791 12.0786 26.1616 12.23 25.8296 12.5327C25.4976 12.8306 25.3047 13.2334 25.251 13.7412V19H23.8887V13.8071C23.8887 12.6548 23.3247 12.0786 22.1968 12.0786C21.3081 12.0786 20.7002 12.457 20.373 13.2139V19H19.0181V11.0752H20.2998ZM37.0723 19C36.9941 18.8438 36.9307 18.5654 36.8818 18.165C36.252 18.8193 35.5 19.1465 34.626 19.1465C33.8447 19.1465 33.2026 18.9268 32.6997 18.4873C32.2017 18.043 31.9526 17.4814 31.9526 16.8027C31.9526 15.9775 32.2651 15.3379 32.8901 14.8838C33.52 14.4248 34.4038 14.1953 35.5415 14.1953H36.8599V13.5728C36.8599 13.0991 36.7183 12.7231 36.4351 12.4448C36.1519 12.1616 35.7344 12.02 35.1826 12.02C34.6992 12.02 34.2939 12.1421 33.9668 12.3862C33.6396 12.6304 33.4761 12.9258 33.4761 13.2725H32.1138C32.1138 12.877 32.2529 12.4961 32.5312 12.1299C32.8145 11.7588 33.1953 11.4658 33.6738 11.251C34.1572 11.0361 34.687 10.9287 35.2632 10.9287C36.1763 10.9287 36.8916 11.1582 37.4092 11.6172C37.9268 12.0713 38.1953 12.6987 38.2148 13.4995V17.147C38.2148 17.8745 38.3076 18.4531 38.4932 18.8828V19H37.0723ZM34.8237 17.9673C35.2485 17.9673 35.6514 17.8574 36.0322 17.6377C36.4131 17.418 36.689 17.1323 36.8599 16.7808V15.1548H35.7979C34.1377 15.1548 33.3076 15.6406 33.3076 16.6123C33.3076 17.0371 33.4492 17.3691 33.7324 17.6084C34.0156 17.8477 34.3794 17.9673 34.8237 17.9673ZM41.811 19H40.4561V11.0752H41.811V19ZM40.3462 8.97314C40.3462 8.75342 40.4121 8.56787 40.5439 8.4165C40.6807 8.26514 40.8809 8.18945 41.1445 8.18945C41.4082 8.18945 41.6084 8.26514 41.7451 8.4165C41.8818 8.56787 41.9502 8.75342 41.9502 8.97314C41.9502 9.19287 41.8818 9.37598 41.7451 9.52246C41.6084 9.66895 41.4082 9.74219 41.1445 9.74219C40.8809 9.74219 40.6807 9.66895 40.5439 9.52246C40.4121 9.37598 40.3462 9.19287 40.3462 8.97314ZM45.2681 11.0752L45.312 12.0713C45.9175 11.3096 46.7085 10.9287 47.6851 10.9287C49.3599 10.9287 50.2046 11.8735 50.2192 13.7632V19H48.8643V13.7559C48.8594 13.1846 48.7275 12.7622 48.4688 12.4888C48.2148 12.2153 47.8169 12.0786 47.2749 12.0786C46.8354 12.0786 46.4497 12.1958 46.1177 12.4302C45.7856 12.6646 45.5269 12.9722 45.3413 13.353V19H43.9863V11.0752H45.2681Z" fill="white"/>
            <path d="M33.3536 54.6464C33.1583 54.4512 32.8417 54.4512 32.6465 54.6464L29.4645 57.8284C29.2692 58.0237 29.2692 58.3403 29.4645 58.5355C29.6597 58.7308 29.9763 58.7308 30.1716 58.5355L33 55.7071L35.8284 58.5355C36.0237 58.7308 36.3403 58.7308 36.5355 58.5355C36.7308 58.3403 36.7308 58.0237 36.5355 57.8284L33.3536 54.6464ZM33.5 166L33.5 55L32.5 55L32.5 166L33.5 166Z" fill="#4000C7"/>
            <circle cx="32.5" cy="44.5" r="9" fill="#4000C7" stroke="#4000C7"/>
            </svg>
        </div>
        </div>
        <div className='local'>
        <span className='visual_sub_title'>Local</span>
        <div className='commit'>
        <svg width="120" height="128" viewBox="0 0 120 128" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <circle cx="84.5" cy="56.5" r="9" fill="#4000C7" stroke="#4000C7" />
            <rect x="50" width="70" height="27" rx="13.5" fill="#7D7D7D" />
            <path d="M70.2998 11.0752L70.3364 11.9541C70.9175 11.2705 71.7012 10.9287 72.6875 10.9287C73.7959 10.9287 74.5503 11.3535 74.9507 12.2031C75.2144 11.8223 75.5562 11.5146 75.9761 11.2803C76.4009 11.0459 76.9014 10.9287 77.4775 10.9287C79.2158 10.9287 80.0996 11.8491 80.1289 13.6899V19H78.7739V13.7705C78.7739 13.2041 78.6445 12.7817 78.3857 12.5034C78.127 12.2202 77.6924 12.0786 77.082 12.0786C76.5791 12.0786 76.1616 12.23 75.8296 12.5327C75.4976 12.8306 75.3047 13.2334 75.251 13.7412V19H73.8887V13.8071C73.8887 12.6548 73.3247 12.0786 72.1968 12.0786C71.3081 12.0786 70.7002 12.457 70.373 13.2139V19H69.0181V11.0752H70.2998ZM87.0723 19C86.9941 18.8438 86.9307 18.5654 86.8818 18.165C86.252 18.8193 85.5 19.1465 84.626 19.1465C83.8447 19.1465 83.2026 18.9268 82.6997 18.4873C82.2017 18.043 81.9526 17.4814 81.9526 16.8027C81.9526 15.9775 82.2651 15.3379 82.8901 14.8838C83.52 14.4248 84.4038 14.1953 85.5415 14.1953H86.8599V13.5728C86.8599 13.0991 86.7183 12.7231 86.4351 12.4448C86.1519 12.1616 85.7344 12.02 85.1826 12.02C84.6992 12.02 84.2939 12.1421 83.9668 12.3862C83.6396 12.6304 83.4761 12.9258 83.4761 13.2725H82.1138C82.1138 12.877 82.2529 12.4961 82.5312 12.1299C82.8145 11.7588 83.1953 11.4658 83.6738 11.251C84.1572 11.0361 84.687 10.9287 85.2632 10.9287C86.1763 10.9287 86.8916 11.1582 87.4092 11.6172C87.9268 12.0713 88.1953 12.6987 88.2148 13.4995V17.147C88.2148 17.8745 88.3076 18.4531 88.4932 18.8828V19H87.0723ZM84.8237 17.9673C85.2485 17.9673 85.6514 17.8574 86.0322 17.6377C86.4131 17.418 86.689 17.1323 86.8599 16.7808V15.1548H85.7979C84.1377 15.1548 83.3076 15.6406 83.3076 16.6123C83.3076 17.0371 83.4492 17.3691 83.7324 17.6084C84.0156 17.8477 84.3794 17.9673 84.8237 17.9673ZM91.811 19H90.4561V11.0752H91.811V19ZM90.3462 8.97314C90.3462 8.75342 90.4121 8.56787 90.5439 8.4165C90.6807 8.26514 90.8809 8.18945 91.1445 8.18945C91.4082 8.18945 91.6084 8.26514 91.7451 8.4165C91.8818 8.56787 91.9502 8.75342 91.9502 8.97314C91.9502 9.19287 91.8818 9.37598 91.7451 9.52246C91.6084 9.66895 91.4082 9.74219 91.1445 9.74219C90.8809 9.74219 90.6807 9.66895 90.5439 9.52246C90.4121 9.37598 90.3462 9.19287 90.3462 8.97314ZM95.2681 11.0752L95.312 12.0713C95.9175 11.3096 96.7085 10.9287 97.6851 10.9287C99.3599 10.9287 100.205 11.8735 100.219 13.7632V19H98.8643V13.7559C98.8594 13.1846 98.7275 12.7622 98.4688 12.4888C98.2148 12.2153 97.8169 12.0786 97.2749 12.0786C96.8354 12.0786 96.4497 12.1958 96.1177 12.4302C95.7856 12.6646 95.5269 12.9722 95.3413 13.353V19H93.9863V11.0752H95.2681Z" fill="white"/>
            <path d="M84 68L80.3589 72.4806L86.0598 73.3936L84 68ZM47.6286 99.4019L47.6612 99.9008L47.6286 99.4019ZM6.93204 111.738L6.47507 111.535L6.93204 111.738ZM3 128L6.40086 123.334L0.659933 122.722L3 128ZM82.8025 72.3258C80.3229 82.4937 71.1282 97.3688 47.5961 98.9029L47.6612 99.9008C71.7133 98.3328 81.2124 83.0671 83.7741 72.5627L82.8025 72.3258ZM47.5961 98.9029C30.4143 100.023 21.1037 101.006 15.625 102.781C12.8653 103.676 11.0402 104.782 9.66545 106.234C8.29975 107.676 7.41125 109.427 6.47507 111.535L7.389 111.941C8.32054 109.844 9.15231 108.23 10.3916 106.921C11.6219 105.622 13.2864 104.591 15.9333 103.733C21.2677 102.004 30.4376 101.024 47.6612 99.9008L47.5961 98.9029ZM6.47507 111.535C4.57672 115.81 3.52241 120.153 2.98391 123.445L3.97079 123.606C4.49953 120.374 5.53412 116.118 7.389 111.941L6.47507 111.535Z" fill="#4000C7"/>
            </svg>
        </div>
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
        </div>
    </> : null
    }
  </>
  )
}


export default Ch1;