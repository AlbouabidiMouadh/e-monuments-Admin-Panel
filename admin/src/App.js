import React, { useState, useEffect } from "react";
import Login from "./routes/Login";
import Dashbord from "./routes/Dashbord";
import { Routes, Route } from "react-router-dom";
import ForgetPassword from "./routes/ForgetPassword";
import HomeNav from "./routes/HomeNav";

const App = () => {
  const [token, setToken] = useState(null);
  const getUserData =  () => {
    const t =  sessionStorage.getItem("token");
    if(typeof t == "string" ){
      setToken(t)
    }
  }
  useEffect(() => {
    getUserData();
  }, [])
  return (
    <div>
      <Routes>
        <Route index path="/" element={<HomeNav />} />
        {token != null ? <Route path="/dashbord" element={<Dashbord />} /> : null}
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recover-password" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
