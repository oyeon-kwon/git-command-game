import React from 'react';
import './Nav.css';
import questions from '../questions.json';

function Nav(props) {

    // App.js에서 상태 받아 와서 점수 구현 필요

    const currentStep = Number(window.location.pathname.slice(-1))

    const backHandler = () => {
        window.location.href = `http://localhost:3000/chapter1/${currentStep - 1}`
        
        // 뒤로가기 할 때마다 점수 마이너스 처리 구현 필요
    }

    return (
        <div className="nav">
            <div className="nav_title">
                Chapter {questions[currentStep - 1].chapter} ( {questions[currentStep - 1].number} / {questions.length} ) 
                <button className="back" onClick={backHandler}>Back</button>
                <div className="score">점수</div>
            </div>
        </div>
    );
}

export default Nav;