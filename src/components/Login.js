import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { LOGIN_BG_IMG } from '../utils/constants';
import { auth } from '../utils/firebase';
import { addUser } from '../utils/userSlice';
import { validateSignInForm } from '../utils/validate';
import Header from './Header'

const Login = () => {

    const [isSignInToggle, setIsSignInToggle] = useState(true)
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const toggleSiginIn = () => {
        setIsSignInToggle(!isSignInToggle);
    }

    const handleSignInClick = () => {
        const message = validateSignInForm(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        if (isSignInToggle) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + '-' +errorMessage);
            });
        } else {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                updateProfile(user, {
                displayName: name.current.value, photoURL: ""
              }).then(() => {
                const {uid, email, displayName} = auth.currentUser;
                dispatch(addUser({uid: uid, email: email, displayName: displayName}));
              }).catch((error) => {
                // An error occurred
              });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + '-' +errorMessage);
            });
            
        }
    }

    return (
        <div>
            <Header />

            <div className='absolute'>
                <img className='h-screen object-cover' src={LOGIN_BG_IMG}
                    alt='background' />
            </div>

            <form onSubmit={(e) => {e.preventDefault()}}
                className='absolute w-full md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInToggle ? 'Sign In' : 'Sign Up'}
                </h1>
               {!isSignInToggle &&(
                <input ref={name} type='text' placeholder='Full Name'
                        className='p-4 my-4 w-full bg-gray-700' />
                )}
                <input ref={email} type='text' placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-700' />
                <input ref={password} type='password' placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-700' />
                <p className='text-red-700 font-bold'>
                    {errorMessage}
                </p>
                <button onClick={handleSignInClick}
                    className='p-4 my-6 bg-red-700 w-full rounded-lg'>
                    {isSignInToggle ? 'Sign In' : 'Sign Up'}
                </button>
                <p className='py-6 cursor-pointer'
                    onClick={toggleSiginIn}> 
                    {isSignInToggle ? 'New to Netflix Sign Up now': 'Already a user Sign In now'}
                </p>
            </form>

        </div>
    )
}

export default Login