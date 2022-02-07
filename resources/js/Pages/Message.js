import { Avatar } from '@material-ui/core'
import React from 'react'

function Message( { timestamp, message, ...props }) {
    return
    (
       <>
           <div className = "message">
               {props.info.photo && (
                   <img
                       className = "sidebar__profileAvatar"
                       src={`/images/${props.info.photo}`}
                   />
               )}
               <div className ='message__info'>
                   <h4>
                       {props.user.name}
                       <span className = "message__timestamp">
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </span>
                   </h4>
                   <p>{message}</p>
               </div>
           </div></>
    );

}

export default Message
