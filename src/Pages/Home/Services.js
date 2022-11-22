import React from 'react';
import fluoride from "../../Assets/images/fluoride.png";
import cavity from "../../Assets/images/cavity.png";
import whitening from "../../Assets/images/whitening.png";
import Service from './Service';

const Services = () => {

    const services = [
        {
            id: 1,
            logo: fluoride,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            logo: cavity,
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            logo: whitening,
            title: "Teeth Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]

    return (
        <div className="container px-4 py-16 w-full md:w-[85%] mx-auto md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 text-center">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider uppercase rounded-full text-primary">
                        Our Services
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl leading-none tracking-tight text-neutral sm:text-4xl md:mx-auto">
                    Services We Provided
                </h2>
            </div>
            <div className="grid gap-5 mb-8 grid-cols-1 md:grid-cols-1 lg:grid-cols-3 text-center">
                {
                    services.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;