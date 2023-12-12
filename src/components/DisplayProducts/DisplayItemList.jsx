import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplayProducts from "./DisplayProducts";
import "./DisplayItemList.scss";
import disdata from '../Products/img.json';

const DisplayItemList = () => {
  const { category } = useParams();
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    setImgData(disdata);
  }, []);

  const filteredData = category
    ? imgData.filter((item) => item.category === category)
    : imgData;

  return (
    <div className="dl-container">
      {filteredData.map((item) => (
        <DisplayProducts
          key={item.id}
          src={item.src}
          description={item.description}
          price={item.price}
          rating={item.rating}
          category={item.category}  // Pass the category to DisplayProducts
          id={item.id}  // Pass the id to DisplayProducts
        />
      ))}
    </div>
  );
};

export default DisplayItemList;
