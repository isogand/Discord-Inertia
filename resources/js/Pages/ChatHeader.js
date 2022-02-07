import { EditLocation, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react'
import './ChatHeader.css'

function ChatHeader({ channel_name }) {
    // console.log("dd",channel_name);
    return (
        <div className = "chatHeader">
            <div className = "chatHeader__left">
                <h3>
                    <span className = "chatHeader__hash">
                        #
                    </span>
                    {channel_name}
                </h3>
            </div>
            <div className = "chatHeader__right">
                <Notifications />
                <EditLocation />
                <PeopleAltRounded />

                <div className = "chatHeader__search">
                    <input  placeholder = "search" />
                    <SearchRounded />
                </div>
                <SendRounded />
                <HelpRounded />
            </div>
        </div>
    )
}

export default ChatHeader
