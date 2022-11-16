import React, { useContext } from 'react';
import { Link } from "react-router-dom"
import { AuthContext } from '../../ContextProvider/AuthProvider';
import "../../CSS/navbar.css"

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then(() => {

            })
            .catch(err => console.error(err))
    }

    const menuItems =
        <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/appointment">Appointment</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/contactUs">Contact Us</Link></li>
            {
                !user?.uid ? <li><Link to="/login">Login</Link></li>
                    : <li><button onClick={handleLogout}>Logout</button></li>
            }
        </>

    return (
        <div className="container mx-auto navbar bg-base-100 py-6 border-b border-gray-300 justify-center">
            <Link to="/" className="btn btn-ghost normal-case text-xl">Doctor's Portal</Link>
            <div className="navbar-end">
                <div className="dropdown dropdown-bottom dropdown-left">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-80 font-semibold dropdown-style">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex w-[55%]">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;