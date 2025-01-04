import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGO, USER_AVATAR } from '../utils/constants';
import { auth } from '../utils/firebase';
import { toggleGptSearch } from '../utils/gptSlice';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store)=> store.user);

    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}));
              navigate('/browse')
            } else {
              dispatch(removeUser());
              navigate('/')
            }
          });
          return () => unsubscribe();
    }, [ ]);

    const handleUserSignout = () => {
        signOut(auth)
        .then(() => {})
        .catch((error) => {});
    }

    const handleGptSearch = () => {
        dispatch(toggleGptSearch());
    }

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between'>
            <img className='w-44'
                src={LOGO}
                alt='logo' />

            {user && 
            (<div className='flex p-2'>
                <button className='bg-purple-500 rounded-lg px-4 mx-4'
                    onClick={handleGptSearch}>
                    GPT Search
                </button>
                <img className='w-12 h-12'
                    src={USER_AVATAR}
                    alt='UserLogo' />
                <button onClick={handleUserSignout} className='text-white font-bold'>(Sign Out)</button>
            </div>)}
        </div>
    )}

export default Header