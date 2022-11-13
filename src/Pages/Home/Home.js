import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import ExceptionalCare from './ExceptionalCare';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import PatientReviews from './PatientReviews';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <ExceptionalCare />
            <MakeAppointment />
            <PatientReviews />
            <ContactForm />
        </div>
    );
};

export default Home;