import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SideBarFriend from '../SideBarFriend/SideBarFriend'
import './SideBarList.css'
import { onSnapshot, db, doc, query, collection, where } from '../../Firebase/Firebase'

const SideBarList = () => {


    const [friendData, setFriendData] = useState([]);
    const userStore = useSelector((state) => state.userStore)

    useEffect(() => {
        if (userStore.user?.friends) {
            if (userStore.user.friends.length !== 0) {
                const q = query(collection(db, "users"), where("friends", "array-contains", userStore.user.uid));
                onSnapshot(q, (querySnapshot) => {
                    setFriendData([])
                    querySnapshot.forEach((doc) => {
                        setFriendData((e) => [...e, { id: doc.id, data: doc.data() }])
                    });
                });
            }
        }
    }, [JSON.stringify(userStore.user.friends)])

    return (
        <div className='sideBarList'>
            {friendData.map((v, i) => (
                <SideBarFriend key={i} name={v.data.name} profile={v.data.profile} uid={v.id} />
            ))}
        </div>
    )
}

export default SideBarList