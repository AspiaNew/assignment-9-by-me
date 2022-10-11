import React from 'react';
import { Link } from 'react-router-dom';

const SingleQuiz = ({ quiz }) => {
    const { id, name, logo } = quiz;


    return (
        <div>
            <img className='bg-gray-300' src={logo} alt="" />
            <p>{name}</p>
            <Link to={`/quiz/${id}`}><button className='bg-gray-300 px-3 py-1 rounded'>Start Quiz</button></Link>

        </div>
    );
};

export default SingleQuiz;