import React from "react";
import { Link } from "react-router-dom";
import "./DisplayProducts.scss";

const DisplayProducts = (props) => {
  return (
    <Link to={`/products/${props.category}/${props.id}`} className="dis-container">
      <div className="dis-img">
        <img src={props.src} alt={props.description} />
      </div>

      <div className="dp-data-cont">
        <div className="dis-name">{props.description}</div>

        <div className="dp-data">
          <div className="dis-price">{props.price}</div>
          <div className="dis-rating">{props.rating}</div>
        </div>
      </div>
    </Link>
  );
};

export default DisplayProducts;
