import React, { useState } from "react";
import "../index.css";
import image from "../img/farm.jpeg";

let pushcarts = [];

function Market({ data, onSetCart }) {
  const [itemQuantities, setItemQuantities] = useState({});

  const handleAddToCart = (item) => {
    const itemCount = itemQuantities[item.productId] || 0;
    onSetCart({ ...item, itemCount });
  };

  const handleQuantityChange = (event, productId) => {
    const value = event.target.value;
    setItemQuantities({
      ...itemQuantities,
      [productId]: value,
    });
  };

  return (
    <>
      <div className="homepage-item">
        <div className="homepage-item-child">
          <h3>Marketplace</h3>
          <ul>
            {data.map((item) => (
              <li key={item.productId}>
                <img src={image} alt="Appliances" />
                <p className="title">{item.productName}</p>
                <p className="desc">Quantity: {item.productQuantity}</p>
                <p className="desc">
                  {item.productDesc.length > 100
                    ? `${item.productDesc.slice(0, 100)}...`
                    : item.productDesc}
                </p>
                <input
                  type="number"
                  name={`cartQuantity_${item.productId}`}
                  className="bootstrap"
                  id={item.productId}
                  min="0"
                  max={item.productQuantity}
                  value={itemQuantities[item.productId] || 0}
                  onChange={(e) => handleQuantityChange(e, item.productId)}
                  placeholder="Product QTY"
                />
                <div className="button-container"> 
                 
                  <button
                    className="gray-button"
                    // onClick={() => handleAddToCart(item)}
                  >
                    ⚠️ Report
                  </button>
                  <button
                    className="amber-button"
                    onClick={() => handleAddToCart(item)}
                  >
                    🛒 Add to cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="homepage-item">
        <ul>
          {pushcarts.map((pushcart) => (
            pushcart
          ))}
        </ul>
      </div>
    </>
  );
}

export default Market;
