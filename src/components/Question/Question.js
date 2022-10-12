import React, { useState } from 'react';
import Options from '../Options/Options';
import swal from 'sweetalert';
import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ qs, index }) => {

    const [answer, setAnswer] = useState(false);


    // console.log(qs);
    const { correctAnswer, id, options, question } = qs;

    const handleOption = (option) => {
        if (option === correctAnswer) {
            const notify = () => toast.success("Congratulations ! You choose the right answer :D");
            notify();
        }
        else {
            const notify = () => toast.error("Sorry ! Your answer is not correct :(");
            notify();
        }
    }

    return (
        <div className='bg-green-200 p-8 pb-5 my-5 rounded-lg'>

            <div className='flex justify-between items-center'>
                <h3 className='text-2xl font-semibold mb-5'>
                    <span>Quiz {index + 1}.</span> {question}</h3>
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
            {answer ? <p className='text-xl text-green-500 font-bold p-2 ml-3 rounded'>Correct Answer: {correctAnswer}</p> : <p className='text-xl p-2 ml-3 rounded invisible'>Correct Answer: {correctAnswer}</p>}

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            ></ToastContainer>

        </div>
    );
};

export default Question;