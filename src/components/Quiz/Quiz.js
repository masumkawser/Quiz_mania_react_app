import React from 'react';
import"./Quiz.css";
import { Link } from 'react-router-dom';
const Quiz = ({ quiz}) => {
    const { name, logo, id } = quiz;
    return (
        <div>
            <div className='quiz'>
                <img src={logo} alt="logo" />
                    <h4>{name}</h4>
                <div className='quiz-btn-container'>
                    <Link to={`/quiz/${id}`} name={name}><button className='btn-attempt'>Attempt Now
                    {/* <ArrowRightIcon className="arrow-icon"/> */}
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default Quiz;