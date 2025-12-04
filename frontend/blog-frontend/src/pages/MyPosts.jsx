import { useEffect, useState } from "react";
import api from '../services/api'
import { Link, useNavigate } from "react-router-dom";


export default function MyPosts(){
  const [posts,setPosts]=useState([]);
  const userId=localStorage.getItem("userId");
  const navigate=useNavigate();

  const fetchPosts=async()=>{
    if(!userId){
      alert("Please log in first");
      navigate("/login");
      return;
    }
    try{
      const res=await api.get(`/posts/user/${userId}`);
      setPosts(res.data);
      console.log(res.data);
    }catch(err){
      console.log("MyPosts error:",err);
      if(err.response?.status===403){
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };
  useEffect(()=>{
    fetchPosts();
  },[]);
  return(
    <>
    <div className="container mt-4">
    <h2>My Posts</h2>
    <hr/>
    {posts.length===0 && <p>You haven't created any posts yet.</p>}
    <div className="row">
      {posts.map((post)=>(
        <div className="col-md-4" key={post.pid}>
          <div className="card p-3 shadow-sm">
            <h5>{post.title}</h5>
            <p>{post.content.slice(0,80)}...</p>
            <Link className="btn btn-primary btn-sm m-1" to={`/posts/${post.pid}`}>View</Link>
            <Link className="btn btn-warning btn-sm m-1" to={`/posts/${post.pid}/edit`}>Edit</Link>
            
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}