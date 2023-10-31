import { useState } from 'react';
import './app.css'
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword, auth} from '../../firebaseconfig.js'

function App() {
    const navigateTo = useNavigate();

    let [loginemail, setloginemail] = useState('')
    let [loginpassword, setloginpassword] = useState('')
    let [errorTxt, seterrorTxt] = useState('')


    function loginFunc() {
        if (loginemail === '' || loginpassword === '') {
            seterrorTxt('Please Fill Up the form completely')
        } else {
            signInWithEmailAndPassword(auth, loginemail, loginpassword)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    navigateTo('../')
                    // ...
                })
                .catch((error) => {
                    seterrorTxt('Incorrect Email or Password')
                });
        }
    }

    return (
        <div className='signUpPage'>
            <div className="signupcard">
                <h3 className='h3ofsignup'>Log In</h3>
                <p className='paraofsignup'>Logged-In to your account or else you can't go to home page or other page</p>
                <input placeholder='Email Address' value={loginemail} onChange={(e) => setloginemail(e.target.value)} type="email" id="signupemail" />
                <input placeholder='Password' value={loginpassword} onChange={(e) => setloginpassword(e.target.value)} type="password" id="signuppassword" />
                <div className="errordiv">{errorTxt}</div>
                <button className="signupbutton" onClick={loginFunc}> Log-In </button>
                <p>Don't have an account? <span onClick={() => { navigateTo('..//signup') }} className='signInTxt'>Sign Up</span></p>
            </div>
        </div>
    )
}

export default App;