import React, { useState } from 'react'
import './ChatBoxInputField.css'
import { IoMdMic } from 'react-icons/io'
import { CgSmileMouthOpen } from 'react-icons/cg'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { db, addDoc, collection } from '../../Firebase/Firebase'

const ChatBoxInputField = ({ friendUID, uid }) => {

    const [chatInput, setChatInput] = useState('');

    const sendMessage = async () => {
        if (chatInput) {
            let uniqueID = '';
            friendUID < uid ? uniqueID = friendUID + uid : uniqueID = uid + friendUID
            await addDoc(collection(db, "messages"), {
                message: chatInput,
                senderUID: uid,
                getterUID: friendUID,
                timestamp: new Date(),
                uniqueID: uniqueID,
            });
            setChatInput('')
        }
    }

    return (
        <div className='chatBoxInputField'>
            <div className="icons"><CgSmileMouthOpen /><AiOutlinePaperClip /></div>
            <div className="chatBoxInputSearch"><input value={chatInput} onChange={e => setChatInput(e.target.value)} autoComplete='off' spellCheck='false' type="text" placeholder='Type a message' /></div>
            <div className="recordIcon">{!chatInput ? <IoMdMic /> : <RiSendPlane2Fill onClick={sendMessage} />}</div>
        </div>
    )
}

export default ChatBoxInputField