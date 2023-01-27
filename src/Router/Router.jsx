import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from '../container/Auth/Auth'
import Main from '../container/Main/Main'
import ErrorPage from '../container/ErrorPage/ErrorPage';
import { auth, db, doc, onAuthStateChanged, onSnapshot } from '../Firebase/Firebase';
import { useDispatch } from 'react-redux';

const Router = () => {

    const dispatch = useDispatch();

    const [user, setUser] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(true)
                onSnapshot(doc(db, "users", user.uid), (doc) => {
                    const userDB = JSON.stringify(doc.data())
                    dispatch({ type: 'HASLOGGEDIN', userDB })
                });
            } else {
                setUser(false)
                dispatch({ type: 'NOTLOGGEDIN' })
            }
        });
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user ? <Main /> : <Auth />} />
                <Route path='/*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router