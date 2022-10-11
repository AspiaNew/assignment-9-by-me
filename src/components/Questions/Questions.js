import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {
    const questionsData = useLoaderData();
    const questions = questionsData.data.questions;
    console.log(questions);
    return (
        <div>
            <h1>from questions</h1>
            {
                questions.map(qs => <Question
                    key={qs.id}
                    qs={qs}
                ></Question>)
            }
        </div>
    );
};

export default Questions;