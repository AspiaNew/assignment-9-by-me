import React from 'react';

const Home = () => {

    return (
        <div className='m-8 md:m-12'>
            <h2 className='text-4xl font-semibold text-center my-10'>It is high time to <span className='text-green-500 font-bold'>Explore Yourself</span></h2>
            <img className='w-full md:w-3/4 lg:w-1/2 mx-auto rounded' src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
        </div>
    );
};

export default Home;