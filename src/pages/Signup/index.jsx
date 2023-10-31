import { useState } from 'react';
import './app.css'
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, auth, setDoc, doc, db } from '../../firebaseconfig.js'

function App() {
    let [signupemail, setsignupemail] = useState('')
    let [signuppassword, setsignuppassword] = useState('')
    let [signupprepeatassword, setsignupprepeatassword] = useState('')
    let [isStudent, setisStudent] = useState('Student')
    let [errortxt, seterrortxt] = useState('')




    const navigateTo = useNavigate();

    function createaAccount() {
        if (signupemail === '' || signuppassword === '' || signupprepeatassword === '') {
            seterrortxt("Please Fill up form completely")
            setTimeout(() => seterrortxt(''), 3000)
        }
        if (signuppassword === signupprepeatassword) {
            createUserWithEmailAndPassword(auth, signupemail, signuppassword)
                .then(async (userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    await setDoc(doc(db, "users", user.uid), {
                        useremail: signupemail,
                        userpassword: signuppassword,
                        isStudent: isStudent,
                        courses: []
                    })

                    navigateTo('..//login')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        } else {
            seterrortxt("Your Password and Repeat Password is not same!")
            setTimeout(() => seterrortxt(''), 3000)
        }
    }


    return (
        <div className='signUpPage'>
            <div className="signupcard">
                <h3 className='h3ofsignup'>Create An Account</h3>
                <p className='paraofsignup'>Create an account to enjoy all the services without any ads for free!</p>
                <input placeholder='Email Address' value={signupemail} onChange={(e) => setsignupemail(e.target.value)} type="email" id="signupemail" />
                <input placeholder='Password' value={signuppassword} onChange={(e) => setsignuppassword(e.target.value)} type="password" id="signuppassword" />
                <input placeholder='Repeat Password' value={signupprepeatassword} onChange={(e) => setsignupprepeatassword(e.target.value)} type="password" id="signuppassword" />
                <div className="errordiv">{errortxt}</div>
                <div className='teacherOrStudent'>
                    <p>Are you Student or Teacher?</p>
                    <select className="selectofsignup" value={isStudent} onChange={(e) => {
                        setisStudent(e.target.value);

                    }

                    }>
                        <option>Student</option>
                        <option>Teacher</option>
                    </select>
                </div>
                <button className="signupbutton" onClick={createaAccount}> Create Account </button>
                <p>Already Have An Account? <span onClick={() => { navigateTo('..//login') }} className='signInTxt'>Sign In</span></p>
            </div>
        </div>
    )
}

export default App;