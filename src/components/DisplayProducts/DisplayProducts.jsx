import React from "react";
import "./DisplayProducts.scss"

const DisplayProducts = (props) => {
  return (
    <div className="dis-container">
      <div className="dis-img">
        <img src={props.src} alt="" />
      </div>

      <div className="dis-name">{props.name}</div>
    </div>
  );
};

export default DisplayProducts;
