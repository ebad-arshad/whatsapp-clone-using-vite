import React from 'react'
import './ChatBoxNav.css'
import { SlOptionsVertical } from 'react-icons/sl'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'

const ChatBoxNav = ({ profile, name }) => {
  return (
    <div className='chatBoxNav'>
      <div className="imageCover">
        <FaUserCircle />
        {/* <img src={profile ? profile : image} alt="coverImage" /> */}
      </div>
      <div className="friendName"><p>{name}</p></div>
      <div className="chatBoxIcons">
        <div className="searchIcon"><AiOutlineSearch /></div>
        <div className="optionIcon"><SlOptionsVertical /></div>
      </div>
    </div>
  )
}

export default ChatBoxNav