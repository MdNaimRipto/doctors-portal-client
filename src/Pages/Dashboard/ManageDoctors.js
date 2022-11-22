import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Doctor from './Doctor';
import swal from "sweetalert"
import Loading from '../Shared/Loading';
import toast from 'react-hot-toast';

const ManageDoctors = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null)
    const { data: doctors = [], refetch, isLoading } = useQuery({
        queryKey: ["doctors"],
        queryFn: async () => {
            const res = await fetch("https://doctors-portal-server-three-puce.vercel.app/doctors", {
                headers: {
                    authorization: `bearer ${localStorage.getItem("token")}`
                }
            });
            const data = await res.json()
            return data
        }
    })
    const handleDelete = (_id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover the Doctor info!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://doctors-portal-server-three-puce.vercel.app/doctors/${deleteDoctor._id}`, {
                        method: "DELETE",
                        headers: {
                            authorization: `bearer ${localStorage.getItem("token")}`
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount === 1) {
                                console.log(data)
                                swal(`Selected doctor has been deleted!`, {
                                    icon: "success",
                                });
                                refetch()
                            }
                            else {
                                toast.error("Could not Delete. Please Try Again")
                            }
                        })
                }
            });
    }
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='container my-8'>
            <h2 className='text-3xl font-semibold mb-6'>Manage Doctor:{doctors.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>AVATAR</th>
                            <th>NAME</th>
                            <th>SPECIALTY</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map(
                                (doctor, index) =>
                                    <Doctor
                                        key={doctor._id}
                                        index={index}
                                        doctor={doctor}
                                        setDeleteDoctor={setDeleteDoctor}
                                        handleDelete={handleDelete}
                                    ></Doctor>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;