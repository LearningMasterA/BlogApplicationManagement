import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function CreatePost(){
  const navigate=useNavigate();
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
  const [image,setImage]=useState("");
  const [categoryId,setCategoryId]=useState("");
  const [categories,setCategories]=useState([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  const fetchCategories=async()=>{
    try{
      const res=await api.get("/categories");
      console.log("Categories:", res.data);
      setCategories(res.data);
      console.log(categories);

    }
    catch(err){
      console.log("Error Loading Categories:",err);
    }
  };
  useEffect(()=>{
    fetchCategories();
  },[]);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!title || !content || !categoryId){
      setError("Please fill all required fields");
      return;
    }

    const postData={
      title,
      content,
      image,
      categoryId: Number(categoryId)
    };
    try{
      setLoading(true);
      const res=await api.post("/posts",postData);
      console.log("Post Created",res.data);
      navigate(`/posts/${res.data.pid}`);
    }
    catch(err){
      console.log("Create post error",err);
      setError("Failed to create post");
    }
    finally{
      setLoading(false);
    }
  };
  return(
    <>
    <div className="container m-4 p-4">
      <h2>Create New Post</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input 
          type="text"
          className="form-control"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea 
          className="form-control"
          rows="5"
          value={content}
          onChange={(e)=>setContent(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL (optional)</label>
          <input 
          type="text"
          className="form-control"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select 
          className="form-control"
          value={categoryId}
          onChange={(e)=>setCategoryId(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map(cat=>(
              <option key={cat.catId} value={cat.catId}>
                {cat.name}</option>
            ))}

          </select>
        </div>
        <button className="btn btn-primary" disabled={loading}>
          {loading?"Creating...":"Create Post"}
        </button>

      </form>
    </div>

    </>
  );
}