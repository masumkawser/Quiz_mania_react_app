import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Questions/Question';
import"./QuizDetails.css";
const QuizDetails = () => {
    const quizDetails=useLoaderData();
    const allQuizs =quizDetails.data.questions;
    return (
        <div>
            <h2>Quiz of {quizDetails.data.name}</h2>
            <div className='quizDetails-container'>
                {
                    allQuizs.map(questions => <Question  key={questions.id} questions={questions}></Question>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;