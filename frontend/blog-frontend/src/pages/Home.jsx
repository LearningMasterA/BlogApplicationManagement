import { useEffect, useState } from "react";
import api from "../services/api";

function Home(){
  const [posts,setPosts]=useState([]);
  const [page,setPage]=useState(0);
  const [totalPages,setTotalPages]=useState(0);

  const fetchPosts=async()=>{
    try{
      const res=await api.get(`/posts/page?page=${page}&size=5&sortBy=createAt`);
      console.log("RESPONSE DATA:",res.data);
      setPosts(res.data.content);
      setTotalPages(res.data.totalPages);
    }
    catch(err){
      console.error("Error Fetching Posts",err)
    }
  };

  console.log("Calling:", `/posts?page=${page}&size=2&sortBy=createAt`);
        console.log("Full URL:", api.defaults.baseURL + `/posts?page=${page}&size=5&sortBy=createAt`);
  useEffect(()=>{
    fetchPosts();
  },[page]);

  return (
    <div className="container mt-5">
      <h2>All Posts</h2>
      <div className="row mt-3">
        {posts?.map((post)=>(
          <div className="col-md-4" key={post.pid}>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.content.substring(0,100)}...</p>
              <a href={`/post/${post.pid}`} className="btn btn-primary">Read more...</a>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-secondary" disabled={page===0} onClick={
          ()=>setPage(page-1)
        }>Previous</button>

        <button className="btn btn-secondary" disabled={page===totalPages-1} onClick={
          ()=>setPage(page+1)
        }>Next</button>

        


      </div>
    </div>
  )

}

export default Home;