import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Checkout from "../components/Checkout";
import Footer from "../components/Footer";
import axios from "axios";

const menus = [
    { name: "Marketplace", url: "/", id: 1 },
    { name: "My Orders", url: "/checkout", id: 2 },
    { name: "Account", url: "/account", id: 3 },
  ];

const Cashier = (items) => {    
    var [cart, setCart] = useState([]);
    var [count, setCount] = useState(0);

    // This will provide all the items in the "My Orders" page
    useEffect(() => {
        const fetchCart = async () => {
        try {
            const response = await fetch('http://localhost:3001/get-orders');
            const data = await response.json();
            setCart(data);
            setCount(data.length);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
        };
        fetchCart();
    }, []);

    
    const deleteFromCart = async (transactionId) => {
        try {
            const response = await axios.post("http://localhost:3001/remove-transact", { transactionId });
            console.log(response.data);
            window.location.reload();
        } catch (error) {
            console.error("Error removing item:", error);
        }
    };
    
    return (
        <>
            <Header data={menus} title="Farm2Market" />
            <div className="homepage">
                <div className="homepage-item">
                    <div className="homepage-item-child">
                        <Checkout data={cart} count={count} onSetCart={deleteFromCart}/>
                    </div>
                </div>
                <div className="homepage-item">
                    <div className="homepage-item-child">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cashier;