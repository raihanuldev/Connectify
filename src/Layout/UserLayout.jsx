import React from 'react';
import Nabvar from '../componets/nabavar/Nabvar';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <div className=''>
            <Nabvar/>
            <Outlet/>
        </div>
    );
};

export default UserLayout;