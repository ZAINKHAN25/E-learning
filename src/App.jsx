import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/course/:postid/' element={<Course/>}></Route>
          <Route path='/course/:postid/message' element={<Coursemessage/>}></Route>
          <Route path='*' element={<Pagenotfound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
