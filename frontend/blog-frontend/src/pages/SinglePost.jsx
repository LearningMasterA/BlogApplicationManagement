import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

export default function SinglePost() {
  const { id } = useParams();     // post ID from URL
  const [post, setPost] = useState(null);
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

  if (!post) return null;

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

        <div className="d-flex justify-content-end mt-4">
          <Link className="btn btn-warning me-2" to={`/edit/${post.pid}`}>
            ✏ Edit
          </Link>
          
          <button className="btn btn-danger">
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
}
