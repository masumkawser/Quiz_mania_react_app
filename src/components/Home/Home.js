import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import"./Home.css";
const Home = () => {
    const subjects =useLoaderData();
    const quizs =subjects.data;
    return (
        <div>
            <div className='hometitle'> <h1 >Welcome to <span className='welcome'>Quiz-Mania</span></h1>
            <div> 
            <h3>What is quiz and its importance?</h3><br></br>
            <p>A quiz is a quick and informal assessment of student knowledge.<br></br> Quizzes are often used  course material, providing teachers with insights into student progress and any existing knowledge gaps.</p>

            <p>taking quiz for most practices.<br></br>we belive that practice makes man can perfect.</p>

            </div>
            <div className='quizcont'>
            {
                quizs.map(quiz =><Quiz key={quiz.id} quiz={quiz}></Quiz> )
            }
            </div>
            </div>
            
        </div>
    );
};

export default Home;