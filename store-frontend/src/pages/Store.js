import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Market from "../components/Market";
import Cart from "../components/Cart";
import AddProductForm from "../components/AddProductForm";
import ManageProduct from "../components/ManageProductForm";
import Footer from "../components/Footer";
import '../index.css';

function Store() {
  var [count, setCount] = useState(0);
  var [cart, setCart] = useState([]);
  var [checkout, setCheckout] = useState([]);
  var [storeItems, setStoreItems] = useState([]);

  // This will provide all the items in the marketplace page
  useEffect(() => {
    const fetchStoreItems = async () => {
      try {
        const response = await fetch('http://localhost:3001/get-products');
        const data = await response.json();
        setStoreItems(data); 
      } catch (error) {
        console.error('Error fetching store items:', error);
      }
    };
    fetchStoreItems();
  }, []);
  
  const addToCart = (item) => {
    setCart([...cart, item]);
    setCount(parseInt(count) + parseInt(item.itemCount)); // Ensure count is an integer
  };

  const deleteFromCart = (index, item) => {
    console.log("Deleting item at index:", index, "with data:", item);
    if (item && item.itemCount) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      setCount(prevCount => prevCount - parseInt(item.itemCount));
    }
  };
  
  const addToCheckOut = (item) => {
    setCheckout([...checkout, item]);
  }

  const menus = [
    { name: "Marketplace", url: "/", id: 1 },
    { name: "My Orders", url: "/checkout", id: 2 },
    { name: "Account", url: "/account", id: 3 },
  ];

  return (
    <>
      <Header data={menus} title="Farm2Market" />
      <div className="homepage">
        <div className="homepage-item">
          <Market data={storeItems} onSetCart={addToCart}/>
        </div>
        <div className="homepage-item">
          <div className="homepage-item-child">
            <Cart title="Shopping Cart" onSetCart={deleteFromCart} onCheckOut={addToCheckOut} count={count} items={cart}/>
            <h3>Add Products</h3>
            <AddProductForm />
            <h3>Manage Products</h3>
            <ManageProduct data={storeItems}/>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
