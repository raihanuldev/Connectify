import React from 'react';
import Nabvar from '../componets/nabavar/Nabvar';
import { Outlet } from 'react-router-dom';
import Footer from '../componets/footer/Footer';

const UserLayout = () => {
    return (
        <div className=''>
            <Nabvar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default UserLayout;