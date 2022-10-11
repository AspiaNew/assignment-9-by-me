import React from 'react';
import Options from '../Options/Options';

const Question = ({ qs }) => {

    // console.log(qs);
    const { correctAnswer, id, options, question } = qs;
    return (
        <div>
            <h3 className='text-2xl'>{question}</h3>
            {
                options.map((option, idx) => <Options
                    key={idx}
                    option={option}
                    name={correctAnswer}
                ></Options>)
            }
        </div>
    );
};

export default Question;