import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function SinglePost() {
  const navigate=useNavigate();
  const { id } = useParams();     // post ID from URL
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [comments,setComments]=useState([]);
  const [commentText,setCommentText]=useState("");
  const userId=localStorage.getItem("userId");
  

  const fetchPost = async () => {
    setLoading(true);
    setError("");

    try {
      const res = await api.get(`/posts/${id}`);
      console.log("Single Post Data:", res.data);
      setPost(res.data);
    } catch (err) {
      console.error("Error Loading Post", err);
      setError("Unable to load post.");
    }
    setLoading(false);
  };

  const fetchComments=async()=>{
    try{
      const res=await api.get(`/comments/${id}`)
      setComments(res.data);
    }
    catch(err){
      console.log("Comments fetch error",err);
    }
  }

  const handleAddComment=async()=>{
    if(!commentText.trim()) return;
    if(!userId) {
      alert("Please login to comment");
      navigate("/login");
    }

    try{
        await api.post("/comments",{
        content:commentText,
        userId: parseInt(userId),
        postId: post.pid
      });
      setCommentText("");
      fetchComments();
    }
    catch(err){
      console.log("Comment add error",err);
    }
  }

  const handleDeleteComment=async(cid)=>{
    try{
      await api.delete(`/comments/${cid}`)
      fetchComments();
    }
    catch(err){
      console.log("Delete comment error:",err);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  if (loading) return <h3>Loading post...</h3>;

  if (error) return <p className="text-danger">{error}</p>;


  const loggedInUserId=parseInt(localStorage.getItem("userId"));
  const isOwner=loggedInUserId && parseInt(loggedInUserId)===post.userId;


  if (!post) return null;
  const handleDelete=async()=>{
    if(!confirm("Are you sure you want to delete this post?")) return;
    try{
      await api.delete(`/posts/${id}`)
      alert("Post deleted successfully!!");
      return navigate("/");
    }
    catch(err){
      console.log("Delete error:",err);
      alert("Could not delete this post");
    }
  }

  return (
    <div className="mt-4">
      <Link className="btn btn-secondary mb-3" to="/">
        ← Back to Home
      </Link>
      <p className="text-muted">
        Author: <b>{post.username}</b>
      </p>
      <div className="card shadow-sm p-4">
        <h2>{post.title}</h2>
        <p className="text-muted">
          <strong>Category:</strong> {post.categoryId}
        </p>

        {/* If you have image */}
        {post.image && (
          <img
            src={`http://localhost:8080/uploads/${post.image}`}
            alt={post.title}
            className="img-fluid rounded mb-3"
          />
        )}

        <p style={{ lineHeight: "1.8", fontSize: "18px" }}>
          {post.content}
        </p>
        {isOwner ? (
        <>
        <div className="d-flex justify-content-end mt-4">
          <Link className="btn btn-warning me-2" to={`/posts/${post.pid}/edit`}>
            ✏ Edit
          </Link>
          
          <button className="btn btn-danger" onClick={handleDelete}>
            🗑 Delete
          </button>
        </div>
        </>
        ):(
          <p><b>You can only view this post</b></p>
        )
        }

        <h4 className="mt-4">Comments</h4>
        <div className="mb-3">
          <textarea 
          className="form-control"
          rows="3"
          placeholder="Write a comment"
          value={commentText}
          onChange={(e)=>setCommentText(e.target.value)}
          ></textarea>
          <button className="btn btn-primary mt-2" onClick={handleAddComment}>Add Comment</button>
        </div>
        <div className="mt-3">
          {comments.length===0 && <p>No comments yet.Be the first!</p>}
          {comments.map((c)=>(
            <div key={c.cid} className="border rounded p-2 mb-2">
              <div className="d-flex justify-content-between">
                <strong>{c.username}</strong>
                <small className="text-muted">
                  {new Date(c.createAt).toLocaleString()}
                </small>
              </div>
              <p className="mb-1">{c.content}</p>

              {(loggedInUserId==c.userId || isOwner) && (
                <button className="btn btn-danger btn-sm mt-2" onClick={()=>handleDeleteComment(c.cid)}>Delete</button>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
