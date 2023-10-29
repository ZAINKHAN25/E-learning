import './app.css'
import Navbar from '../../components/Navbar/index.jsx';
import Allposts from '../../components/All-Posts/index.jsx'

function App(){
    return (
        <div className='homepage'>
            <div className="homewrapper">
                <Navbar/>
                <Allposts/>
            </div>
        </div>
    )
}

export default App;