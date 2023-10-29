import './app.css'
import Allcourses from '../../DummyData/Course.js';
import { useEffect, useState } from 'react';

function App() {
    let [allcoursesArr, setallcoursesArr] = useState([]);

    useEffect(() => {
        setallcoursesArr(Allcourses)
    }, [])

    function previoscourseimg(index) {
        // Update the 'currentimg' for the specific course item
        setallcoursesArr(prevCourses => {
            const updatedCourses = [...prevCourses];
            if (updatedCourses[index].currentimg === 0) {
                updatedCourses[index].currentimg = -200;
            } else {
                updatedCourses[index].currentimg += 100;
            }
            return updatedCourses;
        });
    }

    function nextcourseimg(index) {
        // Update the 'currentimg' for the specific course item
        setallcoursesArr(prevCourses => {
            const updatedCourses = [...prevCourses];
            if (updatedCourses[index].currentimg === -200) {
                updatedCourses[index].currentimg = 0;
            } else {
                updatedCourses[index].currentimg -= 100;
            }
            return updatedCourses;
        });
    }

    return (
        <>
            {allcoursesArr.map((single, i) => {
                return (
                    <div key={i} className='singlediv'>
                        <div className='overflow-hidden'>
                            <div className="imgarea">
                                <img style={{ transform: `translateX(${single.currentimg}%)` }} className='singleimgofcourse' src={single.imageone} />
                                <img style={{ transform: `translateX(${single.currentimg}%)` }} className='singleimgofcourse' src={single.imagetwo} />
                                <img style={{ transform: `translateX(${single.currentimg}%)` }} className='singleimgofcourse' src={single.imagethree} />
                            </div>
                        </div>
                        <h5 className='headingofcourse'>{single.heading}</h5>
                        <div className="descritionarea">
                            {single.description.slice(0, 100)}...
                        </div>
                        <div className="anlysiscoursediv">
                            <span>{single.like} likes</span>
                            <span>{single.veiws} Veiws</span>
                        </div>
                        <div className='leftRightBtn'>
                            <span onClick={() => nextcourseimg(i)}>{'<'}</span>
                            <span onClick={() => previoscourseimg(i)}>{'>'}</span>
                        </div>
                        <button className='registrationbtn'>Register for this Course</button>
                    </div>
                )
            })}
        </>
    )
}

export default App;
