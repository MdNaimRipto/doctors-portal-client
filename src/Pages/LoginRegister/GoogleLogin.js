import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import { useToken } from '../../Hooks/useToken';

const GoogleLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    if (token) {
        navigate(from, { replace: true })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                console.log(user)
                setUserEmail(user?.email)
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