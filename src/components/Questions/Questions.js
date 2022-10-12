import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Questions = () => {


    const questionsData = useLoaderData();
    const questions = questionsData.data.questions;
    // console.log(questions);
    return (
        <div className='mx-8 md:mx-12'>
            <h1 className='text-3xl text-center my-5'>Questions</h1>
            {
                questions.map((qs, idx) => <Question
                    key={qs.id}
                    qs={qs}
                    index={idx}
                ></Question>)
            }

        </div>
    );
};

export default Questions;