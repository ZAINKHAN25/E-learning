import './app.css'

function App() {
    return (
        <div className='signUpPage'>
            <div className="signupcard">
                <h3 className='h3ofsignup'>Registration Page</h3>
                <p className='paraofsignup'>Register to this course for completely free</p>
                <input placeholder='Write your Full name here...' type="text" id="signupemail" />
                <input placeholder='Write your contact no here... ' type="text" id="signuppassword" />
                <input placeholder='Write your email here...' type="email" id="signuppassword" />
                <input placeholder='Write your country name here...' type="country" id="signuppassword" />
                <div className="errordiv"></div>
                <div className='teacherOrStudent'>
                    <p>Select Course</p>
                    <select className="selectofsignup">
                        <option>JavaScirpt Course</option>
                        <option>Ui / Ux Course</option>
                    </select>   
                </div>
                <button className="signupbutton">Register Course</button>
            </div>
        </div>
    )
}

export default App;