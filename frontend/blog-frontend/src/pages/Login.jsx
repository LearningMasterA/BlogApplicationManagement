import { useState } from "react";
import api from "../services/api";

function Login(){
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin=async(e)=>{
    e.preventDefault();

    try{
      const res=await api.post("/auth/login",{username,password});
      console.log("TOKEN RECEIVED:", res.data);
      localStorage.setItem("token",res.data);
      console.log("SAVED TOKEN IN STORAGE:", localStorage.getItem("token"));
      alert("Login Successful!!");
      setTimeout(()=>{
      window.location.href="/";
      },200);
      
    }
    catch(err){
      console.log(err);
      alert("Invalid username or password");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input className="form-control" placeholder="Username"
        value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <input type="password" className="form-control mt-2" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="btn btn-primary mt-3">Login</button>
      </form>
    </div>
  )
}


export default Login;