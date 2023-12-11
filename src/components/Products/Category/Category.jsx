import React from "react";
import { Link } from "react-router-dom";
import "./Category.scss";
const Category = (props) => {
  return (
    <Link to={`/products/${props.title}`} className="category-container">
      <div >
        <div className="cat-img">
          <img src={props.src} alt="" />
        </div>

        <div className="cat-name">
          {props.name}
        </div>
      </div>
    </Link>
  );
};

export default Category;
