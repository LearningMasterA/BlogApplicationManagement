import { useState } from "react";
import api from "../services/api";

function Register(){
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")

  const handleRegister=async(e)=>{
    e.preventDefault();
    console.log("Sending:", { username, email, password });

    try{
      await api.post("/auth/register",{
        username,
        email,
        password
      });
      alert("Register Successful!!");
      window.location.href="/login";
    }
    catch(err){
      console.log(err);
      alert("User already exists...");
    }
  };
  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input className="form-control" placeholder="Username"
        value={username} onChange={(e)=> setUsername(e.target.value)}/>
        <input className="form-control mt-2" placeholder="Email"
        value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" className="form-control mt-2" placeholder="Password"
        value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="btn btn-success mt-3">Register</button>
      </form>
    </div>
  )
}

export default Register;