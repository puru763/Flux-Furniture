import React from "react";
import "./Home.scss";
import Bottom from "../Bottom/Bottom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-container-text">
          <div className="first">YOUR</div>
          <div className="second">FUTURE</div>
          <div className="third">FURNITURE</div>
        </div>

        <img
          className="home-container-img"
          src="https://www.color-meanings.com/wp-content/uploads/2022/12/living-room-kitchen-interior-navy-blue-colors-1536x928.jpg"
          alt=""
        />
      </div>
      <Bottom />
    </>
  );
};

export default Home;
