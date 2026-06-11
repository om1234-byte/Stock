import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";




const Home = ({logout}) => {
  return (
    <>
      
      <TopBar logout={logout} />
      <Dashboard />
    </>
  );
};

export default Home;
