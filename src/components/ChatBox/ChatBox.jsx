import React, { useEffect, useState } from 'react'
import './ChatBox.css'
import ChatBoxNav from '../ChatBoxNav/ChatBoxNav'
import ChatBoxInputField from '../ChatBoxInputField/ChatBoxInputField'
import Chat from '../Chat/Chat'
import { useSelector } from 'react-redux'
import { db, doc, onSnapshot } from '../../Firebase/Firebase'

const ChatBox = () => {

  const store = useSelector(state => state);
  const [currentChatData, setCurrentChatData] = useState({});

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "users", store.chatStore.friendUID), (doc) => {
      setCurrentChatData(doc.data());
    });

    return () => unsub()

  }, [store.chatStore.friendUID])

  return (
    <div className='chatBox'>
      <div className="chatBackground"></div>
      <ChatBoxNav name={currentChatData.name} profile={currentChatData.profile} />
      <Chat friendUID={currentChatData.uid} uid={store.userStore.user.uid} />
      <ChatBoxInputField friendUID={currentChatData.uid} uid={store.userStore.user.uid} />
    </div>
  )
}

export default ChatBox