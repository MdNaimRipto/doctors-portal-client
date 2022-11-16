import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/AuthProvider';

const GoogleLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err)
            })
    }
    return (
        <button
            className='btn btn-outline font-semibold text-neutral w-full hover:bg-neutral'
            onClick={handleGoogleLogin}
        >
            CONTINUE WITH GOOGLE
        </button>
    );
};

export default GoogleLogin;