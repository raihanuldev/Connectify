import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../../Provider/AuthProvider';

const Nabvar = () => {
    const {logout,user}=useContext(AuthContex)
    console.log(user)

    return (
        <div className="navbar bg-base-300 px-9">
            <div className="flex-1">
                <a className=" text-2xl font-semibold">Conectify</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                   
                    <div className='flex gap-2 text-2xl font-semibold' >
                        <Link to='/media'>Media</Link>
                        <Link to='/message'>Message</Link>
                        <Link to='/profile'>About</Link>
                    </div>
                    
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a href='/profile' className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        {
                            user? <li><a onClick={logout}>Logout</a></li> : <li ><a href='/login' onClick={logout}>login</a></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nabvar;