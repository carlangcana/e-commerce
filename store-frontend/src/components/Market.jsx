import React from "react";
import "../index.css";
import image from "../img/farm.jpeg";

let pushcarts = [];

function Market ({ data, onSetCart }) {
  let items = data;

  const handleAddToCart = (item) => {
    onSetCart(item);
  };

  return (
    <>
      <div className="homepage-item">
        <div className="homepage-item-child">
          <h3>Marketplace</h3>
          <ul>
            {
              items.map((item) => (
              <li key={item.productId}>
                <img src={image} alt="Appliances" />
                <p className="title">{item.productName}</p>
                <p className="desc">
                {item.productDesc.length > 100 ? `${item.productDesc.slice(0, 100)}...` : item.productDesc}
                </p>
                <p className="desc">Type: {item.productType === 1 ? "🌾 Crop" : item.productType === 2 ? "🐔 Poultry" : "No classification"}</p>
                <button className="amber-button" onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="homepage-item">
        <ul>
          { pushcarts.map((pushcart) => (
            pushcart
          ))}
        </ul>
      </div>
    </>
  )
}

export default Market;
