

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import SinglePost from './pages/SinglePost'
import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost';
import EditPost from './pages/EditPost';
import SearchResults from './pages/SearchResults';
import CategoryPosts from './pages/CategoryPosts';

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MyPosts from './pages/MyPosts';

function App(){
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/posts/:id" element={<SinglePost />} />
      <Route path="/posts/:id/edit" element={<EditPost/>}/>
      <Route path='/create' element={<CreatePost />}/>
      <Route path='/search' element={<SearchResults/>}/>
      <Route path='/category/:id' element={<CategoryPosts/>}/>
      <Route path='/my-posts' element={<MyPosts/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;