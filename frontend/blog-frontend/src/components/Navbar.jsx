import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Blog App</Link>

      <div className="ms-auto">
        {localStorage.getItem("token") ? (
          <>
            <Link className="btn btn-success me-2" to="/create">Create Post</Link>
            <button
              className="btn btn-danger"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <Link className="btn btn-primary" to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
