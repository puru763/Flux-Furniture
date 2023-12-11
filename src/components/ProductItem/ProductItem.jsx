import React from 'react'

const ProductItem = (props) => {
  return (
    <div className="productitem-container">


        <div className="itemimg">
            <img src={props} />

        </div>
        <div className="itemdata">

            <div className="itemname"></div>
            <div className="itemdescription"></div>

        </div>
    </div>
  )
}

export default ProductItem
