import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './Store/appSlice';
import './SidebarChannel.css'

const SidebarChannel = ({ id,channel_name}) => {
    // console.log("there", props);
    const dispatch = useDispatch();
    return (
        <div  className = "sidebarChannel" onClick = { () => dispatch(setChannelInfo({
            channel_id: id,
            channel_name: channel_name
        }))}>
            <h4 >
                <span  className = "sidebarChannel__hash">
                    #
                </span>{channel_name}
            </h4>
        </div>
    )
}

export default SidebarChannel
