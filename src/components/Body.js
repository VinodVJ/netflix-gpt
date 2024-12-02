import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import Browse from './Browse'
import Login from './Login'

const Body = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}));
            } else {
              dispatch(removeUser());
            }
          });
    }, [ ]);

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body