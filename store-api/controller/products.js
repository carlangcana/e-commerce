import mongoose from 'mongoose';

await mongoose.connect('mongodb://127.0.0.1:27017/Lazado', {
    useNewUrlParser: true, 
    useUnifiedTopology: true  
}).then(() => console.log("Connected to the database"))
.catch(err => console.log("Refused to connect", err));

const Products = mongoose.model('products', {
    productId: Number,
    productName: String,
    productDesc: String,
    productType: Number,
    productQuantity: Number
});

const save_product = async (req, res) => {
    try{
        const { productId, productName, productDesc, productType, productQuantity } = req.body;
        const newProduct = new Products({
            productId: productId,
            productName: productName,
            productDesc: productDesc,
            productType: productType,
            productQuantity: productQuantity,
        });
        console.log("Product saved successfully");
        await newProduct.save();
        return res.status(200).json({ inserted: true });
    }catch(err){
        return res.status(400).json({ inserted: false });
    }
}

const get_products = async (req, res) => {
    const getProducts = await Products.find({});
    res.send(getProducts);
};

export { Products, save_product, get_products };