import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

function LoginSignup() {
    const [data, setData] = useState("Login")
    return (
        <div className='loginsignup'>
            <div className='container'>
                <div className='header'>
                    <div className='text'>{data}</div>
                    <div className='underline'></div>
                </div>
                <div className='inputs'>
                    {data === "Login" ? <div></div> : <div className='input'>
                        <img src={user_icon} alt='' />
                        <input type='text' placeholder='Name' />
                    </div>}

                    <div className='input'>
                        <img src={email_icon} alt='' />
                        <input type='email' placeholder='Email' />
                    </div>
                    <div className='input'>
                        <img src={password_icon} alt='' />
                        <input type='password' placeholder='Password' />
                    </div>
                </div>
                {data === "Sign Up" ? <div></div> : <div className='forgot-password'>

                    Forgot Password? <span>Click here</span>
                </div>}

                <div className='submit-container'>
                    <div className={data === "Login" ? "submit gray" : "submit"} onClick={() => { setData("Sign Up") }}>Sign Up</div>
                    <div className={data === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setData("Login") }}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup