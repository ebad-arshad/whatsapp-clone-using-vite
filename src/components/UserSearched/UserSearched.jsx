import React from 'react'
import './UserSearched.css'
import { FaUserCircle } from 'react-icons/fa'

const UserSearched = ({ friendSearched, data }) => {
    return (
        <div className='userSearched'>
            <div className="userPic">
                {data.data.profile ? <img src={data.data.profile} alt="userPic" /> : <FaUserCircle />}
            </div>
            <div className="userName">Name: <span>{data.data.name}</span></div>
            <div className="userNumber">Number: <span>{data.data.phoneNumber}</span></div>
            <div className="userSearchCheckBtn"><button onClick={() => friendSearched(false, 'requested')}>Send Request</button></div>
        </div>
    )
}

export default UserSearched