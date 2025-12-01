import { Link } from "react-router-dom";

export default function Navbar() {
  const isLoggedIn=!!localStorage.getItem("token");
  const handleLogout=()=>{
    localStorage.removeItem("token");
    window.location.href="/login";
  };

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          📝 BlogApp
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {isLoggedIn && (
              <li className="nav-link">
                <Link className="nav-link" to="/create">Create Post</Link>
              </li>
            )}

            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            )}

            {!isLoggedIn ? (
              <li className="nav-item">
                <Link className="nav-link btn btn-primary text-white px-3 ms-2" to="/login">
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <button className="btn btn-danger px-3 ms-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
            </ul>
            </div>
      </div>

    </nav>
    </>
  )
}
