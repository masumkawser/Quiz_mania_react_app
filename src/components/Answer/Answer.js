import React from 'react';

const Answer = ({option, handleCorrectAnswer}) => {
    return (
        <div className='answer'>
        <button onClick={handleCorrectAnswer}>{option}</button>
    </div>
    );
};

export default Answer;