import './app.css'
import { useNavigate } from 'react-router-dom';

function App() {
    const navigateTo = useNavigate()
    return (
        <div className='signUpPage'>
            <div className="signupcard">
                <h3 className='h3ofsignup'>Log In</h3>
                <p className='paraofsignup'>Logged-In to your account or else you can't go to home page or other page</p>
                <input placeholder='Email Address' type="email" id="signupemail" />
                <input placeholder='Password' type="password" id="signuppassword" />
                <div className="errordiv"></div>
                <button className="signupbutton"> Log-In </button>
                <p>Don't have an account? <span onClick={()=>{ navigateTo('..//signup') }} className='signInTxt'>Sign Up</span></p>
            </div>
        </div>
    )
}

export default App;