import React, { useState } from 'react';
import './Sidebar.css';
import Dropdown from "@/Components/Dropdown";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "@/Pages/SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import MicIcon from "@material-ui/icons/Mic";
import HeadSetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "@/Pages/Store/ui-slice";
import Messages from "@/Pages/Message/Create";
import Message from "@/Pages/Message/Index";

export default function Authenticated({ auth, header, children,...props }) {
    // console.log("that", props);
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.ui.cartIsVisible);

    const toggleCartHandler = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <>
            <div style={{display:"flex",backgroundColor:"#23272A",color:"white"}}>
                <div className = "sidebar__channelsList">
                      <div style={{borderBottom:"1px solid #777777"}}>
                          <img
                              className="img"
                              src={`/images/Discord.png`}
                          />
                      </div>

                    {props.photo ? (
                        <img
                            className="img"
                            src={`/images/${props.photo}`}
                        />
                    ) : (
                        <img
                            className="img"
                            src={`/images/discord2.jpg`}
                        />
                    )}
                </div>
            </div>
            <div className = "sidebar">
                <div className = "sidebar__top">
                    <h2 className="font-bold">{auth.user.name}</h2>
                    <ExpandMoreIcon />
                </div>
                <button style={{backgroundColor:"#363A3F",justifyContent:"space-between"}} className="mx-9 flex rounded-xl p-5 my-5">
                    <div className="text-white font-bold"># general</div>
                    <div className="flex">
                        <div  className = "sidebar__addChannel">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"
                                 className="bi bi-person-plus-fill mx-3" viewBox="0 0 16 16">
                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                <path fillRule="evenodd"
                                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                        </div>
                        <SettingsIcon className = "sidebar__addChannel"/>
                    </div>
                </button>
                <div className = "sidebar__channels">
                    <div className = "sidebar__channelsHeader">
                        <div className = "sidebar__header">
                            <h4>Text Channels</h4>
                        </div>
                        <AddIcon
                            onClick={toggleCartHandler}
                            className = "sidebar__addChannel" />
                    </div>
                    <button  className = "sidebar__channelsList">
                        {props.message.map((info,channel) => {
                            return (
                                <SidebarChannel
                                    id={info.id}
                                    key={info.id}
                                    info={info}
                                    channel_name = {info.channel_name}
                                />
                            );
                        })}
                    </button>
                </div>
                {/*// ** //*/}
                {showCart && (

                    <div
                        style={{
                            height: "420px",
                            position: "absolute",
                            left: "700px",
                            backgroundColor:"#363A3F"
                        }}
                        className="w-96  m-24 mt-36 rounded-xl  border border-gray-300"
                    >
                        <div className="absolute right-0 p-3">
                            <img onClick={toggleCartHandler} src={("/images/ESC2.svg")}  alt="logo"/>
                        </div>

                        <div>
                            <Messages/>
                        </div>
                    </div>

                )}
                {/*// ** //*/}
                <div className = "sidebar__voice">
                    <SignalCellularAltIcon
                        className = "sidebar__cellularVoiceIcon"
                        fontSize = "large"
                    />
                    <div className = "sidebar__voiceInfo">
                        <h3>Voice Connected</h3>
                        <p>Stream</p>
                    </div>
                    <div className = "sidebar__voiceIcon">
                        <InfoOutlinedIcon />
                        <CallIcon />
                    </div>
                </div>
                <div className = 'sidebar__profile'>
                    <Dropdown.Link  method="post" href={route("logout")}>
                        {auth.user.photo ? (
                            <img
                                className = "sidebar__profileAvatar"
                                src={`/images/${auth.user.photo}`}
                            />
                        ):(
                            <img
                                className = "sidebar__profileAvatar"
                                src={`/images/discord2.jpg`}
                            />
                        )}
                    </Dropdown.Link>
                    <div className = "sidebar__profileInfo">
                        <div>
                            <h3>{auth.user.name}</h3>
                        </div>
                        <p>#{auth.user.uid}</p>

                    </div>
                    <div className = "sidebar__profileIcons">
                        <MicIcon />
                        <HeadSetIcon />
                        <Dropdown.Link href={route(
                            "user.edit",
                            auth.user.id
                        )}
                                       method="get"
                                       as="button"
                        >

                            <SettingsIcon className = "sidebar__addChannel"/>
                        </Dropdown.Link>
                    </div>
                </div>


                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                    </header>
                )}

                <main>{children}</main>
            </div>
        </>
    );
}
