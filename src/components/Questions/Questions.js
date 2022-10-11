import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const questions = useLoaderData();
    console.log(questions)
    return (
        <div>
            <h1>from questions</h1>
        </div>
    );
};

export default Questions;