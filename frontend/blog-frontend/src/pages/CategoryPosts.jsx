import { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";
import api from "../services/api";


export default function CategoryPosts(){
  const {id}=useParams();
  const [posts,setPosts]=useState([]);
  const [categoryName,setCategoryName]=useState("");

  const fetchCategories=async()=>{
    try{
      const res=await api.get(`/posts/category/${id}`);
      console.log(res.data);
      setPosts(res.data);
      const category=await api.get(`/categories/${id}`);
      setCategoryName(category.data.name);
    }catch(err){
      console.log("Category fetch error:",err);
    }
  }
  useEffect(()=>{
    fetchCategories();
  },[id]);
  return (
    <>
    <div className="container mt-4">
      <h2>
        Category: <b>{categoryName}</b>
      </h2>
      <hr />

      {posts.length === 0 && <p>No posts found in this category.</p>}

      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-3" key={post.pid}>
            <div className="card p-3 shadow-sm">
              <h5>{post.title}</h5>
              <p>{post.content?.substring(0, 80)}...</p>
              <Link
                className="btn btn-primary btn-sm"
                to={`/posts/${post.pid}`}
              >
                Read more...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )

}