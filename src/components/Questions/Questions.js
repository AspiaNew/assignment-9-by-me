import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Questions = () => {
    const questionsData = useLoaderData();
    const questions = questionsData.data.questions;
    console.log(questions);
    return (
        <div>
            <h1>from questions</h1>
        </div>
    );
};

export default Questions;