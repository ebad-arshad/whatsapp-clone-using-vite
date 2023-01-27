import React from 'react'
import './SideBarFriend.css'
import image from '../../assets/images/passportSizePhoto.jpeg'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const SideBarFriend = ({ name, profile, uid, message, time }) => {

    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch({ type: 'CHAT_SCREEN_UID', uid })} className='sideBarFriend'>

            <div className="friendPic">
                {profile ? <img src={profile} alt="friendPic" /> : <FaUserCircle />}
            </div>
            <div className="friendName"><p>{name}</p><p>{message}</p></div>
            <div className="friendTime">{time}</div>

        </div>
    )
}

export default SideBarFriend