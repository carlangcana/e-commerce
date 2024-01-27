const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   const response = await axios.post("http://localhost:3001/save-product", productData);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error("Error saving product:", error);
    // }
  };

function ManageProduct (props){
    var items = props.data;

    return(
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <select className="bootstrap">
                        {
                            items.map((item) => {
                                return(
                                    <option key={item.productId}>{item.productName}</option>
                                )
                            })
                        }
                    </select>
                    <br/>
                    <button className="default-button">Delete</button><br/>
                    <button className="default-button">Update</button>
                </form>
            </div>
        </>
    )
}

export default ManageProduct;