import React, { useRef, useState } from 'react'
import './ChatBoxInputField.css'
import { IoMdMic } from 'react-icons/io'
import { CgSmileMouthOpen } from 'react-icons/cg'
import { AiOutlinePaperClip } from 'react-icons/ai'
import { RiSendPlane2Fill } from 'react-icons/ri'
import { db, addDoc, collection } from '../../Firebase/Firebase'
import moment from 'moment/moment'

const ChatBoxInputField = ({ friendUID, uid }) => {

    const [chatInput, setChatInput] = useState('');
    const inputRef = useRef();

    const sendMessage = async (event) => {
        event.preventDefault();
        if (chatInput) {
            let uniqueID = '';
            friendUID < uid ? uniqueID = friendUID + uid : uniqueID = uid + friendUID
            let chatmessage = chatInput;
            setChatInput('')
            inputRef.current.focus();
            await addDoc(collection(db, "messages"), {
                message: chatmessage,
                senderUID: uid,
                getterUID: friendUID,
                timestamp: new Date(),
                messageTime: moment().format('LT'),
                uniqueID: uniqueID,
            });
        }
    }

    return (
        <div className='chatBoxInputField'>
            <div className="icons"><CgSmileMouthOpen /><AiOutlinePaperClip /></div>
            <form onSubmit={sendMessage} className="chatBoxInputSearch"><input ref={inputRef} value={chatInput} onChange={e => setChatInput(e.target.value)} autoComplete='off' spellCheck='false' type="text" placeholder='Type a message' /></form>
            <div className="recordIcon">{!chatInput ? <IoMdMic /> : <RiSendPlane2Fill onClick={sendMessage} />}</div>
        </div>
    )
}

export default ChatBoxInputField