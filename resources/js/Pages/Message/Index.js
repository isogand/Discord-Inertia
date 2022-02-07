import React from "react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import '../Comment/Message.css';

const Message = () => {
    const {message} = usePage().props;
    // console.log(props);
    //  console.log("Index", message);
    return (
        <>

                {message.map(({id,channel_name}) => (
                    <InertiaLink key={id} href={route('message.edit', id)}>
                        <div className = "message">

                        <div className ='message__info'>

                            <p>{channel_name}</p>
                        </div>
                        </div>
                    </InertiaLink>
                ))}

        </>
    );
};

export default Message;
