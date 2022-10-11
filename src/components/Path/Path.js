import React from 'react';
import { Link } from 'react-router-dom';

const Path = ({ route }) => {
    const { name, path } = route;
    return (
        <div className='mx-auto py-1 hover:font-bold md:mx-5'>
            {/* <a href={path}>{name}</a> */}
            <Link to={path}>{name}</Link>
        </div>
    );
};

export default Path;