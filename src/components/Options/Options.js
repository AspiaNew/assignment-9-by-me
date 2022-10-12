import React from 'react';

const Options = ({ option, name, handleOption }) => {
    // console.log(option, name)
    return (
        <div className='p-2 text-xl'>
            <p>
                <label htmlFor={option}>
                    <input onClick={() => handleOption(option)} type="radio" name={name} id={option} />
                    <span className='ml-2'>{option}</span>
                </label>
            </p>
        </div>
    );
};

export default Options;