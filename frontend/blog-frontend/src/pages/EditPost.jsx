import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export default function EditPost(){
  const { id }=useParams();
  const navigate=useNavigate(); 
  const [post,setPost]=useState(null);
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
  const [image,setImage]=useState("");
  const [categoryId,setCategoryId]=useState("");
  const [categories,setCategories]=useState([]);
  
  const fetchPost = async () => {

    try {
      const res = await api.get(`/posts/${id}`);
      console.log("Single Post Data:", res.data);
      setPost(res.data);
      setTitle(res.data.title);
      setContent(res.data.content);
      setImage(res.data.image);
      setCategoryId(res.data.categoryId);
    } catch (err) {
      console.error("Error Loading Post", err);
    }
  };

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

  useEffect(() => {
      fetchPost();
      fetchCategories();
    }, []);

    const handleUpdate=async(e)=>{
      console.log("TOKEN BEFORE UPDATE:", localStorage.getItem("token"));
      e.preventDefault();

      const updatedPost={
        title,
        content,
        image,
        categoryId: Number(categoryId)
      };

      try{
        await api.put(`/posts/${id}`,updatedPost);
        alert("Post updated!!");
        return navigate(`/posts/${id}`);
      }
      catch(err){
        console.log("Updated error:",err);
        alert("Could not update!");
      }
};


    if(!post) return <h3>Loading...</h3>;
    return(
      <>
    <div className="container m-4 p-4">
      <h2>Edit Post</h2>
      {/* {error && <p className="text-danger">{error}</p>} */}
      <form onSubmit={handleUpdate}>
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
        <button className="btn btn-primary">
          Update Post
        </button>

      </form>
    </div>

    </>
    )

}