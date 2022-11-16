import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Secondary from "../Layout/Secondary";
import Appointment from "../Pages/Appointment/Appointment";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import Reviews from "../Pages/Reviews/Reviews";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/appointment",
                element: <Appointment />,
            },
            {
                path: "/reviews",
                element: <PrivateRoute><Reviews /></PrivateRoute>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard /></PrivateRoute>
            },
            {
                path: "/contactUs",
                element: <PrivateRoute><ContactUs /></PrivateRoute>
            }
        ]
    },
    {
        path: "/",
        element: <Secondary />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])