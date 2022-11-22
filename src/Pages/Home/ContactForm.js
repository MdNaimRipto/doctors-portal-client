import React from 'react';
import formBanner from "../../Assets/images/appointment.png"

const ContactForm = () => {
    return (
        <section
            className='my-12 py-12'
            style={{
                background: `url(${formBanner})`
            }}>

            <div className='container w-[96%] lg:w-2/6 md:w-3/5 mx-auto text-center text-white'>
                <div>
                    <h2 className=" mb-1 font-sans text-base font-bold tracking-tight text-primary">
                        Contact Us
                    </h2>
                    <h2 className=" mb-6 font-sans text-2xl font-bold tracking-tight">
                        Stay Connected With Us
                    </h2>
                </div>
                <div className="card-body">
                    <div className="form-control mb-4">
                        <input type="email" placeholder="Enter Email" className="input input-bordered" />
                    </div>
                    <div className="form-control mb-4">
                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </div>
                    <textarea className="textarea" placeholder="Your Message"></textarea>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-white">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;