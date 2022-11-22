import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from "react-router-dom"

const Secondary = () => {
    return (
        <div>
            <div className="w-full lg:w-[85%] mx-auto container">
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default Secondary;