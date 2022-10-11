import React, { useState } from 'react';
// import Path from '../Link/Path';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Path from '../Path/Path';

const Header = () => {

    const [open, setOpen] = useState(false);

    const toggleBar = (open) => {
        setOpen(!open);
    }

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/quiz', name: 'Quiz' },
        { id: 3, path: '/statistics', name: 'Statistics' },
        { id: 4, path: '/blog', name: 'Blog' }
    ]

    return (
        <nav className='bg-gray-200 flex justify-between md:px-10 py-3'>


            <h2 className='text-3xl mx-5'>IQ Tester </h2>

            <button onClick={() => toggleBar(open)} className="h-8 w-8 text-blue-500 md:hidden mx-5">
                {open ? <div><XMarkIcon></XMarkIcon></div> : <div><Bars3Icon></Bars3Icon></div>}
            </button>


            <ul className={`bg-gray-200 flex flex-col md:flex-row absolute md:static w-full md:w-auto ${open ? 'top-14' : '-top-40'}`}>
                {
                    routes.map(route => <Path
                        key={route.id}
                        route={route}
                    ></Path>)
                }
            </ul>


        </nav>
    );
};

export default Header;