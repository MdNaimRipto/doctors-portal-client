import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../../src/ContextProvider/AuthProvider"
import { useAdmin } from '../Hooks/useAdmin';
import Loading from '../Pages/Shared/Loading';

const AdminRoute = ({ children }) => {
    const { user, loader, logout } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)

    const location = useLocation()

    if (loader || isAdminLoading) {
        return <Loading />
    }

    if (user && isAdmin) {
        return children;
    }
    else {
        logout()
        return <Navigate to="/login" state={{ from: location }} replace />
    }
};

export default AdminRoute;