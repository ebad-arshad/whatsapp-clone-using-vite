import React, { useEffect, useState } from 'react'
import './SideBarAddFriend.css'
import { BiArrowBack } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import UserSearched from '../UserSearched/UserSearched'
import { collection, query, where, getDocs, db, updateDoc, arrayUnion, doc } from '../../Firebase/Firebase'


const SideBarAddFriend = () => {

    const [inputVal, setInputVal] = useState('');
    const [searchFriend, setSearchFriend] = useState(false);
    const [fetchedData, setFetchedData] = useState();
    const [noUserFound, setNoUserFound] = useState(true);

    const userStore = useSelector((state) => state.userStore)

    async function fetchData(value) {
        setSearchFriend(false)

        const q = query(collection(db, "users"), where('phoneNumber', "==", `+${value}`));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if (doc.id !== userStore.user.uid && !doc.data().friends.includes(userStore.user.uid)) {
                setSearchFriend(true)
                setFetchedData({ id: doc.id, data: doc.data() })
                setNoUserFound(true)
            }
        });
    }

    const dispatch = useDispatch();

    const bool = false;

    const friendSearched = async (flag, status) => {
        if (inputVal) {
            if (inputVal.length === 12 && flag) {
                setNoUserFound(false)
                await fetchData(inputVal)
            }
            else if (status === 'requested') {
                setInputVal('');
                setSearchFriend(false)

                const friendRef = doc(db, 'users', fetchedData.id);
                await updateDoc(friendRef, {
                    pending: arrayUnion(userStore.user.uid)
                });
            }
            else if (inputVal.length < 12) {
                setNoUserFound(false)
                setSearchFriend(false)
            }
            else {
                setSearchFriend(false)
                setInputVal('')
                setNoUserFound(true)
            }
        }
    }

    const gettingPhoneNumber = event => event.target.value.length === 13 ? null : setInputVal(event.target.value);

    return (
        <div className='sideBarAddFriend'>
            <div className="addFriendHeading">Add friends</div>
            <div className="goBack"><BiArrowBack onClick={() => dispatch({ type: 'ADDFRIENDTOGGLE', bool })} /> <span>Go back</span></div>
            <div className="addFriendBox">
                <form onSubmit={(event) => { event.preventDefault(); friendSearched(true) }}>
                    <div className="addFriendInput"><AiOutlineSearch onClick={() => friendSearched(true)} /><input value={inputVal} className='friendSearch' onChange={gettingPhoneNumber} type="number" placeholder='92xxxxxxxxxx' /></div>
                </form>
                {searchFriend && <UserSearched data={fetchedData} friendSearched={friendSearched} />}
                {!noUserFound && <div className="noUserFound">No User Found</div>}
            </div>
        </div>
    )
}

export default SideBarAddFriend