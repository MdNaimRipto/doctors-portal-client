import React from 'react';

const Doctor = ({ doctor, index, setDeleteDoctor, handleDelete }) => {
    const { name, img, specialty } = doctor

    const handleDeleteModal = (doctor) => {
        setDeleteDoctor(doctor)
        handleDelete(doctor)
    }

    return (
        <tr className='font-semibold'>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-circle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{name}</div>
                </div>
            </td>
            <td>{specialty}</td>
            <th>
                <button
                    className="btn bg-rose-600 btn-sm border-0 text-white"
                    onClick={() => { handleDeleteModal(doctor) }}
                >
                    Delete
                </button>
            </th>
        </tr>
    );
};

export default Doctor;