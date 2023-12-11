import React from "react";
import data from "../cat-img/data.json";  
import Category from "../Category/Category";  
import "./CategoryContainer.scss";  

const CategoryContainer = () => {
  return (
    <div className="CategoryContainer-data">
      {data.map((item, index) => (
        <Category key={index} src={item.src} title={item.title} name={item.name} />
      ))}
    </div>
  );
};

export default CategoryContainer;
