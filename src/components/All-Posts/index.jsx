import './app.css'

import Allcourses from '../../DummyData/Course.js';
import { useEffect, useState } from 'react';

function App() {
    let [allcoursesArr, setallcoursesArr] = useState([]);
    let [currentimg, setcurrentimg] = useState(0)

    useEffect(() => {
        setallcoursesArr(Allcourses)
    }, [])

    function previoscourseimg() {
        if (currentimg === 0) {
            setcurrentimg(-200)
        } else {
            setcurrentimg(currentimg + 100)
        }
    }

    function nextcourseimg() {
        if (currentimg === -200) {
            setcurrentimg(0)
        } else {
            setcurrentimg(currentimg - 100)
        }
    }

    return (
        <>
            {
                allcoursesArr.map((single, i) => {
                    return (
                        <div key={i} className='singlediv'>
                            <div className='overflow-hidden'>

                                <div className="imgarea">
                                    <img style={{ transform: `translateX(${currentimg}%)` }} className='singleimgofcourse' src={single.imageone} />
                                    <img style={{ transform: `translateX(${currentimg}%)` }} className='singleimgofcourse' src={single.imagetwo} />
                                    <img style={{ transform: `translateX(${currentimg}%)` }} className='singleimgofcourse' src={single.imagethree} />
                                </div>
                            </div>
                            <h5 className='headingofcourse'>{single.heading}</h5>
                            <div className="descritionarea">
                                {single.description.slice(0,100)}...
                            </div>
                            <div className="anlysiscoursediv">
                                <span>{single.like} likes</span>
                                <span>{single.veiws} Veiws</span>
                            </div>
                            <div className='leftRightBtn'>
                                <span onClick={previoscourseimg}>{true && '<'}</span>
                                <span onClick={nextcourseimg}>{true && '>'}</span>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default App;