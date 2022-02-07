import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Chat.css'
import ChatHeader from './ChatHeader'
import SidebarChannel from "@/Pages/SidebarChannel";
import {selectChannelId, selectChannelName} from "@/Pages/Store/appSlice";
import Comment from "@/Pages/Comment/Index";
import Comments from "@/Pages/Comment/Edit";
import Commen from "@/Pages/Comment/Create";
import {Inertia} from "@inertiajs/inertia";
import {uiActions} from "@/Pages/Store/ui-cart";
import Messages from "@/Pages/Message/Create";

export default function Chat({auth,...props}) {
    const channel_name = useSelector(selectChannelName)
    const channel_id = useSelector(selectChannelId);
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.uicart.cartIsVisible);


    useEffect(() => {
            if (channel_id) {
                Inertia.reload({
                    data: {
                        channel_id: channel_id,
                    },
                    only: ["comment"],
                });
            }
    }, [channel_id]);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
        console.log(toggleCartHandler);
    };

    return (

        <div className = "chat">

            <ChatHeader
                channel_name = {channel_name}
            />

            <div className = "chat__messages">
                <div style={{borderBottom:"1px solid #777777"}} className="p-9 text-white text-center">
                    <div className="font-bold text-3xl">Welcome to</div>
                    <div className="font-bold text-3xl">{channel_name}</div>
                    <br/>
                    <div style={{color:"#838383"}}>Thid is the beginning of this serve.</div>
                </div>

                <div className = "chat__messages">
                    {/*{ messages.map((message) => (*/}
                    {/*    <Comment*/}
                    {/*        // timestamp = {message.timestamp}*/}
                    {/*        message = {message.messsage}*/}
                    {/*        user = {message.user}*/}
                    {/*    />*/}
                    {/*))}*/}

                    <Comment/>

                </div>

            </div>
            {showCart && (

                <div
                    style={{
                        height: "200px",
                        position: "absolute",
                        backgroundColor:"#c7dbf6"
                    }}
                    className="w-96  m-24 mt-36 rounded-xl  border border-gray-300"
                >
                    ff
                </div>

            )}
            <div className = "chat__input">
               <div style={{display:"flex"}}>
                   <AddCircle className="mr-5"  onClick={toggleCartHandler}/>
                   <Commen/>
               </div>
                <div className = "chat__inputIcons">
                    <CardGiftcard fontSize= "large"/>
                    <Gif fontSize = "large" />
                    <EmojiEmotions fontSize = "large" />
                </div>
            </div>
        </div>
    );
}


