import React from "react";
import "./FeatureProduct.scss";

const FeatureProduct = (props) => {
  return (
    <div className="fe-container">
      <div className="fe-img">
        <img src={props.data.src} alt="" />
      </div>
      <div className="fe-name">{props.data.name}</div>
    </div>
  );
};

export default FeatureProduct;
