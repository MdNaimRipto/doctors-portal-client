import React from 'react';
import people1 from "../../Assets/images/people1.png"
import people2 from "../../Assets/images/people2.png"
import people3 from "../../Assets/images/people3.png"
import quote from "../../Assets/icons/quote.svg"
import Review from './Review';

const PatientReviews = () => {

    const reviews = [
        {
            id: 1,
            img: people1,
            name: "Henry Kelvin",
            location: "California",
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 2,
            img: people2,
            name: "Jesica Jones",
            location: "New York",
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 3,
            img: people3,
            name: "Nirobi",
            location: "California",
            desc: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
    ]

    return (
        <div className="px-4 py-16 w-full md:w-[85%] mx-auto md:px-24 lg:px-8 lg:py-20">
            <div className=" mb-10 md:mx-auto md:mb-12">
                <div className='flex items-center justify-between'>
                    <div>
                        <div>
                            <p className="inline-block px-3 md:px-0 mb-2 text-sm font-semibold tracking-wider uppercase rounded-full text-primary">
                                Testimonial's
                            </p>
                        </div>
                        <h2 className="max-w-lg font-sans text-2xl leading-none tracking-tight text-neutral lg:text-4xl md:mx-auto">
                            What Our Patients Says
                        </h2>
                    </div>
                    <figure className='w-24 lg:w-48'>
                        <img src={quote} alt="" />
                    </figure>
                </div>
            </div>
            <div className="grid gap-5 mb-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 text-center">
                {
                    reviews.map(review =>
                        <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                }
            </div>
        </div>
    );
};

export default PatientReviews;