import React, { useState, useEffect } from "react";
import features from "./features.json";
import "./Featureslist.scss";
import FeatureProduct from "./FeatureProduct";
const Featureslist = () => {
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    const updateFeaturedItems = () => {
      const randomItems = features.sort(() => 0.5 - Math.random()).slice(0, 4);
      setFeaturedItems(randomItems);
    };

    updateFeaturedItems();

    const intervalId = setInterval(updateFeaturedItems, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <div className="feature-heading">Featured Items</div>
      <div className="fe-data">
        {featuredItems.map((item, index) => (
          <FeatureProduct key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Featureslist;
