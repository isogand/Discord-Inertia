import React from "react";
import {InertiaLink, usePage} from "@inertiajs/inertia-react";
import './Message.css';

const Comment = (...props) => {
    const {comment} = usePage().props;
     // console.log("sog",comment);
    return (
        <>

            {comment?.map?.(({id, comment ,photo,name}) => (
                <div key={id}>
                    <div className = "message">

                        {photo && (
                            <img
                                className="block w-10 h-10 rounded-full hover:w-25 h-25 rounded-full"
                                src={`/images/${photo}`}
                                alt="Logo"
                            />
                        )}
                        <div className ='message__info'>
                            <h4>
                                {name}
                                {/*<span className = "message__timestamp">*/}
                                {/*  {new Date(timestamp?.toDate()).toLocaleString()}*/}
                                {/*</span>*/}
                            </h4>
                           {/*<InertiaLink*/}
                           {/*    tabIndex="-1"*/}
                           {/*    href={route('comment.edit', id)}*/}
                           {/*>*/}
                               <p>{comment}</p>
                           {/*</InertiaLink>*/}
                        </div>

                    </div>
                </div>
            ))}

        </>
    );
};

export default Comment;
