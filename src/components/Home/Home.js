import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from '../SingleQuiz/SingleQuiz';

const Home = () => {
    const quizData = useLoaderData();
    const quizes = quizData.data;
    console.log(quizes)

    return (
        <div>
            This is from home.

            {
                quizes.map(quiz => <SingleQuiz
                    key={quiz.id}
                    quiz={quiz}
                ></SingleQuiz>)
            }
        </div>
    );
};

export default Home;