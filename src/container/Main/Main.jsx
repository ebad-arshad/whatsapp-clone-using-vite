import React from 'react';
import { useSelector } from 'react-redux';
import ChatBox from '../../components/ChatBox/ChatBox';
import SideBar from '../../components/SideBar/SideBar';
import SideBarAddFriend from '../../components/SideBarAddFriend/SideBarAddFriend';
import WhatsAppScreen from '../../components/WhatsAppScreen/WhatsAppScreen';
import SideBarFriendRequest from '../../components/SideBarFriendRequest/SideBarFriendRequest';
import './Main.css';

const Main = () => {

    const store = useSelector((state) => state);

    return (
        <div className='main'>

            {store.conditionStore.isAddFriendTab ? <SideBarAddFriend /> : store.conditionStore.isFriendReqTab ? <SideBarFriendRequest /> : <SideBar />}
            {
                store.chatStore.friendUID ?
                    <ChatBox />
                    :
                    <WhatsAppScreen />
            }
        </div>
    )
}

export default Main