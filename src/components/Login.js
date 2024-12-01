import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInToggle, setIsSignInToggle] = useState(true)
    const toggleSiginIn = () => {
        setIsSignInToggle(!isSignInToggle);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg'
                    alt='background' />
            </div>
            <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInToggle ? 'Sign In' : 'Sign Up'}
                </h1>
               {!isSignInToggle &&(
                    <input type='text' placeholder='Full Name'
                        className='p-4 my-4 w-full bg-gray-700' />
                )}
                <input type='text' placeholder='Email Address'
                    className='p-4 my-4 w-full bg-gray-700' />
                <input type='password' placeholder='Password'
                    className='p-4 my-4 w-full bg-gray-700' />
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
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