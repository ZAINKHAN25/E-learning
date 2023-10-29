import Allcourses from '../../DummyData/Course.js';
import { useState } from 'react';

function App() {
    let [allcoursesArr, setallcoursesArr] = useState([])

    return (
        <>
            {
                allcoursesArr.map((single, i) => {
                    <div key={i} className='singlediv'>
                        <div className="imgarea">
                            <img className='singleimgofcourse' src={single.imageone} />
                            <img className='singleimgofcourse' src={single.imagetwo} />
                            <img className='singleimgofcourse' src={single.imagethree} />
                        </div>
                        <h5 className='headingofcourse'></h5>
                        <div className="anlysiscoursediv">
                            <span>{single.like}</span>
                            <span>{single.veiws}</span>
                        </div>
                    </div>
                })
            }
        </>
    )
}

export default App;