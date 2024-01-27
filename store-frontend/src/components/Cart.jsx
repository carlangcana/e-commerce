import React from "react"
import axios from "axios"

function Cart({title, items, count, onSetCart, onCheckOut}) {
    
    function generateTransactionId() {
        const timestamp = new Date().getTime().toString(36);
        const randomPart = Math.random().toString(36).substr(2, 5);
        return `${timestamp}${randomPart}`;
    }

    const handleCheckOut = async (item) => {
        onCheckOut(item);

        for(var i = 0; i < item.length; i++){
            try {
                const cartData = {
                    userId: 1101008,
                    transactionId: generateTransactionId(),
                    productId: item[i].productId,
                    itemCount: item[i].itemCount,
                };
                const response = await axios.post("http://localhost:3001/save-transact", cartData);
                console.log(response.data);
            } catch (error) {
                console.error("Error saving cart:", error);
            }
        }
        window.location.reload();
    }

    const handleDeleteFromCart = (index, item) => {
        onSetCart(index, item);
      };
      

    return(
        <div className="cart">
            <h3>{title} </h3>
            <h5>Item count: {count}</h5>
            <ol>
                { items.map((item, index) => (
                    <li key={index}>
                        <div className="cart-card">
                            <div className="cart-card-item">
                                {console.log(item)}
                                {item.productName.length > 15 ? `${item.productName.slice(0, 15)}...` : item.productName}
                                ({item.itemCount})
                            </div>
                            
                            <div className="cart-card-item">
                                <button className="delete-button" onClick={() => handleDeleteFromCart(index, item)}>✖</button>
                            </div>
                        </div>
                    </li>

                )) }
                {count > 0 ? (
                    <button className="default-button" onClick={() => handleCheckOut(items)}>🛒 Push to order</button>
                ) : ""}
            </ol>
        </div>
    )

}

export default Cart;
