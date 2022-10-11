import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {


    const questionsData = useLoaderData();
    const questions = questionsData.data.questions;
    console.log(questions);
    return (
        <div className='mx-8 md:mx-12'>
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