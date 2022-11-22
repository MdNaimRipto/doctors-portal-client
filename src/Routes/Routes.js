import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Secondary from "../Layout/Secondary";
import Appointment from "../Pages/Appointment/Appointment";
import ContactUs from "../Pages/ContactUs/ContactUs";
import AddDoctor from "../Pages/Dashboard/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import Reviews from "../Pages/Reviews/Reviews";
import ErrorPage from "../Pages/Shared/ErrorPage";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
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
                path: "/contactUs",
                element: <PrivateRoute><ContactUs /></PrivateRoute>
            }
        ]
    },
    {
        path: "/",
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />
            },
            {
                path: "/dashboard/allUsers",
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: "/dashboard/addDoctor",
                element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path: "/dashboard/manageDoctors",
                element: <AdminRoute><ManageDoctors /></AdminRoute>
            },
        ]
    },
    {
        path: "/",
        element: <Secondary />,
        errorElement: <ErrorPage />,
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