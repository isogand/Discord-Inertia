import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import Chat from "@/Pages/Chat";
import {Provider} from "react-redux";
import store from "@/Pages/Store/Index";

export default function Dashboard(props) {
     console.log("this", props);
    return (
        <Provider store={store}>
                <div style={{display:"flex"}}>
                    <>
                        <Authenticated
                            auth={props.auth}
                            errors={props.errors}
                            message={props.message}
                        />

                        <Chat auth={props.auth}  message={props.message}/>
                    </>
                </div>
        </Provider>
    );
}
