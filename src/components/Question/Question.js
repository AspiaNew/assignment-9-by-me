import React, { useState } from 'react';
import Options from '../Options/Options';
import swal from 'sweetalert';
import { EyeIcon } from '@heroicons/react/24/solid'

const Question = ({ qs, index }) => {

    const [answer, setAnswer] = useState(false);


    // console.log(qs);
    const { correctAnswer, id, options, question } = qs;

    const handleOption = (option) => {
        if (option === correctAnswer) {
            // alert('right')
            swal('right')
        }
        else {
            swal('wrong')
        }
    }

    return (
        <div className='bg-green-200 p-8 my-5 rounded-lg'>

            <div className='flex justify-between items-center'>
                <h3 className='text-2xl font-semibold mb-5'>
                    <span>{index + 1}.</span> {question}</h3>
                <div onClick={() => setAnswer(!answer)}>
                    <EyeIcon className='h-6 w-6 text-gray-500'></EyeIcon>
                </div>
            </div>
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
            {answer ? <p className='text-xl bg-green-400 p-2 ml-3 mt-3 rounded'>Correct Answer: {correctAnswer}</p> : ''}
        </div>
    );
};

export default Question;