import './app.css'
import Navbar from '../../components/Navbar/index.jsx';
import Allposts from '../../components/All-Posts/index.jsx'

import { useNavigate } from 'react-router-dom';

import {onAuthStateChanged, auth} from '../../firebaseconfig.js'

function App() {

    const navigatTo = useNavigate()



    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
        } else {
            navigatTo('../login')   
        }
    });

    return (
        <div className='homepage'>
            <div className="homewrapper">
                <Navbar />
                <h1 className='ourLatestCourseheding'>Your Courses :</h1>
                <div className='d-flex flex-wrap justify-content-center'>
                </div>
                <h1 className='ourLatestCourseheding'>Our Courses : </h1>
                <div className='d-flex flex-wrap justify-content-center'>
                    <Allposts />
                </div>
                <div className='contactusdiv'>
                    <h2>Contact Us</h2>
                    <li className='ulofcontactus'>
                        <li>Phone Number: <span className='text-decoration-underline'>123-4567891011</span></li>
                        <li>Our Email: <span className='text-decoration-underline'>hello@mail.com</span></li>
                        <li>Our Facebook Profile Page: <span className='text-decoration-underline'>www.facebook.com</span></li>
                        <li>Our Linkedin Profile Page: <span className='text-decoration-underline'>www.linkedin.com</span></li>
                        <li>Our Website Line: <span className='text-decoration-underline'>www.ourwebsite.com</span></li>
                    </li>
                </div>
                <div className="aboutusdiv">
                    <h1 className='ourLatestCourseheding color-white'>About Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quo ducimus obcaecati eos possimus ratione, dignissimos tempora non nisi quis quisquam, reiciendis eum voluptatem ipsa eaque praesentium! Dicta alias perspiciatis veniam eum. Amet nemo quia aliquam repellat nam consequatur eos dignissimos provident dicta voluptate tenetur enim ab ex, distinctio optio rerum magnam ducimus. Et sed earum tempora corporis vel nostrum nesciunt dignissimos quod quasi, harum vitae, atque rerum id voluptatem asperiores. Minus possimus repellendus iure nesciunt delectus, amet error consectetur eum earum, veniam impedit, nam officia voluptatibus ad sunt necessitatibus illo soluta dolorum accusantium excepturi eligendi est! Magnam voluptates magni autem. Saepe, commodi perferendis? Impedit odit, molestias provident, commodi recusandae sunt corporis non quos atque quibusdam ullam veritatis mollitia doloribus tenetur magni modi est? Eum incidunt harum asperiores eius aut sit tempora at fugiat. Nisi officia totam fugiat cupiditate vel? Ducimus ratione eligendi modi cum perferendis ut quod sunt, assumenda animi, qui id earum nemo non enim fuga maiores deserunt at aliquid laudantium beatae tenetur repellat delectus odio ex? Laborum dolorum harum perspiciatis aliquid reiciendis quia. Minima, iure iste mollitia error maxime deserunt rerum nemo ea provident totam, sunt velit? Reiciendis itaque deserunt dolorum quod explicabo nulla asperiores est iusto.</p>
                </div>
                <div className="footerdiv">
                    <div>
                        <h2>Special Thanks To Saylani</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatum a alias atque eius repellendus itaque, dolorum similique quia consectetur placeat? Mollitia accusantium aspernatur minus suscipit cupiditate beatae tempora excepturi nesciunt! Nisi mollitia delectus molestiae voluptatem quasi ipsam et, hic natus recusandae dicta, tenetur odit! Ut ipsum beatae omnis dignissimos.</p>
                    </div>
                    <span className='float-end'>@Made By Zain Khan 25</span>
                </div>

            </div>
        </div>
    )
}

export default App;