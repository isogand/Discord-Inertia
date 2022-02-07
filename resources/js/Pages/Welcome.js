import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';


export default function Welcome(props) {
    return (
        <>
            <Head title="Discord" />
            <div className="relative flex items-top justify-center min-h-screen   sm:items-center sm:pt-0 bg-black">
                <div className="fixed top-0 right-0 px-6 py-4 sm:block">
                    {props.auth.user ? (
                         <Link href="/dashboard" className="text-sm text-gray-700">
                           Dashboard
                         </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm p-2 bg-white rounded-2xl text-gray-700">
                                Log in
                            </Link>

                            <Link href={route('register')} className="ml-4 p-2 bg-white rounded-2xl text-sm text-gray-700">
                                Register
                            </Link>
                        </>
                    )}
                </div>
                <img  style={{}}
                      className="block w-full h-full"
                      src={`/images/Discord.jpg`}
                />
            </div>
        </>
    );
}
