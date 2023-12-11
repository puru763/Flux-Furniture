import React from "react";
import "./FeatureProduct.scss"

const FeatureProduct = (props) => {
  return (
    <div className="fe-container">
      <div className="fe-img">
        <img src={props.src} alt="" />
      </div>

      <div className="fe-name">{props.name}</div>
    </div>
  );
};

export default FeatureProduct;
