import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';
import Loading from '../Pages/Shared/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()

    if (loader) {
        return <Loading />

    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
};

export default PrivateRoute;