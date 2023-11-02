import './app.css';

import Navbar from '../../components/Navbar/index.jsx'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    addDoc,
    collection,
    db,
    onAuthStateChanged,
    auth,
    doc,
    getDoc
} from '../../firebaseconfig.js';


function App() {
    const navigatTo = useNavigate();


    let [titleofuploadcourse, settitleofuploadcourse] = useState('')
    let [textAreaUploadCourse, settextAreaUploadCourse] = useState('')
    let [errorTxt, seterrorTxt] = useState('')
    let [loginpersonuid, setloginpersonuid] = useState('')
    let [userdata, setuserdata] = useState([])

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const uid = user.uid;
            const docRef = doc(db, "users", uid);
            setloginpersonuid(uid)
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setuserdata(docSnap.data());
            } else {
                console.log("No such document!");
            }
        } else {
            navigatTo('../login')
        }
    });


    async function uploadCourse() {
        const firstImageFile = document.getElementById("firstImageUploadCourse").files[0];
        const secondImageFile = document.getElementById("secondImageFile").files[0];
        const thirdImageFile = document.getElementById("thirdImageFile").files[0];
        const videoImageUploadCourse = document.getElementById("videoImageUploadCourse").files[0];


        if (firstImageFile && secondImageFile && thirdImageFile && videoImageUploadCourse) {
            try {
                const docRef = await addDoc(collection(db, "courses"), {
                    heading: titleofuploadcourse,
                    description: textAreaUploadCourse,
                    firstImage: firstImageFile,
                    secondImage: secondImageFile,
                    thirdImage: thirdImageFile,
                    mainImage: videoImageUploadCourse,
                    honour: loginpersonuid
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        } else {
            seterrorTxt("Please upload all files");
        }
    }


    return (
        <div>
            <Navbar />
            <div className='uploadCoursePage'>
                <div className="signupcard">
                    <h3 className='h3ofsignup'>Upload Course</h3>
                    <p className='paraofsignup'>Upload a course here</p>

                    <input value={titleofuploadcourse} onChange={(e) => settitleofuploadcourse(e.target.value)} placeholder='Write a course title here...' type="text" id="signupemail" />


                    <textarea value={textAreaUploadCourse} onChange={(e) => settextAreaUploadCourse(e.target.value)} className='textareaofuploadcourse' placeholder='Write a description'></textarea>


                    <div className="uploadareaofcourse mt-5">
                        <h3 className='ms-5 text-start'>Upload Course Video </h3>
                        <span>
                            <input id="videoImageUploadCourse" type="file" />
                            <h4>Main Video</h4>
                        </span>
                    </div>
                    <div className="uploadareaofcourse mt-5">
                        <h3 className='ms-5 text-start'>Upload Course Image </h3>
                        <span>
                            <input id="firstImageUploadCourse" type="file" />
                            <h4>First Image</h4>
                        </span>
                        <span>
                            <input id="secondImageFile" type="file" />
                            <h4>Second Image</h4>
                        </span>
                        <span>
                            <input id="thirdImageFile" type="file" />
                            <h4>Third Image</h4>
                        </span>
                    </div>
                    <button onClick={uploadCourse} className="signupbutton">Upload A Course</button>
                    <div className="errordiv mt-2">{errorTxt}</div>
                </div>
            </div>
        </div>
    )
}

export default App;