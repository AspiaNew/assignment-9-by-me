import React from 'react';

const SingleQuiz = ({ quiz }) => {
    const { id, name, logo } = quiz;
    return (
        <div>
            <img className='bg-gray-300' src={logo} alt="" />
            <p>{name}</p>
            <button className='bg-gray-300 px-3 py-1 rounded'>Start Quiz</button>

        </div>
    );
};

export default SingleQuiz;