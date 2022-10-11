import React, { useState } from 'react';
import Options from '../Options/Options';

const Question = ({ qs }) => {

    // const [answer, setAnswer] = useState(correctAnswer);
    // console.log(qs);
    const { correctAnswer, id, options, question } = qs;

    const handleOption = (option) => {
        if (option === correctAnswer) {
            alert('right')
        }
        else {
            alert('wrong')
        }
    }

    return (
        <div className='bg-green-200 p-8 my-5 rounded-lg'>
            <h3 className='text-2xl font-semibold mb-5'>{question}</h3>
            <div className='grid md:grid-cols-2'>
                {
                    options.map((option, idx) => <Options
                        key={idx}
                        option={option}
                        name={correctAnswer}
                        handleOption={handleOption}
                    ></Options>)
                }
            </div>
        </div>
    );
};

export default Question;