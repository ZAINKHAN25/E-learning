import './app.css';
import singlepost from '../../DummyData/Course.js'
import Navbar from '../../components/Navbar/index.jsx'

function App() {
    return (
        <div className='coursepage'>
            <div className="coursewrapper">
                <Navbar />
                <div className="imgareatwo">
                    <img className='singleimgofcoursetwo' src={singlepost[0].imageone} alt="" srcset="" />
                    <img className='singleimgofcoursetwo' src={singlepost[0].imagetwo} alt="" srcset="" />
                    <img className='singleimgofcoursetwo' src={singlepost[0].imagethree} alt="" srcset="" />
                </div>
                <iframe className='mainvideoofcourse' src="https://www.youtube.com/embed/LNp-P-uH2lk" title="[League of Legends] - Warsongs: Piercing Light (Mako Remix) | NCS Fanmade" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <h3 className='ms-2'>{singlepost[0].heading}</h3>
                <div className="analysisarea fs-5 d-flex">
                    <span className='ms-2'>{singlepost[0].like} Likes</span>
                    <span className='ms-5'>{singlepost[0].veiws} Veiws</span>
                    <button className='likebtnofcourse'>Like It</button>
                </div>
                <p className='p-2'>{singlepost[0].description}</p>
            </div>
        </div>
    )
}

export default App;