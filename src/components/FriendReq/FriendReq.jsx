import React from 'react'
import './FriendReq.css'
import { RxCross1 } from 'react-icons/rx'
import { BsCheck2 } from 'react-icons/bs'

const FriendReq = ({ name, profile, isAddedOrDenied, uid }) => {
    return (
        <div className='friendReq'>
            <div className="friendPic"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path></svg></div>
            <div className="friendName">{name}</div>
            <div className="friendReqIcons">
                <div className="checkIcon"><BsCheck2 onClick={() => isAddedOrDenied('added', uid)} /></div>
                <div className="crossIcon"><RxCross1 onClick={() => isAddedOrDenied('denied', uid)} /></div>
            </div>
        </div>
    )
}

export default FriendReq