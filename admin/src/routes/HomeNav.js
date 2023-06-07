import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeNav = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("token") == null) {
      navigate("../login");
    } else {
      navigate("../dashboard");
    }
  }, []);
  return <div></div>;
};

export default HomeNav;
