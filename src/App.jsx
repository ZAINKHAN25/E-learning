import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index.jsx'
import Login from './pages/Login/index.jsx'
import Signup from './pages/Signup/index.jsx'
import Course from './pages/Course/index.jsx'
import Coursemessage from './pages/Coursemessage/index.jsx'
import Uploadcourse from './pages/Uploadcourse/index.jsx'
import Courseregister from './pages/Registercourse/index.jsx'
import Pagenotfound from './pages/Pagenofound/index.jsx'
// import 'https://kit.fontawesome.com/a076d05399.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register-course/' element={<Courseregister/>}></Route>
          <Route path='/course/:postid/' element={<Course/>}></Route>
          <Route path='/course/:postid/chat' element={<Coursemessage/>}></Route>
          <Route path='/uploadcourse/' element={<Uploadcourse/>}></Route>
          <Route path='*' element={<Pagenotfound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
