import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import SinglePost from './pages/SinglePost'
import Navbar from './components/Navbar';
// import CreatePost from './pages/CreatePost';

function App(){
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/post/:id" element={<SinglePost />} />
      {/* <Route path='/create' element={<CreatePost />}/> */}

    </Routes>
    </BrowserRouter>
  );
}

export default App;