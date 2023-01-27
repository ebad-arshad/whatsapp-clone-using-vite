import React from 'react';
import { useSelector } from 'react-redux';
import ChatBox from '../../components/ChatBox/ChatBox';
import SideBar from '../../components/SideBar/SideBar';
import SideBarAddFriend from '../../components/SideBarAddFriend/SideBarAddFriend';
import WhatsAppScreen from '../../components/WhatsAppScreen/WhatsAppScreen';
import SideBarFriendRequest from '../../components/SideBarFriendRequest/SideBarFriendRequest';
import './Main.css';

const Main = () => {

    const conditionStore = useSelector((state) => state.conditionStore);

    return (
        <div className='main'>

            {conditionStore.isAddFriendTab ? <SideBarAddFriend /> : conditionStore.isFriendReqTab ? <SideBarFriendRequest /> : <SideBar />}
            {/* <ChatBox /> */}
            <WhatsAppScreen />
        </div>
    )
}

export default Main