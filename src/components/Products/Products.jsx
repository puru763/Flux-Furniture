import React from "react";
import CategoryContainer from "./CategoryContainer/CategoryContainer";
import "./Product.scss"
import Featureslist from "../FeatureProducts/Featureslist";
const Products = () => {
  return (
    <div className="product-container">
      <div className="product-heading">CATEGORIES</div>

      <div className="category-section">
        <CategoryContainer />
      </div>
      <hr className="divider" />

     <div className="feture-section">
      <Featureslist />

     
     </div>


    </div>
  );
};

export default Products;
