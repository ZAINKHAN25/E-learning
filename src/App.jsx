import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index.jsx'
import Login from './pages/Login/index.jsx'
import Signup from './pages/Signup/index.jsx'
import Course from './pages/Course/index.jsx'
import Coursemessage from './pages/Coursemessage/index.jsx'
import Pagenotfound from './pages/Pagenofound/index.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/course/:postid/' element={<Course/>}></Route>
          <Route path='/course/:postid/message' element={<Coursemessage/>}></Route>
          <Route path='*' element={<Pagenotfound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
