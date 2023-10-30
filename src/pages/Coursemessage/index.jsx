import './app.css'
import DummyData from '../../DummyData/Course.js'
import Navbar from '../../components/Navbar/index.jsx'

function App() {
    return (
        <div className='chatpage'>
            <div className='position-fixed w-100 top-0'>
                <Navbar />
            </div>
            <div className="chatwrapper">
                <div className="chatcommunitydiv position-fixed">
                    <i class="fa-solid fa-less-than fs-2 backToHomeIcon" title='Go back to Home'></i>
                    <img className='chatcommunityimg' src={DummyData[0].imageone} alt="" />
                    <h3 className='fs-1'>Zain Chat</h3>
                </div>
                <div className="mainchatarea">
                    <div className="mineChat">Hey Friend How Are you <span className='dateofchat'>5 hour's ago</span></div>
                    <div className="friendChat">I am fine <span className='dateofchat'>3 hour's ago</span></div>
                    <div className="mineChat">Hey Friend How Are you <span className='dateofchat'>5 hour's ago</span></div>
                    <div className="mineChat">Hey Friend How Are you <span className='dateofchat'>5 hour's ago</span></div>
                    <div className="friendChat">I am fine <span className='dateofchat'>3 hour's ago</span></div>
                    <div className="friendChat">I am fine <span className='dateofchat'>3 hour's ago</span></div>
                    <div className="mineChat">Hey Friend How Are you <span className='dateofchat'>5 hour's ago</span></div>
                    <div className="mineChat">Hey Friend How Are you <span className='dateofchat'>5 hour's ago</span></div>
                    <div className="friendChat">I am fine <span className='dateofchat'>3 hour's ago</span></div>
                    <div className="friendChat">I am fine <span className='dateofchat'>3 hour's ago</span></div>
                    <div className="mineChat">Hey Friend How Are you <span className='dateofchat'>5 hour's ago</span></div>
                    <div className="mineChat">Hey Friend How Are you <span className='dateofchat'>5 hour's ago</span></div>
                </div>
                <div className="inputdiv fs-5">
                    <input type="text" placeholder='Message...' className="inputOfChat" />
                    <i class="fa-solid fa-paper-plane"></i>
                </div>
            </div>
        </div>
    )
}

export default App;