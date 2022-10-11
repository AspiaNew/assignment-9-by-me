import React from 'react';

const Options = ({ option, name }) => {
    console.log(option, name)
    return (
        <div>
            <p>
                <label htmlFor={option}>
                    <input type="radio" name={name} id={option} />
                    {option}
                </label>
            </p>
        </div>
    );
};

export default Options;