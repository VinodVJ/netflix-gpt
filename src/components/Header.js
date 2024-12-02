import { signOut } from 'firebase/auth';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store)=> store.user);

    const handleUserSignout = () => {
        signOut(auth).then(() => {
            dispatch(removeUser());
            navigate('/');
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between'>
            <img className='w-44'
                src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
                alt='logo' />

            {user && 
            (<div className='flex p-2'>
                <img className='w-12 h-12'
                    src='https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'
                    alt='UserLogo' />
                <button onClick={handleUserSignout} className='text-white font-bold'>(Sign Out)</button>
            </div>)}
        </div>
    )}

export default Header