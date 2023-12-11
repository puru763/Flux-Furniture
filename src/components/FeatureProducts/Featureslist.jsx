import React, { useState, useEffect } from "react";
import features from "./features.json";
import FeatureProduct from "./FeatureProduct";
const Featureslist = () => {
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    const updateFeaturedItems = () => {
      const randomItems = features.sort(() => 0.5 - Math.random()).slice(0, 4);
      setFeaturedItems(randomItems);
    };

    updateFeaturedItems();

    const intervalId = setInterval(updateFeaturedItems, 15000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div>
      <div className="feature-heading">Featured Items</div>
      <FeatureProduct data={featuredItems} />
    </div>
  );
};

export default Featureslist;
