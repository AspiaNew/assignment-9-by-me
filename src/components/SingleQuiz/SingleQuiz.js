import React from 'react';
import { Link } from 'react-router-dom';

const SingleQuiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;


    return (
        <div className='border border-gray-400 rounded-lg'>
            <img className='bg-gray-300 w-full rounded-lg' src={logo} alt="" />
            <div className="flex justify-between items-center px-5 my-5">
                <div className="quiz-details">
                    <h3 className='text-3xl'>{name}</h3>
                    <p>Total Quiz: {total}</p>
                </div>
                <div className='bg-green-700 text-white font-semibold hover:bg-green-600 px-3 py-1 rounded '>
                    <Link to={`/quiz/${id}`}><button >Start Quiz</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleQuiz;