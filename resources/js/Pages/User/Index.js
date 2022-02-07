import React from "react";
import { usePage} from "@inertiajs/inertia-react";


const Index = () => {
    const {user} = usePage().props;
    // console.log(user);
    return (
        <div className=" pt-8 bg-gray-100 position-relative">
            <h2 className="pl-8 text-3xl font-bold position-absolute">
                List Users
            </h2>

            <div
                style={{borderRadius: "70px 70px 0 0", marginTop: "50px"}}
                className="overflow-x-auto bg-white rounded shadow-2xl p-14 border"
            >
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="font-bold text-left">
                            <th className="px-6 pt-5 pb-4">Name</th>
                            <th className="px-6 pt-5 pb-4">Email</th>
                            <th className="px-6 pt-5 pb-4">Photo</th>
                        </tr>
                    </thead>
                    {user.map(({id, name, email, address, photo, phone}) => (
                        <tr
                            key={id}
                            className="hover:bg-gray-100 focus-within:bg-gray-100 "
                        >
                            <td className="border-t">
                                <div
                                    tabIndex="-1"
                                    className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                >
                                    {name}
                                </div>
                            </td>
                            <td className="border-t">
                                <div
                                    tabIndex="-1"
                                    className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                >
                                    {email}
                                </div>
                            </td>
                            <td className="border-t">
                                <div
                                    tabIndex="-1"
                                    className="flex items-center px-6 py-4 focus:text-indigo focus:outline-none"
                                >
                                    {photo && (
                                        <img
                                            src={`images/${photo}`}
                                            className="block w-8 h-8 mr-2 -my-2 rounded-full"
                                        />
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default Index;
