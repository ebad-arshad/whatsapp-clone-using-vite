import React, { useEffect, useState } from 'react'
import './Chat.css'
import { query, collection, db, where, onSnapshot, orderBy } from '../../Firebase/Firebase'

const Chat = ({ friendUID, uid }) => {

  const [chats, setChats] = useState([]);

  useEffect(() => {

    let uniqueID = '';
    friendUID < uid ? uniqueID = friendUID + uid : uniqueID = uid + friendUID

    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"), where("uniqueID", "==", uniqueID));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setChats([])
      querySnapshot.forEach((doc) => {
        setChats(value => [...value, doc.data()])
      });
    });
    return () => unsubscribe()
  }, [friendUID])

  return (
    <div className='chat'>
      {chats.map((msg, i) => <div key={i} className={msg.senderUID === uid ? 'user' : 'friend'}><p>{msg.message}</p><p>{msg.messageTime}</p></div>)}
    </div>
  )
}

export default Chat