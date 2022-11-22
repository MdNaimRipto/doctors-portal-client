import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await fetch("https://doctors-portal-server-three-puce.vercel.app/users", {
                headers: {
                    authorization: `bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await res.json()
            return data;
        }
    });

    const handleUpdate = (id) => {
        fetch(`https://doctors-portal-server-three-puce.vercel.app/users/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    refetch()
                }
            })
    }
    return (
        <div className='container mx-auto my-8 font-semibold'>
            <h2 className='text-3xl mb-6'>All Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>ADMIN</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user?.role !== "admin" &&
                                            <button
                                                className='btn btn-primary text-white'
                                                onClick={() => { handleUpdate(user._id) }}
                                            >
                                                Make Admin
                                            </button>
                                        }
                                    </td>
                                    <td>
                                        <button
                                            className='btn btn-danger text-white'>
                                            X
                                        </button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;