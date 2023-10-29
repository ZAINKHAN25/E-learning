import './app.css'
import { useNavigate } from 'react-router-dom';

function App() {
    const navigateTo = useNavigate()
    return (
        <div className='signUpPage'>
            <div className="signupcard">
                <h3 className='h3ofsignup'>Create An Account</h3>
                <p className='paraofsignup'>Create an account to enjoy all the services without any ads for free!</p>
                <input placeholder='Email Address' type="email" id="signupemail" />
                <input placeholder='Password' type="password" id="signuppassword" />
                <input placeholder='Repeat Password' type="password" id="signuppassword" />
                <div className="errordiv"></div>
                <div className='teacherOrStudent'>
                    <p>Are you Student or Teacher?</p>
                    <select className="selectofsignup">
                        <option>Student</option>
                        <option>Teacher</option>
                    </select>
                </div>
                <button className="signupbutton"> Create Account </button>
                <p>Already Have An Account? <span onClick={()=>{ navigateTo('..//login') }} className='signInTxt'>Sign In</span></p>
            </div>
        </div>
    )
}

export default App;