import React from "react";
import image from "../img/farm.jpeg";

export default function Checkout ({ data, count, onSetCart }) {

    let items = data;
    console.log(items);

    const handleDelete = (item) => {
        onSetCart(item);
    };

    return(
        <>
            <h3>My orders ({count})</h3>
            <ul>
                {
                    items.map((order, index) => (
                        <li key={index}>
                            <img src={image} alt="Appliances" />
                            <p className="title">{order.orderDetails.productName}</p>
                            <p className="desc">{order.orderDetails.productDesc}</p>
                            <p className="desc">Quantity: {order.itemCount}</p>
                            <div className="button-container">
                                <button className="delete-button" onClick={() => handleDelete(order.transactionId)}>Cancel</button>
                                <button className="green-button" onClick={() => handleDelete(order.transactionId)}>Buy</button>
                            </div>
                        </li>
                    ))
                }
            </ul> 
        </>
    )
}