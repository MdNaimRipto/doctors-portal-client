import React from 'react';

const Service = ({ service }) => {
    const { logo, title, description } = service;
    return (
        <div className="p-5 bg-white border rounded shadow-sm">
            <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-indigo-50 mx-auto">
                <img src={logo} alt="" />
            </div>
            <h6 className="mb-2 font-semibold leading-5">{title}</h6>
            <p className="text-sm text-gray-900">
                {description}
            </p>
        </div>
    );
};

export default Service;