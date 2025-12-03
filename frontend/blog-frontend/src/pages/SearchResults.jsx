import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import api from "../services/api";


export default function SearchResults(){
  const location=useLocation();
  const [posts,setPosts]=useState([]);

  const params=new URLSearchParams(location.search);
  const keyword=params.get("keyword");

  const fetchResults=async()=>{
    try{
      const res=await api.get(`posts/search?keyword=${keyword}`)
      console.log("Result:",res.data);
      setPosts(res.data);

    }
    catch(err){
      console.log("Search error:",err);
    }
  }
  useEffect(()=>{
    fetchResults();
  },[keyword]);

  return(
    <>
    <div className="container mt-4">
      <h2>Search Results for: <b>{keyword}</b></h2>
      <hr/>
      {posts.length===0 && <p>No matching posts</p>}
      <div className="row">
        {posts.map((post)=>(
          <div className="col-md-4" key={post.pid}>
            <div className="card p-3 mb-3">
              <h5>{post.title}</h5>
              <p>{post.content?.substring(0,80)}...</p>
              <Link className="btn btn-primary btn-sm" to={`/posts/${post.pid}`}>Read more...</Link>
            </div>
          </div>
        ))}

      </div>
    </div>
    </>
  )
}