import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Path = ({ route }) => {
    const { name, path } = route;

    //active link styles
    let activeClassName = "border-b-4";
    return (
        <div className='mx-auto py-1 hover:font-bold md:mx-5'>
            {/* <a href={path}>{name}</a> */}
            {/* <Link to={path}>{name}</Link> */}
            <NavLink to={path} className={({ isActive }) =>
                isActive ? activeClassName : undefined
            }>{name}</NavLink>
        </div>
    );
};

export default Path;