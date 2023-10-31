import './app.css'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/index.jsx';
import { onAuthStateChanged, auth, doc, db, getDoc, updateDoc } from '../../firebaseconfig.js'
import { useState } from 'react';

// import {}


function App() {

    const navigatTo = useNavigate();

    let [fullname, setfullname] = useState('')
    let [contactno, setcontactno] = useState('')
    let [emailtxt, setemailtxt] = useState('')
    let [countryname, setcountryname] = useState('')
    let [usercourse, setusercourse] = useState('Fronted-Development Course')
    let [loginpersonuid, setloginpersonuid] = useState('')
    let [userdata, setuserdata] = useState([])

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const uid = user.uid;
            const docRef = doc(db, "users", uid);
            setloginpersonuid(uid)
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setuserdata(docSnap.data());
            } else {
                console.log("No such document!");
            }
        } else {
            navigatTo('../login')
        }
    });


    async function registerCourse() {
        const washingtonRef = doc(db, "users", loginpersonuid);

        const userdataclone = userdata().courses;
        userdataclone.push(usercourse)        

        await updateDoc(washingtonRef, {
            courses: userdataclone
        });
    }

    return (
        <div>
            <Navbar />
            <div className='signUpPage'>
                <div className="signupcard">
                    <h3 className='h3ofsignup'>Registration Page</h3>
                    <p className='paraofsignup'>Register to this course for completely free</p>
                    <input onChange={(e) => setfullname(e.target.value)} value={fullname} placeholder='Write your Full name here...' type="text" id="signupemail" />
                    <input onChange={(e) => setcontactno(e.target.value)} value={contactno} placeholder='Write your contact no here... ' type="text" id="signuppassword" />
                    <input onChange={(e) => setemailtxt(e.target.value)} value={emailtxt} placeholder='Write your email here...' type="email" id="signuppassword" />
                    <input onChange={(e) => setcountryname(e.target.value)} value={countryname} placeholder='Write your country name here...' type="country" id="signuppassword" />
                    <div className="errordiv"></div>
                    <div className='teacherOrStudent'>
                        <p>Select Course</p>
                        <select className="selectofsignup" value={usercourse} onChange={(e) => setusercourse(e.target.value)}>
                            <option>Fronted-Development Course</option>
                            <option>Backend-Development Course</option>
                            <option>Mern Stack Course</option>
                            <option>JavaScirpt Course</option>
                            <option>Ui / Ux Course</option>
                        </select>
                    </div>
                    <button onClick={registerCourse} className="signupbutton">Register Course</button>
                </div>
            </div>
        </div>
    )
}

export default App;