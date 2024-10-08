import React from "react";
import "./Home.css";
import Navbar from "../../components/CommonComp/Navbar/Navbar";
import Header from "../../components/CommonComp/Header/Header";

const Home = () => {
  return (
    <div className="Home" style={{ backgroundImage: 'url("/port.png")' }}>
      <Navbar />
      <Header />
    </div>
  );
};

export default Home;
