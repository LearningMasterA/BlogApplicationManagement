import { useState } from "react";
import { Link, useNavigate,NavLink } from "react-router-dom";

// import "bootstrap/dist/js/bootstrap.bundle.min.js";


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

  const closeNavbar=()=>{
    const navbar=document.getElementById("navbarNav");
    if(navbar.classList.contains("show")){
      navbar.classList.remove("show");
    }
  }

  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/">
          📝 BlogApp
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          // data-bs-toggle="collapse"
          // data-bs-target="#navbarNav"
          // aria-controls="navbarNav"
          // aria-expanded="false"
          // aria-label="Toggle navigation"
          onClick={()=>{
            const navbar=document.getElementById("navbarNav");
            navbar.classList.toggle("show");
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <NavLink className={({isActive})=>"nav-link"+(isActive?"active":"")} to="/" onClick={closeNavbar}>
               Home
        </NavLink>
            </li>

            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            )}

            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle px-3"
                href="#" 
                role="button" 
                data-bs-toggle="dropdown"
              >
                Categories
              </a>
               <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link className="dropdown-item" to="/category/1" onClick={closeNavbar}>Technology</Link></li>
                <li><Link className="dropdown-item" to="/category/2" onClick={closeNavbar}>Programming</Link></li>
                <li><Link className="dropdown-item" to="/category/3" onClick={closeNavbar}>Gaming</Link></li>
                <li><Link className="dropdown-item" to="/category/4" onClick={closeNavbar}>Sports</Link></li>
                <li><Link className="dropdown-item" to="/category/5" onClick={closeNavbar}>Business</Link></li>
              </ul>
            </li>

            <form className="d-flex ms-lg-3 my-2 my-lg-0" onSubmit={handleSearch}>
              <input 
              type="text"
              className="form-control me-2"
              placeholder="Search Posts..."
              value={keyword}
              onChange={(e)=>setKeyword(e.target.value)}
              />
              <button className="btn btn-primary" onClick={closeNavbar}>Search</button>
            </form>

            {isLoggedIn && (
              <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/create" onClick={closeNavbar}> 
                <button className="btn btn-outline-light">Create Post</button>
                </NavLink>
              </li>
            )}

            {!isLoggedIn ? (
              <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to="/login">
                  Login
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                <button className="btn btn-danger px-3 ms-2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
          
            )}
            <li className="nav-item">
              <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active" : "")} to={"/my-posts"} onClick={closeNavbar}>My Posts</NavLink>
            </li>
            </ul>
            </div>
      </div>

    </nav>
    </>
  )
}
