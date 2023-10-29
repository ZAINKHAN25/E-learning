import './app.css';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigateTo = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid align-center">
                <a onClick={()=> navigateTo('./')} className="navbar-brand fs-3 websiteclr">E-Learning</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link websiteclr" >Courses</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link websiteclr" >Trainers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link websiteclr" >Cotact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link websiteclr" >About Us</a>
                        </li>
                    </ul>
                    <form className="d-flex formofnavbar" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className='searchbtn' type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default App;