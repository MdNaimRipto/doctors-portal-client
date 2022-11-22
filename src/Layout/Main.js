import React from 'react';
import { Outlet } from "react-router-dom"
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';


const Main = () => {
    return (
        <div>
            <div className="w-full lg:w-[85%] mx-auto container">
                <Navbar></Navbar>
            </div>
            <div className='min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;