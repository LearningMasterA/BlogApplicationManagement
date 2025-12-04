import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function SinglePost() {
  const navigate=useNavigate();
  const { id } = useParams();     // post ID from URL
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  

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

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (loading) return <h3>Loading post...</h3>;

  if (error) return <p className="text-danger">{error}</p>;
  const loggedInUserId=localStorage.getItem("userId");
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
      </div>
    </div>
  );
}
