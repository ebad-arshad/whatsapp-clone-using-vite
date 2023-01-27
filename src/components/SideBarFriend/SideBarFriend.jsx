import React from 'react'
import './SideBarFriend.css'
import image from '../../assets/images/passportSizePhoto.jpeg'
import { FaUserCircle } from 'react-icons/fa'

const SideBarFriend = ({ name, profile, uid, message, time }) => {
    return (
        <div className='sideBarFriend'>

            <div className="friendPic">
                {profile ? <img src={profile} alt="friendPic" /> : <FaUserCircle />}
            </div>
            <div className="friendName"><p>{name}</p><p>{message}</p></div>
            <div className="friendTime">{time}</div>

        </div>
    )
}

export default SideBarFriend