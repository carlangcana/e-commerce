export default function ManageProduct (props){
    var items = props.data;

    return(
        <>
            <div>
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
                <button className="default-button">Delete</button>
                <br/>
                <button className="default-button">Update</button>
            </div>
        </>
    )
}