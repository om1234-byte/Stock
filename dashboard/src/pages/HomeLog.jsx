

import Home from "../components/Home"; // Your master dashboard component
//import './HomeLog.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const HomeLog = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    const verifyCookie = async () => {
    
      const { data } = await axios.post(
        "https://stock-epyn.onrender.com",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      console.log(username);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <>
        
      
      <Home logout ={Logout} />
      <ToastContainer />
    </>
  );
};

export default HomeLog;


