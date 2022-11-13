import React from 'react';

const Review = ({ review }) => {
    const { img, name, location, desc } = review
    return (
        <div className="p-5 bg-white border rounded shadow-sm text-left">
            <div className='flex items-center mb-6'>
                <div className="flex items-center justify-center w-16 h-16 border-2 border-secondary p-1 rounded-full bg-indigo-50">
                    <img src={img} alt="" />
                </div>
                <div className='ml-3'>
                    <h6 className="mb-1 font-semibold leading-5">{name}</h6>
                    <p className="text-sm text-gray-900">
                        {location}
                    </p>
                </div>
            </div>
            <p className="text-sm text-gray-700">
                {desc}
            </p>
        </div>
    );
};

export default Review;