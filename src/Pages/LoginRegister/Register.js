import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import GoogleLogin from './GoogleLogin';

const Register = () => {
    const { signUp, updateUser } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors } } = useForm()
    const handleRegister = (data) => {
        const email = data.email;
        const password = data.password
        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const userName = {
                    displayName: data.name,
                }
                updateUser(userName)
                    .then(() => { })
                    .catch(err => console.error(err))
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='flex items-center justify-center my-12'>
            <div className="w-[96%] md:w-[30%] px-5 py-6 border border-gray-200 font-semibold">
                <h2 className='text-center text-3xl text-neutral font-semibold'>Register</h2>

                <form onSubmit={handleSubmit(handleRegister)}>
                    <div>
                        <label className='label'>
                            <span className='label-text'>Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", { required: "User Name Required" })}
                            aria-invalid={errors.name ? true : false}
                            className="input input-bordered w-full font-normal" />
                    </div>
                    <div className='my-3'>
                        <label className='label'>
                            <span className='label-text'>Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", { required: "Email Address Required" })}
                            aria-invalid={errors.email ? true : false}
                            className="input input-bordered w-full font-normal"
                        />
                    </div>
                    <div className='mb-6'>
                        <label className='label'>
                            <span className='label-text'>Password</span>
                        </label>
                        <input
                            type="password"
                            className='input input-bordered w-full font-normal'
                            {...register("password",
                                {
                                    required: "Password Required",
                                    minLength: {
                                        value: 6,
                                        message: "Password Must Be At Least 6 Characters or Higher"
                                    },
                                    pattern: {
                                        value: /(?=.*[A-Z])(?=.*[0-9])/,
                                        message: "Password Must an Uppercase and a Number"
                                    }
                                })}
                        />
                    </div>
                    <input type="submit" className='btn bg-neutral text-white w-full' value="Register" />
                    {
                        errors.name &&
                        <p role="alert"
                            className='text-red-500 text-center my-3 font-semibold'>
                            {errors.name?.message}
                        </p>
                    }
                    {
                        errors.email &&
                        <p role="alert"
                            className='text-red-500 text-center my-3 font-semibold'>
                            {errors.email?.message}
                        </p>
                    }
                    {
                        errors.password &&
                        <p role="alert"
                            className='text-red-500 text-center my-3 font-semibold'>
                            {errors.password?.message}
                        </p>
                    }
                </form>

                <p className='text-sm text-center font-semibold text-neutral mt-3 mb-5'>
                    Already Have an Account?
                    <Link to="/login" className='text-primary ml-1'>Login Now</Link>
                </p>
                <div className="divider">OR</div>
                <GoogleLogin />
            </div>
        </div>
    );
};

export default Register;