import React from 'react';
import Answer from '../Answer/Answer';
import"./Question.css";
// import { EyeIcon } from '@heroicons/react/24/solid';
const Question = ({questions}) => {
    const { question, id, options, correctAnswer } = questions;

    const handleCorrectAnswer = (event) => {
        const selectedAnswer = event.target.innerText;

        if (selectedAnswer === correctAnswer) {
            alert('Correct');
        }
        else {
            alert('Incorrect');
        }
    }

    const showCorrectAnswer = () => {
        alert(`Correct answer is: "${correctAnswer}"`)
    }

    return (
        <div className='question-container'>
                <div>
                    <p className='question'>{question}</p>
                    {/* <EyeIcon onClick={showCorrectAnswer} className="arrow-icon" /> */}
                </div>
                <div className='answer-container'>
                    {
                        options.map(option => <Answer key={option} option={option} handleCorrectAnswer={handleCorrectAnswer}></Answer>)
                    }
                </div>
            </div>
    );
};

export default Question;