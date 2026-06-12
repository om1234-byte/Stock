

import Home from "../components/Home"; 
//import './HomeLog.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const HomeLog = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [, setUsername] = useState("");
  
  useEffect(() => {
    const verifyCookie = async () => {
     console.log("verifyCookie called");
      const { data } = await axios.post(
        "https://stock-epyn.onrender.com",
        {},
        { withCredentials: true }
      );
        console.log("verify response:", data);

      const { status, user } = data;
      setUsername(user);
      
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, []);
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


//