import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate=useNavigate();
  const [keyword,setKeyword]=useState("");
  const isLoggedIn=!!localStorage.getItem("token");
  const handleLogout=()=>{
    localStorage.removeItem("token");
    window.location.href="/login";
  };

  const handleSearch=(e)=>{
    e.preventDefault();
    if(!keyword.trim()) return;
    navigate(`/search?keyword=${keyword}`);
    setKeyword("");
  }

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
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to={"/category/1"}>Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category/2"}>Programming</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category/3"}>Games</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category/4"}>Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/category/4"}>Business</Link>
            </li>

            <form className="d-flex me-3" onSubmit={handleSearch}>
              <input 
              type="text"
              className="form-control me-2"
              placeholder="Search Posts..."
              value={keyword}
              onChange={(e)=>setKeyword(e.target.value)}
              />
              <button className="btn btn-primary">Search</button>
            </form>

            {isLoggedIn && (
              <li className="nav-link">
                <Link className="nav-link" to="/create">
                <button className="btn btn-secondary">Create Post</button>
                </Link>
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
