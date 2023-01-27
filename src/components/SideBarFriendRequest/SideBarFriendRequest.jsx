import React, { useEffect, useState } from 'react'
import './SideBarFriendRequest.css'
import { BiArrowBack } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import FriendReq from '../FriendReq/FriendReq'
import { doc, db, updateDoc, arrayUnion, getDoc } from '../../Firebase/Firebase'
import { arrayRemove } from 'firebase/firestore'

const SideBarFriendRequest = () => {

    const bool = false;

    const userStore = useSelector(state => state.userStore)
    const [friendReqs, setFriendReqs] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        if (userStore.user.pending) {
            setFriendReqs([])
            userStore.user.pending.forEach(async element => {
                const docRef = doc(db, "users", element);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setFriendReqs(e => [...e, { id: docSnap.id, data: docSnap.data() }])
                }
            });
        }
    }, [JSON.stringify(userStore.user.pending)])


    const isAddedOrDenied = async (status, id) => {
        if (status === 'added') {
            const userRef = doc(db, "users", userStore.user.uid);
            const friendRef = doc(db, "users", id);
            await updateDoc(userRef, {
                friends: arrayUnion(id),
                pending: arrayRemove(id),
            });
            await updateDoc(friendRef, {
                friends: arrayUnion(userStore.user.uid),
                pending: arrayRemove(userStore.user.uid),
            });
        } else if (status === 'denied') {
            const userRef = doc(db, "users", userStore.user.uid);
            await updateDoc(userRef, {
                pending: arrayRemove(id),
            });
        }
    }

    return (
        <div className='sideBarFriendRequest'>
            <div className="friendReqHeading">Friend requests</div>
            <div className="goBack"><BiArrowBack onClick={() => dispatch({ type: 'FRIENDREQTOGGLE', bool })} /> <span>Go back</span></div>
            <div className="friendReqBox">
                {friendReqs.map((v) => (
                    <FriendReq key={v.id} name={v.data.name} uid={v.id} profile={v.data.profile} isAddedOrDenied={isAddedOrDenied} />
                ))}
            </div>
        </div>
    )
}

export default SideBarFriendRequest