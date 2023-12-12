import React from "react";
import idata from '../Products/img.json';
import DisplayProducts from './DisplayProducts';

const Itemdata = () => {
  return (
    <div>
      {idata.map((item) => (
        <DisplayProducts
          key={item.id}
          id={item.id}
          src={item.src}
          description={item.description}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
};

export default Itemdata;
