import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from '@tanstack/react-query';
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostingKey = process.env.REACT_APP_imagebb_key
    const navigate = useNavigate()

    const { data: specialties = [] } = useQuery({
        queryKey: ["doctorsSpecialty"],
        queryFn: async () => {
            const res = await fetch("https://doctors-portal-server-three-puce.vercel.app/doctorsSpecialty");
            const data = await res.json()
            return data
        }
    })

    const handleAddDoctor = (data) => {
        const name = data.name;
        const email = data.email;
        const specialty = data.specialty
        const img = data.img[0]
        const formData = new FormData();
        formData.append("image", img);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctor = {
                        name: name,
                        email: email,
                        specialty: specialty,
                        img: imgData.data.url
                    }
                    fetch("https://doctors-portal-server-three-puce.vercel.app/doctors", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem("token")}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            toast.success("Doctor Added Successfully")
                            navigate("/dashboard/manageDoctors")
                        })
                }
            })
    }

    return (
        <div className='container my-8 w-[96%] md:w-[55%]'>
            <h2 className='text-3xl font-semibold mb-6'>Add Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)} className="font-semibold">
                <div className='mb-5'>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder='Enter your Name'
                        {...register("name", { required: "Doctor Name is required" })}
                        aria-invalid={errors.name ? true : false}
                        className="input input-bordered w-full font-normal" />
                </div>
                <div className='mb-5'>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder='Enter your Email'
                        {...register("email", {
                            required: "Email is Required"
                        })}
                        aria-invalid={errors.email ? true : false}
                        className="input input-bordered w-full font-normal" />
                </div>
                <div className='mb-12'>
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                        className="select select-bordered w-full"
                        {...register("specialty")}
                    >
                        <option disabled selected>Select your Specialty</option>
                        {
                            specialties.map(
                                specialty =>
                                    <option
                                        key={specialty._id}
                                        value={specialty.name}
                                    >{specialty.name}
                                    </option>)
                        }
                    </select>
                </div>
                <div className='mb-5'>
                    <input
                        type="file"
                        {...register("img", {
                            required: "Image is Required"
                        })}
                        aria-invalid={errors.img ? true : false}
                        className="input input-bordered w-full font-normal" />
                </div>
                <input className='btn bg-neutral text-white w-full' type="submit" value="Add Doctor" />
                {errors.name &&
                    <p role="alert"
                        className='text-red-500 text-center my-3 font-semibold'>
                        {errors.name?.message}
                    </p>}
                {errors.email &&
                    <p role="alert"
                        className='text-red-500 text-center my-3 font-semibold'>
                        {errors.email?.message}
                    </p>}
                {errors.img &&
                    <p role="alert"
                        className='text-red-500 text-center my-3 font-semibold'>
                        {errors.img?.message}
                    </p>}
            </form>
        </div>
    );
};

export default AddDoctor;