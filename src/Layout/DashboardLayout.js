import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import { Link } from "react-router-dom"
import { AiOutlineMenuUnfold } from "react-icons/ai"
import { AuthContext } from '../../src/ContextProvider/AuthProvider';
import { useAdmin } from '../Hooks/useAdmin';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)


    return (
        <div className="w-full lg:w-[85%] mx-auto container">
            <Navbar />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <AiOutlineMenuUnfold className='text-2xl' />
                    </label>
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 text-base-content font-semibold">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">My Dashboard</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/allUsers">All Users</Link></li>
                                <li><Link to="/dashboard/addDoctor">Add Doctors</Link></li>
                                <li><Link to="/dashboard/manageDoctors">Manage Doctors</Link></li>
                                <li><Link to="/">Home</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;