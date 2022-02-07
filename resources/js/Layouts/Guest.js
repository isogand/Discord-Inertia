import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center  items-center pt-6 sm:pt-0 bg-white">

            <div style={{backgroundColor:"#363A3F"}} className="w-full sm:max-w-md mt-6 px-8 py-9 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <div style={{fontSize:"30px",color:"white",textAlign:"center"}}>
                    Welcome Back!
                </div>
                <div className="my-5" style={{fontSize:"20px",color:"#a2a2a2",textAlign:"center"}}>
                    We're so excited to see you again!
                </div>
                {children}
            </div>
        </div>
    );
}
