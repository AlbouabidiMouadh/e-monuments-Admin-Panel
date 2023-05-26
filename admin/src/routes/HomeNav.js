import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeNav = () => {
  const [token, setToken] = useState(null);
  const getUserData = () => {
    const t = sessionStorage.getItem("token");
    if (typeof t == "string") {
      setToken(t);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    getUserData();
    if (token == null) {
      navigate("../login");
    } else {
      navigate("../Dashbord");
    }
  }, []);
  return <div></div>;
};

export default HomeNav;
