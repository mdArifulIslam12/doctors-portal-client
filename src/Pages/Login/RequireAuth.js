import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({children}) => {

    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);

    if(loading || sending){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (!user.emailVerified) {
        return <div className='flex justify-center items-center h-screen '>
            <div className='shadow-lg rounded-lg p-20'>
            <h3 className='text-red-500 text-2xl py-2'>Your Email is not verified!!</h3>
            <h5 className='text-success text-xl pb-4'> Please Verify your email address</h5>
            <button
            className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast.success('Sent email!!');
                }}
            >
                Send Verification Email Again
            </button>
            </div>
        </div>
    }

    // if (user.providerData[0]?.providerId ==='password' && !user.emailVerified) {
    //     return <div className='text-center mt-5'>
    //         <h3 className='text-danger'>Your Email is not verified!!</h3>
    //         <h5 className='text-success'> Please Verify your email address</h5>
    //         <button
    //         className='btn btn-primary'
    //             onClick={async () => {
    //                 await sendEmailVerification();
    //                 toast('Sent email');
    //             }}
    //         >
    //             Send Verification Email Again
    //         </button>
    //     </div>
    // }

    return children
};

export default RequireAuth;