import './app.css';
import { useNavigate } from 'react-router-dom';
import { signOut, auth } from '../../firebaseconfig.js';

function App() {
    const navigateTo = useNavigate();

    function logoutHandler() {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigateTo('../login')
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <nav className="navbar navbar-expand-lg z-1 position-sticky left-0 top-0">
            <div className="container-fluid align-center">
                <a onClick={() => navigateTo('../')} className="navbar-brand fs-3 websiteclr">E-Learning</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link websiteclr" >Your Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link websiteclr" >All Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link websiteclr" >Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link websiteclr" >About Us</a>
                        </li>
                        <li>
                        </li>
                    </ul>
                    <form className="d-flex formofnavbar" role="search">
                        <a className="nav-link websiteclr me-3" onClick={logoutHandler} >Logut</a>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className='searchbtn me-5' type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default App;