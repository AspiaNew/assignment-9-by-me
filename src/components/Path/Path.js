import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Path = ({ route }) => {
    const { name, path } = route;

    //active link styles
    let activeClassName = "border-b-4";
    return (
        <div className='mx-auto py-1 hover:bg-green-500 duration-300 ease-in-out px-3 py-1 rounded md:mx-3'>
            {/* <a href={path}>{name}</a> */}
            {/* <Link to={path}>{name}</Link> */}
            <NavLink to={path} className={({ isActive }) =>
                isActive ? activeClassName : undefined
            }>{name}</NavLink>
        </div>
    );
};

export default Path;