import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import banner from "../Images/banner.jpeg";
import "../styles/HomeStyle.css";
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/Menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
