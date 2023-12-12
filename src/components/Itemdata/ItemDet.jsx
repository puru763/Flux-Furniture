import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import idata from "../FeatureProducts/features.json";
import "./ItemDet.scss";
const ItemDet = () => {
  const { id } = useParams();
  const itemId = parseInt(id, 10);
  const navigate = useNavigate();

  const selectedItem = idata.find((item) => item.id === itemId);

  if (!selectedItem) {
    return <div>No item found for ID {itemId}</div>;
  }

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div className="item-details">
      <button onClick={goBack}>Go Back</button>

      <div className="itemddata">
        <div className="itemimg">
          <img src={selectedItem.src} alt={`Item ${selectedItem.id}`} />
        </div>

        <div className="itemdata">
          <div className="itemdesc">{selectedItem.description}</div>
          <div className="item-data">
            <div className="itemprice"> <span>RS</span> {selectedItem.price}</div>
            <div className="itemrating">{selectedItem.rating}</div>
          </div>
          <button className="detibtn">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDet;
