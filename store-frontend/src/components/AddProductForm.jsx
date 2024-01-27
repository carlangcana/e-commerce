import React, { useState } from "react";
import axios from "axios";

function AddProductForm() {
  const [productData, setProductData] = useState({
    productId: "",
    productName: "",
    productDesc: "",
    productType: "",
    productQuantity: "",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setProductData((prevData) => ({
      ...prevData,
      [name]: name === "productType" && value !== null && value !== undefined ? parseInt(value) : value,
    }));
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/save-product", productData);
      console.log(response.data);
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product ID:
        <input type="text" name="productId" className="bootstrap" value={productData.productId} onChange={handleChange} placeholder="Product ID" />
      </label>
      <br />
      <label>
        Product Name:
        <input type="text" name="productName" className="bootstrap" value={productData.productName} onChange={handleChange} placeholder="Product Name" />
      </label>
      <br />
      <label>
        Product Description:
        <input type="text" name="productDesc" className="bootstrap" value={productData.productDesc} onChange={handleChange} placeholder="Product Description"/>
      </label>
      <br />
      <label>
        Product Type:<br/>
        <select className="bootstrap bootstrap-select" name="productType" onChange={handleChange} >
          <option value="" defaultValue>Select Product Type</option>
          <option value='1'>Crop</option>
          <option value='2'>Poultry</option>
        </select>
      </label>
      <br />
      <label>
        Product Quantity:
        <input type="number" name="productQuantity" className="bootstrap" value={productData.productQuantity} onChange={handleChange} placeholder="Product QTY" />
      </label>
      <br />
      <button className="default-button" type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
