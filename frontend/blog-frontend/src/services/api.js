import axios from "axios";

const api=axios.create({
  baseURL:"http://localhost:8080/api",
});
api.interceptors.request.use((config)=>{
  const token=localStorage.getItem("token");
  console.log("TOKEN INSIDE INTERCEPTOR:", token);
  if(token && token!=="null" && token!=="undefined"){
    config.headers.Authorization=`Bearer ${token}`;
    console.log("TOKEN:", localStorage.getItem("token"));
  }else{
    delete config.headers.Authorization;
  }
  return config;
});

export default api;