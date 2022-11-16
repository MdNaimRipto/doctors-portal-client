import React, { useContext } from 'react';
import { MutatingDots } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()

    if (loader) {
        return <div className='flex justify-center items-center h-screen'>
            <MutatingDots
                height="100"
                width="100"
                color="#0FCFEC"
                secondaryColor='#0FCFEC'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return children
};

export default PrivateRoute;