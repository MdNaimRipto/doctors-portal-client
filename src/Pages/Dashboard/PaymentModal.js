import React from 'react';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const PaymentModal = ({ paymentInfo, setPaymentInfo, refetch }) => {
    const { userName, treatmentCharge, appointmentName, appointmentDate, slot } = paymentInfo
    return (
        <>
            <input type="checkbox" id="payment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="payment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p className="pb-4 text-primary">Hello, {userName}</p>
                    <h3 className="text-xl font-bold">Please Pay for {appointmentName}</h3>
                    <p className="py-4 text-gray-400">
                        <small>Your Appointment:
                            <span className='text-orange-400 mx-1'>{appointmentDate}</span>
                            at {slot}
                        </small>
                    </p>
                    <h3 className="text-xl font-bold">Please Pay ${treatmentCharge}</h3>
                    <div>
                        <Elements stripe={stripePromise}>
                            <CheckoutForm
                                paymentInfo={paymentInfo}
                                setPaymentInfo={setPaymentInfo}
                                refetch={refetch}
                            />
                        </Elements>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentModal;