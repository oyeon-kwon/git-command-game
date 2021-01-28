import React from 'react';
import './Terminal.css';
import questions from '../questions.json';

function Terminal() {

    const currentStep = Number(window.location.pathname.slice(-1))
    let inputValue = ''

    const moveNextStep = () => {

        if(inputValue === questions[currentStep - 1].answer){
            // ! 7번 문제로 갔을 때 그만하게 하는 법?
            window.location.href = `http://localhost:3000/chapter1/${currentStep + 1}`
        } else {
            alert("오답입니다.")
        }
    }

    const inputHandler = (e) => {
        inputValue = e.target.value
    }

    const onEnterPress = (e) => {
        if(e.key === "Enter") {
            moveNextStep()
        }
    }

    return (
        <div className="terminal">
            <div>{questions[currentStep - 1].description}</div>
            <input onChange={inputHandler} onKeyPress={onEnterPress}></input> <button onClick={moveNextStep}>enter</button>
        </div>
    );
}

export default Terminal;