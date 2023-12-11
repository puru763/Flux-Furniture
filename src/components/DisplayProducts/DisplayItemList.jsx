import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DisplayProducts from "./DisplayProducts";
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
    <div>
      {filteredData.map((item) => (
        <DisplayProducts key={item.id} src={item.src} name={item.name} />
      ))}
    </div>
  );
};

export default DisplayItemList;
