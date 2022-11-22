import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import Loading from '../Shared/Loading';
import PaymentModal from './PaymentModal';

const MyAppointments = () => {
    const { user, logout } = useContext(AuthContext)
    const [paymentInfo, setPaymentInfo] = useState(null)
    const url = `https://doctors-portal-server-three-puce.vercel.app/bookings?email=${user?.email}`
    const { data: bookings = [], isLoading, refetch } = useQuery({
        queryKey: ["bookings", user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem("token")}`
                }
            });
            if (res.status === 401 || res.status === 403) {
                logout()
            }
            else {
                const data = await res.json();
                return data
            }
        }
    })
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='container mx-auto my-8 font-semibold'>
            <h2 className='text-3xl mb-6'>My Appointments</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>NAME</th>
                            <th>SERVICE</th>
                            <th>TIME</th>
                            <th>DATE</th>
                            <th>payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) =>
                                <tr key={booking._id}>
                                    <th>{index + 1}</th>
                                    <td>{booking.userName}</td>
                                    <td>{booking.appointmentName}</td>
                                    <td>{booking.slot}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>
                                        {
                                            booking.treatmentCharge && !booking.paid &&
                                            <label
                                                className='btn btn-sm btn-primary text-white'
                                                htmlFor="payment-modal"
                                                onClick={() => { setPaymentInfo(booking) }}
                                            >
                                                Pay
                                            </label>
                                        }{
                                            booking.treatmentCharge && booking.paid &&
                                            <>
                                                <span className='text-primary'>
                                                    Paid
                                                </span>
                                                <span className='block text-sm mt-1 text-gray-400'>
                                                    ID: {booking.transactionId}
                                                </span>
                                            </>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                paymentInfo &&
                <PaymentModal
                    paymentInfo={paymentInfo}
                    setPaymentInfo={setPaymentInfo}
                    refetch={refetch}
                />
            }
        </div>
    );
};

export default MyAppointments;